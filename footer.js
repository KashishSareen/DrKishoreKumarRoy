const footer = document.querySelector('.footer');

footer.innerHTML = `
<footer id="contact" class="grad-blue text-white pt-16 pb-8 px-4">
  <div class="max-w-7xl mx-auto">
    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

      <!-- Brand -->
      <div data-aos="fade-up">
        <img
          src="/images/cancer_logo.jpg"
          alt="Cancer Clinic Kolkata"
          class="h-10 w-auto object-contain mb-4 brightness-150 rounded-[30px]"
        />
        <p class="text-white/60 text-xs leading-relaxed mb-4">
          Kolkata's premier oncology center providing comprehensive cancer
          care with advanced technology and compassionate expertise.
        </p>

        <a
          href="tel:919163952384"
          class="inline-flex items-center gap-2 text-xs font-semibold"
          style="color:#e8799a;"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/>
          </svg>
          Emergency: +91 9163952384
        </a>
      </div>

      <!-- Quick Links -->
      <div data-aos="fade-up" data-aos-delay="80">
        <h4 class="font-semibold text-sm mb-5 text-white">Quick Links</h4>

        <ul class="space-y-2.5 text-xs text-white/60">
          <li><a href="/index.html#home" class="hover:text-white transition-colors">Home</a></li>
          <li><a href="/index.html#about" class="hover:text-white transition-colors">About Us</a></li>
          <li><a href="/index.html#doctor" class="hover:text-white transition-colors">Our Doctor</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Services</a></li>
          <li><a href="/corporate.html" class="hover:text-white transition-colors">Corporate</a></li>
          <li><a href="/index.html#appointment" class="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Our Services - Column 1 -->
      <div data-aos="fade-up" data-aos-delay="160">
        <h4 class="font-semibold text-sm mb-5 text-white">Our Services</h4>

        <ul class="space-y-2.5 text-xs text-white/60">
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Cancer Surgery</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Chemotherapy</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Radiotherapy</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Immunotherapy</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Palliative Care &amp; Pain Management</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">General &amp; Laparoscopic Surgery</a></li>
        </ul>
      </div>

      <!-- Our Services - Column 2 -->
      <div data-aos="fade-up" data-aos-delay="200">
        <h4 class="font-semibold text-sm mb-5 text-white ">Our Services</h4>

        <ul class="space-y-2.5 text-xs text-white/60">
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Laser Surgery</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">General Medicine</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Gynecological Surgeries</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Nutrition Therapy &amp; Counselling</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Health Guide</a></li>
          <li><a href="/index.html#services" class="hover:text-white transition-colors">Medical Career Counselling</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div data-aos="fade-up" data-aos-delay="240">
        <h4 class="font-semibold text-sm mb-5 text-white">Contact Us</h4>

        <ul class="space-y-3 text-xs text-white/60">

          <li class="flex items-start gap-2">
            <svg
              class="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
              style="color:#e8799a;"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Kolkata, West Bengal
          </li>

          <li class="flex items-center gap-2">
            <svg
              class="w-3.5 h-3.5 flex-shrink-0"
              style="color:#e8799a;"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +91 9163952384
          </li>

          <li class="flex items-center gap-2">
            <svg
              class="w-3.5 h-3.5 flex-shrink-0"
              style="color:#e8799a;"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            contact@cancerclinickolkata.com
          </li>

          <!-- Social Icons with Font Awesome -->
          <li class="flex items-center gap-5 mt-4 pt-2">
            <a 
              href="https://www.linkedin.com/company/cancer-clinic-kolkata/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white hover:text-white/80 transition-colors text-3xl"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>

            <a 
              href="https://www.youtube.com/@KnowYourHealth-DrKKRoy" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white hover:text-white/80 transition-colors text-3xl"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>

            <a 
              href="https://www.instagram.com/cancer_clinic_kolkata?igsh=aHYwbDBvaHR6dTln" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white hover:text-white/80 transition-colors text-3xl"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>

        </ul>
      </div>

    </div>

    <div class="border-t border-white/10 pt-8 text-center text-xs text-white/40">
      © 2026 Cancer Clinic Kolkata. All Rights Reserved. |
      Kolkata's No. 1 Cancer Care Center
    </div>

  </div>
</footer>
`