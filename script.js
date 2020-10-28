const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const myForm = document.getElementById("myForm");
let nameVal, emailVal, phoneVal, addressVal, tc;
const br = document.createElement("br");

const addFormEl = () => {
    myForm.textContent = "";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter your name";
    input.id = "nameInput";
    const h1 = document.createElement("h1");
    h1.textContent = "Your Name";
    const nextBut1 = document.createElement("input");
    nextBut1.type = "button";
    nextBut1.value = "next";
    nextBut1.id = "nextBut1";
    myForm.appendChild(h1);
    myForm.appendChild(input);
    myForm.appendChild(br);
    myForm.appendChild(nextBut1);

    const nextBut2 = document.createElement("input");
    nextBut2.type = "button";
    nextBut2.value = "next";
    nextBut2.id = "nextBut2";

    const nextBut3 = document.createElement("input");
    nextBut3.type = "button";
    nextBut3.value = "next";
    nextBut3.id = "nextBut3";

    const nextBut4 = document.createElement("input");
    nextBut4.type = "button";
    nextBut4.value = "next";
    nextBut4.id = "nextBut4";

    nextBut1.addEventListener("click", () => {
        nameVal = document.getElementById("nameInput").value;
        myForm.textContent = "";
        button1.classList.remove("active");
        button2.classList.add("active");
        const input = document.createElement("input");
        input.type = "text";
        input.id = "emailInput";
        input.placeholder = "Enter your email";
        const h1 = document.createElement("h1");
        h1.textContent = "Your Email";
        myForm.appendChild(h1);
        myForm.appendChild(input);
        myForm.appendChild(br);
        myForm.appendChild(nextBut2);
    });
    nextBut2.addEventListener("click", () => {
        emailVal = document.getElementById("emailInput").value;
        myForm.textContent = "";
        button2.classList.remove("active");
        button3.classList.add("active");
        const input = document.createElement("input");
        input.type = "text";
        input.id = "phoneInput";
        input.placeholder = "Enter your Phone number";
        const h1 = document.createElement("h1");
        h1.textContent = "Your Phone number";
        myForm.appendChild(h1);
        myForm.appendChild(input);
        myForm.appendChild(br);
        myForm.appendChild(nextBut3);
    });
    nextBut3.addEventListener("click", () => {
        phoneVal = document.getElementById("phoneInput").value;
        myForm.textContent = "";
        button3.classList.remove("active");
        button4.classList.add("active");
        const input = document.createElement("input");
        input.type = "text";
        input.id = "addressInput";
        input.placeholder = "Enter your address";
        const h1 = document.createElement("h1");
        h1.textContent = "Your Address";
        myForm.appendChild(h1);
        myForm.appendChild(input);
        myForm.appendChild(br);
        myForm.appendChild(nextBut4);
    });
    nextBut4.addEventListener("click", () => {
        addressVal = document.getElementById("addressInput").value;
        myForm.textContent = "";
        button4.classList.remove("active");
        button5.classList.add("active");
        const br = document.createElement("br");
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = "termsCheck";
        const span = document.createElement("span");
        span.textContent = "I agree with the T&C";
        label.appendChild(input);
        label.appendChild(span);
        const button = document.createElement("input");
        button.type = "button";
        button.value = "submit";
        button.id = "submitButton";
        myForm.appendChild(label);
        myForm.appendChild(br);
        myForm.appendChild(button);
        button.addEventListener("click", () => {
            tc = document.getElementById("termsCheck").checked;
            console.log(`name: ` + nameVal);
            console.log("email: " + emailVal);
            console.log("Phone: " + phoneVal);
            console.log("Address: " + addressVal);
            console.log("T&C: " + tc);
        });
    });
};

addFormEl();