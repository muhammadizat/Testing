function showAnimal() {
    const animalSelector = document.getElementById('animalSelector');
    const imageContainer = document.getElementById('imageContainer');
    const selectedAnimal = animalSelector.value;

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

    // Check user selection and display the appropriate image
    if (selectedAnimal === 'cat') {
        const img = document.createElement('img');
        img.src = 'cat.jpg';
        img.alt = 'Cute Cat';
        img.className = 'animal-image';
        imageContainer.appendChild(img);
        runConfetti(); // Fire confetti
    } else if (selectedAnimal === 'dog') {
        const img = document.createElement('img');
        img.src = 'dog.jpg';
        img.alt = 'Cute Dog';
        img.className = 'animal-image';
        imageContainer.appendChild(img);
        runConfetti(); // Fire confetti
    } else {
        alert('Please select an animal!');
    }
}
