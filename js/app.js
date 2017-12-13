$( document ).ready(function() {
	init();
	initMusic();
	animate();
});
var deltaTime;
deltaTime = clock.getDelta();

function animate() {
  requestAnimationFrame( animate );
	var level = meter.getLevel();
	level = Tone.dbToGain(level);
	deltaTime = clock.getDelta();
	animateParticles(particleSystem_main,level*50, deltaTime);
	animateParticles(particleSystem_side1,level*50, deltaTime);
	animateParticles(particleSystem_side2,level*50, deltaTime);
	animateParticles(particleSystem_side3,level*50, deltaTime);
	animateParticles(particleSystem_side4,level*50, deltaTime);
	animateParticles(particleSystem_small1,level*50, deltaTime);
	animateParticles(particleSystem_small2,level*50, deltaTime);
	animateParticles(particleSystem_small3,level*50, deltaTime);
	animateParticles(particleSystem_small4,level*50, deltaTime);


  // cube.rotation.x += 0.1;
  // cube.rotation.y += 0.1;

  renderer.render(scene, camera);

};
