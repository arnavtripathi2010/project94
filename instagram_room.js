  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDyY3T7luX-ZyvLd3ajCACE7-SEIGnOaR0",
    authDomain: "project93-330d3.firebaseapp.com",
    projectId: "project93-330d3",
    storageBucket: "project93-330d3.appspot.com",
    messagingSenderId: "1096362099555",
    appId: "1:1096362099555:web:0f52b4fc16644ecbcf4956"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
