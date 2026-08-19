import { portfolioData } from './data/portfolioData.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPersonalDetails();
  renderStats();
  renderSkills();
  renderProjects();
  renderExperience();
  renderQualifications();
  initContactForm();
  initNavigation();

  // Initialize Feather Icons after rendering DOM elements
  if (window.feather) {
    window.feather.replace();
  }
});

/* ==========================================================================
   Theme Switcher Engine (Dark/Light)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.setAttribute('data-feather', 'moon');
    } else {
      themeIcon.setAttribute('data-feather', 'sun');
    }
    if (window.feather) window.feather.replace();
  }
}

/* ==========================================================================
   Personal Details & Hero Renderer
   ========================================================================== */
function renderPersonalDetails() {
  const { personal, socials } = portfolioData;

  document.getElementById('logo-text').textContent = `${personal.name.split(' ')[0]}.dev`;
  document.getElementById('hero-name').textContent = personal.name;
  document.getElementById('hero-title-tag').textContent = personal.title.split('|')[0].trim();
  document.getElementById('hero-bio').textContent = personal.bio;
  document.getElementById('status-text').textContent = personal.status;
  document.getElementById('footer-name').textContent = personal.name;
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact details
  const emailEl = document.getElementById('contact-email');
  emailEl.textContent = personal.email;
  emailEl.href = `mailto:${personal.email}`;
  
  const phoneEl = document.getElementById('contact-phone');
  phoneEl.textContent = personal.phone;
  phoneEl.href = `tel:${personal.phone.replace(/[^0-9+]/g, '')}`;

  document.getElementById('contact-location').textContent = personal.location;

  // Avatar & Resume
  if (personal.avatar) {
    document.getElementById('hero-avatar').src = personal.avatar;
  }
  if (personal.resumeUrl) {
    document.getElementById('resume-link').href = personal.resumeUrl;
  }

  // Render Social Links
  const socialsContainer = document.getElementById('hero-socials');
  socialsContainer.innerHTML = socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${s.name}">
      <i data-feather="${s.icon || 'link'}"></i>
    </a>
  `).join('');
}

/* ==========================================================================
   Stats Renderer
   ========================================================================== */
function renderStats() {
  const container = document.getElementById('stats-container');
  container.innerHTML = portfolioData.stats.map(st => `
    <div class="stat-item">
      <div class="stat-value">${st.value}</div>
      <div class="stat-label">${st.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   Skills Renderer
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-container');
  container.innerHTML = portfolioData.skillCategories.map(cat => `
    <div class="skill-card">
      <div class="skill-category-header">
        <div class="skill-category-icon">
          <i data-feather="${cat.icon || 'code'}"></i>
        </div>
        <h3 class="skill-category-title">${cat.name}</h3>
      </div>
      <div class="skill-list">
        ${cat.skills.map(s => `
          <div class="skill-item">
            <div class="skill-info">
              <span>${s.name}</span>
              <span>${s.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: ${s.level}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Projects & Category Filter Engine
   ========================================================================== */
let activeFilter = 'All';

function renderProjects() {
  const filtersContainer = document.getElementById('project-filters');
  const projectsContainer = document.getElementById('projects-container');

  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

  filtersContainer.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeFilter ? 'active' : ''}" data-category="${cat}">
      ${cat}
    </button>
  `).join('');

  filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeFilter = e.target.getAttribute('data-category');
      renderProjects();
    });
  });

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  projectsContainer.innerHTML = filteredProjects.map(p => `
    <div class="project-card" data-id="${p.id}">
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <span class="project-badge">${p.category}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  projectsContainer.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const project = portfolioData.projects.find(p => p.id === id);
      if (project) openProjectModal(project);
    });
  });

  if (window.feather) window.feather.replace();
}

/* ==========================================================================
   Project Details Modal Engine
   ========================================================================== */
function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="modal-image" />
    <span class="section-tag">${project.category}</span>
    <h2 style="font-size: 2rem; margin-bottom: 1rem;">${project.title}</h2>
    <p style="color: var(--text-secondary); margin-bottom: 1.5rem; line-height: 1.7;">${project.description}</p>
    
    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.75rem; font-size: 1.1rem;">Key Highlights & Achievements</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
        ${project.highlights.map(h => `
          <li style="position: relative; padding-left: 1.25rem; color: var(--text-secondary); font-size: 0.95rem;">
            <span style="position: absolute; left: 0; color: var(--accent-primary);">✓</span> ${h}
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="margin-bottom: 0.75rem; font-size: 1.1rem;">Technologies Used</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${project.tags.map(t => `<span class="tag" style="padding: 0.3rem 0.8rem; font-size: 0.85rem;">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${project.demoUrl && project.demoUrl !== '#' ? `
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <span>View Profile / Project</span>
          <i data-feather="external-link"></i>
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.add('open');
  if (window.feather) window.feather.replace();

  closeBtn.onclick = () => modal.classList.remove('open');
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('open');
  };
}

/* ==========================================================================
   Experience Renderer
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById('experience-container');
  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-company">${exp.company} • ${exp.location}</span>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-achievements">
          ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Education & Certifications Renderer
   ========================================================================== */
function renderQualifications() {
  const eduContainer = document.getElementById('education-container');
  const certContainer = document.getElementById('certifications-container');

  if (eduContainer) {
    eduContainer.innerHTML = portfolioData.education.map(e => `
      <div>
        <h4 style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">${e.degree}</h4>
        <div style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 0.2rem;">${e.institution} • ${e.location}</div>
        <div style="color: var(--accent-primary); font-size: 0.85rem; font-weight: 600; margin-top: 0.3rem;">${e.period}</div>
      </div>
    `).join('');
  }

  if (certContainer) {
    certContainer.innerHTML = portfolioData.certifications.map(c => `
      <li style="color: var(--text-secondary); font-size: 0.95rem; display: flex; align-items: flex-start; gap: 0.5rem;">
        <span style="color: var(--accent-cyan); font-weight: bold;">•</span>
        <div>
          <strong style="color: var(--text-primary);">${c.name}</strong>
          <span style="display: block; font-size: 0.8rem; color: var(--text-muted);">${c.issuer}</span>
        </div>
      </li>
    `).join('');
  }
}

/* ==========================================================================
   Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('form-toast');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    toast.classList.add('success');
    form.reset();
    setTimeout(() => {
      toast.classList.remove('success');
    }, 5000);
  });
}

/* ==========================================================================
   Navigation & Scroll Effects
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}
