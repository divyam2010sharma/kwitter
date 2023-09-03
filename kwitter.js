function addUser() {
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html" 
}
var firebaseConfig = {
      apiKey: "AIzaSyBX1BKm93sTOiBWOHr5QuUHVgcZ0NOTUkA",
      authDomain: "class-test-f472e.firebaseapp.com",
      projectId: "class-test-f472e",
      storageBucket: "class-test-f472e.appspot.com",
      messagingSenderId: "259518052467",
      appId: "1:259518052467:web:e87b87c127d1f70bc95206"
    };
    
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

