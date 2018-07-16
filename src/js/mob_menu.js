(function () {
    document.querySelector('.burger').addEventListener('click', function (e) {
        document.querySelector('body').classList.toggle('show');
    })
    document.querySelector('.search-btn').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.search-input').classList.toggle('active');
    })
})();