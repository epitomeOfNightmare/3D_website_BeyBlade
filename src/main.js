import { ViewerApp, addBasePlugins } from "https://esm.sh/webgi";

const viewers = {};
const models = ["/model1.glb", "/model2.glb", "/model3.glb"];
let currentIndex = 0;

// Initialize WebGi viewer
async function initViewer(containerId, modelPath) {
  const container = document.getElementById(containerId);
  const viewer = new ViewerApp({ canvas: container });
  await addBasePlugins(viewer);
  await viewer.load(modelPath);

  viewer.scene.activeCamera.position.set(0, 0, 5);
  viewer.scene.activeCamera.controls.autoRotate = true;

  viewers[containerId] = viewer;
}

// Function your button can call
window.swapModel = async function() {
  currentIndex = (currentIndex + 1) % models.length;
  const viewer = viewers["viewer1"];
  if (!viewer) return;

  viewer.scene.removeAllObjects();
  await viewer.load(models[currentIndex]);
  document.getElementById("status1").innerText = "Viewer 1: " + models[currentIndex];
}

// Start the viewer
initViewer("viewer1", models[currentIndex]);