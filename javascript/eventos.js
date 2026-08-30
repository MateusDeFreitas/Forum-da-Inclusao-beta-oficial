const modal = document.getElementById("modalCalendario");
const modalImg = document.getElementById("imagemModal");
const fechar = document.querySelector(".fechar-modal");

document.querySelectorAll(".abrir-card img").forEach(img => {

  img.addEventListener("click", function(e) {

    e.preventDefault();

    modal.style.display = "flex";
    modalImg.src = this.src;

  });

});

document.querySelectorAll(".abrir-imagem-sem-logo").forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    modal.style.display = "flex";
    modalImg.src = this.querySelector(".img_").src;

  });

});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {

  if(e.target === modal){
    modal.style.display = "none";
  }

});