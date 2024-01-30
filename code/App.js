addEventListener('resize', onWindowResized);
updatePlayerNameLayout();

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

function writerCharacterScrollEnd(selectedElement) {
	selectedElement.scrollIntoView({
		behavior: 'auto',
		block: 'center',
		inline: 'center',
	});
}