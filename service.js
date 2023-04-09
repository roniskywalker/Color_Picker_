let color = "color";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});
