const navbar = document.querySelector('.nav');

navbar.innerHTML += `
   <nav
  id="navbar"
  class="fixed top-0 inset-x-0 z-50 py-4 px-4 md:px-8"
>
  <div class="max-w-7xl mx-auto flex items-center justify-between">

    <!-- Logo -->
    <a href="./index.html" class="flex items-center gap-3 min-w-0">
      <img
        src="/images/cancer_logo.jpg"
        alt="Cancer Clinic Kolkata"
        class="h-12 sm:h-14 w-auto object-contain rounded-[30px]"
      />
    </a>

    <!-- Desktop Nav -->
    <ul
      class="hidden md:flex items-center gap-8 text-sm font-medium"
      id="desktop-nav"
    >
      <li>
        <a href="./index.html#home" class="nav-link">
          Home
        </a>
      </li>

      <li>
        <a href="./index.html#about" class="nav-link">
          About
        </a>
      </li>

      <li>
        <a href="./index.html#doctor" class="nav-link">
          Doctor
        </a>
      </li>

      <li>
        <a href="./index.html#services" class="nav-link">
          Services
        </a>
      </li>

      
      <li>
        <a href="./corporate.html" class="nav-link">
          Corporate
        </a>
      </li>

     

      <li>
        <a href="./index.html#contact" class="nav-link">
          Contact
        </a>
      </li>

      <!-- Emergency Button -->
      <li>
        <a
          href="tel:919163952384"
          class="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-all duration-300"
        >
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"
            />
          </svg>

          Emergency
        </a>
      </li>
    </ul>

    <!-- Hamburger -->
    <button
      id="menu-btn"
      class="md:hidden flex flex-col gap-1.5 p-2"
      aria-label="Toggle menu"
    >
      <span
        class="w-6 h-0.5 bg-white rounded transition-all"
        id="mb1"
      ></span>

      <span
        class="w-6 h-0.5 bg-white rounded transition-all"
        id="mb2"
      ></span>

      <span
        class="w-6 h-0.5 bg-white rounded transition-all"
        id="mb3"
      ></span>
    </button>
  </div>

  <!-- Mobile Nav -->
  <div
    id="mobile-menu"
    class="md:hidden mt-3 rounded-2xl mx-2 shadow-2xl"
  >
    <ul
      class="flex flex-col py-5 px-6 gap-5 text-sm font-medium"
    >
      <li>
        <a
          href="./index.html#home"
          onclick="closeMobileMenu()"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="./index.html#about"
          onclick="closeMobileMenu()"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="./index.html#doctor"
          onclick="closeMobileMenu()"
        >
          Doctor
        </a>
      </li>

      <li>
        <a
          href="./index.html#services"
          onclick="closeMobileMenu()"
        >
          Services
        </a>
      </li>

       <li>
        <a
          href="/corporate.html"
          onclick="closeMobileMenu()"
        >
          Corporate
        </a>
      </li>

     

      <li>
        <a
          href="./index.html#contact"
          onclick="closeMobileMenu()"
        >
          Contact
        </a>
      </li>

      <li class="pt-2">
        <a
          href="tel:919163952384"
          class="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold px-5 py-3 rounded-full inline-flex items-center gap-2"
        >
          📞 Emergency
        </a>
      </li>
    </ul>
  </div>
</nav>
`