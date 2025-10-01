    document.addEventListener("DOMContentLoaded", function () {
      const popImages = document.querySelectorAll(".pop");
      const modal = new bootstrap.Modal(document.getElementById("imagemodal"));
      const modalImg = document.querySelector(".modal-image");
      const closeBtn = document.querySelector(".close-modal");

      // Clic sur image agrandie pour fermer
      modalImg.addEventListener("click", function () {
        modal.hide();
      });

      // Clic sur image miniature pour ouvrir
      popImages.forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          const src = el.querySelector("img").getAttribute("src");
          modalImg.setAttribute("src", src);
          modal.show();
        });
      });
    });
