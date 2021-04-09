const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    bg=loadImage("sunrise1.png");
    /*bg2=loadImage("sunrise2.png");
    bg3=loadImage("sunrise3.png");
    bg4=loadImage("sunrise4.png");
    bg5=loadImage("sunrise5.png");
    bg6=loadImage("sunrise6.png");
    bg7=loadImage("sunset7.png");
    bg8=loadImage("sunset8.png");
    bg9=loadImage("sunset9.png");
    bg10=loadImage("sunset10.png");
    bg11=loadImage("sunset11.png");
    bg12=loadImage("sunset12.png");

    */
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    

    // add condition to check if any background image is there to add
    background(bg);


    Engine.update(engine);

    // write code to display time in correct format here
getBackgroundImg();

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJson=await response.json();
    console.log(responseJson);


    var datetime=responseJson.datetime;
    console.log(datetime);
    // write code slice the datetime
    var hour=datetime.slice(11,13);
    console.log(hour);



    // add conditions to change the background images from sunrise to sunset


    if(hour>=5 && hour<=17){
        console.log("Daytime");
        bg=loadImage("sunrise2.png");
     
       
    }else if(hour>=18 && hour<=19){
        console.log("evening");
        bg=loadImage("sunset7.png");
       
        
    }else {
        console.log("Night");
        bg=loadImage("sunset12.png");
       
    }

    
    //load the image in backgroundImg variable here

}
