const MAX_LEVEL = 8; //work our way down from max
const MIN_LEVEL = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    noFill();
    noLoop(); //prevent draw from looping
    drawCircle(width/2, height/2, width / 4, MAX_LEVEL) // dividing by 2 will put in middle
}
function drawCircle(x, y, diameter, count) {
    ellipse(x, y, diameter)
    if(count > MIN_LEVEL){
        count--;
        drawCircle(x + diameter / 2, y, diameter / 2, count); //offsetting location and size by diameter
        drawCircle(x - diameter / 2, y, diameter /2, count);
        drawCircle(x, y+diameter/2,diameter/2,count)
    }
}
