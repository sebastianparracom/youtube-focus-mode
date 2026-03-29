// Apply blur state as early as possible
chrome.storage.sync.get({ enabled: true }, (data) => {
  document.documentElement.classList.toggle("ytfm-enabled", data.enabled);
});

// Listen for toggle changes from the popup
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    document.documentElement.classList.toggle(
      "ytfm-enabled",
      changes.enabled.newValue
    );
  }
});
