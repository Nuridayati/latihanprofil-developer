// Fungsi untuk alert
function tampilkanPesan() {
    alert("Halo, terima kasih sudah mengunjungi profil saya!");
  }
  
  // Array skill
  let skill = ["HTML", "CSS", "JavaScript", "UI Design"];
  
  // Tampilkan daftar skill
  let container = document.getElementById("skill-container");
  for(let i = 0; i < skill.length; i++) {
    let item = document.createElement("p");
    item.textContent = "Skill: " + skill[i];
    container.appendChild(item);
  }