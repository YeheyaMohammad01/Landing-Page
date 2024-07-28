document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");

  menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  });

  const elements = document.querySelectorAll(".LookAt");
  elements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      console.log("rot");
      document.addEventListener("mousemove", onMouseMove);
    });

    element.addEventListener("mouseleave", function () {
      document.removeEventListener("mousemove", onMouseMove);
      element.style.transform = "rotateX(0deg) rotateY(0deg)";
    });

    function onMouseMove(event) {
      const rect = element.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((mouseY - centerY) / centerY) * 10; // Adjust the multiplier for more or less rotation
      const rotateY = ((centerX - mouseX) / centerX) * 10; // Adjust the multiplier for more or less rotation

      element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  });
});
