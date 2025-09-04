console.log("test");

fetch('page_header.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('header').innerHTML = html;
      });
    fetch('index_2.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      });
    fetch('page_footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('footer').innerHTML = html;
      });

function page_2() {
    fetch('index_2.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    });
}

function page_3() {
    fetch('index_3.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    });
}