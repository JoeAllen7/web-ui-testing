addEventListener('resize', onWindowResized);
updatePlayerNameLayout();

var scrollingWriters = false;
var isScrollingWriterButtons;

function onWindowResized(event) {
    updatePlayerNameLayout();
}

function updatePlayerNameLayout() {
    var playerNameTop = document.getElementById('playerNameTop');
    var playerNameSeparate = document.getElementById('playerNameSeparatePanel');
    if (!playerNameTop || !playerNameSeparate) {
        return;
    }

    var minPageSize = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
    var vminWidth = (playerNameTop.clientWidth / minPageSize) * 100;

    if (vminWidth === 0) {
        return;
    }

    // If width > 65, there is enough space to display the player name alongside tabs at the top.
    //	Otherwise, it should be displayed in a separate panel underneath the tabs.
    var displayAtTop = vminWidth > 65;
    playerNameTop.style.visibility = displayAtTop ? 'visible' : 'hidden';
    playerNameSeparate.style.visibility = displayAtTop ? 'hidden' : 'visible';
}

function onWriterCharacterButtonPressed(pressedElement) {
	if (!scrollingWriters) {
		pressedElement.scrollIntoView({
			behavior: 'auto',
			block: 'center',
			inline: 'center',
		});
	}
}

function onWriterCharacterSelectScroll(scrollElement) {
	scrollingWriters = true;
	
	var containerRect = scrollElement.getBoundingClientRect();
	var containerCentreX = containerRect.left + containerRect.width / 2;

	var centermostElement;
	var minDistance = 1000000;

	for (let child of scrollElement.children) {
		var childRect = child.getBoundingClientRect();
		var childCentreX = childRect.left + childRect.width / 2;

		var distanceX = Math.abs(containerCentreX - childCentreX);

		if (!child.classList.contains('placeholderButton') && distanceX < minDistance) {
			centermostElement = child;
			minDistance = distanceX;
		}
	}

	for (let child of scrollElement.children) {
		if (child.classList.contains('placeholderButton')) {
			continue;
		}
		if (child === centermostElement) {
			child.style.opacity = '1';
			child.classList.add('actionButtonSelected');
		} else {
			child.style.opacity = '0.5';
			child.classList.remove('actionButtonSelected');
		}
	}

	if (isScrollingWriterButtons) {
		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrollingWriterButtons);
	}
	// Set a timeout to run after scrolling ends
	isScrollingWriterButtons = setTimeout(() => writerCharacterScrollEnd(centermostElement), 66);
}

function writerCharacterScrollEnd(selectedElement) {
	scrollingWriters = false;
	selectedElement.scrollIntoView({
		behavior: 'auto',
		block: 'center',
		inline: 'center',
	});
}