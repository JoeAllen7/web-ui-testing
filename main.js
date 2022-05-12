var showViewButtons = true;
var selectedPackage = 0;

const packageInfo = ['Package 1', 'Package 2', 'Package 3', 'Package 4', 'Package 5'];

function showView(viewName) {
	if (viewName == 'Options') {
		toggleOptions();
		return;
	} else if (viewName == 'ConfirmLeave') {
		toggleConfirmLeavePopup();
		return;
	}

	if (viewName == 'WaitOrChoosePackage') {
		setSelectedPackage(0);
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

function buttonNextPackage() {
	setSelectedPackage((selectedPackage + 1) % packageInfo.length);
}

function buttonPreviousPackage() {
	setSelectedPackage(selectedPackage == 0 ? packageInfo.length - 1 : selectedPackage - 1);
}

function setSelectedPackage(packageIndex) {
	if (packageIndex >= packageInfo.length || packageIndex < 0) {
		//Invalid package index
		return;
	}

	selectedPackage = packageIndex;

	// const portrait = window.matchMedia('(orientation: portrait)');

	document.getElementById('packageNameCentre').innerHTML = packageInfo[packageIndex];

	if (packageIndex == 0) {
		document.getElementById('packageNameLeft').innerHTML = packageInfo[packageInfo.length - 1];
	} else {
		document.getElementById('packageNameLeft').innerHTML = packageInfo[packageIndex - 1];
	}

	if (packageIndex == packageInfo.length - 1) {
		document.getElementById('packageNameRight').innerHTML = packageInfo[0];
	} else {
		document.getElementById('packageNameRight').innerHTML = packageInfo[packageIndex + 1];
	}
}
