$( document ).ready(function() {
	init();
	initMusic();
	animate();
});

function animate() {
  requestAnimationFrame( animate );
	var level = meter.getLevel();
	level = Tone.dbToGain(level);
	animateParticles(particleSystem,level*2);

  // cube.rotation.x += 0.1;
  // cube.rotation.y += 0.1;

  renderer.render(scene, camera);

};
