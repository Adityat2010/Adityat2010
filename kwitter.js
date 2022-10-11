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

  function addUser(){

    user_name=document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"    
    });
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html"
}