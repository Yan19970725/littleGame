function setup(){
    createCanvas(400,800);
}

let bullets = [];

let speedMutipler = 5;
const spawnTime = 1500;
let currentTime = 0;
let lastCreationTime = 0;


let hero = {
    x: 0,
    y: 700,
    h: 100,
    w: 50,
    hitPoints: 3,
    
}

function createBullet(){
   
    bullets.push ( {
        x: random(350),
        y: 0,
        h: 25,
        w: 25,
        speed: random(speedMutipler, speedMutipler - 1),
    })
    lastCreationTime = new Date().getTime();
}

function isHit (hero,bullet,index){
    if (bullet.x > hero.x && bullet.x + bullet.w < hero.x + hero.w ){
        if(bullet.y + bullet.h > hero.y && bullet.y + bullet.h < hero.y + hero.h){
            bullets.splice(index,1)
            hero.hitPoints = hero.hitPoints - 1;
            if(hero.hitPoints <= 0){
                alert("DEAD!");
                window.location.reload();
            }
        }
    }
}


function draw(){
    background("white")
    fill("red")

    text(hero.hitPoints,hero.x + 25,680)

    rect(hero.x, hero.y, hero.w, hero.h)
    hero.x = mouseX - 25;
    if (hero.x <= 0){
        hero.x = 0 ;
    }else if (hero.x >= 350){
        hero.x = 350;
    }
    

    for (let [index,bullet] of bullets.entries()){
        rect(bullet.x, bullet.y, bullet.h, bullet.w)
        bullet.y = bullet.y + bullet.speed
        isHit(hero,bullet);
    }


    currentTime = new Date().getTime();
    if (currentTime - lastCreationTime > spawnTime){
        createBullet();
    }
 
}










