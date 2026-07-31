function chuyenTrang(idTrang) {
    const danhSachTrang = document.querySelectorAll('.page');
    danhSachTrang.forEach(trang => {
        trang.classList.remove('active-page');
    });

    const trangHienTai = document.getElementById(idTrang);
    if (trangHienTai) {
        trangHienTai.classList.add('active-page');
    }

    const danhSachNut = document.querySelectorAll('nav ul li a');
    danhSachNut.forEach(nut => {
        nut.classList.remove('active');
    });

    const nutHienTai = document.getElementById('btn-' + idTrang);
    if (nutHienTai) {
        nutHienTai.classList.add('active');
    }

    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('active-menu')) {
        navMenu.classList.remove('active-menu');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active-menu');
        });
    }
});