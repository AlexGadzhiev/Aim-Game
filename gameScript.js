let can = document.getElementById('canvas');
let ctx = can.getContext('2d');
let clickPositionX = -1;
let clickPositionY = -1;
let count = 0;
can.width = window.innerWidth;
can.height = window.innerHeight;
function f() {
    isClicked = false;
    let x = Math.random() * 1850;
    let y = Math.random() * 850;
    function create() {
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, 50, 50);
    }
    function clear(){
        ctx.fillStyle = 'white';
        ctx.fillRect(x - 1, y - 1, 60, 60);
    }
    create();
    can.addEventListener('click', function(e){
        clickPositionX = e.clientX;
        clickPositionY = e.clientY;
        console.log(document.getElementById('counter').innerHTML++);
        if(clickPositionX >= x && clickPositionX <= x + 50 && clickPositionY >= y && clickPositionY <= y + 50){
            clear();
            x = -100;
            y = -100;
        }
    });
    if(x != -100 && y != -100) {
        setTimeout(clear, 5000);
    }
}
setInterval(f, 5000);
console.log(count);