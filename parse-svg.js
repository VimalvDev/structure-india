const w = require("@svg-maps/world").default || require("@svg-maps/world");
const i = require("@svg-maps/india").default || require("@svg-maps/india");

function getExtents(path) {
  let x = 0, y = 0, minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const parts = path.match(/[a-zA-Z]+|-?[0-9]*\.?[0-9]+/g);
  let cmd = '';
  for(let p of parts) {
    if (/[a-zA-Z]/.test(p)) { cmd = p; continue; }
    // Very naive: this will break, SVG parser is better.
  }
}
