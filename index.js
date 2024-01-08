let container = document.getElementById("container");

function productsdetail(res) {
    res.data.map(item => {
        console.log(item);
        let child = document.createElement("div")
        let firstname = document.createElement("h1")
        let email = document.createElement("h2")
        let avatar = document.createElement("img")
        avatar.src = item.avatar;
        firstname.innerText = item.first_name;
        email.innerText = item.email;
        child.append(avatar, firstname, email)
        container.append(child)


    });
}


function displayerror() {
    container.innerText = "Please refresh the page.......";
}

fetch("https://reqres.in/api/users")
    .then(function (response) {
        return response.json();
    })
    .then(function (res) {

        productsdetail(res);
    })
    .catch(function (error) {
        displayerror();
    });
