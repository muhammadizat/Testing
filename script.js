function showAnimal(animal) {
    const imageContainer = document.getElementById('imageContainer');

    // Clear any previous content in the image container
    imageContainer.innerHTML = '';

    // Confetti function
    function runConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // Check the user choice and display the appropriate image
    if (animal === 'cat') {
        const img = document.createElement('img');
        img.src = 'cat.jpg';
        img.alt = 'Cute Cat';
        img.className = 'animal-image';
        imageContainer.appendChild(img);
        runConfetti(); // Fire confetti
    } else if (animal === 'dog') {
        const img = document.createElement('img');
        img.src = 'dog.jpg';
        img.alt = 'Cute Dog';
        img.className = 'animal-image';
        imageContainer.appendChild(img);
        runConfetti(); // Fire confetti
    }
}
