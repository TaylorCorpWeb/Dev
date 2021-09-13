// parallax effect
const elements = document.querySelectorAll(".advantage__contentItem");

elements.forEach(element => {
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.1}% ${50 - (_mouseY - _h) * 0.1}%`;
        let _depth3 = `${50 - (_mouseX - _w) * -(0.07)}% ${50 - (_mouseY - _h) * -(0.07)}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(_mouseY);
        element.style.backgroundPosition = x;
    }
    document.addEventListener("mousemove", parallax);
})