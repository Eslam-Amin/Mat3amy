users = [{
    username:"ECaAmiNOo",
    name:"Eslam Amin",
    password:"eca just 1"
},{
    username:"YussifKahilo",
    name:"Yussif Mohamed",
    password:"kahilo just 1"
}];
var signUp = false;
var typeOfLogin ;
function logIn(){

    var signin = false;
    let count ;
    username = document.getElementById("txtUsername").value;
    console.log(username);
    password = document.getElementById("txtPassword").value;
    console.log(password);
    for(let i=0;i<users.length;i++){
        if(username == users[i].username && password == users[i].password){
          signin=true;
          count = i;
          typeOfLogin = "login";
          localStorage.setItem("count",count);
        }
    }
    if(!signin){
        if(username == localStorage.getItem("username") && password == localStorage.getItem("password")){
            signin = true;
            typeOfLogin = "register";
        }
       
    }
    if(signin){
        alert("success");
        document.getElementById("buttons").style.display = "none";
        document.getElementById("welcomeLabel").style.display = "block";
        localStorage.setItem("typeOfLogin",typeOfLogin);
        if(localStorage.getItem("typeOfLogin") == "login"){
            document.getElementById("welcomeLabel").innerHTML = "Welcome, "+users[count].name;
        }
        else if(localStorage.getItem("typeOfLogin") == "register"){
            document.getElementById("welcomeLabel").innerHTML = "Welcome, "+localStorage.name;
        }
       
    }
    else{
        alert("Failed");
    }
}
function signup(){
    newUsername = document.getElementById("txtEmail").value;
    newPassword = document.getElementById("txtPasswordRegistered").value;
    checkPassword = document.getElementById("txtPasswordAgain").value;
    personName = document.getElementById("txtName").value;

    localStorage.setItem("username",newUsername);
    localStorage.setItem("password",newPassword);
    localStorage.setItem("name",personName);
    alert("success");
    showUsers();
   
   
}

function showUsers(){
    for(let i=0;i<users.length;i++){
        console.log(users[i].name);
        console.log(users[i].username);
        console.log(users[i].password);        
    }
}
function logout(){
    document.getElementById("buttons").style.display = "block";
    document.getElementById("welcomeLabel").style.display = "none";
    localStorage.setItem("typeOfLogin","logout");
}

function displayMessage(){
    loginType = localStorage.getItem("typeOfLogin");
    if(loginType == "register"){
        document.getElementById("buttons").style.display = "none";
        document.getElementById("welcomeLabel").innerHTML = "Welcome, "+ localStorage.getItem("name");
        document.getElementById("welcomeLabel").style.display = "block";    
    }
    else if(loginType == "login"){
        index = localStorage.count;
        document.getElementById("buttons").style.display = "none";
        document.getElementById("welcomeLabel").innerHTML = "Welcome, "+users[index].name;
        document.getElementById("welcomeLabel").style.display = "block";    
    }
}
