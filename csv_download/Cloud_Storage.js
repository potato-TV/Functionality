// Create a reference with an initial file path and name
var storageRef = firebase.storage();
var starsRef = storageRef.child('data/NetflixViewingHistory.json');

starsRef.getDownloadURL().then(function(url) {


  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();


}).catch(function(error) {
    
  switch (error.code) {
    case 'storage/object-not-found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;
}});