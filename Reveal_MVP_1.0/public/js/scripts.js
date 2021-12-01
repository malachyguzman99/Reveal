console.log("js/scripts.js connected to index.html");
localStorage.setItem("top-secret-information", "you would never guess what kind of data is stored here.")

document.getElementById("searchBtn").addEventListener("click", returnCompany);


function returnCompany() {
  let search = document.getElementById("search").value;
  console.log(search);
}

// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
