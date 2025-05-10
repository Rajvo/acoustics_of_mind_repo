const btns = document.querySelectorAll('.accordion-btn');
btns.forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
