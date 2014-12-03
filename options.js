// Saves options to chrome.storage
function save_options() {
  var server = document.getElementById('server').value;
  var nickname = document.getElementById('nickname').value;
  chrome.storage.sync.set({
    yourserver: server,
    yournickname: nickname
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function reload_page()
{
  location.reload();
}

// Restores select box and text using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value server = 'TR' and nickname = null.
  chrome.storage.sync.get({
    yourserver: 'kr',
    yournickname: null
  }, function(items) {
    document.getElementById('server').value = items.yourserver;
    document.getElementById("nicknameonpage").innerHTML = items.yournickname;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('save').addEventListener('click',
    reload_page);