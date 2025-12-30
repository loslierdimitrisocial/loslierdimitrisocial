async function fetch_page(string_page_, string_id_) {
    var page = await fetch(string_page_);
    var content = await page.text();
    var div = document.getElementById(string_id_);
    div.innerHTML = content;
}

fetch_page("page_header.html", "header");
fetch_page("page_footer.html", "footer");
fetch_page("page_home.html", "content");