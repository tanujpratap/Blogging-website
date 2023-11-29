let firebaseConfig = {
    
        apiKey: "AIzaSyBWAM0fviGTE3vaPl-LvczBJ320TjH-iqQ",
        authDomain: "bloghub-2aecb.firebaseapp.com",
        projectId: "bloghub-2aecb",
        storageBucket: "bloghub-2aecb.appspot.com",
        messagingSenderId: "678673005941",
        appId: "1:678673005941:web:28d743fb192999707d273c"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();