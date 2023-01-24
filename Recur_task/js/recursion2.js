// THIS METHOD MOVES THE CANVAS TO THE BRANCHING POINT??
let brown1, brown2, slider;
function setup(){
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(ROUND);
    brown1 = color('#5C261A');
    brown2 = color('#9D9473');
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
    strokeWeight(map(len, 20, 200, 1, 10));
    stroke(lerpColor(brown1,brown2, random(0.3,0.7)));
    line(0, 0,  0, - len);
    translate(0, -len);
    
    if (len > 20){
        if(len < 50){
            //leaves 
            let r = 200 + random(-20,20);
            let g = 100 + random(-20, 20);
            let b = 40 + slider.value();
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
        branch(len * 0.6);
        pop();
               //branch 3
        push();
        rotate(random(-maxAngle, maxAngle));
        branch(len * 0.67);
        pop();
                       //branch 3
        push();
        rotate(random(-maxAngle, maxAngle));
        branch(len * 0.67);
        pop();
            // branch 4
        push();
        rotate(random(-maxAngle, maxAngle));
        branch(len * 0.70);
        pop();
        }

    }

}