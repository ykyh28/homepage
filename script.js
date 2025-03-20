document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('main-nav');
    const stickyPoint = nav.offsetTop; // 导航栏距离文档顶部的偏移量

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= stickyPoint) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});
