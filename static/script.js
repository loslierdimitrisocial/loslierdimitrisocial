function set_page(string_page_, string_id_) {
    fetch('page_' + string_page_ + '.html')
        .then(res => res.text())
        .then(data => document.getElementById('id_' + string_id_).innerHTML = data);
}

set_page("home", "content")
set_page("header", "header")
set_page("footer", "footer")