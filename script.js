//js script
console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('surpriseBtn');
    const message = document.getElementById('hiddenMessage');
    const prompt = document.getElementById('prompt');

    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        prompt.style.display = 'none';
        message.style.display = 'block';

        // Confetti burst 🎉
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });
    });
});
