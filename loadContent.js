function loadDoc(path, target){
    fetch(path)
    .then(data => data.text())
    .then(html => target.innerHTML += html); 
}

const header = document.getElementById("header");
const footer = document.getElementById("footer");

loadDoc('./components/nav.html');
