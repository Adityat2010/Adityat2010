
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDLk2EdB5S4EHiRWpcK6ozxJWRVoc0_138",
      authDomain: "kwitter-87a1d.firebaseapp.com",
      databaseURL: "https://kwitter-87a1d-default-rtdb.firebaseio.com",
      projectId: "kwitter-87a1d",
      storageBucket: "kwitter-87a1d.appspot.com",
      messagingSenderId: "221302625820",
      appId: "1:221302625820:web:8a0232ab8b0983238ff1d9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name)

      window.location ="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location ="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}
