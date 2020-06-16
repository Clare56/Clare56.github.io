function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
  

}

function draw() {
    fill(random(0, 255), random(0, 255), random(0, 255));
    textSize(50);
    text("Happy Birthday Bas!", random(-100, windowWidth), random(0, windowHeight));

    fill(250);
    rect(windowWidth*0.08, windowHeight*0.4, windowWidth - windowWidth*0.15, windowHeight*0.15 );

    fill(3, 64, 120);
    textSize(75);
    text("Happy 11th Birthday Bas!", windowWidth*0.1, windowHeight/2 );
}