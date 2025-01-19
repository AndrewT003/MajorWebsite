// public/js/photoLoader.js

async function loadPhotos(category) {
    try {
        const response = await fetch(`/api/photos/${category}`);
        const photos = await response.json();

        const photoGallery = document.getElementById('photoGallery');
        photoGallery.innerHTML = ''; // Очищаємо галерею перед додаванням нових фото

        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = `data:image/png;base64,${photo.buffer}`; // Вставляємо зображення з Base64
            img.alt = photo.hash || 'Фото';
            img.style.maxWidth = '100%'; // Обмежуємо максимальну ширину

            photoGallery.appendChild(img); // Додаємо зображення до контейнера фото
        });
    } catch (error) {
        console.error('Помилка завантаження фото:', error);
    }
}
