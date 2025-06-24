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

        //SPARKLESSS
         tsParticles.load("tsparticles", {
            fullScreen: {
                enable: false
            },
            particles: {
                number: {
                    value: 100,
                    density: { enable: true, value_area: 800 }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "star"
                },
                opacity: {
                    value: 0.8
                },
                size: {
                    value: 3,
                    random: true
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    outModes: "out"
                }
            },
            background: {
                color: "transparent"
            }
        });

        setTimeout(() => {
            window.location.href = "https://www.canva.com/design/DAGrJQReGlg/GplZ0c8PmM0EOy0R31skCQ/view?utm_content=DAGrJQReGlg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcca8658c5a";
        }, 2000); // wait 2 seconds before redirecting
    });
});
