// Анимацияны іске қосу (AOS)
AOS.init({
    once: true, // Анимация тек бір рет ойнайды
    offset: 100, // Экраннан қанша қашықтықта басталсын
});

// Музыканы басқару
const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        bgMusic.play();
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// RSVP - WhatsApp-қа жіберу
const rsvpForm = document.getElementById('rsvpForm');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('guestName').value;
    const attendance = document.querySelector('input[name="attendance"]:checked').value;
    
    // Телефон нөмірін осы жерге жазыңыз (мысалы: 77011234567)
    const phoneNumber = "77079725172"; 
    
    // WhatsApp хабарлама мәтіні
    const message = `Сәлеметсіз бе! Менің атым: ${name}. Тойға қатысу статусым: ${attendance}.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});