// HTML elemanlarını seçiyoruz
const studentNameInput = document.getElementById("studentName");
const studentList = document.getElementById("studentList");

// 2 & 3 & 4 & 6. "Əlavə et" - Sona ekleme fonksiyonu
function addStudent() {
  const value = studentNameInput.value.trim();
  
  if (value !== "") {
    // innerHTML yerine createElement kullanıyoruz
    const p = document.createElement("p");
    p.className = "student";
    p.setAttribute("title", value);
    p.textContent = value;
    
    // Listenin sonuna ekliyoruz
    studentList.appendChild(p);
    
    // Input alanını temizliyoruz
    studentNameInput.value = "";
  }
}

// 7
function addStudentFirst() {
  const value = studentNameInput.value.trim();
  if (value !== "") {
    const p = document.createElement("p");
    p.className = "student";
    p.setAttribute("title", value);
    p.textContent = value;
    studentList.prepend(p);
    
    studentNameInput.value = "";
  }
}
//8
function addClass() {
  const firstStudent = studentList.querySelector(".student");
  if (firstStudent) {
    firstStudent.classList.add("active");
  }
}
// 9
function removeClass() {
  const firstStudent = studentList.querySelector(".student");
  if (firstStudent) {
    firstStudent.classList.remove("active");
  }
}