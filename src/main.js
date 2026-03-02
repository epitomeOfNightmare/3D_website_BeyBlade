import {
	ViewerApp,
	AssetManagerPlugin,
	CameraViewPlugin,
	CameraView,
	FrameFadePlugin,
	GLTFAnimationPlugin,
	GammaCorrectionPlugin,
	ScrollableCameraViewPlugin,
	addBasePlugins,

	// Import THREE.js internals
	Vector3,
	Color, 
	Texture,
	Mesh,
	VideoTexture,
	PlaneBufferGeometry,
} from "webgi";

async function setupViewer(canvasId, modelPath) {
	// Initialize the viewer
	const viewer = new ViewerApp({
			canvas: document.getElementById(canvasId),
	})

	await addBasePlugins(viewer);
	viewer.renderer.refreshPipeline();

	// const manager = await viewer.addPlugin(AssetManagerPlugin);

	// Import and add a GLB file
	await viewer.load(modelPath);

	// Load an environment map if not set in the glb file
	await viewer.setEnvironmentMap("./assets/autumn forest.hdr");

	// Camera transform
	viewer.scene.activeCamera.position = new Vector3(0, 0, -10);
	viewer.scene.activeCamera.target = new Vector3(0, 0, 0);
		
	// Camera options
	const options = viewer.scene.activeCamera.getCameraOptions();
	options.fov = 25;
	viewer.scene.activeCamera.setCameraOptions(options);
	
	// Control options
	const controls = viewer.scene.activeCamera.controls;
	controls.autoRotate = true;
	controls.autoRotateSpeed = 5;
	controls.enableDamping = true;
	controls.rotateSpeed = 2.0;
	controls.enableZoom = true;
	controls.enablePan = true;
	controls.minDistance = 1.5;
	controls.maxDistance = 10;
}

// Set up scene for each canvas
setupViewer("full-beyblade", "assets/Models/FA/FA Full.glb");
