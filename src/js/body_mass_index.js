// Mendapatkan elemen-elemen penting
const imtMenu = document.getElementById("imt-menu");
const imtInput = document.getElementById("imt-input");
const closePopup = document.getElementById("close-popup");
const hitungButton = document.getElementById("hitung");
const imtInputResult = document.getElementById("imt-output");
const kategoriSpan = document.getElementById("kategori");
const lanjutButton = document.getElementById("lanjut");

// Fungsi untuk menghitung IMT
function calculateImt(weight, height) {
  return weight / (height * height);
}

// Fungsi untuk menentukan kategori dan warna background
function getImtCategory(imt) {
  if (imt < 18.5)
    return { category: "Berat Badan Kurang", color: "bg-yellow-500" };
  if (imt < 25) return { category: "Berat Badan Normal", color: "bg-blue-500" };
  if (imt < 30)
    return { category: "Berat Badan Berlebih", color: "bg-orange-500" };
  if (imt < 35)
    return { category: "Obesitas Tingkat 1", color: "bg-orange-500" };
  if (imt < 40) return { category: "Obesitas Tingkat 2", color: "bg-red-500" };
  return { category: "Obesitas Tingkat 3 (Parah)", color: "bg-red-500" };
}

// Event untuk menampilkan pop-up IMT
imtMenu.addEventListener("click", () => {
  imtInput.classList.remove("hidden");
});

// Event untuk menutup pop-up IMT
closePopup.addEventListener("click", () => {
  imtInput.classList.add("hidden");
});

// Event untuk menghitung IMT dan menampilkan pop-up hasil
hitungButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Ambil input pengguna
  const weight = parseFloat(document.getElementById("bb").value);
  const heightCm = parseFloat(document.getElementById("tb").value);
  const heightM = heightCm / 100;

  if (!weight || !heightM) {
    alert("Masukkan berat dan tinggi badan yang valid!");
    return;
  }

  // Hitung IMT
  const imt = calculateImt(weight, heightM);
  const { category, color } = getImtCategory(imt);

  // Update tampilan pop-up hasil
  kategoriSpan.textContent = category;

  // Update warna background sesuai kategori
  const outputDiv = document.getElementById("hasil");
  outputDiv.className = `text-center font-semibold w-full py-2 ${color}`;

  // Update animasi
  const animasi = document.getElementById("img-kategori");
  if (
    category === "Berat Badan Kurang" ||
    category === "Berat Badan Berlebih"
  ) {
    animasi.src = "./images/kurang-lebih.png";
  } else if (category === "Berat Badan Normal") {
    animasi.src = "./images/normal.png";
  } else if (category === "Obesitas Tingkat 1") {
    animasi.src = "./images/ob-tingkat1.png";
  } else {
    animasi.src = "./images/ob-tingkat2-3.png";
  }

  // Tampilkan pop-up hasil
  imtInput.classList.add("hidden");
  imtInputResult.classList.remove("hidden");
});

// Event untuk tombol Lanjut
lanjutButton.addEventListener("click", () => {
  imtInputResult.classList.add("hidden");
  imtInput.classList.remove("hidden");
  document.getElementById("bb").value = ""; // Reset berat badan
  document.getElementById("tb").value = ""; // Reset tinggi badan
});
