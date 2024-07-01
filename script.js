const toggleBtn = document.querySelector('.share-icon')
const shareLinks = document.querySelector('.share-option');

toggleBtn.addEventListener('click', function () {
    shareLinks.parentElement.classList.toggle('active');
})