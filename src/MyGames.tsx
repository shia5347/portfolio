import React, { StrictMode} from "react";
import '../homepageStyles.css'

export default function MyGames() {
		console.log("Loaded game gallery")
	return (

		<>
		<div className="gallery">

		<div className="selectable">
		<img src="/img/gameImages/1984.png"/>
		<br/>
		<a id="selectionTitle" href="/games/1984">1984</a>
		<p id="desc">Made for a highschool english assignment</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		<div className="selectable">
		<img src="/img/gameImages/birbyNight.gif"/>
		<br/>
		<a id="selectionTitle" href="/games/Birby">Birby</a>
		<p id="desc">A cute puzzle platformer</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		<div className="selectable">
		<img src="/img/gameImages/DegBomb.png"/>
		<br/>
		<a id="selectionTitle" href="/games/degBomb">Degree Bomb</a>
		<p id="desc">Made for the Brackey's game jam when I was 15</p>
		<p id="platformDesc">Windows</p>
		</div>

		<div className="selectable">
		<img src="/img/gameImages/lifelessBits.gif"/>
		<br/>
		<a id="selectionTitle" href="/games/lifelessBits">lifelessBits</a>
		<p id="desc">An arena shooter inspired by bauxite's meteorite LOWREZJAM entry</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		<div className="selectable">
		<img src="/img/gameImages/terminalShooter.png"/>
		<br/>
		<a id="selectionTitle" href="/games/terminalShooter">terminalShooter</a>
		<p id="desc">A shootemup set in some computer</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		<div className="selectable">
		<img src="/img/gameImages/dreamGirl.png"/>
		<br/>
		<a id="selectionTitle" href="/games/dreamGirl">Undisclosed project</a>
		<p id="desc">A story game currently in development with a custom engine</p>
		<p id="platformDesc">Windows Linux</p>
		</div>

		</div>
		</>
	)
}

