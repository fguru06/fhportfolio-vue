<template>
  <section id="experience" class="section reveal" aria-label="Work Experience">
    <div class="section-heading">
      <h2>Work Experience</h2>
      <hr />
    </div>
    <div
      v-for="(job, index) in jobs"
      :key="job.company"
      class="experience-card"
      :class="{ expanded: openIndex === index }"
    >
      <button
        class="experience-header"
        @click="toggle(index)"
        :aria-expanded="openIndex === index"
        :aria-controls="'exp-body-' + index"
      >
        <div class="experience-company">
          <span class="bar company-accent-bar" aria-hidden="true"></span>
          <div class="company-info">
            <span class="company-name">{{ job.company }}</span>
            <span class="experience-title">{{ job.title }}</span>
          </div>
        </div>
        <div class="header-right">
          <span class="experience-date">{{ job.date }}</span>
          <span class="chevron" aria-hidden="true">▾</span>
        </div>
      </button>
      <div
        :id="'exp-body-' + index"
        class="experience-body"
        :ref="el => { if (el) bodyRefs[index] = el }"
      >
        <p class="experience-desc">{{ job.description }}</p>
        <ul class="experience-list">
          <li v-for="item in job.bullets" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const openIndex = ref(null);
const bodyRefs = ref({});

function toggle(index) {
  if (openIndex.value === index) {
    openIndex.value = null;
  } else {
    openIndex.value = index;
  }
}

const jobs = [
  {
    company: 'MEDIASURF TECHNOLOGIES, WATERLOO, ON',
    title: 'Independent Consultant – eLearning & Front‑End Engineering',
    date: 'Mar 2025 - Present',
    description: 'MediaSurf (mediasurf.ca) operates as a boutique digital learning studio where I provide consulting services in eLearning development, front‑end engineering, and interactive content design. I partner with organizations to elevate their learning experiences through modern web technologies, clean UX, and high‑impact instructional design.',
    bullets: [
      'Build custom HTML5, CSS3, JavaScript, and Vue.js components for interactive learning experiences.',
      'Design scenario‑based activities, simulations, and responsive UI systems for LMS and LXP environments.',
      'Modernize legacy courses and support digital transformation initiatives for academic and corporate teams.',
      'Deliver full project lifecycle support—from concept, wireframes, and prototypes to polished deployment.',
      'Enhance accessibility (WCAG), usability, and visual design across learning products and platforms.',
      'Collaborate with instructional designers, SMEs, and stakeholders to create engaging, measurable learning outcomes.'
    ]
  },
  {
    company: 'KEYPATH EDUCATION, TORONTO, ON',
    title: 'Front End Web Developer',
    date: 'April 2021 - Feb 2025',
    description: 'Developed engaging and instructionally sound learning content for online healthcare courses, including interactive elements like quizzes and group activities with faculty performance review capabilities. Created reusable templates for healthcare courses, streamlining development and ensuring consistent design.',
    bullets: [
      'Collaborated with instructional designers on storyboarding and translated highly customized concepts into user-friendly interactive components and templates.',
      'Built custom LMS themes using JavaScript and CSS to align with partner branding, demonstrating expertise in front-end development and LMS customization.',
      'Automated user interface testing for standalone interactives using Selenium WebDriver, improving testing efficiency.',
      'Developed accessible and responsive content, adhering to accessibility guidelines (WCAG) and best practices.',
      'Managed tasks, reported progress using Jira, and utilized Bitbucket for code management in a multi-project environment.',
      'Researched and implemented new web technologies to enhance course interactivity and user experience.'
    ]
  },
  {
    company: 'PEARSON',
    title: 'eLearning Multimedia Production Specialist',
    date: '2008 - 2020',
    description: 'Collaborated with instructional designers and subject matter experts (SMEs) to create instructionally sound, engaging, and target-audience appropriate learning solutions and activities, such as courses, case studies, simulations, and scenarios for universities across the US.',
    bullets: [
      'Reduced development cost by creating media templates for multiple courses, thriving cross-functionally with Project Managers and eLearning Developers on efficient review and feedback of deliverables.',
      'Designed and developed interactive multimedia content using HTML5, CSS3, and JavaScript.',
      'Ensured accessibility and responsive design for all deliverables.',
      'Managed project timelines and deliverables using Agile methodologies.'
    ]
  },
  {
    company: 'EMBANET',
    title: 'Multimedia Developer',
    date: '2004 - 2008',
    description: 'Developed interactive multimedia content for educational courses, including animations, simulations, and interactive exercises. Worked closely with instructional designers to ensure content met educational objectives and was engaging for students.',
    bullets: [
      'Created interactive simulations that enhanced student learning and engagement.',
      'Developed animations and graphics to support course content.',
      'Collaborated with instructional designers to create instructionally sound multimedia content.',
      'Ensured all multimedia content was accessible and met accessibility guidelines.'
    ]
  }
];
</script>

<style scoped>
.experience-card {
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow: var(--shadow-sm);
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}
.experience-card:hover {
  box-shadow: 0 8px 32px rgba(15, 23, 42, 0.08);
}

/* ── Header (clickable) ── */
.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 3vw, 2.25rem);
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  color: inherit;
  transition: background 0.2s ease;
}
.experience-header:hover {
  background: rgba(76, 111, 255, 0.04);
}
.experience-header:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: -2px;
  border-radius: var(--radius-lg);
}

.experience-company {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
  flex: 1;
}

.company-accent-bar {
  width: 5px;
  height: 48px;
  border-radius: 999px;
  background: var(--gradient-primary);
  box-shadow: 0 10px 20px rgba(76, 111, 255, 0.25);
  flex-shrink: 0;
  transition: height 0.3s ease;
}
.experience-card.expanded .company-accent-bar {
  height: 56px;
}

.company-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 0;
}

.company-name {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: -0.01em;
}

.experience-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-primary);
  text-align: left;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.experience-date {
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: rgba(76, 111, 255, 0.12);
  color: var(--color-heading);
  white-space: nowrap;
}

/* ── Chevron ── */
.chevron {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  transition: transform 0.3s cubic-bezier(.2,.9,.2,1);
  line-height: 1;
}
.experience-card.expanded .chevron {
  transform: rotate(180deg);
  color: var(--color-primary);
}

/* ── Expandable body ── */
.experience-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(.2,.9,.2,1), padding 0.45s cubic-bezier(.2,.9,.2,1);
  padding: 0 clamp(1.5rem, 3vw, 2.25rem);
}
.experience-card.expanded .experience-body {
  max-height: 800px;
  padding: 0 clamp(1.5rem, 3vw, 2.25rem) clamp(1.5rem, 3vw, 2rem);
}

.experience-desc {
  color: var(--color-text-muted);
  margin: 0 0 1rem;
  line-height: 1.65;
}

.experience-list {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--color-text-muted);
  display: grid;
  gap: 0.5rem;
}

.experience-list li {
  line-height: 1.55;
}

.experience-list li::marker {
  color: var(--color-primary);
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .experience-header {
    padding: 1.25rem;
  }
  .experience-body {
    padding: 0 1.25rem;
  }
  .experience-card.expanded .experience-body {
    padding: 0 1.25rem 1.25rem;
  }
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .header-right {
    width: 100%;
    justify-content: space-between;
  }
  .company-accent-bar {
    height: 40px;
  }
  .experience-card.expanded .company-accent-bar {
    height: 48px;
  }
  .company-name {
    font-size: 1.1rem;
  }
  .experience-title {
    font-size: 0.85rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .experience-body,
  .chevron,
  .company-accent-bar {
    transition: none !important;
  }
}
</style>
