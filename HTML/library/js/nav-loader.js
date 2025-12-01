function loadNav(selector, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.querySelector(selector).innerHTML = data);
}
