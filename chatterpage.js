var firebaseConfig = {
    apiKey: "AIzaSyDFL0zjZ0d4Lu5lUn-RtFjwOOERYBaOja8",
    authDomain: "chatter-e97ee.firebaseapp.com",
    projectId: "chatter-e97ee",
    storageBucket: "chatter-e97ee.appspot.com",
    messagingSenderId: "349454914477",
    appId: "1:349454914477:web:7107c45a8f2b7c40918724"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
        });
        document.getElementById("msg").value="";

  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
