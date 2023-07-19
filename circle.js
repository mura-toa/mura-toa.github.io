document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to(".wel-circle", {
        x: mouseX,
        y: mouseY,
        stagger: -0.05,
    });
});