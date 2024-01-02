// Teks yang akan ditampilkan dengan efek mengetik
const textToType = "Welcome To My Portfolio !";

// Element HTML yang akan menampilkan teks dengan efek mengetik
const typedTextElement = document.getElementById("typed-text");

// Fungsi untuk menampilkan teks dengan efek mengetik
function typeText() {
    let index = 0;
    const typingSpeed = 80; // Kecepatan mengetik dalam milidetik

    function typeCharacter() {
        if (index < textToType.length) {
            typedTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeCharacter, typingSpeed);
        }
    }

    // Mulai efek mengetik
    typeCharacter();
}

// Panggil fungsi untuk memulai efek mengetik
typeText();
