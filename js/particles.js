var clock;
var deltaTime;
function createParticleSystem(particleCount, xCenter, yCenter, zCenter, xSize, ySize, zSize) {
  clock = new THREE.Clock(true);

    // The number of particles in a particle system is not easily changed.

    // Particles are just individual vertices in a geometry
    // Create the geometry that will hold all of the vertices
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
            {color: 0xffffff,
             size: 5,
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

function animateParticles(particleSystem, size, deltaTime) {
  let system = particleSystem.system;
  let xCenter = particleSystem.xCenter;
  let yCenter = particleSystem.yCenter;
  let zCenter = particleSystem.zCenter;
  let xSize = particleSystem.xSize;
  let ySize = particleSystem.ySize;
  let zSize = particleSystem.zSize;

  system.material.size = size;
    // var verts = system.geometry.vertices;
    // for(var i = 0; i < verts.length; i++) {
    //     var vert = verts[i];
    //     if (vert.y < yCenter-ySize/2) {
    //         vert.y = Math.random() + yCenter + ySize/2;
    //     }
    //     if (vert.x < xCenter-xSize/2) {
    //         vert.x = Math.random() + xCenter + xSize/2;
    //     }
    //     if (vert.z < zCenter-zSize/2) {
    //         vert.z = Math.random() + zCenter + zSize/2;
    //     }
    //     vert.y = vert.y - (10 * deltaTime);
    //     vert.z = vert.z - (10 * deltaTime);
    //     vert.x = vert.x - (10 * deltaTime);
    // }
    // system.geometry.verticesNeedUpdate = true;

}
