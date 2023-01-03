const { appWindow } = window.__TAURI__.window
const { invoke } = window.__TAURI__.tauri;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document
    .querySelector("#greet-button")
    .addEventListener("click", () => greet());
});




const windowManager = document.getElementById("window-manager")
const btnMinimize = document.getElementById("minimize")
const btnMaximize = document.getElementById("maximize")
const btnClose = document.getElementById("close")

windowManager.addEventListener("mousedown", () => {
  appWindow.startDragging()

})

btnMinimize.addEventListener("mousedown", () => {
  appWindow.minimize()
})

btnMaximize.addEventListener("mousedown", async () => {
  const isMaximized = await appWindow.isMaximized()
  if (isMaximized) appWindow.unmaximize()
  else appWindow.maximize()
})

btnClose.addEventListener("mousedown", () => {
  appWindow.close()
})
