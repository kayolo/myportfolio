const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () =>{
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent! (Connect this form to EmailsJS or Formspree to receive messages.)");
}); 