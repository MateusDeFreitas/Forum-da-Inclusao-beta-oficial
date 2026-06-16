const modal = document.getElementById("modalCalendario");
const modalImg = document.getElementById("imagemModal");
const fechar = document.querySelector(".fechar-modal");

document.querySelectorAll(".abrir-calendario img").forEach(img => {

  img.addEventListener("click", function(e) {

    e.preventDefault();

    modal.style.display = "flex";
    modalImg.src = this.src;

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