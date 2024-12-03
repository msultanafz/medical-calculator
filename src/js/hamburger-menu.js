const hamburgerMenu = document.getElementById("hamburgerMenu"); // Menggunakan ID
const dropMenu = document.getElementById("dropMenu"); // Menggunakan ID
const dropItems = [
  document.getElementById("supportMenuItem"), // Menggunakan ID
  document.getElementById("infoButton1"), // Menggunakan ID
  document.getElementById("helpButton1"), // Menggunakan ID
];

const toggleMenu = () => {
  // Rotasi tombol hamburger dengan Tailwind
  hamburgerMenu.classList.toggle("rotate-90");

  if (dropMenu.classList.contains("hidden")) {
    // Tampilkan dropdown
    dropMenu.classList.remove("hidden");
    dropMenu.classList.add("opacity-100", "transition-all");

    // Tampilkan elemen satu per satu dengan delay
    dropItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove("hidden", "opacity-0", "-translate-y-2");
        item.classList.add("opacity-100", "translate-y-0");
      }, index * 100); // Delay 100ms per elemen
    });
  } else {
    // Sembunyikan elemen satu per satu dengan reverse delay
    [...dropItems].reverse().forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("opacity-0", "-translate-y-2");
        item.classList.remove("opacity-100", "translate-y-0");
      }, index * 100); // Delay 100ms per elemen
    });

    // Sembunyikan dropdown setelah animasi selesai
    setTimeout(() => {
      dropMenu.classList.remove("opacity-100");
      dropMenu.classList.add("hidden");
    }, dropItems.length * 100); // Delay untuk menunggu animasi elemen selesai
  }
};

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Klik di luar navbar akan mengembalikan tombol hamburger ke posisi horizontal dan menyembunyikan dropdown
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.parentElement.contains(e.target)) {
    dropItems.forEach((item) => {
      item.classList.add("opacity-0", "-translate-y-2");
      item.classList.remove("opacity-100", "translate-y-0");
    });
    setTimeout(() => {
      dropMenu.classList.remove("opacity-100");
      dropMenu.classList.add("hidden");
    }, dropItems.length * 100);

    // Mengembalikan rotasi tombol hamburger ke posisi semula
    hamburgerMenu.classList.remove("rotate-90");
  }
});
