// console.log("test");

fetch('page_header.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('id_header').innerHTML = html;
      });
//     fetch('index_2.html')
//       .then(response => response.text())
//       .then(html => {
//         document.getElementById('content').innerHTML = html;
//       });
    fetch('page_footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('id_footer').innerHTML = html;
      });

// function page_2() {
//     fetch('index_2.html')
//     .then(response => response.text())
//     .then(html => {
//       document.getElementById('content').innerHTML = html;
//     });
// }

// function page_3() {
//     fetch('index_3.html')
//     .then(response => response.text())
//     .then(html => {
//       document.getElementById('content').innerHTML = html;
//     });
// }



// function set_page_home() {

// }
// function set_page_gallery() {

// }
// function set_page_contact() {

// }

function set_page(string_page_) {
    var string_page = string_page_ + ".html"
    fetch(string_page)
    .then(response => response.text())
    .then(html => {
      document.getElementById('id_content').innerHTML = html;
    });
}