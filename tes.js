// Teks Ketik Otomatis
const pesan = [
    "Hai sayangku yang ganteng...",
    "Aku punya sesuatu yang mau aku bilang...",
    "Sebenernya gak ada sih...",
    "Karena gak ada yang harus dibilang",
    "Kamu itu...",
    "Seperti bintang di langit malamku...",
    "Terima kasih sudah ada di hidupku 💜",
    "Maaf alay soalnya lagi kepengen aja",
    "Muuuaaachh!! 😘💜"
];
let index = 0;

function ketik() {
    const element = document.querySelector('.typed-text');
    const text = pesan[index];
    let i = 0;
    
    element.innerHTML = '';
    
    function ketikPerHuruf() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(ketikPerHuruf, 100);
        } else {
            setTimeout(gantiPesan, 2500);
        }
    }
    
    ketikPerHuruf();
}

function gantiPesan() {
    index = (index + 1) % pesan.length;
    ketik();
}

// Hati Terbang
function buatHati() {
    const hati = ['💜', '💟', '🌸', '🐇', '👑', '🎀'];
    const container = document.querySelector('.floating-hearts');
    
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = hati[Math.floor(Math.random() * hati.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.animationDuration = (Math.random() * 6 + 4) + 's';
    h.style.fontSize = (Math.random() * 30 + 20) + 'px';
    container.appendChild(h);
    
    setTimeout(() => {
        h.remove();
    }, 8000);
}

// Tombol Gemes
document.querySelector('.btn-gemes').addEventListener('click', function() {
    const lagu = document.getElementById('lagu');
    lagu.play();
    
    // Ledakan hati!
    for(let i = 0; i < 30; i++) {
        setTimeout(buatHati, i * 100);
    }
    
    this.textContent = "💜 I Love You! 💜";
    setTimeout(() => {
        this.textContent = "💟 Pencet Lagi Dong! 💟";
    }, 3000);
});

// Mulai!
window.onload = function() {
    ketik();
    setInterval(buatHati, 500);
};