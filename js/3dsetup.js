var scene, camera, renderer, geometru, light1, light2, light3,loader;
var particleSystem_main, particleSystem_side1, particleSystem_side2, particleSystem_side3, particleSystem_side4, particleSystem_small1, particleSystem_small2, particleSystem_small3, particleSystem_small4;

function init() {	//create the scene
	scene = new THREE.Scene();

	//create the camera
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	camera.position.z = 10;
	camera.position.y = 2;
	camera.position.x = 0;

	//create the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	//create the cube
	geometry = new THREE.BoxGeometry( 1, 1, 1 );
	// material = new THREE.MeshPhongMaterial({color: 0x696969, emissive: 0x696969, specular:0x696969, shininess: 15, side: THREE.DoubleSide})
	 // = new THREE.MeshBasicMaterial( { color: 0xe42f12 } );
	// cube = new THREE.Mesh( geometry, material );

	//create the lighting elements
	light1 = new THREE.PointLight( 0xffffff, 1, 100 );
	light1.position.set( 30, 30, 30 );

	light2 = new THREE.PointLight( 0xffffff, 1, 100 );
	light2.position.set( -30, 30, 30 );

	light3 = new THREE.PointLight( 0xffffff, 1, 100 );
	light3.position.set( 30, -30, 30 );

	//instantiate loader
	loader = new THREE.OBJLoader();

	// load a resource
	loader.load(
		// resource URL
		'/assets/3d/memba.obj',
		// called when resource is loaded
		function ( object ) {
	    // object.scale.x = 0.01;
	    // object.scale.y = 0.01;
	    // object.scale.z = 0.01;
			object.position.x = 7.5;
			object.position.y = -1;
			object.position.z = -7.5;
			scene.add( object );
		},
		// called when loading is in progresses
		function ( xhr ) {
			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
		},
		// called when loading has errors
		function ( error ) {
			console.log( 'An error happened: ' + error );
		}
	);

	//add the elements to the scene
	// scene.add( cube );
	scene.add( light1 );
	scene.add( light2 );
	scene.add( light3 );
	// add it to the scene
	//add controls
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.maxDistance = 500;
	particleSystem_main = createParticleSystem(5000,0,0,0,300,300,300);
	scene.add(particleSystem_main.system);

	particleSystem_side1 = createParticleSystem(500,220,270,200,100,100,100);
	scene.add(particleSystem_side1.system);

	particleSystem_side2 = createParticleSystem(500,-250,-120,200,90,90,90);
	scene.add(particleSystem_side2.system);

	particleSystem_side3 = createParticleSystem(500,-200,170,200,150,150,150);
	scene.add(particleSystem_side3.system);

	particleSystem_side4 = createParticleSystem(500,250,-200,100,150,150,150);
	scene.add(particleSystem_side4.system);

	particleSystem_small1 = createParticleSystem(50,-250,-70,50,50,50,50);
	scene.add(particleSystem_small1.system);

	particleSystem_small2 = createParticleSystem(50,250,-160,100,70,70,70);
	scene.add(particleSystem_small2.system);

	particleSystem_small3 = createParticleSystem(50,0,300,100,30,30,30);
	scene.add(particleSystem_small3.system);

	particleSystem_small4 = createParticleSystem(160,250,0,150,60,60,60);
	scene.add(particleSystem_small4.system);
}
//basic animation function
