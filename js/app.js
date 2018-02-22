$( document ).ready(function() {
	init();
	initMusic();
	animate();
	$('.iphone__notification').hide();
	checkIphone();
});
window.addEventListener( 'resize', onWindowResize, false );
var level = 0;
function animate() {
  requestAnimationFrame( animate );

	//this is to create random animation in case the volume is muted by the user
	if(player.volume.value <= -100) {
		level = 0.9*level + 0.1*(2*Math.random());
	} else {
		level = meter.getLevel();
		level = Tone.dbToGain(level);
	}
	particleSystems.forEach(function(ps){
		animateParticles(ps.system,level*2);
	})
  renderer.render(scene, camera);

};


function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function toggleSound() {
	$('.sound').toggleClass('sound--on');
	let temp =-100-player.volume.value;
	player.volume.value = temp
}

function checkIphone(){
    let ua = navigator.userAgent;
    let checker = {
      iphone: ua.match(/(iPhone|iPod|iPad)/)
    };
    if (checker.iphone){
			$('.iphone__notification').show();
      $('.sound').toggleClass('sound--on');
			player.volume.value = -100;

    }
    else {

    }
}

function enableIphoneSound() {
	player.start();
	$('.iphone__notification').hide();
	player.volume.value = 0;
	$('.sound').toggleClass('sound--on');
}
