// localStorage.setItem('name','Saad Ali')
// localStorage.setItem('name','Saad Muhammad')

// var a = localStorage.getItem('name')
// document.write(a)

// localStorage.clear()

// sessionStorage.setItem('name','Huzaifa')

function signup() {

    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value

    localStorage.setItem('email', email)
    localStorage.setItem('pass', pass)

    if (email == '' || pass == '') {
        alert('Please check your email & password and register your self')
    }
    else {
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

    if (email == '' || pass == '') {
        alert('Please check your email & password and register your self')
    }
    else {
        alert('Data inserted Successfully')
        location.href = './welcome.html'  //onclick to go on signin page
        console.log(email)
    }
}