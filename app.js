firebase.initializeApp({

    apiKey: "AIzaSyBEtuno5v_-37JrV6EWPczjgHF0bn0J4Rc",
    authDomain: "ionic1-42d1d.firebaseapp.com",
    databaseURL: "https://ionic1-42d1d.firebaseio.com",
    projectId: "ionic1-42d1d",
    storageBucket: "ionic1-42d1d.appspot.com",
    messagingSenderId: "91962131300"

});
var firstTitle = document.getElementsByClassName('topContent')
var conection =  firebase.database().ref().child('text')
conection.on('value',param => firstTitle[0].innerText = JSON.stringify(param.val().edad))
// Initialize Cloud Firestore through Firebase
// var db = firebase.firestore();

// db.collection("users").add({
//     first: "Elene",
//     last: "sab",
//     born: 1940
// })
//     .then(function (docRef) {
//         console.log(docRef)
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//         console.error("Error adding document: ", error);
//     });
// db.collection("users").where("born","==",1940).get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc)
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });

    // db.collection("users").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc)
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });
    
