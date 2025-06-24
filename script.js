//script.js file
const btn = document.getElementById('surpriseBtn');
        const message = document.getElementById('hiddenMessage');
        const prompt = document.getElementById('prompt');
        btn.addEventListener('click', () => {
            btn.style.display = 'none';
            prompt.style.display = 'none';
            message.style.display = 'block';
});