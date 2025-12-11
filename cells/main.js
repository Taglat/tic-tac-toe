const arr = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];

const n = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i < j && i < n - 1 - j) {
      arr[i][j] = "red"
    }
    if (i < j && i > n - 1 - j) {
      arr[i][j] = "green"
    }
    if (i > j && i > n - 1 - j) {
      arr[i][j] = "blue"
    }
    if (i > j && i < n - 1 - j) {
      arr[i][j] = "yellow"
    }
    
     // Главная диагональ
    if (i === j) {
      arr[i][j] = "black";
    }

    // Побочная диагональ
    else if (i === n - 1 - j) {
      arr[i][j] = "purple";
    }
  }
}

const container = document.querySelector(".cells");

for (let i = 0; i < n; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  for (let j = 0; j < n; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.style.backgroundColor = arr[i][j] == null ? "#fff" : arr[i][j];

    row.appendChild(cell);
  }
}
