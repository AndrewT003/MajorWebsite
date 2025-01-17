
// Завантаження фото для заданої категорії
export async function loadPhotos(category) {
    try {
        const response = await fetch(`/api/photos/${category}`);
        const photos = await response.json();

        const photoGallery = document.getElementById('photoGallery'); // Отримуємо контейнер для фото
        photoGallery.innerHTML = ''; // Очищаємо галерею перед додаванням нових фото
        
        photos.forEach(photo => {
            const img = document.createElement('img');
            // Використовуємо Base64 для відображення зображення
            img.src = `data:image/jpeg;base64,${photo.buffer}`; // Підставляємо буфер як Base64
            img.alt = photo.hash || 'Фото'; // Встановлюємо альтернативний текст
            img.style.maxWidth = '100%'; // Обмежуємо максимальну ширину

            // Додаємо зображення до контейнера фото
            photoGallery.appendChild(img);
        });
    } catch (error) {
        console.error('Помилка завантаження фото:', error);
    }
}

// Викликаємо функцію завантаження фото при завантаженні сторінки
window.onload = () => {
    const category = 'peretiazkaSalonu'; // Вкажіть категорію або отримайте її динамічно
    loadPhotos(category);
};
