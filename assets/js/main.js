/* =========================================================================
   MindMe! — behaviour
   Depends on i18n.js (I18N, I18N_LANGS, I18N_DEFAULT, I18N_HTML).
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- safe storage (site must work if storage is blocked) ---------- */
  var STORE_KEY = "mindme.lang";
  function readLang() {
    try { return window.localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }
  function writeLang(v) {
    try { window.localStorage.setItem(STORE_KEY, v); } catch (e) { /* private mode — ignore */ }
  }

  /* ---------- i18n ---------- */
  function applyLang(lang) {
    if (I18N_LANGS.indexOf(lang) === -1) lang = I18N_DEFAULT;
    var dict = I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = dict[key];
      if (val == null) return;
      if (I18N_HTML.has(key)) el.innerHTML = val;
      else el.textContent = val;
    });

    document.documentElement.setAttribute("lang", lang);
    document.body.setAttribute("data-lang", lang);

    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    writeLang(lang);
  }

  /* ---------- nav: mobile toggle ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.querySelector(".nav__links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var open = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          links.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  /* ---------- scroll-spy: highlight active nav link ---------- */
  function initScrollSpy() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
    var linkFor = {};
    document.querySelectorAll('.nav__links a[href^="#"]').forEach(function (a) {
      linkFor[a.getAttribute("href").slice(1)] = a;
    });
    if (!sections.length || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = linkFor[en.target.id];
        if (!a) return;
        if (en.isIntersecting) {
          Object.keys(linkFor).forEach(function (id) { linkFor[id].classList.remove("is-active"); });
          a.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- reveal on scroll (reduced-motion aware) ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- concept video: activate embed from data-embed ---------- */
  function initConceptVideo() {
    var box = document.querySelector(".concept__video");
    if (!box) return;
    var embed = box.getAttribute("data-embed"); // e.g. "youtube:VIDEO_ID" or "vimeo:VIDEO_ID"
    if (!embed || embed.indexOf("VIDEO_ID") !== -1) return; // still a placeholder
    var parts = embed.split(":"), src = "";
    if (parts[0] === "youtube") src = "https://www.youtube-nocookie.com/embed/" + parts[1];
    else if (parts[0] === "vimeo") src = "https://player.vimeo.com/video/" + parts[1];
    if (!src) return;
    var iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = "MindMe! concept presentation";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    box.innerHTML = "";
    box.appendChild(iframe);
  }

  /* ---------- contact form ----------
     No form-handling service is configured yet, so the form composes an email to
     the team via the visitor's mail app (data-mailto). To switch to a service
     (Formspree/Web3Forms/Basin) later, set data-endpoint on the form to its URL. */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    var status = form.querySelector(".form-status");
    var endpoint = form.getAttribute("data-endpoint") || "";
    var mailto = form.getAttribute("data-mailto") || "";
    var useService = endpoint && endpoint.indexOf("YOUR_FORM_ID") === -1;

    form.addEventListener("submit", function (e) {
      // Honeypot: if filled, silently drop (bot).
      var hp = form.querySelector('input[name="_gotcha"]');
      if (hp && hp.value) { e.preventDefault(); return; }

      // No service → open the visitor's mail app addressed to the team.
      if (!useService) {
        e.preventDefault();
        if (form.reportValidity && !form.reportValidity()) return;
        var val = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value : ""; };
        var subject = "MindMe! enquiry" + (val("name") ? " — " + val("name") : "");
        var body = "Name: " + val("name") + "\nEmail: " + val("email") + "\n\n" + val("message");
        window.location.href = "mailto:" + mailto +
          "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        setStatus("ok", I18N[curLang()]["contact.mailto"]);
        return;
      }

      // Service configured: AJAX submit for inline feedback (fall back to native POST without fetch).
      if (!window.fetch) { form.setAttribute("action", endpoint); return; }
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      setStatus("", "…");
      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          if (r.ok) { form.reset(); setStatus("ok", I18N[curLang()]["contact.ok"]); }
          else { setStatus("err", I18N[curLang()]["contact.err"]); }
        })
        .catch(function () { setStatus("err", I18N[curLang()]["contact.err"]); })
        .finally(function () { if (btn) btn.disabled = false; });
    });

    function setStatus(kind, msg) {
      if (!status) return;
      status.textContent = msg;
      status.className = "form-status" + (kind ? " is-" + kind : "");
    }
  }

  /* ---------- beta waitlist (email → mail app, no backend) ---------- */
  function initBetaWaitlist() {
    var form = document.getElementById("beta-waitlist");
    if (!form) return;
    var status = form.querySelector(".form-status");
    var mailto = form.getAttribute("data-mailto") || "";
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var hp = form.querySelector('input[name="_gotcha"]');
      if (hp && hp.value) return; // bot
      if (form.reportValidity && !form.reportValidity()) return;
      var email = (form.querySelector('[name="email"]') || {}).value || "";
      var subject = "MindMe! beta waitlist — next wave";
      var body = "Please reserve a spot for the next beta wave.\n\nEmail: " + email;
      window.location.href = "mailto:" + mailto +
        "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      if (status) { status.textContent = I18N[curLang()]["beta.wl_ok"]; status.className = "form-status is-ok"; }
    });
  }

  function curLang() { return document.body.getAttribute("data-lang") || I18N_DEFAULT; }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLang(readLang() || I18N_DEFAULT);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.dataset.lang); });
    });
    initNav();
    initScrollSpy();
    initReveal();
    initConceptVideo();
    initContactForm();
    initBetaWaitlist();
  });
})();
