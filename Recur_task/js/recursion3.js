// THIS METHOD MOVES THE CANVAS TO THE BRANCHING POINT??
let green1, green2, slider;
function setup(){
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(ROUND);
    green1 = color('#2D693D');
    green2 = color('#50B86B');
    slider = createSlider(10, 90, 45)
    slider.position(10, windowHeight - 40);
    slider.style("width","300px");
    slider.input(draw);
}
function draw(){
    background(220);
    resetMatrix();
    translate(width / 2, height);
    branch(250)

}
function branch(len){ //length of pranch to draw
    let maxAngle = slider.value();
    strokeWeight(map(len, 20, 100, 1, 10));
    stroke(lerpColor(green1,green2, random(0.3,0.7)));
    line(0, 0,  0, - len);
    translate(0, -len);
    
    if (len > 20){
        if(len < 50){
            //leaves 
            let r = 40 + random(-20,20);
            let g = 200 + random(-20, 20);
            let b = 40 + random(-20, 20);
            fill(r,g,b, 100);
            let size = 15 + random(15);
            noStroke();
            // triangle(-size/2, 0, size/2, 0, 0, -size );
            beginShape();
            let radius = random(10, 30);
            for(let i = 45; i< 135; i++){
                let x = radius * cos(i);
                let y = radius + sin(i);
                vertex(x, y);
            }
            for(let i = 135; i > 45; i--){
                let x = radius * cos(i);
                let y = radius * sin(-i);
                vertex(x, y);
            }
            endShape(CLOSE)
        }else{
                    //branch 1
        push();
        rotate(random(-maxAngle, maxAngle));
        branch(len * 0.4);
        pop();
        //branch 2
        push();
        rotate(random(-maxAngle, maxAngle));
        branch(len * 0.9);
        pop();
            //branch 3
               push();
               rotate(random(-maxAngle, maxAngle));
               branch(len * 0.5);
               pop();
        }

    }

}