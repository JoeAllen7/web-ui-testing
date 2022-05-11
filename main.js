var showViewButtons = true;

function showView(viewName) {
	if (viewName == 'Options') {
		toggleOptions();
		return;
	} else if (viewName == 'ConfirmLeave') {
		toggleConfirmLeavePopup();
		return;
	}

	const views = document.getElementsByClassName('view');

	const header = document.getElementById('lobbyHeader');

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

function toggleOptions() {
	const options = document.getElementById('optionsScreen');

	if (options.style.display == 'none') {
		options.style.display = 'block';
	} else {
		options.style.display = 'none';
	}
}

function toggleConfirmLeavePopup() {
	const popup = document.getElementById('confirmLeaveGame');

	if (popup.style.display == 'none') {
		popup.style.display = 'block';
	} else {
		popup.style.display = 'none';
	}
}
