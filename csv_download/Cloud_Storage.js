// Create a reference with an initial file path and name
var storage = firebase.storage();
var pathReference = storage.ref('data/NetflixViewingHistory.json');

// Create a reference from a Google Cloud Storage URI
var gsReference = storage.refFromURL('gs://bucket/data/NetflixViewingHistory.json')


var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/data%20NetflixViewingHistory.json');

storageRef.child('data/NetflixViewingHistory.json').getDownloadURL().then(function(url) {


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