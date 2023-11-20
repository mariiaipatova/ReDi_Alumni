document
  .getElementById("surveyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let name = document.getElementById("name").value;
    let skills = document.getElementById("skills").value;
    let link = document.getElementById("linkInput").value;
    let file = document.getElementById("fileInput").files[0];

    // let url = `result.html?name=${name}&skills=${skills}&finalProject=${finalProject}`;

    // Redirect to result.html with the form data in the URL
    // window.location.href = url;

    alert(`Thanks ${name} for submit.`);
  });
