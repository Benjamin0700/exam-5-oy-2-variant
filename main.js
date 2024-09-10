let box = document.querySelector(".box");

let inp = document.getElementById("input1");
let inp2 = document.getElementById("input2");
let btn = document.querySelector(".btn");
let box2 = document.querySelector(".box2");
let btn2 = document.querySelector(".btn2");

let data = "12345"; 
let data1 = "12345"; 

alert(`Login: ${data} \nPassword: ${data1}`);

btn.addEventListener("click", () => {
    box2.innerHTML = ''; 

    let block = document.querySelector(".block");
    block.style.display = "none"; 

    if (inp.value === data && inp2.value === data1) {
        let p = document.createElement("p");
        p.innerHTML = `<p>Space ga kirdingiz</p>`;
        p.style.color = "white";
        p.style.backgroundColor = "orange";
        p.style.padding = "20px";
        p.style.borderRadius = "40px";
        box2.append(p);
        block.style.display = "block"; 
    } else {
        let p = document.createElement("p");
        p.innerHTML = `<p style="color:white;">Siz notog'ri Login yoki Password kiritingiz!</p>`;
        p.style.backgroundColor = "red";
        p.style.padding = "20px";
        p.style.borderRadius = "40px";
        box2.append(p);

        block.style.display = "block"; 
    }
});

btn2.addEventListener("click", () => {
    let question = prompt("Qanday savollingiz bor?");
    if (question) {
        let text = document.querySelector(".text-javob");
        text.innerHTML = `Sizning savolingiz yuborildi!`;
        btn2.append(text);
    }
});