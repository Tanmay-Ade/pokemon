let pokemon = document.querySelector("h3");
let pokeball = document.querySelector("h4");
let btn = document.querySelector(".btn");
let flag = 0;

btn.addEventListener("click", function(){
    if (flag == 0) {
        pokeball.innerHTML = "Pokemon has been caught!"
        pokeball.style.color = "green";
        btn.innerHTML = "Leave 'Em";
        btn.style.backgroundColor = "red";
        flag = 1;
    }else{
        pokeball.innerHTML = "Pokemon has been released!"
        pokeball.style.color = "red";
        btn.innerHTML = "Catch 'Em";
        btn.style.backgroundColor = "green";
        flag = 0;
    }
})

