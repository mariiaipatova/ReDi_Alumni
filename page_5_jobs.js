const items = document.querySelectorAll(".block-item");

function filter() {
  const position = document.getElementById("position");
  const selectedValue = position.value;

  items.forEach((item) => {
    if (selectedValue === "all" || item.classList.contains(selectedValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

document.querySelector("button").addEventListener("click", filter);
