'use strict';

function getUsers(){

    axios.get ("https://reqres.in/api/users")
    .then (res => console.log(res))
    .catch (err => console.error(err));
}


console.log("YO!");

function createUser(){

    const name = document.getElementById("username").value;
    console.log ("name:",name);
    axios.post("https://reqres.in/api/users," {

    name, 
    "job":"leader"
    }) .then(res => console.log(res))
    .catch(err=> console.error(err));

    }





