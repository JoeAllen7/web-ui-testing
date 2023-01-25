export class App {
	constructor() {
		addEventListener('resize', this.onWindowResized);
		updatePlayerNameLayout();
	}
	
	private onWindowResized = (event: UIEvent): void => {
		this.updatePlayerNameLayout();
	};

	private updatePlayerNameLayout = (): void => {
		let playerNameTop = document.getElementById('playerNameTop');
		let playerNameSeparate = document.getElementById('playerNameSeparatePanel');
		if (!playerNameTop || !playerNameSeparate) {
			return;
		}

		let minPageSize = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);
		let vminWidth: number = (playerNameTop.clientWidth / minPageSize) * 100;

		if (vminWidth === 0) {
			return;
		}

		// If width > 65, there is enough space to display the player name alongside tabs at the top.
		//	Otherwise, it should be displayed in a separate panel underneath the tabs.
		let displayAtTop = vminWidth > 65;
		playerNameTop.style.visibility = displayAtTop ? 'visible' : 'hidden';
		playerNameSeparate.style.visibility = displayAtTop ? 'hidden' : 'visible';
	};
}