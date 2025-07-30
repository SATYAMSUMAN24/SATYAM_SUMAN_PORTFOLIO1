
// Global Error Handler and Utility Functions
class ErrorHandler {
  static showToast(message, type = 'info', duration = 5000) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.parentElement.remove()" aria-label="Close notification">×</button>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  static handleFormErrors(form, errors) {
    // Clear previous errors
    form.querySelectorAll('.form-control').forEach(input => {
      input.classList.remove('error', 'success');
    });

    // Show new errors
    Object.keys(errors).forEach(fieldName => {
      const field = form.querySelector(`[name="${fieldName}"]`);
      if (field) {
        field.classList.add('error');
        this.showToast(errors[fieldName], 'error', 3000);
      }
    });
  }

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validateName(name) {
    return name && name.trim().length >= 2 && !/^\d+$/.test(name.trim());
  }

  static validateMessage(message) {
    return message && message.trim().length >= 10;
  }

  static addLoadingState(element) {
    element.classList.add('loading');
    element.disabled = true;
  }

  static removeLoadingState(element) {
    element.classList.remove('loading');
    element.disabled = false;
  }
}

// Network status detection
class NetworkStatus {
  static isOnline() {
    return navigator.onLine;
  }

  static init() {
    window.addEventListener('online', () => {
      ErrorHandler.showToast('Connection restored!', 'success', 3000);
    });

    window.addEventListener('offline', () => {
      ErrorHandler.showToast('No internet connection', 'error', 5000);
    });
  }
}

// Performance monitoring
class PerformanceMonitor {
  static measureLoadTime() {
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log(`Page loaded in ${Math.round(loadTime)}ms`);
      
      if (loadTime > 3000) {
        console.warn('Page load time is slow:', loadTime);
      }
    });
  }

  static init() {
    this.measureLoadTime();
  }
}

// Initialize utilities
document.addEventListener('DOMContentLoaded', () => {
  NetworkStatus.init();
  PerformanceMonitor.init();
});

// Scroll behavior utility
class ScrollManager {
  static smoothScrollTo(element) {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  static scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ErrorHandler, NetworkStatus, PerformanceMonitor, ScrollManager };
}

// Make available globally
if (typeof window !== 'undefined') {
  window.ErrorHandler = ErrorHandler;
  window.NetworkStatus = NetworkStatus;
  window.PerformanceMonitor = PerformanceMonitor;
  window.ScrollManager = ScrollManager;
}
