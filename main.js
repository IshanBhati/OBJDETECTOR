img = "";
statuses = "";

function setup()
{
   canvas = createCanvas(450,450);
   canvas.center();

   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload()
{
    img = loadImage("dog_cat.jpg");
}

function draw()
{
    image(img, 0, 0, 450, 450);
    fill("#FF0000");
    stroke("#FF0000");
    text("Dog", 45, 75);
    noFill();
    rect(30, 60, 450, 350);

    fill("#FF0000");
    stroke("#FF0000");
    text("Cat", 320, 120);
    noFill();
    rect(300, 90, 270, 320);
}

function modelLoaded()
{
    console.log("Model Loaded");
    statuses = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(results, error)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}