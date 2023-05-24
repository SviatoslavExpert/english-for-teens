let coll = document.getElementsByClassName("collapsible");
let i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
        content.style.border = "1px solid #ccc";
    }
  });
}

let fin = document.getElementsByClassName("finish");
fin.addEventListener("click", function() {
  content.style.display = "none";
});
