// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function title(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

// https://stackoverflow.com/questions/7524585/how-do-i-get-the-information-from-a-meta-tag-with-javascript
function getMeta(metaName) {
  const metas = document.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}

function insertHtmlAbove(htmlObject, rawHtml) {
  prev = htmlObject.innerHTML;
  htmlObject.innerHTML = rawHtml += prev;
}

function insertHtmlBelow(htmlObject, rawHtml) {
  prev = htmlObject.innerHTML;
  htmlObject.innerHTML = prev += rawHtml;
}

window.addEventListener("load", async () => {
  root = document.getElementById("root");
  let navbar = await fetch("/templates/navbar.html");
  let footer = await fetch("/templates/footer.html");
  let head = await fetch("/templates/head.html");
  navbar = navbar.text();
  footer = footer.text();
  head = head.text();
  navbar.then((navbar) => {
    insertHtmlAbove(root, navbar);
  });
  footer.then((footer) => {
    insertHtmlBelow(root, footer);
  });
  head.then((head) => {
    insertHtmlBelow(document.head, head);
  });

  page = getMeta("page");

  window.setTimeout(() => {
    document.getElementById(page).classList.add("active");
    title = document.getElementsByTagName("title")[0].innerHTML += " - " + title(page)
  }, 50);
});
