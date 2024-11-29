// Mendapatkan elemen-elemen penting
const bmiMenu = document.getElementById("bmi-menu");
const bmiPopup = document.getElementById("bmi-popup");
const closePopup = document.getElementById("close-popup");
const hitungButton = document.getElementById("hitung");
const bmiPopupResult = document.getElementById("popup-hasil"); // Pop-up hasil
const kategoriSpan = document.getElementById("kategori");
const lanjutButton = bmiPopupResult.querySelector("button");

// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
  return weight / (height * height);
}

// Fungsi untuk menentukan kategori dan warna background
function getBMICategory(bmi) {
  if (bmi < 18.5)
    return { category: "Berat Badan Kurang", color: "bg-yellow-500" };
  if (bmi < 25) return { category: "Berat Badan Normal", color: "bg-blue-500" };
  if (bmi < 30)
    return { category: "Berat Badan Berlebih", color: "bg-orange-500" };
  if (bmi < 35)
    return { category: "Obesitas Tingkat 1", color: "bg-orange-500" };
  if (bmi < 40) return { category: "Obesitas Tingkat 2", color: "bg-red-500" };
  return { category: "Obesitas Tingkat 3 (Parah)", color: "bg-red-500" };
}

// Event untuk menampilkan pop-up BMI
bmiMenu.addEventListener("click", () => {
  bmiPopup.classList.remove("hidden");
});

// Event untuk menutup pop-up BMI
closePopup.addEventListener("click", () => {
  bmiPopup.classList.add("hidden");
});

// Event untuk menghitung BMI dan menampilkan pop-up hasil
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

  // Hitung BMI
  const bmi = calculateBMI(weight, heightM);
  const { category, color } = getBMICategory(bmi);

  // Update tampilan pop-up hasil
  kategoriSpan.textContent = category;

  // Update warna background sesuai kategori
  const outputDiv = bmiPopupResult.querySelector(".text-center");
  outputDiv.className = `text-center text-lg font-semibold w-full py-2 ${color}`;

  // Update animasi
  const animasi = document.getElementById("img-kategori");
  if (
    category === "Berat Badan Kurang" ||
    category === "Berat Badan Berlebih"
  ) {
    animasi.src = "../images/kurang-lebih.png";
  } else if (category === "Berat Badan Normal") {
    animasi.src = "../images/normal.png";
  } else if (category === "Obesitas Tingkat 1") {
    animasi.src = "../images/ob-tingkat1.png";
  } else {
    animasi.src = "../images/ob-tingkat2-3.png";
  }

  // Tampilkan pop-up hasil
  bmiPopup.classList.add("hidden");
  bmiPopupResult.classList.remove("hidden");
});

// Event untuk tombol Lanjut
lanjutButton.addEventListener("click", () => {
  bmiPopupResult.classList.add("hidden");
  bmiPopup.classList.remove("hidden");
  document.getElementById("bb").value = ""; // Reset berat badan
  document.getElementById("tb").value = ""; // Reset tinggi badan
});
