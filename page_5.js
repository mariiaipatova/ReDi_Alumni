const list = document.querySelector(".position").value;
const items = document.querySelectorAll(".item");

function filter() {
  list.addEventListener("change", (event) => {
    const targetValue = event.target.dataset.Id;
    console.log(targetId);
    GetItems(targetId);
  });
}

filter();

function GetItems(className) {
  item.forEach((item) => {
    if (className === "all" || item.classList.contains(className)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function listenTo(element, eventType, callback) {
  element.addEventListener(eventType, callback);
}

// Example usage:
const object = document.querySelector(".position"); // Replace '.object' with your desired selector
const other = document.querySelector(".item"); // Replace '.other' with your desired selector

function myCallback(event) {
  // Your callback logic here
}

listenTo(object, "click", myCallback);
