document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect Logic
    const roles = ["Aspiring Software Developer", "Java Enthusiast", "Problem Solver"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    
    const typedTextSpan = document.querySelector(".typed-text");
    
    function type() {
        if (!typedTextSpan) return;
        
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? erasingDelay : typingDelay;
        
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = newTextDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex++;
            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
        
        setTimeout(type, typeSpeed);
    }
    
    if(roles.length) setTimeout(type, newTextDelay + 250);

    // Initialize AOS Animation Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
});
