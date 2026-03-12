// Data
const portfolioData = {
    events: [
        { title: 'Ferias Internacionales', desc: 'Gestión integral llave en mano: diseño, montaje y representación en los eventos más importantes del continente.', img: 'assets/ferias.png' },
        { title: 'Roadshows Regionales', desc: 'Giras comerciales estratégicas en las plazas de mayor impacto, garantizando ejecución impecable.', img: 'assets/roadshows.png' },
        { title: 'Conectividad C-Level', desc: 'Plataformas de vinculación efectiva y networking para tomadores de decisiones de alto nivel.', img: 'assets/conectividad.png' },
        { title: 'Lanzamientos Premium', desc: 'Organización de congresos, seminarios y experiencias corporativas con estándares globales.', img: 'assets/lanzamientos.png' },
    ],
    marketing: [
        { title: 'Marketing Digital B2B', desc: 'Estrategias de contenido y pauta digital optimizadas para resultados en el sector corporativo.', img: 'assets/marketing.png' },
        { title: 'Branding de Autoridad', desc: 'Desarrollo de identidad y comunicación estratégica diseñada para inspirar confianza y liderazgo.', img: 'assets/branding.png' },
        { title: 'Producción de Impacto', desc: 'Contenido audiovisual y presentaciones de alto nivel para juntas directivas y mercados regionales.', img: 'assets/portfolio.png' },
        { title: 'Trade Marketing', desc: 'Optimización de presencia en punto de venta y herramientas de soporte para fuerzas comerciales locales.', img: 'assets/portfolio.png' },
    ],
    intel: [
        { title: 'Análisis de Mercado', desc: 'Estudios profundos de competencia y viabilidad para la entrada exitosa en nuevos mercados de Latam.', img: 'assets/portfolio.png' },
        { title: 'Auditoría Estratégica', desc: 'Diagnóstico de operaciones actuales y diseño de roadmaps de crecimiento a corto y mediano plazo.', img: 'assets/portfolio.png' },
        { title: 'Planes de Expansión', desc: 'Consultoría especializada en las particularidades regulatorias y comerciales de cada país de la región.', img: 'assets/portfolio.png' },
    ],
};

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('open');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
    });
});

// Portfolio Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const portfolioGrid = document.getElementById('portfolio-grid');

// Portfolio Modal Elements
const portfolioModal = document.getElementById('portfolio-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalClose = document.getElementById('modal-close');

function openModal(item) {
    modalImg.src = item.img;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc;
    portfolioModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeModal() {
    portfolioModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}
if (portfolioModal) {
    portfolioModal.addEventListener('click', (e) => {
        if (e.target === portfolioModal) closeModal();
    });
}

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

function renderPortfolio(category) {
    const items = portfolioData[category];
    portfolioGrid.innerHTML = items.map((item, i) => `
        <div class="glass-card p-10 fade-up visible" style="transition-delay: ${i * 0.1}s">
            <div class="portfolio-img-container">
                <img src="${item.img}" alt="${item.title}" class="portfolio-img">
            </div>
            <h4 class="card-title-md">${item.title}</h4>
            <p class="text-muted text-base mb-6" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.desc}</p>
            <button class="btn-view-more" data-category="${category}" data-index="${i}">
                Ver más
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    `).join('');

    // Attach listeners
    portfolioGrid.querySelectorAll('.btn-view-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.category;
            const idx = btn.dataset.index;
            openModal(portfolioData[cat][idx]);
        });
    });
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-tab');

        // Update active button
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Re-render grid
        renderPortfolio(category);
    });
});

// Initial Render
renderPortfolio('events');

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, we can stop observing to clean up
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .title-reveal').forEach(el => {
    observer.observe(el);
});

// Form Submission
const contactForm = document.getElementById('contact-form');
const formContainer = document.getElementById('form-container');
const successMsg = document.getElementById('success-msg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate API call
    const submitBtn = contactForm.querySelector('button');
    submitBtn.innerHTML = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
        formContainer.classList.add('hidden');
        successMsg.classList.remove('hidden');
    }, 1500);
});

// Parallax Effect for Hero
document.addEventListener('mousemove', (e) => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const { innerWidth: w, innerHeight: h } = window;
    const x = (e.clientX / w - 0.5) * 20;
    const y = (e.clientY / h - 0.5) * 20;

    const heroOverlay = hero.querySelector('.hero-overlay');
    if (heroOverlay) {
        heroOverlay.style.transform = `translate(${x}px, ${y}px)`;
    }
});
