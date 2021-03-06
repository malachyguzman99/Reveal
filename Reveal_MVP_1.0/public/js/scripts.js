console.log("js/scripts.js connected to index.html");

document.getElementById("searchBtn").addEventListener("click", returnCompany);

// Get the input field
var input = document.getElementById("search");

// Execute search when enter button pressed
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchBtn").click();
  }
});

function returnCompany() {
  let search = document.getElementById("search").value.trim().toLowerCase();
  window.location.href = '/companies/'+search;
  localStorage.setItem(search, search);
  // history();
}

// function history(){
//   const visited = [];
//   for(let i=0; i<localStorage.length; i++){
//     visited.push(localStorage.getItem(localStorage.key(i)));
//   }
//   // console.log(visited);
//   return visited;
// }

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function storePrefFormCookies(form)
{
  setCookie("payRatioPref", form.payRatioPref.value, 1);
  setCookie("bCorpPref", form.bCorpPref.value, 1);
  setCookie("unClimateNeutralNowPref", form.unClimateNeutralNowPref.value, 1);
  setCookie("climateNeutralPref", form.climateNeutralPref.value, 1);
  setCookie("politicalPrefSlider", form.politicalPrefSlider.value, 1);
  window.alert("Preferences Saved!")
  return true;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function calculatePreferenceMatchScore()
{
  score = parseInt(getCookie("payRatioPref")) + parseInt(getCookie("bCorpPref")) + parseInt(getCookie("unClimateNeutralNowPref")) + parseInt(getCookie("climateNeutralPref")) + parseInt(getCookie("politicalPrefSlider"));
  score = 4 * score;
  return score;
}
