function showView(viewName) {

	const views = document.getElementsByClassName('view')
	
	const header = document.getElementById('multiturnHeader');
	
	if(viewName == 'Lobby' || viewName == 'GameLobby') {
		header.style.display = 'block';
	}
	else {
		header.style.display = 'none';
	}
	
	for (i = 0; i < views.length; i++) {
		if(views[i].id == viewName){
			views[i].style.display = 'block';
		}
		else if(views[i].id != 'TestButtons'){
			views[i].style.display = 'none';
		}
	}
}
