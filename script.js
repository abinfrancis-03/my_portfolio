document.addEventListener('DOMContentLoaded', () => {
    const pillItems = document.querySelectorAll('.pill-item');

    pillItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all pills
            pillItems.forEach(pill => pill.classList.remove('active'));
            
            // Add active class to the clicked pill
            this.classList.add('active');
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".skill-card, .project-card");

    const deactivateAll = () => {
        cards.forEach(card => card.classList.remove("active"));
    };

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            // Prevent the click from immediately bubbling up
            e.stopPropagation(); 
            
            deactivateAll();
            card.classList.add("active");
        });
    });

    // DEACTIVATE ON MOUSE MOVE (Back to normal stage)
    // We use a small 'threshold' so a tiny accidental shimmy doesn't kill the effect
    document.addEventListener("mousemove", (e) => {
        // Optional: Check if the mouse has moved significantly or 
        // simply deactivate when the mouse leaves the specific card
    });

    // DEACTIVATE ON SCROLL (Back to normal stage)
    window.addEventListener("scroll", () => {
        deactivateAll();
    }, { passive: true });

    // DEACTIVATE ON CLICKING OUTSIDE
    document.addEventListener("click", () => {
        deactivateAll();
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Select both Experience (timeline) and Education (edu-card) boxes
    const scrollCards = document.querySelectorAll(".timeline-content, .edu-card");

    const observerOptions = {
        root: null,
        // 'threshold' 0.5 means the card is 50% visible
        // 'rootMargin' ensures it triggers near the center of the viewport
        rootMargin: "-10% 0px -20% 0px", 
        threshold: 0.5 
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // ADD active class when in view
                entry.target.classList.add("scroll-active");
            } else {
                // REMOVE active class when scrolled past
                entry.target.classList.remove("scroll-active");
            }
        });
    }, observerOptions);

    scrollCards.forEach(card => scrollObserver.observe(card));
});



function copyEmail() {
  const email = "abinfrancis1821@gmail.com";
  navigator.clipboard.writeText(email);
  
  // Optional: Change button text temporarily to show it worked
  const btn = document.querySelector('.btn-secondary');
  const originalText = btn.innerHTML;
  btn.innerHTML = "Email Copied!";
  setTimeout(() => { btn.innerHTML = originalText; }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // Ensure your sections have <section id="home"> etc.
    const navItems = document.querySelectorAll('.pill-item');

    const options = {
    root: null,
    // rootMargin: '-20% 0px -20% 0px' helps trigger the middle of the screen
    rootMargin: '-25% 0px -25% 0px', 
    threshold: 0.1 // Lowers the requirement to only 10% visibility to trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remove active class from all items
                navItems.forEach((item) => item.classList.remove('active'));

                // Add active class to the item matching the current section ID
                const activeId = entry.target.getAttribute('id');
                const activeNav = document.querySelector(`.pill-item[href="#${activeId}"]`);
                
                if (activeNav) {
                    activeNav.classList.add('active');
                }
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
});