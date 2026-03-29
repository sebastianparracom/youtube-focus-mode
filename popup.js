const toggle = document.getElementById("toggle");
const status = document.getElementById("status");

function updateStatus(enabled) {
  status.textContent = enabled ? "Blur activado en el home" : "Desactivado";
  status.className = "status" + (enabled ? " active" : "");
}

chrome.storage.sync.get({ enabled: true }, (data) => {
  toggle.checked = data.enabled;
  updateStatus(data.enabled);
});

toggle.addEventListener("change", () => {
  const enabled = toggle.checked;
  chrome.storage.sync.set({ enabled });
  updateStatus(enabled);
});
