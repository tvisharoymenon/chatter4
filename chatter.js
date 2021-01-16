function adduser() {
    user_name =document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    }
    var firebaseConfig = {
        apiKey: "AIzaSyDFL0zjZ0d4Lu5lUn-RtFjwOOERYBaOja8",
        authDomain: "chatter-e97ee.firebaseapp.com",
        projectId: "chatter-e97ee",
        storageBucket: "chatter-e97ee.appspot.com",
        messagingSenderId: "349454914477",
        appId: "1:349454914477:web:7107c45a8f2b7c40918724"
      };