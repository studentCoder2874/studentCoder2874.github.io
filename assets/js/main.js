/* ============================================================
   main.js — Navigation, Scroll Animations, Project Filtering
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Utility
  ---------------------------------------------------------- */
  function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }
  function $$(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }

  /* ----------------------------------------------------------
     Mobile Navigation Toggle
  ---------------------------------------------------------- */
  const hamburger = $('#hamburger');
  const navLinks  = $('#nav-links');
  const header    = $('#site-header');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('active');
      navLinks.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));

      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    $$('.nav-link', navLinks).forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target) && navLinks.classList.contains('open')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ----------------------------------------------------------
     Sticky Header Styles on Scroll
  ---------------------------------------------------------- */
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     Active Nav Link Highlighting
  ---------------------------------------------------------- */
  (function highlightActiveLink() {
    var currentPath = window.location.pathname.replace(/\/$/, '');
    $$('.nav-link').forEach(function (link) {
      var href = link.getAttribute('href').replace(/\/$/, '');
      if (href === currentPath || (href !== '' && currentPath.startsWith(href))) {
        link.classList.add('active');
      }
    });
  }());

  /* ----------------------------------------------------------
     Smooth Scroll for Anchor Links
  ---------------------------------------------------------- */
  document.addEventListener('click', function (e) {
    var target = e.target.closest('a[href^="#"]');
    if (!target) return;
    var id = target.getAttribute('href');
    if (id === '#') return;
    var el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* ----------------------------------------------------------
     Intersection Observer — Scroll-In Fade Animations
  ---------------------------------------------------------- */
  var fadeEls = $$('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ----------------------------------------------------------
     Scroll-to-Top Button
  ---------------------------------------------------------- */
  var scrollTopBtn = $('#scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----------------------------------------------------------
     Project Tag Filtering
  ---------------------------------------------------------- */
  var filterBtns  = $$('.filter-btn');
  var projectCards = $$('.project-card');

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.dataset.filter;

        // Toggle active state
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        projectCards.forEach(function (card) {
          if (filter === 'all') {
            card.classList.remove('hidden');
          } else {
            var tags = (card.dataset.tags || '').toLowerCase().split(',').map(function (t) {
              return t.trim();
            });
            card.classList.toggle('hidden', !tags.includes(filter.toLowerCase()));
          }
        });
      });
    });
  }

  /* ----------------------------------------------------------
     Reading Time Calculation
  ---------------------------------------------------------- */
  var readingTimeEl = $('.reading-time');
  if (readingTimeEl) {
    var content = readingTimeEl.dataset.content || document.querySelector('.post-body, .page-content');
    var text = typeof content === 'string' ? content : (content ? content.textContent : '');
    var words = text.trim().split(/\s+/).filter(Boolean).length;
    var minutes = Math.max(1, Math.round(words / 200));
    readingTimeEl.textContent = minutes + ' min read';
  }

}());
