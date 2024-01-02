let slideIndex = 0;
let cardSlideIndex = 0;
let intervalId = null;
showSlide(slideIndex);
showCardSlide(cardSlideIndex);

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    changeSlide(1);
    changeCardSlide(1);
  }, 5000);
}

function changeSlide(n) {
  showSlide((slideIndex += n));
  resetInterval();
}

function changeCardSlide(n) {
  showCardSlide((cardSlideIndex += n));
  resetInterval();
}

function currentSlide(n) {
  if (slideIndex !== n) {
    showSlide((slideIndex = n));
  }
  resetInterval();
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // スライドのループ処理
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // すべてのスライドを非表示にする
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // ドットの状態を初期化する
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // 現在のスライドとドットを表示する
  slides[slideIndex].style.display = "block";
  if (dots[slideIndex]) {
    dots[slideIndex].classList.add("active");
  }
}

function showCardSlide(n) {
  const cardSlides1 = document.getElementsByClassName("card-image1");
  const cardSlides2 = document.getElementsByClassName("card-image2");
  const cardSlides3 = document.getElementsByClassName("card-image3");
  // スライドのループ処理
  if (n >= cardSlides1.length) {
    cardSlideIndex = 0;
  } else if (n < 0) {
    cardSlideIndex = cardSlides1.length - 1;
  }

  // すべてのスライドを非表示にする
  for (let i = 0; i < cardSlides1.length; i++) {
    cardSlides1[i].style.display = "none";
    cardSlides2[i].style.display = "none";
    cardSlides3[i].style.display = "none";
  }

  // 現在のスライドを表示する
  cardSlides1[cardSlideIndex].style.display = "block";
  cardSlides2[cardSlideIndex].style.display = "block";
  cardSlides3[cardSlideIndex].style.display = "block";
}

particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

let bgmSize = 1;
// BGMを再生する関数
const bgmPlayer = document.getElementById('bgmPlayer');
bgmPlayer.removeAttribute('download');
function playBGM() {
  bgmPlayer.play();
}

// BGMを停止する関数
function stopBGM() {
  bgmPlayer.pause();
  bgmPlayer.currentTime = 0;
}

function nextBGM() {
  if (bgmSize >= 4) {
    bgmSize = 1;
    bgmPlayer.src = `./assets/bgm/bgm1.mp3`;
  } else {
    bgmSize++;
    bgmPlayer.src = `./assets/bgm/bgm${bgmSize}.mp3`;
  }

  playBGM();
}

// Playボタンがクリックされた時にBGMを再生
// const playButton = document.getElementById('playButton');
// playButton.addEventListener('click', playBGM);

// Stopボタンがクリックされた時にBGMを停止
const stopButton = document.getElementById('stopButton');
stopButton.addEventListener('click', stopBGM);

// Nextボタンがクリックされた時にBGMを停止
const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', nextBGM);

window.addEventListener('load', function() {
  resetInterval();
  playBGM();
});

