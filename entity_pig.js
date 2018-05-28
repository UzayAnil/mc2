var entity_pig = {
  getMesh: function() {
    var group = new THREE.Object3D();
    
    var texture = THREE.ImageUtils.loadTexture("entity/pig/pig.png");
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    
    var material = new THREE.MeshLambertMaterial({map: texture});
    
    //---HEAD---
    var headGeo = new THREE.BufferGeometry();
    
    var vertices = [
      //front
      -0.25, 0.25, 0.25,
      0.25, 0.25, 0.25,
      0.25, -0.25, 0.25,
      -0.25, 0.25, 0.25,
      -0.25, -0.25, 0.25,
      0.25, -0.25, 0.25,
      
      //back
      -0.25, 0.25, -0.25,
      0.25, 0.25, -0.25,
      0.25, -0.25, -0.25,
      -0.25, 0.25, -0.25,
      -0.25, -0.25, -0.25,
      0.25, -0.25, -0.25,
      
      //left
      -0.25, 0.25, -0.25,
      -0.25, 0.25, 0.25,
      -0.25, -0.25, 0.25,
      -0.25, 0.25, -0.25,
      -0.25, -0.25, -0.25,
      -0.25, -0.25, 0.25,
      
      //right
      0.25, 0.25, 0.25,
      0.25, 0.25, -0.25,
      0.25, -0.25, -0.25,
      0.25, 0.25, 0.25,
      0.25, -0.25, 0.25,
      0.25, -0.25, -0.25,
      
      //top
      -0.25, 0.25, -0.25,
      0.25, 0.25, -0.25,
      0.25, 0.25, 0.25,
      -0.25, 0.25, -0.25,
      -0.25, 0.25, 0.25,
      0.25, 0.25, 0.25,
      
      //bottom
      -0.25, -0.25, -0.25,
      0.25, -0.25, -0.25,
      0.25, -0.25, 0.25,
      -0.25, -0.25, -0.25,
      -0.25, -0.25, 0.25,
      0.25, -0.25, 0.25,
      
      //snout front
      -0.125, 0, 0.3125,
      0.125, 0, 0.3125,
      0.125, -0.1875, 0.3125,
      -0.125, 0, 0.3125,
      -0.125, -0.1875, 0.3125,
      0.125, -0.1875, 0.3125,
      
      //snout top
      -0.125, 0, 0.25,
      0.125, 0, 0.25,
      0.125, 0, 0.3125,
      -0.125, 0, 0.25,
      -0.125, 0, 0.3125,
      0.125, 0, 0.3125,
      
      //snout bottom
      -0.125, -0.1875, 0.25,
      0.125, -0.1875, 0.25,
      0.125, -0.1875, 0.3125,
      -0.125, -0.1875, 0.25,
      -0.125, -0.1875, 0.3125,
      0.125, -0.1875, 0.3125,
      
      //snout left
      -0.125, 0, 0.25,
      -0.125, 0, 0.3125,
      -0.125, -0.1875, 0.3125,
      -0.125, 0, 0.25,
      -0.125, -0.1875, 0.25,
      -0.125, -0.1875, 0.3125,
      
      //snout right
      0.125, 0, 0.25,
      0.125, 0, 0.3125,
      0.125, -0.1875, 0.3125,
      0.125, 0, 0.25,
      0.125, -0.1875, 0.25,
      0.125, -0.1875, 0.3125
    ];
    var uvs = [
      //front
      8/64, 1 - 8/32,
      16/64, 1 - 8/32,
      16/64, 1 - 16/32,
      8/64, 1 - 8/32,
      8/64, 1 - 16/32,
      16/64, 1 - 16/32,
      
      //back
      24/64, 1 - 8/32,
      32/64, 1 - 8/32,
      32/64, 1 - 16/32,
      24/64, 1 - 8/32,
      24/64, 1 - 16/32,
      32/64, 1 - 16/32,
      
      //left
      0/64, 1 - 8/32,
      8/64, 1 - 8/32,
      8/64, 1 - 16/32,
      0/64, 1 - 8/32,
      0/64, 1 - 16/32,
      8/64, 1 - 16/32,
      
      //right
      16/64, 1 - 8/32,
      24/64, 1 - 8/32,
      24/64, 1 - 16/32,
      16/64, 1 - 8/32,
      16/64, 1 - 16/32,
      24/64, 1 - 16/32,
      
      //top
      8/64, 1 - 0/32,
      16/64, 1 - 0/32,
      16/64, 1 - 8/32,
      8/64, 1 - 0/32,
      8/64, 1 - 8/32,
      16/64, 1 - 8/32,
      
      //bottom
      16/64, 1 - 0/32,
      24/64, 1 - 0/32,
      24/64, 1 - 8/32,
      16/64, 1 - 0/32,
      16/64, 1 - 8/32,
      24/64, 1 - 8/32,
      
      //snout front
      17/64, 1 - 17/32,
      21/64, 1 - 17/32,
      21/64, 1 - 20/32,
      17/64, 1 - 17/32,
      17/64, 1 - 20/32,
      21/64, 1 - 20/32,
      
      //snout top
      17/64, 1 - 16/32,
      21/64, 1 - 16/32,
      21/64, 1 - 17/32,
      17/64, 1 - 16/32,
      17/64, 1 - 17/32,
      21/64, 1 - 17/32,
      
      //snout bottom
      21/64, 1 - 16/32,
      25/64, 1 - 16/32,
      25/64, 1 - 17/32,
      21/64, 1 - 16/32,
      21/64, 1 - 17/32,
      25/64, 1 - 17/32,
      
      //snout left
      16/64, 1 - 17/32,
      17/64, 1 - 17/32,
      17/64, 1 - 20/32,
      16/64, 1 - 17/32,
      16/64, 1 - 20/32,
      17/64, 1 - 20/32,
      
      //snout right
      22/64, 1 - 17/32,
      23/64, 1 - 17/32,
      23/64, 1 - 20/32,
      22/64, 1 - 17/32,
      22/64, 1 - 20/32,
      23/64, 1 - 20/32
    ];
    
    headGeo.addAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
    headGeo.computeVertexNormals();
    
    headGeo.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs), 2));
    
    var headMesh = new THREE.Mesh(headGeo, material);
    headMesh.material.side = THREE.DoubleSide;
    
    headMesh.position.z = 10/16;
    headMesh.position.y = 2/16;
    
    group.add(headMesh);
    
    //---BODY---
    var bodyGeo = new THREE.BufferGeometry();
    
    //0.625 wide, 0.5 tall, 1 long
    var vertices = [
      //top
      -0.3125, 0.25, -0.5,
      0.3125, 0.25, -0.5,
      0.3125, 0.25, 0.5,
      -0.3125, 0.25, -0.5,
      -0.3125, 0.25, 0.5,
      0.3125, 0.25, 0.5,
      
      //bottom
      -0.3125, -0.25, -0.5,
      0.3125, -0.25, -0.5,
      0.3125, -0.25, 0.5,
      -0.3125, -0.25, -0.5,
      -0.3125, -0.25, 0.5,
      0.3125, -0.25, 0.5,
      
      //left
      -0.3125, 0.25, -0.5,
      -0.3125, 0.25, 0.5,
      -0.3125, -0.25, 0.5,
      -0.3125, 0.25, -0.5,
      -0.3125, -0.25, -0.5,
      -0.3125, -0.25, 0.5,
      
      //right
      0.3125, 0.25, -0.5,
      0.3125, 0.25, 0.5,
      0.3125, -0.25, 0.5,
      0.3125, 0.25, -0.5,
      0.3125, -0.25, -0.5,
      0.3125, -0.25, 0.5,
      
      //front
      -0.3125, 0.25, 0.5,
      0.3125, 0.25, 0.5,
      0.3125, -0.25, 0.5,
      -0.3125, 0.25, 0.5,
      -0.3125, -0.25, 0.5,
      0.3125, -0.25, 0.5,
      
      //back
      0.3125, 0.25, -0.5,
      -0.3125, 0.25, -0.5,
      -0.3125, -0.25, -0.5,
      0.3125, 0.25, -0.5,
      0.3125, -0.25, -0.5,
      -0.3125, -0.25, -0.5
    ];
    
    var uvs = [ //FIXME
      //top
      54/64, 1 - 16/32,
      64/64, 1 - 16/32,
      64/64, 1 - 32/32,
      54/64, 1 - 16/32,
      54/64, 1 - 32/32,
      64/64, 1 - 32/32,
      
      //bottom
      36/64, 1 - 16/32,
      46/64, 1 - 16/32,
      46/64, 1 - 32/32,
      36/64, 1 - 16/32,
      36/64, 1 - 32/32,
      46/64, 1 - 32/32,
      
      //left
      28/64, 1 - 32/32,
      28/64, 1 - 16/32,
      36/64, 1 - 16/32,
      28/64, 1 - 32/32,
      36/64, 1 - 32/32,
      36/64, 1 - 16/32,
      
      //right
      46/64, 1 - 32/32,
      46/64, 1 - 16/32,
      54/64, 1 - 16/32,
      46/64, 1 - 32/32,
      54/64, 1 - 32/32,
      54/64, 1 - 16/32,
      
      //front
      36/64, 1 - 8/32,
      46/64, 1 - 8/32,
      46/64, 1 - 16/32,
      36/64, 1 - 8/32,
      36/64, 1 - 16/32,
      46/64, 1 - 16/32,
      
      //back
      46/64, 1 - 8/32,
      56/64, 1 - 8/32,
      56/64, 1 - 16/32,
      46/64, 1 - 8/32,
      46/64, 1 - 16/32,
      56/64, 1 - 16/32
    ];
    
    bodyGeo.addAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
    bodyGeo.computeVertexNormals();
    
    bodyGeo.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs), 2));
    
    var bodyMesh = new THREE.Mesh(bodyGeo, material);
    bodyMesh.material.side = THREE.DoubleSide;
    
    group.add(bodyMesh);
    
    //---LEGS---
    var legGeo = new THREE.BufferGeometry();
    
    var vertices = [
      //front
      -0.125, 0, 0.125,
      0.125, 0, 0.125,
      0.125, -0.375, 0.125,
      -0.125, 0, 0.125,
      -0.125, -0.375, 0.125,
      0.125, -0.375, 0.125,
      
      //back
      0.125, 0, -0.125,
      -0.125, 0, -0.125,
      -0.125, -0.375, -0.125,
      0.125, 0, -0.125,
      0.125, -0.375, -0.125,
      -0.125, -0.375, -0.125,
      
      //left
      -0.125, 0, -0.125,
      -0.125, 0, 0.125,
      -0.125, -0.375, 0.125,
      -0.125, 0, -0.125,
      -0.125, -0.375, -0.125,
      -0.125, -0.375, 0.125,
      
      //right
      0.125, 0, 0.125,
      0.125, 0, -0.125,
      0.125, -0.375, -0.125,
      0.125, 0, 0.125,
      0.125, -0.375, 0.125,
      0.125, -0.375, -0.125,
      
      //bottom
      -0.125, -0.375, 0.125,
      0.125, -0.375, 0.125,
      0.125, -0.375, -0.125,
      -0.125, -0.375, 0.125,
      -0.125, -0.375, -0.125,
      0.125, -0.375, -0.125,
      
      //top
      -0.125, 0, 0.125,
      0.125, 0, 0.125,
      0.125, 0, -0.125,
      -0.125, 0, 0.125,
      -0.125, 0, -0.125,
      0.125, 0, -0.125
    ];
    var uvs = [
      //front
      4/64, 1 - 20/32,
      8/64, 1 - 20/32,
      8/64, 1 - 26/32,
      4/64, 1 - 20/32,
      4/64, 1 - 26/32,
      8/64, 1 - 26/32,
      
      //back
      12/64, 1 - 20/32,
      16/64, 1 - 20/32,
      16/64, 1 - 26/32,
      12/64, 1 - 20/32,
      12/64, 1 - 26/32,
      16/64, 1 - 26/32,
      
      //left
      0/64, 1 - 20/32,
      4/64, 1 - 20/32,
      4/64, 1 - 26/32,
      0/64, 1 - 20/32,
      0/64, 1 - 26/32,
      4/64, 1 - 26/32,
      
      //right
      8/64, 1 - 20/32,
      12/64, 1 - 20/32,
      12/64, 1 - 26/32,
      8/64, 1 - 20/32,
      8/64, 1 - 26/32,
      12/64, 1 - 26/32,
      
      //bottom
      8/64, 1 - 16/32,
      12/64, 1 - 16/32,
      12/64, 1 - 20/32,
      8/64, 1 - 16/32,
      8/64, 1 - 20/32,
      12/64, 1 - 20/32,
      
      //top
      4/64, 1 - 16/32,
      8/64, 1 - 16/32,
      8/64, 1 - 20/32,
      4/64, 1 - 16/32,
      4/64, 1 - 20/32,
      8/64, 1 - 20/32
    ];
    
    legGeo.addAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
    legGeo.computeVertexNormals();
    
    legGeo.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs), 2));
    
    var legMesh = new THREE.Mesh(legGeo, material);
    legMesh.material.side = THREE.DoubleSide;
    
    var leftFrontLeg = legMesh.clone();
    leftFrontLeg.position.set(3/16, -4/16, 5/16);
    group.add(leftFrontLeg);
    
    var rightFrontLeg = legMesh.clone();
    rightFrontLeg.position.set(-3/16, -4/16, 5/16);
    group.add(rightFrontLeg);
    
    var leftRearLeg = legMesh.clone();
    leftRearLeg.position.set(3/16, -4/16, -7/16);
    group.add(leftRearLeg);
    
    var rightRearLeg = legMesh.clone();
    rightRearLeg.position.set(-3/16, -4/16, -7/16);
    group.add(rightRearLeg);
    
    return group;
  },
  animateWalk: function(entity, timeDelta) {
    if(!("rot0D" in entity.data)) { entity.data.rot0D = 1; }
    if(!("rot1D" in entity.data)) { entity.data.rot1D = -1; }
    if(!("rot2D" in entity.data)) { entity.data.rot2D = -1; }
    if(!("rot3D" in entity.data)) { entity.data.rot3D = 1; }
    
    for(var i = 0; i < 4; i++) {
      var obj = entity.model.children[i + 2];
      if(!(("rot" + i) in entity.data)) { entity.data["rot" + i] = 0; }
      if(entity.data["rot" + i] >= Math.PI / 6) {
        entity.data["rot" + i + "D"] = -1;
      } else if(entity.data["rot" + i] <= -Math.PI / 6) {
        entity.data["rot" + i + "D"] = 1;
      }
      var rotation = 0.3 * timeDelta * entity.data["rot" + i + "D"];
      obj.rotateX(rotation);
      entity.data["rot" + i] += rotation;
    }
  }
};