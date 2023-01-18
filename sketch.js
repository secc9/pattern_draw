let xPos;
let yPos;
let amt;


function setup() {
frameRate(6);
    createCanvas(windowWidth, windowHeight);
    // background(0);

    noLoop();

}

function draw() {
background(255,1);
    let x = random(100, 1000);
    let y = random(100, 1000);
    let alpha = frameCount % random(100, 200);
 ///////////////////////////////////////////// 
 // code stolen/liberated from Joe's random walk
    let nXpos = xPos + random(-amt,amt);
    let nYpos = yPos + random(amt,amt);
////////////////////////////////////////////////


    noFill();
   noStroke();
    // strokeWeight(random(0.5,2));
    // stroke(0, alpha);
    fill(random(100, 255), random(255), 0, alpha);
 // bezier(x1,y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)
    bezier(mouseX, mouseY, xPos, yPos, xPos+nXpos, yPos+nYpos, pmouseX, pmouseY,);

    xPos = nXpos;
    yPos = nYpos;

    console.log();
}

function mousePressed(){


    xPos = mouseX;
    yPos = mouseY;
    amt = random(-3, 3);
    loop();

}

function keyPressed(){
    if(keyCode === SPACE){
	value = 255;
    

    save("image###.png")
}
}
