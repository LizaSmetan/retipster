;(function () {
    var slide_left = document.querySelector('.featured-block-nav .left');
    var slide_right = document.querySelector('.featured-block-nav .right');
    var block = document.querySelector('.featured-block');
    var list = document.querySelector('.featured-block ul');
    var li = document.querySelector('.featured-block ul li');
    var toggle = 0;
    var toggleNum = toggleNum = Math.floor(block.clientWidth / li.clientWidth);

    slide_right.addEventListener('click', function (e) {
        e.preventDefault();
        var width = list.children.length * li.clientWidth;
        console.log(width);
        if (!(list.children.length === toggleNum)) {
            console.log(toggleNum);
            width = toggle - li.clientWidth;
            list.style.transform = 'translateX(' + width + 'px)';
            toggle -= li.clientWidth;
            toggleNum++;
        }
    });
    slide_left.addEventListener('click', function (e) {
        e.preventDefault();
        if (!(toggle === 0)){
            toggle += li.clientWidth;
            list.style.transform = 'translateX(' + toggle + 'px)';
            toggleNum--;
        }
    });

    window.addEventListener('resize', function (e) {
        toggle = 0;
        list.style.transform = 'translateX(0px)';
        toggleNum = toggleNum = Math.floor(block.clientWidth / li.clientWidth);
    })
})();