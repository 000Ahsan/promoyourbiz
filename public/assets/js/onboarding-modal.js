(function () {
  const TOTAL_STEPS = 5;

  const services = [
    { id: 'branding', name: 'Brand Strategy' },
    { id: 'website', name: 'Web Design / Development' },
    { id: 'marketing', name: 'Growth Partnership & SEO' },
    { id: 'content', name: 'Copywriting & Messaging' }
  ];

  const budgetLabels = {
    'under-5k': 'Under $5,000',
    '5k-10k': '$5,000 - $10,000',
    '10k-25k': '$10,000 - $25,000',
    '25k-50k': '$25,000 - $50,000',
    '50k+': '$50,000+'
  };

  const timelineLabels = {
    'asap': 'ASAP',
    '1-2-weeks': '1-2 weeks',
    '1-month': '1 month',
    '2-3-months': '2-3 months',
    '3+months': '3+ months'
  };

  var data = {
    service: '',
    businessName: '',
    businessType: '',
    budget: '',
    timeline: '',
    description: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  };

  var currentStep = 1;

  var overlay = document.getElementById('onboarding-modal-overlay');
  var progressFill = document.getElementById('modal-progress-fill');

  function showStep(step) {
    currentStep = step;
    progressFill.style.width = ((step / TOTAL_STEPS) * 100) + '%';

    for (var i = 1; i <= TOTAL_STEPS; i++) {
      var el = document.getElementById('modal-step-' + i);
      if (el) el.style.display = (i === step) ? '' : 'none';
    }

    if (step === 5) populateSummary();
  }

  function openModal() {
    overlay.style.display = '';
    document.body.style.overflow = 'hidden';
    showStep(1);
    resetData();
  }

  function closeModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }

  function resetData() {
    data = {
      service: '',
      businessName: '',
      businessType: '',
      budget: '',
      timeline: '',
      description: '',
      contactName: '',
      contactEmail: '',
      contactPhone: ''
    };

    // Reset form fields
    var businessNameInput = document.getElementById('modal-businessName');
    var businessTypeSelect = document.getElementById('modal-businessType');
    var descriptionTextarea = document.getElementById('modal-description');
    var contactNameInput = document.getElementById('modal-contactName');
    var contactEmailInput = document.getElementById('modal-contactEmail');
    var contactPhoneInput = document.getElementById('modal-contactPhone');

    if (businessNameInput) businessNameInput.value = '';
    if (businessTypeSelect) businessTypeSelect.selectedIndex = 0;
    if (descriptionTextarea) descriptionTextarea.value = '';
    if (contactNameInput) contactNameInput.value = '';
    if (contactEmailInput) contactEmailInput.value = '';
    if (contactPhoneInput) contactPhoneInput.value = '';

    // Reset radio buttons
    var radios = overlay.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < radios.length; i++) radios[i].checked = false;

    // Reset service cards
    var cards = overlay.querySelectorAll('.service-card');
    for (var i = 0; i < cards.length; i++) cards[i].classList.remove('selected');

    // Reset next buttons
    document.getElementById('step1-next').disabled = true;
    document.getElementById('step2-next').disabled = true;
    document.getElementById('step3-next').disabled = true;
    document.getElementById('step4-next').disabled = true;
  }

  function populateSummary() {
    var serviceObj = services.filter(function (s) { return s.id === data.service; })[0];
    document.getElementById('summary-service').textContent = serviceObj ? serviceObj.name : '';
    document.getElementById('summary-business').textContent = data.businessName;
    document.getElementById('summary-budget').textContent = budgetLabels[data.budget] || '';
    document.getElementById('summary-timeline').textContent = timelineLabels[data.timeline] || '';
  }

  // Open button(s)
  document.querySelectorAll('[data-open-onboarding]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  // Close button
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);

  // Click overlay to close
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  // Step 1: Service selection
  var serviceCards = overlay.querySelectorAll('.service-card');
  serviceCards.forEach(function (card) {
    card.addEventListener('click', function () {
      serviceCards.forEach(function (c) { c.classList.remove('selected'); });
      card.classList.add('selected');
      data.service = card.getAttribute('data-service');
      document.getElementById('step1-next').disabled = false;
    });
  });

  // Step 2: Business info validation
  var businessNameInput = document.getElementById('modal-businessName');
  var businessTypeSelect = document.getElementById('modal-businessType');

  function validateStep2() {
    data.businessName = businessNameInput.value.trim();
    data.businessType = businessTypeSelect.value;
    document.getElementById('step2-next').disabled = !(data.businessName && data.businessType);
  }
  businessNameInput.addEventListener('input', validateStep2);
  businessTypeSelect.addEventListener('change', validateStep2);

  // Step 3: Budget & Timeline validation
  function validateStep3() {
    var budgetRadio = overlay.querySelector('input[name="budget"]:checked');
    var timelineRadio = overlay.querySelector('input[name="timeline"]:checked');
    data.budget = budgetRadio ? budgetRadio.value : '';
    data.timeline = timelineRadio ? timelineRadio.value : '';
    data.description = document.getElementById('modal-description').value.trim();
    document.getElementById('step3-next').disabled = !(data.budget && data.timeline);
  }
  overlay.querySelectorAll('input[name="budget"], input[name="timeline"]').forEach(function (r) {
    r.addEventListener('change', validateStep3);
  });
  document.getElementById('modal-description').addEventListener('input', validateStep3);

  // Step 4: Contact info validation
  var contactNameInput = document.getElementById('modal-contactName');
  var contactEmailInput = document.getElementById('modal-contactEmail');
  var contactPhoneInput = document.getElementById('modal-contactPhone');

  function validateStep4() {
    data.contactName = contactNameInput.value.trim();
    data.contactEmail = contactEmailInput.value.trim();
    data.contactPhone = contactPhoneInput.value.trim();
    document.getElementById('step4-next').disabled = !(data.contactName && data.contactEmail);
  }
  contactNameInput.addEventListener('input', validateStep4);
  contactEmailInput.addEventListener('input', validateStep4);
  contactPhoneInput.addEventListener('input', validateStep4);

  // Next buttons
  document.getElementById('step1-next').addEventListener('click', function () { showStep(2); });
  document.getElementById('step2-next').addEventListener('click', function () { showStep(3); });
  document.getElementById('step3-next').addEventListener('click', function () { showStep(4); });
  document.getElementById('step4-next').addEventListener('click', function () { showStep(5); });

  // Back buttons
  overlay.querySelectorAll('.back-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var goto = parseInt(btn.getAttribute('data-goto'), 10);
      if (goto) showStep(goto);
    });
  });

  // Submit
  document.getElementById('modal-submit-btn').addEventListener('click', function () {
    closeModal();
  });

  // Escape key to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.style.display !== 'none') {
      closeModal();
    }
  });
})();
