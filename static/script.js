async function fetch_page(string_page_, string_id_) {
    var page = await fetch(string_page_);
    var content = await page.text();
    var div = document.getElementById(string_id_);
    div.innerHTML = content;
}

async function button_clipboard(string_id_) {
    var text = document.getElementById(string_id_).innerHTML;
    await navigator.clipboard.writeText(text);

    showAlert("test")
}

function showAlert(message) {
    const alertBox = document.getElementById("alert");
    alertBox.textContent = message;

    alertBox.style.display = "block";
    requestAnimationFrame(() => {
        alertBox.style.opacity = 1;
    });

    setTimeout(() => {
        alertBox.style.opacity = 0;
        setTimeout(() => alertBox.style.display = "none", 500);
    }, 2000);
}

fetch_page("page_header.html", "header");
fetch_page("page_footer.html", "footer");
fetch_page("page_home.html", "content");
