"use strict";
const RESOLUTIONS_16_9 = [
  [1920, 1080],
  [2048, 1152],
  [2560, 1440],
  [2880, 1620],
  [3200, 1800],
  [3840, 2160],
  [5120, 2880],
  [6016, 3384],
  [7680, 4320],
];
document.addEventListener("DOMContentLoaded", () => {
  renderScaleTable(RESOLUTIONS_16_9, "16:9");
});

function renderScaleTable(resolutions, caption) {
  const table = document.createElement("table");
  table.classList.add("scales");
  table.createCaption().textContent = caption;
  const headerRow = table.createTHead();
  const headerCell1 = document.createElement("th");
  headerCell1.innerText = "100";
  headerRow.appendChild(headerCell1);
  for (const r of resolutions) {
    const headerCell = document.createElement("th");
    headerCell.innerText = `${r[0]} × ${r[1]}`;
    headerRow.appendChild(headerCell);
  }
  for (let scale = 101; scale <= 250; scale++) {
    let toInclude = false;
    const row = [];
    for (const r of resolutions) {
      if ((r[0] * 100) % scale === 0 && (r[1] * 100) % scale === 0) {
        toInclude = true;
        row.push(`${(r[0] * 100) / scale} × ${(r[1] * 100) / scale}`);
      } else {
        row.push("");
      }
    }
    if (toInclude) {
      const rowElement = table.insertRow();
      const rowHeader = document.createElement("th");
      rowHeader.innerText = scale;
      rowElement.appendChild(rowHeader);
      for (const c of row) rowElement.insertCell().innerText = c;
    }
  }
  document.body.appendChild(table);
}
