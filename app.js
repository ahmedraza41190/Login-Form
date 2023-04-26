// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAzpav9KsTQ9_nr6gi4mInTp7JrsGHLHpA",
//     authDomain: "quiz-app-65c3e.firebaseapp.com",
//     projectId: "quiz-app-65c3e",
//     storageBucket: "quiz-app-65c3e.appspot.com",
//     messagingSenderId: "546653806160",
//     appId: "1:546653806160:web:4590ef27bf891bf505bb55",
//     measurementId: "G-HL5GZ85GPD"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


// let btn = document.getElementById('sbtn')
// btn.addEventListener('click', () => {
//     var email = document.getElementById('semail').value
//     var pass = document.getElementById('spass').value
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {

//             const user = userCredential.user;
//             console.log(user.email)
//             if (email == '' || pass == '') {
//                 alert('Please check your email & password and register your self')
//             }
//             else {
//                 alert('Data inserted Successfully')
//                 location.href = './index.html'  //onclick to go on signin page
//                 console.log(email)
//             }
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//         });
    
// })

// let lbtn = document.getElementById('lbtn')
// lbtn.addEventListener('click', () => {
//     var email = document.getElementById('lemail').value
//     var pass = document.getElementById('lpass').value
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {

//             const user = userCredential.user;
//             console.log(user)
//             if (email == '' || pass == '') {
//                 alert('Please check your email & password and register your self')
//             } else
//                 if (email === getemail && pass === getpass) {
//                     alert('Login Success')
//                     location.href = './quiz.html'
//                 }
//                 else {
//                     alert('Please check your email & password and register your self')
//                     //  location.href = './signup.html'
//                 }
        
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode,errorMessage)
//         });
    
// })





function signup() {
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('email', email)
    localStorage.setItem('pass', pass)
    if(email == '' || pass == '' ){
        alert('Please check your email & password and register your self')
    }
    else{
        alert('Data inserted Successfully')
        location.href = './index.html'  //onclick to go on signin page
        console.log(email)
    }
}

function signin() {
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    var getemail = localStorage.getItem('email')
    var getpass = localStorage.getItem('pass')
    if(email == '' || pass == '' ){
        alert('Please check your email & password and register your self')
    }else
    if (email === getemail && pass === getpass) {
        alert('Login Success')
        location.href = './quiz.html'
    }
    else {
        alert('Please check your email & password and register your self')
        //  location.href = './signup.html'
    }

}