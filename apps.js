//Question 01
const students = [
  { name: "Ali", marks: 85 },
  { name: "Asef", marks: 92 },
  { name: "Arif", marks: 78 },
  { name: "Abdul", marks: 88 }
];

const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";

const headerRow = document.createElement("tr");

const nameHeader = document.createElement("th");
nameHeader.textContent = "Name";
nameHeader.style.border = "1px solid black";
nameHeader.style.padding = "8px";

const marksHeader = document.createElement("th");
marksHeader.textContent = "Marks";
marksHeader.style.border = "1px solid black";
marksHeader.style.padding = "8px";

headerRow.appendChild(nameHeader);
headerRow.appendChild(marksHeader);
table.appendChild(headerRow);

students.forEach(student => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.name;
  nameCell.style.border = "1px solid black";
  nameCell.style.padding = "8px";

  const marksCell = document.createElement("td");
  marksCell.textContent = student.marks;
  marksCell.style.border = "1px solid black";
  marksCell.style.padding = "8px";

  row.appendChild(nameCell);
  row.appendChild(marksCell);
  table.appendChild(row);
});

document.body.appendChild(table);


//Question 02

const student = [
  { name: "Ali", score: 85 },
  { name: "Asif", score: 92 },
  { name: "Arif", score: 78 },
  { name: "Abdul", score: 95 }
];

let topScorer = students[0];

student.forEach(student => {
  if (student.score > topScorer.score) {
    topScorer = student;
  }
});

const result = document.createElement("h2");
result.textContent = `Top Scorer: ${topScorer.name} with ${topScorer.score} marks`;

document.body.appendChild(result);
