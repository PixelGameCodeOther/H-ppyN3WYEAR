// script.js

document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const celebrationElement = document.getElementById("celebration");
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    function updateCountdown() {
        const now = new Date();
        const nextYear = now.getFullYear() + 1;
        const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
        const timeLeft = newYear - now;

        if (timeLeft <= 0) {
            countdownElement.style.display = "none";
            celebrationElement.style.display = "block";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

// it work, yet how we ask, was it worth it?
