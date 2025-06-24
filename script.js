//script.js file
console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('surpriseBtn');
    const message = document.getElementById('hiddenMessage');
    const prompt = document.getElementById('prompt');

    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        prompt.style.display = 'none';
        message.style.display = 'block';

        // setTimeout(() => {
        //     window.location.href = "https://www.canva.com/design/DAGrJQReGlg/GplZ0c8PmM0EOy0R31skCQ/view?utm_content=DAGrJQReGlg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcca8658c5a";
        // }, 1000000000000); // wait for a long time before redirecting
    });
});
