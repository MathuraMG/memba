
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
