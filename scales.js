"use strict";
const resolutions = [
  [1920, 1080],
  [2560, 1440],
  [3840, 2160],
];
document.addEventListener("DOMContentLoaded", renderScaleTable);
function renderScaleTable() {
  const table = document.getElementById("scales");
  const head = table.createTHead();
  const headerRow = head.insertRow();
  headerRow.insertCell();
  for (const r of resolutions) {
    const cell = headerRow.insertCell();
    cell.innerText = `${r[0]} × ${r[1]}`;
  }
  for (let scale = 101; scale <= 200; scale++) {
    let includes = false;
    const row = [scale.toString()];
    for (const r of resolutions) {
      if ((r[0] * 100) % scale === 0 && (r[1] * 100) % scale === 0) {
        includes = true;
        row.push(`${(r[0] * 100) / scale} × ${(r[1] * 100) / scale}`);
      } else {
        row.push("");
      }
    }
    if (includes) {
      const rowElement = table.insertRow();
      for (let i = 0; i < row.length; i++) {
        const cell = rowElement.insertCell();
        cell.innerText = row[i];
      }
    }
  }
}
