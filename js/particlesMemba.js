var clock;
var deltaTime;
function createMembaParticleSystem() {
  clock = new THREE.Clock(true);

    // The number of particles in a particle system is not easily changed.
    var particleCount = 10000;

    // Particles are just individual vertices in a geometry
    // Create the geometry that will hold all of the vertices
    var particles = new THREE.Geometry();

    // Create the vertices and add them to the particles geometry
    for (var p = 0; p < particleCount; p++) {

        // This will create all the vertices in a range of -200 to 200 in all directions
        var x_value = Math.random() * 180 + 100;
        var x_choice = [x_value, x_value]
        var x = x_choice[Math.round(Math.random())];

        var y_value = Math.random() * 180 + 100;
        var y_choice = [y_value, y_value]
        var y = y_choice[Math.round(Math.random())];

        var z_value = Math.random() * 180 + 100;
        var z_choice = [z_value, z_value]
        var z = z_choice[Math.round(Math.random())];
        //
        // var y = Math.random() * 400 - 200;
        // var z = Math.random() * 400 - 200;

        // Create the vertex
        var particle = new THREE.Vector3(x, y, z);

        // Add the vertex to the geometry
        particles.vertices.push(particle);
    }

    // Create the material that will be used to render each vertex of the geometry
    var particleMaterial = new THREE.PointsMaterial(
            {color: 0xffffff,
             size: 5,
             map: THREE.ImageUtils.loadTexture("/assets/images/blob.png"),
             blending: THREE.AdditiveBlending,
             transparent: true,
            });

    // Create the particle system
    particleSystem = new THREE.Points(particles, particleMaterial);

    return particleSystem;
}

function animateMembaParticles(particleSystem, size) {
  particleSystem.material.size = size;
  deltaTime = clock.getDelta();
    var verts = particleSystem.geometry.vertices;
    for(var i = 0; i < verts.length; i++) {
        var vert = verts[i];
        if (vert.y < -200) {
            vert.y = Math.random() * 400 - 200;
        }
        vert.y = vert.y - (10 * deltaTime);
    }
    particleSystem.geometry.verticesNeedUpdate = true;

}
