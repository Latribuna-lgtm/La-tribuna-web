const article = document.getElementById("article");
function openArticle(){ article.showModal(); }
function closeArticle(){ article.close(); }
article.addEventListener("click", e => {
  const r = article.getBoundingClientRect();
  if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) article.close();
});
