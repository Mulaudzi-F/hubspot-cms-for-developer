document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".practice--image--container figure");
  const modal = document.querySelector(".modal-container");
  const modalContent = document.querySelector(".modal-content");
  const closeModal = document.querySelector(".close-modal");
  const modalBody = document.querySelector(".modal-body");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("Hello World");
      const imageSrc = item.getAttribute("data-image");
      const title = item.getAttribute("data-title");
      const description = item.getAttribute("data-description");

      modalBody.innerHTML = `
          <div>
            <img src='${imageSrc}' />
          </div> 
          <div>
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
        `;

      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
