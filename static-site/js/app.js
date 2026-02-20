// Main JavaScript functionality

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for navigation links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Initialize accordions
  initAccordions();

  // Initialize forms
  initForms();

  // Initialize toast notifications
  initToast();

  // Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
});

// Accordion functionality
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');
    
    if (trigger && content) {
      trigger.addEventListener('click', function() {
        const isOpen = item.classList.contains('active');
        
        // Close all accordions
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.accordion-content');
          if (otherContent) {
            otherContent.style.maxHeight = null;
          }
        });
        
        // Open clicked accordion if it was closed
        if (!isOpen) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });
}

// Form handling
function initForms() {
  const forms = document.querySelectorAll('.inquiry-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      // Disable button and show loading
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
      
      // Get form data
      const formData = new FormData(form);
      const data = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      
      formData.forEach((value, key) => {
        data[key] = value;
      });
      
      // Simulate API call
      setTimeout(() => {
        // Store in localStorage
        const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
        inquiries.push(data);
        localStorage.setItem('inquiries', JSON.stringify(inquiries));
        
        // Show success message
        showToast('Inquiry submitted successfully!', 'Our team will contact you within 24 hours.', 'success');
        
        // Reset form
        form.reset();
        
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }, 1500);
    });
  });
}

// Toast notification system
let toastTimeout;

function initToast() {
  // Create toast container if it doesn't exist
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  
  // Clear existing toast
  if (toastTimeout) {
    clearTimeout(toastTimeout);
    container.innerHTML = '';
  }
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-icon">${type === 'success' ? '✓' : '!'}</div>
      <div class="toast-text">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  container.appendChild(toast);
  
  // Animate in
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Auto remove after 5 seconds
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Utility function to format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(amount);
}

// Card hover effects
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.country-card, .service-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});
