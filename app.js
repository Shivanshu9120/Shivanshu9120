(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
const textArr = ['Competitive Programmer', 'Web Developer', 'Machine Learning Enthusiast'];
const speed = 150; // Reduced speed for a smoother typing effect
let index = 0;
let textIndex = 0;

function typeWriter() {
    const textElement = document.getElementById('text');
    if (index < textArr.length) {
        if (textIndex < textArr[index].length) {
            textElement.innerHTML += textArr[index].charAt(textIndex);
            textIndex++;
            setTimeout(typeWriter, speed);
        } else {
            index++;
            textIndex = 0;
            setTimeout(() => {
                textElement.innerHTML = ''; // Clear the text element for the next text
                if (index === textArr.length) {
                    index = 0; // Reset index to loop back to the beginning
                }
                setTimeout(typeWriter, speed * 3); // Wait longer before typing the next text
            }, speed * 10); // Extra wait before clearing for smooth transition
        }
    }
}

// Start the typing effect
typeWriter();

