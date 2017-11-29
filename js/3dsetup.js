var scene, camera, renderer, geometru, light1, light2, light3,loader;
var particleSystem;

function init() {	//create the scene
	scene = new THREE.Scene();

	//create the camera
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	camera.position.z = 5;
	camera.position.y = 5;
	camera.position.x = 5;

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
			object.position.x = -10;
			object.position.y = -10;
			// object.position.z = 2;
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

	loader.load(
		// resource URL
		'/assets/3d/PinBox3.obj',
		// called when resource is loaded
		function ( object ) {
	    object.scale.x = 0.01;
	    object.scale.y = 0.01;
	    object.scale.z = 0.01;
			// object.position.x = -20;
			// object.position.y = -20;
			// object.position.z = 2;
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
	particleSystem = createParticleSystem();
	scene.add(particleSystem);
}
//basic animation function
