import { ViewerApp, addBasePlugins } from "../node_modules/webgi/dist/webgi.esm.js";

window.webgiViewers = {};

window.initWebGiViewer = async function(containerID, modelPath) {
    const container = document.getElementById(containerID);
    if (!container) return;

    const viewer = new ViewerApp({ canvas: container});
    await addBasePlugin(viewer);

    viewer.scene.activeCamera.position.set(0, 0, 5);
    viewer.scene.activeCamera.controls.autoRotate = true;

    window.webgiViewers[containerID] = viewer;
    return viewer;
};

window.changeWebGiModel = async function (containerID, newModelPath) {
    const viewer = window.webgiViewers[containerID];
    if (!viewer) return;

    viewer.scene.removeAllObjects();
    await viewer.load(newModelPath);

    viewer.scene.activeCamera.position.set(0, 0, 5);
};

window.initWebGiViewer("full-beyblade", "assets/Models/FA/FA Full.glb")