function loadPage(page) {
    fetch('page_header.html')
      .then(res => res.text())
      .then(data => document.getElementById('header').innerHTML = data);
  
    fetch(page)
      .then(res => res.text())
      .then(data => document.getElementById('content').innerHTML = data);
  
    fetch('page_footer.html')
      .then(res => res.text())
      .then(data => document.getElementById('footer').innerHTML = data);
  }
  
  // Load default page
  window.onload = () => loadPage('page_home.html');
  