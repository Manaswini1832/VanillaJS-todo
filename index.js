document.getElementsByClassName("add")[0].addEventListener("click", () => {
  const items = [];
  const newItem = document.getElementsByClassName("new-item")[0].value;
  items.push(newItem);

  for (let i = 0; i < items.length; i++) {
    const h2 = document.createElement("h2");
    h2.textContent = newItem;
    h2.className = "item";
    h2.setAttribute("data-id", i);
    document.getElementsByClassName("new-item")[0].value = "";
    document.getElementsByClassName("items-div")[0].appendChild(h2);
  }

  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", () => {
      //   console.log(this);
    });
  });
});
