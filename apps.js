const student = [
  {name: "Hussain", Marks: 98},
  {name: "Abdul", Marks: 87},
  {name: "Azim", Marks: 12},
  {name: "Farishta", Marks: 92},
  {name: "Omid", Marks: 98}
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


// ====================== Product Object =====================
const products = [
  {Name: "Laptop", Price: 50000},
  {Name: "Phone", Price: 20000},
  {Name: "Watch", Price: 5000},
  {Name: "Tablet", Price: 30000},
  {Name: "Printer", Price:43000}
];

let productList = "<ul>";
products.forEach(product => {
  productList += `<li>${product.Name} - Price: ${product.Price}</li>`;
});
productList += "</ul>";
document.querySelector(".produects").innerHTML = productList; 