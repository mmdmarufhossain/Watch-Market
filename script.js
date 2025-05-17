// ===== Page Load Animation for Title =====
window.addEventListener('load', () => {
  const title = document.querySelector('.site-title');
  if (title) {
    title.style.transition = 'opacity 1s ease, transform 1s ease';
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
  }
});

// ===== Highlight Active Navigation Item =====
document.querySelectorAll('.colorful-nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-page');
  }
});
// Highlight active menu item based on current URL
document.querySelectorAll('.nav-box a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active-nav');
  }
});

// ===== Hero Animation =====
window.addEventListener('load', () => {
  const content = document.querySelector('.home-content');
  if (content) {
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  }
});

// ===== Buy Now Alert (original) =====
document.querySelectorAll('.buy-button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for your purchase!');
  });
});

// ===== NEW: Scroll Fade-In for Product Cards =====
document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, { threshold: 0.1 });

  products.forEach(product => {
    product.classList.add("hidden");
    observer.observe(product);
  });
});

// ===== NEW: Hover Zoom Effect =====
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "transform 0.3s ease";
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// ===== NEW: Buy Now Click Message Box (Non-alert) =====
document.querySelectorAll(".product-card .buy-button").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const msg = document.createElement("div");
    msg.textContent = "Thank you for your interest!";
    msg.style.position = "fixed";
    msg.style.top = "20px";
    msg.style.right = "20px";
    msg.style.background = "#4caf50";
    msg.style.color = "white";
    msg.style.padding = "10px 20px";
    msg.style.borderRadius = "8px";
    msg.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    msg.style.opacity = "0";
    msg.style.zIndex = "9999";
    msg.style.transition = "opacity 0.5s ease";

    document.body.appendChild(msg);
    setTimeout(() => { msg.style.opacity = "1"; }, 100);
    setTimeout(() => { msg.style.opacity = "0"; }, 2000);
    setTimeout(() => { msg.remove(); }, 2500);
  });
});
// Service cards animation on scroll
const serviceCards = document.querySelectorAll('.service-card');

const serviceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.3
});

serviceCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  serviceObserver.observe(card);
});
// ===== Page Load Animation for New Arrivals Cards =====
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.arrival-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150); // staggered effect
  });
});

// ===== Hover Shake Animation on Card =====
document.querySelectorAll('.arrival-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('shake-hover');
    setTimeout(() => {
      card.classList.remove('shake-hover');
    }, 500);
  });
});

// ===== Buy Button Click Effect =====
document.querySelectorAll('.arrival-card .buy-button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const card = button.closest('.arrival-card');
    card.style.boxShadow = '0 0 20px rgba(0, 255, 100, 0.6)';
    button.innerText = 'Purchased!';
    button.style.backgroundColor = '#4caf50';
    button.style.transition = 'all 0.5s ease';

    setTimeout(() => {
      alert('Thank you for choosing our New Arrival!');
      button.innerText = 'Buy Now';
      button.style.backgroundColor = '#2196f3';
      card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
    }, 1500);
  });
});
// Animate brand cards on scroll
const brandCards = document.querySelectorAll('.brand-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'zoomIn 0.5s ease forwards';
    }
  });
}, {
  threshold: 0.2
});

brandCards.forEach(card => {
  card.style.opacity = '0';
  observer.observe(card);
});
// ===== Scroll Animation for Offers Section =====
window.addEventListener('scroll', () => {
  const offerCards = document.querySelectorAll('.offer-card');
  offerCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.style.transition = 'all 0.8s ease-out';
    }
  });

  const title = document.querySelector('.section-title');
  if (title && title.getBoundingClientRect().top < window.innerHeight - 100) {
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
  }
});
// ===== Scroll Animation for Gift Section =====
window.addEventListener('scroll', () => {
  const giftCards = document.querySelectorAll('.gift-card');
  giftCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.style.transition = 'all 0.8s ease-out';
    }
  });

  const giftTitle = document.querySelector('#gift .section-title');
  if (giftTitle && giftTitle.getBoundingClientRect().top < window.innerHeight - 100) {
    giftTitle.style.opacity = '1';
    giftTitle.style.transform = 'translateY(0)';
  }
});
// ===== Scroll Animation for About Section =====
window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('#about');
  const paragraphs = document.querySelectorAll('#about p');

  if (aboutSection.getBoundingClientRect().top < window.innerHeight - 100) {
    paragraphs.forEach((p, index) => {
      setTimeout(() => {
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
      }, index * 200); // Stagger animation
    });
  }
});
// ===== FAQ Accordion =====
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    // Collapse other answers
    document.querySelectorAll('.faq-answer').forEach(item => {
      if (item !== answer) {
        item.style.maxHeight = null;
        item.style.paddingBottom = 0;
      }
    });

    // Toggle current
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.paddingBottom = 0;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.paddingBottom = "15px";
    }
  });
});
// Blog Section: Read More Buttons
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    alert("Full blog content coming soon!");
  });
});
// ===== Contact Boxes Animation on Scroll =====
const contactBoxes = document.querySelectorAll('.contact-box');

const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 1s ease forwards';
    }
  });
}, { threshold: 0.2 });

contactBoxes.forEach(box => {
  contactObserver.observe(box);
});