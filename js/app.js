$( document ).ready(function() {
	init();
	initMusic();
	animate();
});
window.addEventListener( 'resize', onWindowResize, false );

function animate() {
  requestAnimationFrame( animate );
	var level = meter.getLevel();
	level = Tone.dbToGain(level);
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
