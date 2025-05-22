const clock = document.querySelector("#clock")

function getClock() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    hours = String(hours).padStart(2, "0");

    clock.innerText = `${hours}:${minutes} ${ampm}`;
}

getClock();
setInterval(getClock, 1000);