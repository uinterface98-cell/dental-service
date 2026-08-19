// ============================================
//  BRIGHTSMILE DENTAL — SCRIPTS
// ============================================

// ============================================
//  SERVICE PRICING MODAL
// ============================================
(function () {

  // ---- Service data ----
  var SERVICES = {
    general: {
      name: 'General Dentistry',
      desc: 'Routine cleanings, fillings, extractions, and comprehensive oral exams to keep your smile healthy for life.',
      iconBg: '#EFF6FF',
      iconSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
      rows: [
        ['Comprehensive Oral Exam', '60 min', '$95'],
        ['Routine Cleaning (Prophylaxis)', '45 min', '$120'],
        ['Deep Cleaning — per quadrant', '60 min', '$180'],
        ['Tooth-Colored Composite Filling', '45 min', 'From $150'],
        ['Amalgam Filling', '30 min', 'From $110'],
        ['Simple Tooth Extraction', '30 min', 'From $200'],
        ['Surgical Extraction', '60 min', 'From $350'],
        ['Full Mouth X-Rays', '15 min', '$75'],
      ],
      note: 'Most insurance plans accepted · Interest-free payment plans available',
      from: 'From $75',
    },
    whitening: {
      name: 'Teeth Whitening',
      desc: 'Professional in-office and take-home whitening treatments for a brighter, more confident smile.',
      iconBg: '#F0FDF4',
      iconSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
      rows: [
        ['In-Office Whitening — 1 session', '90 min', '$450'],
        ['In-Office Whitening — 2 sessions', '3 hrs', '$780'],
        ['Custom Take-Home Trays', '20 min', '$280'],
        ['Take-Home Trays + Gel Refill', '—', '$80'],
        ['In-Office + Take-Home Bundle', '90 min', '$680'],
        ['Touch-Up Treatment', '45 min', '$150'],
      ],
      note: 'Results last 12–24 months with proper care',
      from: 'From $150',
    },
    implants: {
      name: 'Dental Implants',
      desc: 'Permanent, natural-looking tooth replacements that restore full chewing function and a complete smile.',
      iconBg: '#FFF7ED',
      iconSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F97316" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>',
      rows: [
        ['Single Implant + Crown', '2 visits', 'From $3,200'],
        ['Implant Consultation & X-Ray', '60 min', '$150*'],
        ['Bone Graft (if required)', '60 min', 'From $600'],
        ['Sinus Lift (if required)', '90 min', 'From $1,500'],
        ['All-on-4 Full Arch', 'Multiple', 'From $18,000'],
        ['Implant-Supported Bridge', 'Multiple', 'From $6,000'],
      ],
      note: '* Consultation fee waived on booking treatment · Financing available',
      from: 'From $3,200',
    },
    invisalign: {
      name: 'Invisalign®',
      desc: 'Clear aligner therapy to straighten teeth discreetly and comfortably — no metal braces needed.',
      iconBg: '#FDF4FF',
      iconSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>',
      rows: [
        ['Free Smile Assessment', '30 min', 'Complimentary'],
        ['Invisalign Lite — minor corrections', '6–12 months', 'From $2,500'],
        ['Invisalign Moderate', '12–18 months', 'From $4,200'],
        ['Invisalign Comprehensive', '18–24 months', 'From $5,800'],
        ['Refinements', 'Included', 'Included'],
        ['Vivera Retainers (post-treatment)', '—', '$400 per set'],
      ],
      note: 'Monthly payment plans from $99/month · Free consultation included',
      from: 'From $2,500',
    },
    veneers: {
      name: 'Veneers & Bonding',
      desc: 'Porcelain veneers and composite bonding to correct chips, cracks, gaps, and discoloration instantly.',
      iconBg: '#FFF1F2',
      iconSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F43F5E" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
      rows: [
        ['Smile Design Consultation', '60 min', '$100*'],
        ['Composite Bonding — per tooth', '45 min', 'From $250'],
        ['Porcelain Veneer — per tooth', '2 visits', 'From $950'],
        ['Smile Makeover — 6 veneers', '2 visits', 'From $5,400'],
        ['Smile Makeover — 10 veneers', '2 visits', 'From $8,500'],
        ['Veneer Repair / Replacement', '45 min', 'From $350'],
      ],
      note: '* Consultation fee credited to treatment · Porcelain veneers last 15–20 years',
      from: 'From $250',
    },
    pediatric: {
      name: 'Pediatric Dentistry',
      desc: 'Gentle, kid-friendly dental care in a fun and welcoming environment for children of all ages.',
      iconBg: '#F0F9FF',
      iconSvg: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
      rows: [
        ['First Visit (age 1–3)', '30 min', '$65'],
        ['Routine Exam & Cleaning', '45 min', '$95'],
        ['Fluoride Treatment', '15 min', '$35'],
        ['Dental Sealants — per tooth', '30 min', '$45'],
        ['Tooth-Colored Filling (child)', '30 min', 'From $120'],
        ['Space Maintainer', '45 min', 'From $350'],
        ['Emergency Pediatric Visit', '30 min', '$85'],
      ],
      note: 'Children under 2 seen free on first visit · Most insurance plans accepted',
      from: 'From $35',
    },
  };

  // ---- DOM refs ----
  var overlay   = document.getElementById('svcOverlay');
  var modal     = document.getElementById('svcModal');
  var closeBtn  = document.getElementById('svcClose');
  var iconWrap  = document.getElementById('svcIconWrap');
  var titleEl   = document.getElementById('svcTitle');
  var descEl    = document.getElementById('svcDesc');
  var tbody     = document.getElementById('svcTbody');
  var noteEl    = document.getElementById('svcNote');
  var fromEl    = document.getElementById('svcFrom');
  var bookBtn   = document.getElementById('svcBookBtn');

  function openModal(key) {
    var s = SERVICES[key];
    if (!s) return;

    // Populate
    iconWrap.style.background = s.iconBg;
    iconWrap.innerHTML = s.iconSvg;
    titleEl.textContent = s.name;
    descEl.textContent  = s.desc;
    noteEl.textContent  = s.note;
    fromEl.textContent  = s.from;

    tbody.innerHTML = '';
    s.rows.forEach(function (row) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + row[0] + '</td>' +
        '<td>' + row[1] + '</td>' +
        '<td>' + row[2] + '</td>';
      tbody.appendChild(tr);
    });

    // Show
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Open on link click
  document.querySelectorAll('.svc-open').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(this.dataset.service);
    });
  });

  // Close on X button
  closeBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // Book button: close modal then scroll to #book
  bookBtn.addEventListener('click', function () {
    closeModal();
  });

})();

// ---- Sticky header shadow on scroll ----
const header = document.getElementById('header');
let headerScrollTicking = false;
window.addEventListener('scroll', () => {
  if (headerScrollTicking) return;
  headerScrollTicking = true;
  requestAnimationFrame(() => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    headerScrollTicking = false;
  });
}, { passive: true });

// ---- Mobile burger menu ----
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
  const spans = burger.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = burger.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ---- Pill nav lamp effect ----
(function () {
  const navPill = document.getElementById('navPill');
  const lampIndicator = document.getElementById('navLampIndicator');
  const pillItems = document.querySelectorAll('.nav__pill-item');
  if (!navPill || !lampIndicator || !pillItems.length) return;

  function moveLampTo(item) {
    pillItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    const pillRect = navPill.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    lampIndicator.style.left  = (itemRect.left  - pillRect.left) + 'px';
    lampIndicator.style.width = itemRect.width + 'px';
  }

  pillItems.forEach(item => {
    item.addEventListener('click', function () { moveLampTo(this); });
  });

  // Map section id → pill item
  const sectMap = {};
  pillItems.forEach(item => {
    if (item.dataset.section) sectMap[item.dataset.section] = item;
  });

  // Update active item as user scrolls through sections
  const sectObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && sectMap[entry.target.id]) {
        moveLampTo(sectMap[entry.target.id]);
      }
    });
  }, { threshold: 0.35, rootMargin: '-72px 0px -55% 0px' });

  Object.keys(sectMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) sectObs.observe(el);
  });

  // Init: set lamp position instantly (no transition) then enable transitions
  window.addEventListener('load', function () {
    lampIndicator.style.transition = 'none';
    moveLampTo(pillItems[0]);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        lampIndicator.style.transition = '';
      });
    });
  });
})();

// ============================================
//  BOOKING CALENDAR WIDGET
// ============================================

const MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
const DAYS_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

// Simulate slot availability — in real use this comes from a backend
function getDayStatus(date) {
  // Sundays: closed
  if (date.getDay() === 0) return 'closed';
  // Past dates: past
  const today = new Date(); today.setHours(0,0,0,0);
  if (date < today) return 'past';
  // Use a deterministic pseudo-random based on the date number
  const seed = date.getDate() + date.getMonth() * 31;
  const r = ((seed * 1103515245 + 12345) & 0x7fffffff) % 100;
  if (r < 15) return 'full';
  if (r < 35) return 'few';
  return 'avail';
}

// Slots for a given day
function getTimeSlots(date) {
  const dow = date.getDay(); // 0=Sun … 6=Sat
  const seed = date.getDate() + date.getMonth() * 31;

  const morningBase  = ['8:00 AM','8:30 AM','9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM'];
  const afternoonBase = ['12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM'];
  const eveningBase  = dow === 6 ? [] : ['5:00 PM','5:30 PM','6:00 PM','6:30 PM'];

  function tagSlots(arr) {
    return arr.map((t, i) => {
      const r = ((seed + i * 7) * 1103515245 + 12345) & 0x7fffffff;
      const pct = r % 100;
      return { time: t, status: pct < 12 ? 'booked' : pct < 25 ? 'few' : 'avail' };
    });
  }
  return {
    morning:   tagSlots(morningBase),
    afternoon: tagSlots(afternoonBase),
    evening:   tagSlots(eveningBase),
  };
}

// State
let calYear, calMonth, selectedDate = null, selectedTime = null;
let selectedService = 'General Checkup & Cleaning';
let selectedDoctor = 'any';

function initCalendar() {
  const now = new Date();
  calYear = now.getFullYear();
  calMonth = now.getMonth();
  renderCalendar();
}

function renderCalendar() {
  document.getElementById('calMonthLabel').textContent = `${MONTHS[calMonth]} ${calYear}`;

  const grid = document.getElementById('calGrid');
  grid.innerHTML = '';

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const el = document.createElement('button');
    el.className = 'bw-day bw-day--empty';
    el.setAttribute('aria-hidden', 'true');
    grid.appendChild(el);
  }

  const today = new Date(); today.setHours(0,0,0,0);

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(calYear, calMonth, d);
    const status = getDayStatus(date);
    const el = document.createElement('button');
    el.textContent = d;
    el.className = 'bw-day';

    if (status === 'past' || status === 'closed') {
      el.classList.add('bw-day--past');
    } else if (status === 'full') {
      el.classList.add('bw-day--full');
    } else {
      el.classList.add(status === 'few' ? 'bw-day--few' : 'bw-day--avail');
      el.addEventListener('click', () => selectDate(date, el));
    }

    // Mark today
    if (date.getTime() === today.getTime()) el.classList.add('bw-day--today');

    // Mark selected
    if (selectedDate && date.getTime() === selectedDate.getTime()) {
      el.classList.add('bw-day--selected');
    }

    grid.appendChild(el);
  }

  // Disable prev button if already at current month
  const now = new Date();
  document.getElementById('calPrev').disabled =
    calYear === now.getFullYear() && calMonth === now.getMonth();
}

function selectDate(date, el) {
  selectedDate = date;
  // Re-render to update selection highlight then transition
  renderCalendar();
  goToStep(2);
}

function renderTimeSlots() {
  if (!selectedDate) return;
  const label = document.querySelector('#selectedDateLabel span');
  label.textContent = selectedDate.toLocaleDateString('en-US',
    { weekday:'long', month:'long', day:'numeric' });

  const slots = getTimeSlots(selectedDate);
  renderSlotGroup('morningSlots', slots.morning);
  renderSlotGroup('afternoonSlots', slots.afternoon);
  renderSlotGroup('eveningSlots', slots.evening);

  // Hide empty evening section on Saturday
  const eveningSec = document.querySelector('#bw-step-2 .bw-slot-section:last-child');
  if (eveningSec) eveningSec.style.display = slots.evening.length ? '' : 'none';
}

function renderSlotGroup(containerId, slots) {
  const el = document.getElementById(containerId);
  el.innerHTML = '';
  if (!slots.length) return;
  slots.forEach(slot => {
    const btn = document.createElement('button');
    btn.className = 'bw-slot';
    btn.textContent = slot.time;
    if (slot.status === 'booked') {
      btn.classList.add('bw-slot--booked');
      btn.disabled = true;
    } else if (slot.status === 'few') {
      btn.classList.add('bw-slot--few');
    }
    if (selectedTime === slot.time) btn.classList.add('selected');
    btn.addEventListener('click', () => {
      if (slot.status === 'booked') return;
      selectedTime = slot.time;
      // Update selection visually
      document.querySelectorAll('.bw-slot').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      // Auto-advance after a tiny delay for feedback
      setTimeout(() => goToStep(3), 280);
    });
    el.appendChild(btn);
  });
}

function renderSummaryPills() {
  const pills = document.getElementById('summaryPills');
  pills.innerHTML = '';

  const items = [
    { icon: calendarIcon(), text: selectedDate.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'}) },
    { icon: clockIcon(), text: selectedTime },
    { icon: toothIcon(), text: selectedService },
  ];
  if (selectedDoctor !== 'any') {
    const names = { mitchell:'Dr. Mitchell', patel:'Dr. Patel', chen:'Dr. Chen' };
    items.push({ icon: personIcon(), text: names[selectedDoctor] });
  }

  items.forEach(item => {
    const pill = document.createElement('div');
    pill.className = 'bw-pill';
    pill.innerHTML = item.icon + `<span>${item.text}</span>`;
    pills.appendChild(pill);
  });
}

function renderConfirmSummary() {
  const el = document.getElementById('confirmSummary');
  el.innerHTML = '';
  const firstName = document.getElementById('bwFirst').value;
  const items = [
    { icon: calendarIcon(), text: selectedDate.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'}) },
    { icon: clockIcon(), text: selectedTime },
    { icon: toothIcon(), text: selectedService },
  ];
  items.forEach(item => {
    const pill = document.createElement('div');
    pill.className = 'bw-pill';
    pill.innerHTML = item.icon + `<span>${item.text}</span>`;
    el.appendChild(pill);
  });
}

// ---- Step navigation ----
function goToStep(n) {
  // Hide all panels
  [1,2,3,4].forEach(i => {
    document.getElementById(`bw-step-${i}`).classList.add('bw-panel--hidden');
    const ind = document.getElementById(`step-ind-${i}`);
    if (ind) { ind.classList.remove('active','done'); }
  });

  // Show target panel
  document.getElementById(`bw-step-${n}`).classList.remove('bw-panel--hidden');

  // Update step indicators
  for (let i = 1; i <= 3; i++) {
    const ind = document.getElementById(`step-ind-${i}`);
    if (!ind) continue;
    if (i < n) ind.classList.add('done');
    else if (i === n) ind.classList.add('active');
  }

  // Panel-specific setup
  if (n === 2) renderTimeSlots();
  if (n === 3) renderSummaryPills();
  if (n === 4) renderConfirmSummary();

  // Scroll widget into view smoothly
  document.getElementById('bookingWidget').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetBooking() {
  selectedDate = null;
  selectedTime = null;
  document.getElementById('bwForm').reset();
  goToStep(1);
  renderCalendar();
}

// ---- Form submit ----
function handleBWSubmit(e) {
  e.preventDefault();
  const first = document.getElementById('bwFirst').value.trim();
  const phone = document.getElementById('bwPhone').value.trim();
  if (!first || !phone) {
    // Highlight missing fields
    [document.getElementById('bwFirst'), document.getElementById('bwPhone')].forEach(el => {
      if (!el.value.trim()) {
        el.style.borderColor = '#EF4444';
        el.focus();
        setTimeout(() => el.style.borderColor = '', 2000);
      }
    });
    return;
  }

  const btn = document.getElementById('bwSubmitBtn');
  btn.textContent = 'Confirming…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Confirm Appointment';
    btn.disabled = false;
    goToStep(4);
  }, 1100);
}

// ---- Icon helpers (inline SVG strings) ----
function calendarIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
}
function clockIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
}
function toothIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>`;
}
function personIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
}

// ---- Calendar navigation ----
document.getElementById('calPrev').addEventListener('click', () => {
  const now = new Date();
  if (calYear === now.getFullYear() && calMonth === now.getMonth()) return;
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
});

document.getElementById('calNext').addEventListener('click', () => {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
});

// ---- Service buttons ----
document.getElementById('serviceGrid').addEventListener('click', e => {
  const btn = e.target.closest('.bw-service-btn');
  if (!btn) return;
  document.querySelectorAll('.bw-service-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedService = btn.dataset.service;
});

// ---- Doctor buttons ----
document.getElementById('doctorList').addEventListener('click', e => {
  const btn = e.target.closest('.bw-doctor-btn');
  if (!btn) return;
  document.querySelectorAll('.bw-doctor-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedDoctor = btn.dataset.doc;
});

// ---- Back buttons ----
document.getElementById('backToStep1').addEventListener('click', () => goToStep(1));
document.getElementById('backToStep2').addEventListener('click', () => goToStep(2));

// ---- Scroll-reveal ----
const revealEls = document.querySelectorAll(
  '.service-card, .team-card, .testimonial-card, .about__content, .about__visual, .trust-item'
);
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.5s ease ${(i % 4) * 0.07}s, transform 0.5s ease ${(i % 4) * 0.07}s`;
  revealObserver.observe(el);
});

const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);

// ---- Boot ----
initCalendar();
