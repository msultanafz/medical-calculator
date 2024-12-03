// Ambil elemen tombol dan popup
const infoButton = document.getElementById("infoButton");
const infoButton1 = document.getElementById("infoButton1");
const closeInfoButton = document.getElementById("closeInfoButton");
const infoPopup = document.getElementById("infoPopup");

// Fungsi untuk membuka popup
infoButton.addEventListener("click", () => {
  infoPopup.classList.remove("hidden"); // Tampilkan popup
});
infoButton1.addEventListener("click", () => {
  infoPopup.classList.remove("hidden"); // Tampilkan popup
});

// Fungsi untuk menutup popup
closeInfoButton.addEventListener("click", () => {
  infoPopup.classList.add("hidden"); // Sembunyikan popup
});

// Tutup popup jika pengguna mengklik di luar area popup
infoPopup.addEventListener("click", (e) => {
  if (e.target === infoPopup) {
    infoPopup.classList.add("hidden");
  }
});
