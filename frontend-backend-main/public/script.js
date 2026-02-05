fetch("/api/products")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("loader").style.display = "none";

    const container = document.getElementById("products");

    data.products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h3>${product.title}</h3>
      `;

      container.appendChild(card);
    });
  });
