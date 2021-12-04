console.log("js/scripts.js connected to index.html");

document.getElementById("searchBtn").addEventListener("click", returnCompany);

function returnCompany() {
  let search = document.getElementById("search").value;
  window.location.href = '/companies/'+search;
  localStorage.setItem(search, search);
  // history();
}


function history(){
  const visited = [];
  for(let i=0; i<localStorage.length; i++){
    visited.push(localStorage.getItem(localStorage.key(i)));
  }
  // console.log(visited);
  return visited;
}
