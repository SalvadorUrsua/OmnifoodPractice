const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const header = document.querySelector(".header");
const mobileButton = document.querySelector(".btn-mobile-nav");
mobileButton.addEventListener("click", () => {
  header.classList.toggle("mobile-nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionID = href;
      const sectionElement = document.querySelector(sectionID);
      sectionElement.scrollIntoView({ behavior: "smooth" });

      if (link.classList.contains("main-nav-link")) {
        header.classList.toggle("mobile-nav-open");
      }
    }
  });
});

const sectionHero = document.querySelector(".section-hero");

// #region observer
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);
observer.observe(sectionHero);
// #endregion observer

// btnMenu.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     header.classList.toggle("mobile-nav-open");
//   });
// });

// const btnLink = document.querySelectorAll(".main-nav-link");

// btnLink.forEach((navlink) => {
//   navlink.addEventListener("click", () => {
//     header.classList.toggle("mobile-nav-open");
//   });
// });

// const btnMenu = document.querySelectorAll(".icon-mobile-nav");
// btnMenu[0].addEventListener("click", () => {
//   header.classList.toggle("mobile-nav-open");
// });

// btnMenu[1].addEventListener("click", () => {
//   header.classList.toggle("mobile-nav-open");
// });

// the codes above replaced by this one below

//   const rect = sectionElement.getBoundingClientRect();
// const top = rect.top;

//   window.scrollTo({
//     top: top,
//     behavior: "smooth",
//   });
