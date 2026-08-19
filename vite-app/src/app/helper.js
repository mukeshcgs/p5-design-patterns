// Optimized geometry and math helpers (Zero heap allocation in hot vertex paths)

/**
 * Draw a regular hexagon using native Math trigonometry and direct vertices
 */
export function hexagon(p, posX, posY, radius) {
    const inst = p || window.p5;
    const rotAngle = (Math.PI * 2) / 6;
    inst.beginShape();
    for (let i = 0; i < 6; i++) {
        const angle = i * rotAngle;
        inst.vertex(posX + radius * Math.cos(angle), posY + radius * Math.sin(angle));
    }
    inst.endShape(inst.CLOSE);
}

/**
 * Compute 2D coordinates on a circle without allocating p5.Vector objects
 */
export function pointOnCircle(posX, posY, radius, angle) {
    return {
        x: posX + radius * Math.cos(angle),
        y: posY + radius * Math.sin(angle)
    };
}

/**
 * Fast 50/50 boolean selection
 */
export function randomSelectTwo(p) {
    const inst = p || window.p5;
    const rando = inst ? inst.random(1) : Math.random();
    return rando > 0.5;
}

/**
 * Hexagon line segment
 */
export function hexagonLine(p, posX, posY, radius) {
    const inst = p || window.p5;
    const rotAngle = (Math.PI * 2) / 6;
    inst.beginShape();
    for (let i = 0; i < 2; i++) {
        const angle = i * rotAngle;
        inst.vertex(posX + radius * Math.cos(angle), posY + radius * Math.sin(angle));
    }
    inst.endShape(inst.CLOSE);
}

/**
 * Square line segment
 */
export function squareLine(p, posX, posY, radius) {
    const inst = p || window.p5;
    const rotAngle = (Math.PI * 2) / 4;
    inst.beginShape();
    for (let i = 0; i < 6; i++) {
        const angle = i * rotAngle;
        inst.vertex(posX + radius * Math.cos(angle), posY + radius * Math.sin(angle));
    }
    inst.endShape(inst.CLOSE);
}