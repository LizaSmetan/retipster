;(function () {
    var lastScrollTop = 0;
    window.onscroll = function () {

        var header = document.querySelector('header .nav-wrap');
        var top = window.pageYOffset || document.documentElement.scrollTop;
        if (lastScrollTop > top && top > 70) {
            header.classList.remove('hidden');
        } else if (lastScrollTop < top && top > 70) {
            header.classList.add('hidden');
            document.querySelector('.search-input').classList.remove('active');
            document.querySelector('body').classList.remove('show');
        }
        lastScrollTop = top;
    }
})();