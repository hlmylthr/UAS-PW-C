document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("commentForm");
  const commentInput = document.getElementById("commentInput");
  const commentList = document.getElementById("commentList");

  // Untuk Kirim Form Komentar
  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText === "") return;

    // ini untuk buat elemen komentar dan tampilan cssnya
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment", "mb-3", "p-3", "shadow-sm", "rounded", "bg-white", "position-relative");

    // ini untuk buat variabel p untuk tampilkan komentar
    const commentContent = document.createElement("p");
    commentContent.textContent = commentText;
    commentDiv.appendChild(commentContent);

    // ini untuk tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "position-absolute");
    deleteBtn.style.top = "10px";
    deleteBtn.style.right = "10px";
    deleteBtn.addEventListener("click", function () {
      commentList.removeChild(commentDiv);
    });
    commentDiv.appendChild(deleteBtn);

    // ini untuk menambahkan komentar ke daftar komentar di website dengan tombol hapus
    commentList.appendChild(commentDiv);

    // untuk membersihkan input komentar setelah mengirim
    commentInput.value = "";
  });



// mode gelap
  const toggle = document.getElementById("darkModeToggle");
  const currentMode = localStorage.getItem("darkMode");

  if (currentMode === "enabled") {
    document.body.classList.add("dark-mode");
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }
});
