// Ambil elemen tombol dan popup
const helpButton = document.getElementById("helpButton");
const helpButton1 = document.getElementById("helpButton1");
const closehelpButton = document.getElementById("closeHelpButton");
const helpPopup = document.getElementById("helpPopup");

// Fungsi untuk membuka popup
helpButton.addEventListener("click", () => {
  helpPopup.classList.remove("hidden"); // Tampilkan popup
});
helpButton1.addEventListener("click", () => {
  helpPopup.classList.remove("hidden"); // Tampilkan popup
});

// Fungsi untuk menutup popup
closehelpButton.addEventListener("click", () => {
  helpPopup.classList.add("hidden"); // Sembunyikan popup
});

// Tutup popup jika pengguna mengklik di luar area popup
helpPopup.addEventListener("click", (e) => {
  if (e.target === helpPopup) {
    helpPopup.classList.add("hidden");
  }
});
