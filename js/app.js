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
	if(player.volume.value <= -100) {
		level = 0.9*level + 0.1*(2*Math.random());
	} else {
		level = meter.getLevel();
		level = Tone.dbToGain(level);
	}
	deltaTime = clock.getDelta();
	animateParticles(particleSystem_main,level*2);
	animateParticles(particleSystem_side1,level*2);
	animateParticles(particleSystem_side2,level*2);
	animateParticles(particleSystem_side3,level*2);
	animateParticles(particleSystem_side4,level*2);
	animateParticles(particleSystem_small1,level*2);
	animateParticles(particleSystem_small2,level*2);
	animateParticles(particleSystem_small3,level*2);
	animateParticles(particleSystem_small4,level*2);
  renderer.render(scene, camera);

};


function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function toggleSound() {
	$('.sound').toggleClass('sound--on');
	var temp =-100-player.volume.value;
	player.volume.value = temp
}

function checkIphone(){
    var ua = navigator.userAgent;
    var checker = {
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
