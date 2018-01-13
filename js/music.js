var meter, player;
function initMusic() {
  meter = new Tone.Meter();
	player = new Tone.Player({
		"url" : "assets/sounds/memba.mp3",
		"loop" : true
  }).connect(meter).toMaster();
  Tone.Buffer.on('load', function(){
  	player.start();
  })
}
