class Game{
    constructor(){
        this.number=null;
        var  refx=windowWidth/2-40;
        var refy=windowHeight-105;
        this.bluePositions= {
            pos1: [refx, refy],
            pos2: [refx, refy-37],
            pos3: [refx, refy-(37*2)],
            pos4: [refx, refy-(37*3)],
            pos5: [refx, refy-(37.5*4)],
            pos6: [refx-32, refy-(37.5*5)],
            pos7: [refx-(34*2), refy-(37.5*5)],
            pos8: [refx-(36*3), refy-(37.5*5)],
            pos9: [refx-(36*4), refy-(37.5*5)],
            pos10: [refx-(36.5*5), refy-(37.5*5)],
            pos11: [refx-(36.5*6), refy-(37.5*5)],
            pos12: [refx-(36.5*6), refy-(37*6)],
            pos13: [refx-(36.5*6), refy-(36.5*7)],
            pos14: [refx-(36.5*5), refy-(36.5*7)],
            pos15: [refx-(36*4), refy-(36.5*7)],
            pos16: [refx-(36*3), refy-(36.5*7)],
            pos17: [refx-(34*2), refy-(36.5*7)],
            pos18: [refx-(32), refy-(36.5*7)],
            pos19: [refx+6, refy-(37*8)],
            pos20: [refx+6, refy-(37*9)],
            pos21: [refx+6, refy-(37*10)],
            pos22: [refx+6, refy-(37*11)],
            pos23: [refx+6, refy-(37*12)],
            pos24: [refx+6, refy-(37*13)],
            pos25: [refx+40, refy-(37*13)],
            pos26: [refx+(40*2), refy-(37*13)],
            pos27: [refx+(40*2), refy-(37*12)],
            pos28: [refx+(40*2), refy-(37*11)],
            pos29: [refx+(40*2), refy-(37*10)],
            pos30: [refx+(40*2), refy-(37*9)],
            pos31: [refx+(40*2), refy-(37*8)],
            pos32: [refx+(40*2.9), refy-(37*6.9)],
            pos33: [refx+(40*3.8), refy-(37*6.9)],
            pos34: [refx+(40*4.7), refy-(37*6.9)],
            pos35: [refx+(40*5.7), refy-(37*6.9)],
            pos36: [refx+(40*6.6), refy-(37*6.9)],
            pos37: [refx+(40*7.5), refy-(37*6.9)],
            pos38: [refx+(40*7.5), refy-(37*6)],
            pos39: [refx+(40*7.5), refy-(37*5.1)],
            pos40: [refx+(40*6.6), refy-(37*6)],
            pos41: [refx+(40*5.7), refy-(37*6)],
            pos42: [refx+(40*4.7), refy-(37*5.1)],
            pos43: [refx+(40*3.8), refy-(37*5.1)], 
            pos44: [refx+(40*2.9), refy-(37*5.1)],
            pos45: [refx+(40*1.9), refy-(37*4.1)],
            pos46: [refx+(40*1.9), refy-(37*3.1)],
            pos47: [refx+(40*1.9), refy-(37*2.1)],
            pos48: [refx+(40*1.9), refy-(37*1.1)],
            pos49: [refx+(40*1.9), refy-(37*0.1)],
            pos50: [refx+(40*1.9), refy-(37*(-1))],
            pos51: [refx+(40*1), refy-(37*(-1))],
            pos52: [refx+(40*0.1), refy-(37*(-1))],
          }
        
    }

     rollDice(){
        var rand=Math.round(random(1,6));
      
        switch(rand){
          case 1: dice.addImage(dice1);
          this.number=1;
          break;
          case 2: dice.addImage(dice2);
          this.number=2;
          break;
          case 3: dice.addImage(dice3);
          this.number=3;
          break;
          case 4: dice.addImage(dice4);
          this.number=4;
          break;
          case 5: dice.addImage(dice5);
          this.number=5;
          break;
          default: dice.addImage(dice6);
          this.number=6;
          break;
        }
    }

    play(){
        textSize(20);
        fill(turn);
        text(turn+"'s Turn.",20,100);
        if(turn==="blue"&&mousePressedOver(p1.body)){
            if(p1.body.x!==480){
                move();
            }else if(p1.body.x===480&&game.number===6){
                p1.body.x=game.bluePositions.pos1[0];
                p1.body.y=game.bluePositions.pos1[1]
            }else{
                turn="green";

            }


        }
        
    }
}