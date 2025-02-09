const inputFirst = document.getElementById("input-first");
const inputLast = document.getElementById("input-last");
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");

const inputs = document.querySelectorAll("form input");

const form = document.getElementById("form");

const done = document.getElementById("submitted");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    done.style.display = "none";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = inputEmail.value;

    inputs.forEach((input) => {
        if (input.value === "") {
            document.querySelector(`#${input.id}-div`).classList.add("error");
            document.querySelector(
                `#${input.id}-div .error`
            ).innerHTML = ` ${input.name} cannot be empty`;
        } else {
            document
                .querySelector(`#${input.id}-div`)
                .classList.remove("error");
            document.querySelector(`#${input.id}-div .error`).innerHTML = "";
        }
    });

    if (email !== "") {
        if (!emailRegex.test(email)) {
            document.querySelector(`#input-email-div`).classList.add("error");
            document.querySelector(
                `#input-email-div .error`
            ).innerHTML = `Looks like this is not an email`;
        } else {
            document
                .querySelector(`#input-email-div`)
                .classList.remove("error");
            document.querySelector(`#input-email-div .error`).innerHTML = "";
        }
    }

    if (
        email !== "" &&
        emailRegex.test(email) &&
        inputFirst.value !== "" &&
        inputLast.value !== "" &&
        inputPassword.value !== ""
    ) {
        done.style.display = "block";
        inputs.forEach((input) => {
            input.value = "";
            document
                .querySelector(`#${input.id}-div`)
                .classList.remove("error");
            document.querySelector(`#${input.id}-div .error`).innerHTML = "";
        });
    }
});
