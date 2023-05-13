const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const submitBtn = document.querySelector(".submit-btn")
// inputs

let isValid = false;
const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");

// errors

const errorYear = document.querySelector(".error-year");
const errorMonth = document.querySelector(".error-month");
const errorDay = document.querySelector(".error-day");

inputDay.addEventListener('input', e => {
    if(+inputDay.value > 31) {
    errorDay.textContent = "Must be a valid day"
    isValid = false;
    const obj = document.getElementById("day")
    obj.style.borderColor = "var(--Light-red)";
    document.querySelector(".error1").style.color = "var(--Light-red)";
    return;
}
else {
    isValid = true;
    errorDay.textContent = "";
}

if (+inputDay.value === 0) {
    errorDay.textContent = "This field is required"
    const obj = document.getElementById("day")
    obj.style.borderColor = "var(--Light-red)";
    document.querySelector(".error1").style.color = "var(--Light-red)";
    isValid = false;
    return;
}
else {
    isValid = true;
    errorDay.textContent = "";
}

})

inputMonth.addEventListener('input', e => {
    if(+inputMonth.value > 12) {
    errorMonth.textContent = "Must be a valid month"
    document.getElementById("month").style.borderColor = "var(--Light-red)";
    document.querySelector(".error2").style.color = "var(--Light-red)";
    isValid = false;
    return;
}
else {
    isValid = true;
    errorMonth.textContent = "";
}

if (+inputMonth.value === 0) {
    errorMonth.textContent = "This field is required"
    isValid = false;
    document.getElementById("month").style.borderColor = "var(--Light-red)";
    document.querySelector(".error2").style.color = "var(--Light-red)";
    return;
}
else {
    isValid = true;
    errorDay.textContent = "";
}

})

inputYear.addEventListener('input', e => {
    if(+inputYear.value > 2023) {
        errorYear.textContent = "Must be in the past"
        isValid = false;
        document.getElementById("year").style.borderColor = "var(--Light-red)";
    document.querySelector(".error3").style.color = "var(--Light-red)";
        return;
    }

    else {
        isValid = true;
        errorYear.textContent = ""
    }
    if(+inputYear.value === 0) {
        errorYear.textContent = "This field is required"
        isValid = false;
        document.getElementById("month").style.borderColor = "var(--Light-red)";
    document.querySelector(".error3").style.color = "var(--Light-red)";
        return;
    }

    else {
        isValid = true;
        errorYear.textContent = ""
    }

})

submitBtn.addEventListener('click', calculateAge)

function calculateAge() {
    if(isValid) {
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiff = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiff);
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDays = ageDate.getUTCDay() - 1;
        outputDay.textContent = ageDays;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYear;
    }
    else {
        alert("error");
    }
}