document.addEventListener("DOMContentLoaded", () => {
    const noteInput = document.getElementById("noteInput");
    const addNoteButton = document.getElementById("addNote");
    const notesList = document.getElementById("notesList");
  
    // LocalStorage'dan notları al
    const getNotes = () => JSON.parse(localStorage.getItem("notes")) || [];
  
    // Notları ekrana yazdır
    const renderNotes = () => {
      const notes = getNotes();
      notesList.innerHTML = "";
      notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${note} <button class="delete" onclick="deleteNote(${index})">Sil</button>`;
        notesList.appendChild(li);
      });
    };
  
    // Yeni not ekle
    addNoteButton.addEventListener("click", () => {
      const note = noteInput.value.trim();
      if (note) {
        const notes = getNotes();
        notes.push(note);
        localStorage.setItem("notes", JSON.stringify(notes));
        noteInput.value = "";
        renderNotes();
      }
    });
  
    // Notları sil
    window.deleteNote = (index) => {
      const notes = getNotes();
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes();
    };
  
    renderNotes();
  });
  