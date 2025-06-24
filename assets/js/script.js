document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));
});





document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    
    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
        this.textContent = menu.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close menu when clicking on a link (optional)
    const menuLinks = document.querySelectorAll('.navbar-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            toggleButton.textContent = '☰';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollBtn = document.getElementById('scroll-down');
    const target = document.querySelector('.about-us');

    if (scrollBtn && target) {
        scrollBtn.addEventListener('click', function () {
            const targetOffsetTop = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetOffsetTop - 60, // 60px yukarıda dursun
                behavior: 'smooth'
            });
        });
    }
});





document.addEventListener("DOMContentLoaded", function () {
  const chatWrapper = document.getElementById("whatsapp-chat");
  const chatText = document.querySelector(".chat-text");
  let visibilityTimer = null;
  let cycleTimer = null;

  function showChatTextTemporarily() {
    chatText.classList.add("show");
    chatText.classList.remove("hide");

    setTimeout(() => {
      chatText.classList.remove("show");
      chatText.classList.add("hide");
    }, 3000); // 3 saniye görünür
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      chatWrapper.style.display = "block";

      // Eğer döngü zaten başlamamışsa başlat
      if (!cycleTimer) {
        showChatTextTemporarily(); // İlk görünüm

        cycleTimer = setInterval(() => {
          showChatTextTemporarily(); // Her 15 saniyede bir tekrar göster
        }, 15000);
      }

    } else {
      chatWrapper.style.display = "none";
      chatText.classList.remove("show", "hide");

      // Döngüleri temizle
      clearInterval(cycleTimer);
      cycleTimer = null;
    }
  });
});






document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-text h3");
  let started = false;

  function animateCounters() {
    if (started) return;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.innerText;
        let count = 0;
        const increment = target / 100;

        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            counter.innerText = target;
            clearInterval(interval);
          } else {
            counter.innerText = Math.ceil(count);
          }
        }, 20); // hızını buradan değiştirebilirsin
      };

      updateCount();
    });

    started = true;
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats-section");
    if (isInViewport(statsSection)) {
      animateCounters();
    }
  });
});






document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const logo = document.getElementById('navbar-logo');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            logo.src = 'assets/image/beyaz-png.png'; // Scroll sonrası logo
        } else {
            navbar.classList.remove('scrolled');
            logo.src = 'assets/image/beyaz-png1.png'; // Başlangıç logosu
        }
    });
});




