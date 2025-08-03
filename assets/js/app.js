particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

const form = document.getElementById('contactForm');
const dialog = document.getElementById('successDialog');
const closeBtn = document.getElementById('closeDialog');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // 送信のデフォルト動作を止める

    form.reset(); // フォームをリセット

    dialog.showModal(); // モーダルを開く
});

closeBtn.addEventListener('click', () => {
    dialog.close(); // モーダルを閉じる
});


