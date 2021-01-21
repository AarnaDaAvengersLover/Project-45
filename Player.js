class Player{
    constructor(x,y){
        this.position=null;
        this.body=createSprite(x,y,10,10);
    }
   
    move(){
        var currentPositionIndex=(this.position).slice(3);
        var newPosition=currentPositionIndex+game.number;
        if(turn==="blue"){
            var newPositionIndex="pos"+newPosition;
            this.body.x=game.bluePositions[newPositionIndex][0];
            this.body.y=game.bluePositions[newPositionIndex][1];
            this.position=newPositionIndex;
        }


    }
 
        
}