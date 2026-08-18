const World = require("@svg-maps/world").default || require("@svg-maps/world");
const India = require("@svg-maps/india").default || require("@svg-maps/india");

function getBB(pathString) {
    const coords = pathString.match(/-?\d+\.?\d*/g);
    if (!coords) return null;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    
    // This is a naive parsing. SVG paths have commands like M x y or m dx dy. 
    // Absolute vs relative coordinates will ruin a naive regex.
    // Instead, let's just use a basic SVG path parser if we can, or just look at the raw string if it's absolute.
}

console.log("World map India path start:", World.locations.find(l => l.id === "in").path.substring(0, 100));
console.log("India map first state path start:", India.locations[0].path.substring(0, 100));
