var can = document.getElementById('background-canvas');
var ctx = can.getContext('2d');
  
// canvas width and height
can.width = window.window.innerWidth;
can.height = window.window.innerHeight;
var img = new Image();
img.src = "background.jpg";

window.onload = function() {
    var imgHeight = 0;
    var scrollSpeed = 3;
    function loop()
    {
        ctx.drawImage(img, 0, imgHeight);
        ctx.drawImage(img, 0, imgHeight - can.height);
        imgHeight += scrollSpeed;
        if (imgHeight == can.height)
            imgHeight = 0;
        window.requestAnimationFrame(loop);
    }
    loop();
}
