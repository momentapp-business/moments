function openModal(imgSrc) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('caption').innerHTML = document.querySelector(`[src="${imgSrc}"] + .caption`).innerHTML;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}