import { db } from "./config.js";
import { 
  collection, addDoc, getDocs, updateDoc, deleteDoc, doc 
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const literatureList = document.getElementById("literatureList");
const formModal = document.getElementById("formModal");
const form = document.getElementById("literatureForm");
const addBtn = document.getElementById("addBtn");
const closeModal = document.getElementById("closeModal");
const discoverBtn = document.getElementById("discoverBtn");

let editId = null;

// Switch page
discoverBtn.addEventListener("click", () => {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
  loadLiterature();
});

// Modal control
addBtn.addEventListener("click", () => {
  form.reset();
  editId = null;
  formModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => formModal.classList.add("hidden"));

// Load Data
async function loadLiterature() {
  literatureList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "literature"));
  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${data.title}</h3>
      <p><strong>Author:</strong> ${data.author}</p>
      <p><strong>Year:</strong> ${data.year}</p>
      <p><strong>Category:</strong> ${data.category}</p>
      <p>${data.description}</p>
      <button onclick="editLiterature('${docSnap.id}', '${data.title}', '${data.author}', '${data.year}', '${data.category}', '${data.description}')">Edit</button>
      <button onclick="deleteLiterature('${docSnap.id}')">Delete</button>
    `;
    literatureList.appendChild(div);
  });
}

// Add / Update Data
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    title: form.title.value,
    author: form.author.value,
    year: form.year.value,
    category: form.category.value,
    description: form.description.value
  };

  if (editId) {
    await updateDoc(doc(db, "literature", editId), data);
  } else {
    await addDoc(collection(db, "literature"), data);
  }
  formModal.classList.add("hidden");
  loadLiterature();
});

// Edit Data
window.editLiterature = (id, title, author, year, category, description) => {
  editId = id;
  form.title.value = title;
  form.author.value = author;
  form.year.value = year;
  form.category.value = category;
  form.description.value = description;
  formModal.classList.remove("hidden");
};

// Delete Data
window.deleteLiterature = async (id) => {
  await deleteDoc(doc(db, "literature", id));
  loadLiterature();
};
