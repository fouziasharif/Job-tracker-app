// ===== NAVBAR: Mobile Menu Toggle =====
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("nav ul");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// ===== DEMO BUTTON: Show alert for now =====
const demoBtn = document.querySelector("#demo-btn");
if (demoBtn) {
  demoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Demo feature coming soon 🚀");
  });
}

// ===== SIMPLE FORM HANDLER (Sign In / Sign Up) =====
const signupForm = document.querySelector("#signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm.querySelector("input[type='email']").value;
    const password = signupForm.querySelector("input[type='password']").value;

    // Temporary: just log details (later connect to backend)
    console.log("Signup attempt:", { email, password });
    alert("✅ Signup form submitted! (Backend coming soon)");
  });
}
