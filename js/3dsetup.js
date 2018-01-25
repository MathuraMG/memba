var scene, camera, renderer, geometru, light1, light2, light3,loader;
var particleSystem;

var particleSystems = [
	{
		id: 'main',
		no: 5000,
		x_pos: 0,
		y_pos: 0,
		z_pos: 0,
		len: 300
	},
	{
		id: 'side1',
		no: 500,
		x_pos: 220,
		y_pos: 270,
		z_pos: 200,
		len: 100
	},
	{
		id: 'side2',
		no: 500,
		x_pos: -250,
		y_pos: -120,
		z_pos: 200,
		len: 90
	},
	{
		id: 'side3',
		no: 500,
		x_pos: -200,
		y_pos: 170,
		z_pos: 200,
		len: 150
	},
	{
		id: 'side4',
		no: 500,
		x_pos: 250,
		y_pos: -200,
		z_pos: 100,
		len: 150
	}
	,
	{
		id: 'small1',
		no: 50,
		x_pos: -250,
		y_pos: -70,
		z_pos: 50,
		len: 50
	},
	{
		id: 'small2',
		no: 50,
		x_pos: 250,
		y_pos: -160,
		z_pos: 100,
		len: 70
	},
	{
		id: 'small3',
		no: 50,
		x_pos: 0,
		y_pos: 300,
		z_pos: 100,
		len: 30
	},
	{
		id: 'small4',
		no: 160,
		x_pos: 250,
		y_pos: 0,
		z_pos: 150,
		len: 60
	}
];

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

	//create the lighting elements
	light1 = new THREE.PointLight( 0xffffff, 1, 1500 );
	light1.position.set( 500, 500, 500 );

	light2 = new THREE.PointLight( 0xffffff, 1, 1500 );
	light2.position.set( -500, 500, 500 );

	light3 = new THREE.PointLight( 0xffffff, 1, 1500 );
	light3.position.set( 500, -500, 500 );

	scene.add( light1 );
	scene.add( light2 );
	scene.add( light3 );


	//add controls
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.maxDistance = 500;

	//instantiate loader
	loader = new THREE.OBJLoader();

	//add particles
	particleSystems.forEach(function(ps) {
		particleSystem = createParticleSystem(ps.no, ps.x_pos, ps.y_pos, ps.z_pos, ps.len, ps.len, ps.len);
		addMask(loader,ps.x_pos, ps.y_pos, ps.z_pos);
		ps.system = particleSystem;
		scene.add(particleSystem.system);
	})
}

function addMask(loader, x, y, z) {
	loader.load(
	  // resource URL
	  'assets/3d/memba.obj',
	  function ( object ) {
	    object.position.x = x + 7.5;
	    object.position.y = y - 1;
	    object.position.z = z - 7.5;
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
}

function createParticleSystem(particleCount, xCenter, yCenter, zCenter, xSize, ySize, zSize) {

    var particles = new THREE.Geometry();


    // Create the vertices and add them to the particles geometry
    for (var p = 0; p < particleCount; p++) {
        var x = Math.random() * xSize - xSize/2 + xCenter;
        var y = Math.random() * ySize - ySize/2 + yCenter;
        var z = Math.random() * zSize - zSize/2 + zCenter;

        // Create the vertex
        var particle = new THREE.Vector3(x, y, z);

        // Add the vertex to the geometry
        particles.vertices.push(particle);
    }

    // Create the material that will be used to render each vertex of the geometry
    var particleMaterial = new THREE.PointsMaterial(
            {
             size: 5,
             alphaTest: 0.5,
             map: THREE.ImageUtils.loadTexture("assets/images/blob.png"),
             blending: THREE.AdditiveBlending,
             transparent: true,
            });

    // Create the particle system
    var particleSystem = new THREE.Points(particles, particleMaterial);

    return {
      system: particleSystem,
      xCenter: xCenter,
      yCenter: yCenter,
      zCenter: zCenter,
      xSize: xSize,
      ySize: ySize,
      zSize: zSize,
    };
}

function animateParticles(particleSystem, size) {
  let system = particleSystem.system;
  let xCenter = particleSystem.xCenter;
  let yCenter = particleSystem.yCenter;
  let zCenter = particleSystem.zCenter;
  let xSize = particleSystem.xSize;
  let ySize = particleSystem.ySize;
  let zSize = particleSystem.zSize;

  system.material.size = size;
    var verts = system.geometry.vertices;
    for(var i = 0; i < verts.length; i++) {
        var vert = verts[i];
        if (vert.y < yCenter-ySize/2) {
            vert.y = Math.random() + yCenter + ySize/2;
        }
        if (vert.x < xCenter-xSize/2) {
            vert.x = Math.random() + xCenter + xSize/2;
        }
        if (vert.z < zCenter-zSize/2) {
            vert.z = Math.random() + zCenter + zSize/2;
        }
        vert.y = vert.y - .05;
        vert.z = vert.z - .05;
        vert.x = vert.x - .05;
    }
    system.geometry.verticesNeedUpdate = true;
}
