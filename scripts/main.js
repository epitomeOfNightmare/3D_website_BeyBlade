import {
	ViewerApp,
	AssetManagerPlugin,
	CameraViewPlugin,
	CameraView,
	GBufferPlugin,
	timeout,
	ProgressivePlugin,
	TonemapPlugin,
	SSRPlugin,
	SSAOPlugin,
	DiamondPlugin,
	FrameFadePlugin,
	GLTFAnimationPlugin,
	GroundPlugin,
	BloomPlugin,
	TemporalAAPlugin,
	AnisotropyPlugin,
	GammaCorrectionPlugin,
	ScrollableCameraViewPlugin,
	addBasePlugins,
	Vector3,
	Mesh,
	PlaneGeometry,
	VideoTexture,
	// ITexture,
	TweakpaneUiPlugin,
	// TweakpaneUiPlugin,
	AssetManagerBasicPopupPlugin,
	CanvasSnipperPlugin,
	// IViewerPlugin,
	// FileTransferPlugin,
	Color, // Import THREE.js internals
	Texture, // Import THREE.js internals
} from "webgi";

async function setupViewer() {
	// Initialize the viewer
	const viewer = new ViewerApp({
		canvas: document.getElementById('webgi-canvas'),
	})

	// Add plugins individually
	// await viewer.addPlugin(ScrollableCameraViewPlugin)
	// await viewer.addPlugin(GBufferPlugin)
	// await viewer.addPlugin(new ProgressivePlugin(32))
	// await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
	// await viewer.addPlugin(GammaCorrectionPlugin)
	// await viewer.addPlugin(SSRPlugin)
	// await viewer.addPlugin(SSAOPlugin)
	// await viewer.addPlugin(DiamondPlugin)
	// await viewer.addPlugin(FrameFadePlugin)
	// await viewer.addPlugin(GLTFAnimationPlugin)
	// await viewer.addPlugin(GroundPlugin)
	// await viewer.addPlugin(BloomPlugin)
	// await viewer.addPlugin(TemporalAAPlugin)
	// await viewer.addPlugin(AnisotropyPlugin)
	// and many more...

	// Or use this to add all main ones at once
	await addBasePlugins(viewer) // Check the source:https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added
	// const camViews = viewer.getPlugin(CameraViewPlugin)
	viewer.renderer.refreshPipeline()

	// const manager = await viewer.addPlugin(AssetManagerPlugin);
	// Add a popup(in HTML) with download progress when any asset is downloading
	await viewer.addPlugin(AssetManagerBasicPopupPlugin)

	// Import and add a GLB file
	await viewer.load("./assets/Models/FA/FA Full.glb")
	// await manager.addFromPath("./assets/carbon frame bike.glb")

	// Load an environment map if not set in the glb file
	await viewer.setEnvironmentMap("./assets/autumn_forest_2k.hdr");
	// await viewer.load("./assets/cube_diamond_sample.gltf")

	const obj = (await viewer.createObject3D()).modelObject;
	const plane = new Mesh(new PlaneGeometry(), viewer.createMaterial());
	plane.scale.set(1.6, 0.9, 1);
	plane.translateY(0.5);
	plane.translateZ(-1.5);

	// Make sure crossOrigin="anonymous" is set in video tag
	// If setting source programmatically, set crossOrigin before setting the src attribute
	const video = document.getElementById("video");
	if (video.requestVideoFrameCallback) {
		function videoUpdated() {
			viewer.setDirty();
			video.requestVideoFrameCallback(videoUpdated);
		}
		video.requestVideoFrameCallback(videoUpdated);
	} else {
		// Firefox does not support requestVideoFrameCallback
		console.log(video)
		const isVideoPlaying = videoEl => !!(videoEl.currentTime > 0 && !
			videoEl.paused && !videoEl.ended && videoEl.readyState > 2);
		// Hack
		setInterval(() => {
			if (isVideoPlaying(video)) {
				viewer.setDirty()
			} else {
			}
		}, 60) // Assuming 60fps
	}

	// Disable frame fade
	const texture = new VideoTexture(video);
	plane.material.map = texture;
	obj.add(plane);

	video.play();

	// Add some UI for tweak and testing
	// const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin)
	// Add plugins to the UI to see their settings
	// uiPlugin.setupPlugins<IViewerPlugin>(TonemapPlugin, CanvasSnipperPlugin)

	// Camera transform
	viewer.scene.activeCamera.position = new Vector3(1, 1, -3.5);
	viewer.scene.activeCamera.target = new Vector3(0, 0.5, 0);

	// Camera options
	const options = viewer.scene.activeCamera.getCameraOptions();
	ptions.fov = 25;
	viewer.scene.activeCamera.setCameraOptions(options);
	
	// Control options
	const controls = viewer.scene.activeCamera.controls;
	controls.autoRotate = true;
	controls.autoRotateSpeed = 5;
	controls.enableDamping = true;
	controls.rotateSpeed = 2.0;
	controls.enableZoom = true;
	controls.enablePan = false;
	controls.minDistance = 1.5;
	controls.maxDistance = 10;
}
setupViewer()