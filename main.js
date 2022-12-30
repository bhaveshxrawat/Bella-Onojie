const hamBtn = document.getElementById("ham-Btn");
const hiddenNav = document.querySelector(".nav_header");
hamBtn.onclick = () => {
  hiddenNav.classList.toggle("active");
  document.body.classList.toggle('openDrawer');
};
const phoneIll = document.querySelector(".phone_illustrations");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("onscreen", entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.unobserve(entry.target)
    }
  });
},
{
  threshold: 0.9,
});

observer.observe(phoneIll);
