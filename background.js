chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url) {
      setInterval(function() {
          chrome.tabs.reload(tabId);
      }, 5000); // 5000 milliseconds = 5 seconds
  }
});
