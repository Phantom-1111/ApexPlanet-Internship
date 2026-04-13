let contacts = [];

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("error");

    if (name === "" || email === "" || phone === "") {
        error.innerText = "All fields are required!";
        return;
    }

    if (!email.includes("@")) {
        error.innerText = "Enter valid email!";
        return;
    }

    error.innerText = "";

    contacts.push({ name, email, phone });

    displayContacts();

    this.reset();
});

function displayContacts() {
    let list = document.getElementById("contactList");
    list.innerHTML = "";

    contacts.forEach((c, index) => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h3>${c.name}</h3>
            <p>${c.email}</p>
            <p>${c.phone}</p>
            <button class="delete" onclick="deleteContact(${index})">Delete</button>
        `;

        list.appendChild(div);
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}