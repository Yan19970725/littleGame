
function setup(){
    createCanvas(400,800);
}

let bubbles = [];


let score = 0;

let speedMutipler = 0;
const spawnTime = 2000;
let currentTime = 0;
let lastCreationTime = 0;



function createBubble(){
   
    bubbles.push ( {
        x: random(350),
        y: 0,
        h: 25,
        w: 25,
        speed: random(5, speedMutipler/100),
    })
    lastCreationTime = new Date().getTime();

}

let hero = {
    x: 0,
    y: 700,
    h: 100,
    w: 50,
    hitpoints: 3,
}



function draw(){
    background("white")
    fill("red")
    rect(hero.x, hero.y, hero.w, hero.h)

    text(score,300,50)


    for (let [index, bubble] of bubbles.entries()){
        rect(bubble.x, bubble.y, bubble.w, bubble.h)
        bubble.y = bubble.y + bubble.speed
        isHit(hero,bubble,index)
        isOffScream(bubble,index)
    }
    
    hero.x = mouseX - 25;

    currentTime = new Date().getTime();
    if (currentTime - lastCreationTime > spawnTime){
        createBubble();
    }
    
}

function isOffScream(bubble, index){
    if(bubble.y > 800){

        bubbles.splice(index,1)
        console.log(bubbles)
        score = score + 10
    }
}




function isHit(hero, bubble){

    if (bubble.x > hero.x && bubble.x + bubble.w < hero.x + hero.w ){
        if(bubble.y + bubble.h > hero.y && bubble.y + bubble.h < hero.y + hero.h){
            console.log("HIT!")
            hero.hitPoints = hero.hitPoints - 1
            if(hero.hitPoints < 0){
                alert("DEAD!")
            }
            window.location.reload();
        }
    }

}

