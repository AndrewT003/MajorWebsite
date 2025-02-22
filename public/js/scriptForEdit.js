document.getElementById('loadPhotos').addEventListener('click', async () => {
    const category = document.getElementById('photoCategory').value;

    try {
        const response = await fetch(`/admin/edit/photos?category=${category}`);
        if (!response.ok) throw new Error('Помилка при завантаженні фото');
        const data = await response.json();

        const container = document.getElementById('photosContainer');
        container.innerHTML = '';

        if (data.length > 0) {
            data.forEach(photo => {
                const photoDiv = document.createElement('div');
                photoDiv.className = 'photo-item';

                const img = document.createElement('img');
                img.src = photo.base64Image;

                const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Видалити';
                deleteButton.addEventListener('click', async () => {
                    try {
                        const deleteResponse = await fetch('/admin/edit/delete-photo', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ category, photoId: photo._id }),
                        });

                        if (!deleteResponse.ok) throw new Error('Помилка при видаленні фото');
                        photoDiv.remove();
                        alert('Фото видалено успішно');
                    } catch (error) {
                        console.error(error);
                        alert('Не вдалося видалити фото');
                    }
                });

                photoDiv.appendChild(img);
                photoDiv.appendChild(deleteButton);
                container.appendChild(photoDiv);
            });
        } else {
            container.innerHTML = '<p>Немає фото для цієї категорії</p>';
        }
    } catch (error) {
        console.error(error);
        alert('Сталася помилка під час завантаження фото');
    }
});
