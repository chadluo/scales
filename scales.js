"use strict";
const RESOLUTIONS_16_9 = [
  [1920, 1080],
  [2048, 1152],
  [2560, 1440],
  [2880, 1620],
  [3200, 1800],
  [3840, 2160],
  [4096, 2304],
  [5120, 2880],
  [6016, 3384],
  [7680, 4320],
];
const RESOLUTIONS_16_10 = [
  [1920, 1200],
  [2048, 1280],
  [2304, 1440],
  [2560, 1600],
  [2880, 1800],
  [3072, 1920],
  [3840, 2400],
  [4096, 2560],
  [5120, 3200],
  [7680, 4800],
];
const RESOLUTIONS_ULTRAWIDE = [
  [2560, 1080],
  [3440, 1440],
  [3440, 1600],
  [3840, 1080],
  [3840, 1200],
  [3840, 1440],
  [3840, 1600],
  [4096, 2160],
  [5120, 1440],
  [5120, 2160],
  [5760, 2160],
];
document.addEventListener("DOMContentLoaded", () => {
  renderScaleTable(RESOLUTIONS_16_9, "16:9");
  renderScaleTable(RESOLUTIONS_16_10, "16:10");
  renderScaleTable(RESOLUTIONS_ULTRAWIDE, "Ultrawide");
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
        row.push(showResolution(r, scale));
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

function showResolution(r, scale) {
  const w = (r[0] * 100) / scale;
  const h = (r[1] * 100) / scale;
  let s = `${w} × ${h}`;
  if (w < 1000) s = " " + s; // en squad
  return s;
}
