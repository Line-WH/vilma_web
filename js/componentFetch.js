fetch('nav.html')
    .then(res => res.text())
    .then(html => document.getElementById('nav-placeholder').innerHTML = html);

fetch('footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer-placeholder').innerHTML = html);