const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("estimate-form");
const status = document.getElementById("form-status");
const destination = "Neighborlycleaning@gmail.com";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const phone = data.get("phone").trim();
  const email = data.get("email").trim();
  const service = data.get("service");
  const date = data.get("date");
  const details = data.get("details").trim();

  const subject = encodeURIComponent(`Cleaning Estimate Request — ${service}`);
  const body = encodeURIComponent(
`Hello Michelle,

I would like to request a cleaning estimate.

Name: ${name}
Phone: ${phone}
Email: ${email}
Requested service: ${service}
Preferred date: ${date}
Additional details:
${details || "None provided"}

Thank you!`
  );

  window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
  status.textContent = "Your email application should open with the request prepared. Please review it and press Send to deliver your request.";
});

document.getElementById("year").textContent = new Date().getFullYear();
