const teksElement = ['selamat datang di website portofolio saya..', 'Semangat'];
let count = 0;
let teksIndex = 0;
let currentText = '';
let words = '';

(function ngetik() {
    if (count == teksElement.length) {
        count = 0;
    }
    currentText = teksElement[count];
    words = currentText.slice(0, ++teksIndex);
    document.querySelector('.ngetik').textContent = words;
    if (words.length == currentText.length) {
        count++;
        teksIndex = 0;
    }
    setTimeout(ngetik, 500);
})();