class Divisions {
    constructor(x,y,width,height) {
    var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
}
display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.width, this.height);

    if(particle!=null){
        particle.display();

        if(particle.body.position.y>760){
            if(particle.body.position.x < 300) {
                score=score+500;
                particle=null;
                if (count>= 5) gameState ="end";
                text("GameOver",100,200);
            }
        }
    }



}
}

if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
        if(particle.body.position.x < 501) {
            score=score+100;
            particle=null;
            if (count>= 5) gameState ="end";
            text("GameOver",100,200);
        }
    }
}


if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){
        if(particle.body.position.x < 700) {
            score=score+200;
            particle=null;
            if (count>= 5) gameState ="end";
          text("GameOver",100,200);
        }
    }
}



