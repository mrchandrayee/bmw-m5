const card = document.getElementById("bmwCard");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    // Cursor position relative to center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Card tilt
    const rotateX = (-y / 18).toFixed(2);
    const rotateY = (x / 18).toFixed(2);

    // Shadow logic (opposite direction)
    const shadowX = (-x / 8).toFixed(1);
    const shadowY = (-y / 8).toFixed(1);

    // Shadow blur intensity
    const shadowBlur = Math.min(70, Math.abs(x) + Math.abs(y));

    card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.06)
  `;

    card.style.boxShadow = `
    ${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0,0,0,0.65),
    0 0 40px rgba(0,212,255,0.35)
  `;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = `
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;

    card.style.boxShadow = `
    0 40px 80px rgba(0,0,0,0.7),
    0 0 30px rgba(0,212,255,0.2)
  `;
});
