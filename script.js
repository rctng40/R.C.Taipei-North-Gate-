const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

function readImage(file, callback) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = () => callback(reader.result);
  reader.readAsDataURL(file);
}

document.querySelector("#treeForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#treeName").value.trim();
  const desc = document.querySelector("#treeDesc").value.trim();
  const file = document.querySelector("#treeImage").files[0];
  readImage(file, src => {
    const card = document.createElement("article");
    card.className = "gallery-item";
    const img = document.createElement("img");
    img.src = src; img.alt = name;
    const title = document.createElement("h4"); title.textContent = name;
    const text = document.createElement("p"); text.textContent = desc || "尚未填寫介紹。";
    card.append(img, title, text);
    const gallery = document.querySelector("#treeGallery");
    if (gallery.querySelector(".placeholder-item")) gallery.innerHTML = "";
    gallery.prepend(card);
    event.target.reset();
  });
});

document.querySelector("#memoryImages").addEventListener("change", event => {
  const gallery = document.querySelector("#memoryGallery");
  gallery.innerHTML = "";
  [...event.target.files].forEach(file => readImage(file, src => {
    const img = document.createElement("img");
    img.src = src; img.alt = file.name;
    gallery.append(img);
  }));
});

document.querySelector("#previewArticle").addEventListener("click", () => {
  const title = document.querySelector("#articleTitle").value.trim() || "未命名文章";
  const body = document.querySelector("#articleBody").value.trim() || "尚未輸入文章內容。";
  document.querySelector("#articlePreview h4").textContent = title;
  document.querySelector("#articlePreview p").textContent = body;
});
document.querySelector("#copyArticle").addEventListener("click", async () => {
  const title = document.querySelector("#articleTitle").value.trim();
  const body = document.querySelector("#articleBody").value.trim();
  const text = `${title}\n\n${body}`;
  const status = document.querySelector("#copyStatus");
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "草稿已複製，可以貼到你的文件或文章編輯器。";
  } catch {
    status.textContent = "瀏覽器未允許複製，請手動選取文章內容。";
  }
});
