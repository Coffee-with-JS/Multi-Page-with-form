const name_box = document.getElementById('name');
const email_box = document.getElementById('email');
const password_box = document.getElementById('password');
const confirm_password_box = document.getElementById('confirm_password');
const submit_button = document.getElementById('submit');
const output = document.querySelector('.output');
const message = document.querySelector('.message');

const form = document.querySelector('form');

// submit_button.addEventListener("click", validateForm)

form.addEventListener("submit", validateForm )


// let userCount=0
let usersJson = localStorage.getItem("users")
console.log(usersJson)
userArray = JSON.parse(usersJson) || [] // shortcircut operator

function validateForm(eventDeatils){
    // console.log("Form Submitted")
    eventDeatils.preventDefault();
    let name = name_box.value;
    let email = email_box.value;
    let password = password_box.value;
    let confirm_password = confirm_password_box.value;


    if(name.length <5){
        message.innerHTML = "Name should be atleast 5 characters"
        message.className = "error"
        // name_box.style.border = "2px solid red"
        // name_box.style.outline = "none"
        return
    }

    if(name=="" || email=="" || password=="" || confirm_password==""){
        //  alert("Please fill all the fields")
        message.innerHTML = "Please fill all the fields"
        message.className = "error"
     
         return
    }
    
    if(password != confirm_password){
        message.innerHTML = "Password and Confirm Password should be same"
        message.className = "error"
        
        return
    }
    // email and password stength
    message.innerHTML = "Form Submitted Successfully"
    message.className = "success"
   
    
    // output.innerHTML =  output.innerHTML + `
    // <h2>Registration Details</h2>
    //     <p>Name: ${name}</p>
    //     <p>Email: ${email}</p>
    // `

    // let heading1 = document.createElement('h1');
    // heading1.innerText = "Hello world 1"

    // // output.append(heading1)
    // output.prepend(heading1)
    

    // let heading2 = document.createElement('h2');
    // heading2.innerText = "Hello world 2"

    // output.prepend(heading2)


    // let userDetails = document.createElement('div');
    // userDetails.id = `user${++userCount}`
    // userDetails.innerHTML = `
    //    <h3> Name: ${name} </h3>
    //    <p>Email: ${email}</p>
    // `

    // output.append(userDetails)
    //
    

    userArray.push({
        name,email
    })

    // console.log(userArray)
    let userArrayJson = JSON.stringify(userArray)
    localStorage.setItem("users", userArrayJson)



   // reset my form
    name_box.value = "";
    email_box.value = "";
    password_box.value = "";
    confirm_password_box.value = "";


    // redirect to display.html 
    window.location.href = "./display.html"
}














// name_box.addEventListener("change", detectError)

name_box.addEventListener("input", detectError)

function detectError(){
    let value = name_box.value;
    console.log(value)
    if(value.length < 5){
        name_box.style.border = "2px solid red"
        name_box.style.outline = "none"
    }
    else{
        name_box.style.border = "2px solid green"
        name_box.style.outline = "none"
    }
}