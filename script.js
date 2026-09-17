let music = document.getElementById("bgMusic");
let musicBtn = document.getElementById("musicBtn");

function startSurprise() {

    if (music) {
        music.play().catch(() => {});
    }

    document.body.classList.add("page-exit");

    setTimeout(function () {
        window.location.href = "page2.html";
    }, 600);

}

function goToPage3() {

    document.body.classList.add("page-exit");

    setTimeout(function () {
        window.location.href = "page3.html";
    }, 600);

}

function toggleMusic() {

    if (!music) return;

    if (music.paused) {

        music.play();

        if (musicBtn) {
            musicBtn.innerHTML = "🔊";
        }

    } else {

        music.pause();

        if (musicBtn) {
            musicBtn.innerHTML = "🔇";
        }

    }

}