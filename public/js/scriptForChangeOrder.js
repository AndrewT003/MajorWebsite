document.getElementById('loadPhotosForOrder').addEventListener('click', async () => {
    const category = document.getElementById('photoCategory').value;
    const response = await fetch(`/admin/edit/photos?category=${category}`);
    const photos = await response.json();
    const container = document.getElementById('photosContainerForNewPhoto');
    container.innerHTML = '';

    if (photos.length === 0) {
        container.innerHTML = "<p>Немає фото в цій категорії.</p>";
        document.getElementById('updateOrderButton').style.display = 'none';
        return;
    }

    photos.forEach(photo => {
        const div = document.createElement('div');
        div.className = 'sortable-item';
        div.dataset.id = photo._id;
        div.innerHTML = `<img src="${photo.base64Image}" class="photo-preview">`;
        container.appendChild(div);
    });

    new Sortable(container, {
        animation: 150,
        ghostClass: 'dragging'
    });

    document.getElementById('updateOrderButton').style.display = 'block';
});

document.getElementById('updateOrderButton').addEventListener('click', async () => {
    const category = document.getElementById('photoCategory').value;
    const orderedPhotos = [...document.querySelectorAll('.sortable-item')].map((el, index) => ({
        _id: el.dataset.id,
        order: index
    }));

    const response = await fetch('/admin/edit/update-photo-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, orderedPhotos })
    });

    const result = await response.json();
    alert(result.message);
});