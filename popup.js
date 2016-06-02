document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('goToChromeExtensions').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://chrome/extensions' });
    });
});