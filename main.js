var showViewButtons = true;

function showView(viewName) {
	const views = document.getElementsByClassName('view');

	const header = document.getElementById('multiturnHeader');

	if (viewName == 'Lobby' || viewName == 'WaitOrChoosePackage') {
		header.style.display = 'block';
	} else {
		header.style.display = 'none';
	}

	for (i = 0; i < views.length; i++) {
		//var isBackgroundView = viewName.includes(views[i].id);

		if (views[i].id == viewName) {
			// || isBackgroundView) {
			views[i].style.display = 'block';
		} else if (views[i].id != 'TestButtons') {
			views[i].style.display = 'none';
		}
	}
}

function toggleViewButtons() {
	const viewButtons = document.getElementsByClassName('viewButton');

	showViewButtons = !showViewButtons;

	for (i = 0; i < viewButtons.length; i++) {
		if (showViewButtons) {
			viewButtons[i].style.display = 'block';
		} else {
			viewButtons[i].style.display = 'none';
		}
	}
}
