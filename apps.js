const student = [
  {name: "Hussain", Marks: 95},
  {name: "Abdul", Marks: 87},
  {name: "Azim", Marks: 99},
  {name: "Farishta", Marks: 92},
  {name: "Omid", Marks: 85}
];

let studentTable = `
<table border = "1">
<tr>
  <th>Names</th>
  <th>Marks</th>
</tr>`;
student.forEach(student => {
  studentTable += `
  <tr>
    <td>${student.name}</td>
    <td>${student.Marks}</td>
  </tr>`;
});
studentTable += `</table>`;

document.querySelector("#output").innerHTML = studentTable;

let topscorer = student[0];

for (let i = 0; i < student.length; i++) {
  if(student[i].Marks > topscorer.Marks){
    topscorer = student[i];
  }

}
// document.write(`<h3>Top Scorer is ${topscorer.name} with Marks: ${topscorer.Marks}</h3>`);
document.querySelector("#top-scorer").innerHTML = `<h3>Top Scorer is ${topscorer.name} with Marks: ${topscorer.Marks}</h3>`;
