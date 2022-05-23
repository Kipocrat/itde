function init() {
	 scene = new THREE.Scene();
	 var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;

	 renderer = new THREE.WebGLRenderer({antialias: true});

	 renderer.setSize(WIDTH, HEIGHT);

	 document.body.appendChild(renderer.domElement);

	 camera = new THREE.PerspectiveCamera(45, WIDTH/ HEIGHT, 0.1, 20000);

	 camera.position.set(0, 6, 0);

	 scene.add(camera);

	window.addEventListener('resize', function() {
	var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
	 renderer.setSize(WIDTH, HEIGHT);
	 camera.aspect = WIDTH / HEIGHT;
	 camera.updateProjectMatrix();
	 });

	 renderer.setClearColor(0x333F47, 1);

	 var light = new THREE.PointLight(0xffffff);
	 light.position.set(-100, 200, 100);
	 scene.add(light);

	const texture = new THREE.TextureLoader().load( 'https://github.com/mrdoob/three.js/blob/eab2a29621b332e0e8a0bac5a0098cfcf1e331e1/examples/textures/lava/lavatile.jpg' );
	
	 var cylgeometry = new THREE.CylinderGeometry(3, 3, 7, 7);
	 var cylmaterial = new THREE.MeshLambertMaterial({ map: texture });
	 var cylmesh = new THREE.Mesh(cylgeometry, cylmaterial);

	 cylmesh.position.set(0.9, -5, -6);
	 scene.add(cylmesh);
	 controls = new THREE.OrbitControls(camera,renderer.domElement);
}

function animate()
{
	 controls.update();
	 renderer.render(scene, camera);
	 requestAnimationFrame(animate);
}
