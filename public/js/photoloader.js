async function loadPhotos(category) {
    const photoGallery = document.getElementById('photoGallery');
    const spinner = document.getElementById('loadingSpinner');
    const slider = document.getElementById('slider');

    try {
        slider.classList.add('loading');
        spinner.style.display = 'block';
        photoGallery.innerHTML = '';

        const response = await fetch(`/api/photos/${category}`);
        let photos = await response.json();

        // Сортуємо за полем order, якщо воно є
        photos.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = `data:image/png;base64,${photo.buffer}`;
            img.alt = photo.hash || 'Фото';
            img.style.maxWidth = '100%';
            img.classList.add('gallery-photo'); // Додаємо клас для стилізації

            photoGallery.appendChild(img);
        });
    } catch (error) {
        console.error('Помилка завантаження фото:', error);
    } finally {
        spinner.style.display = 'none';
        slider.classList.remove('loading');
    }
}


// Додаємо обробники подій після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close');

    // Закриваємо модальне вікно при старті
    modal.style.display = 'none';

    // Функція відкриття модального вікна
    function openModal(src) {
        modalImage.src = src;
        modal.style.display = 'flex';
    }

    // Функція закриття модального вікна
    function closeModal() {
        modal.style.display = 'none';
    }

    // Додаємо обробник кліків до галереї (делегування подій)
    document.getElementById('photoGallery').addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            openModal(event.target.src);
        }
    });

    // Закриття при натисканні на "×"
    closeButton.addEventListener('click', closeModal);

    // Закриття при кліку на затемнене тло
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
