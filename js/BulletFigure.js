(function(){
    var BulletFigure = window.BulletFigure = function(){
        game.BulletFigureArr.push(this);
        this.red =1.6;
        this.w = 14;
        this.h =32;
        this.x = game.figure.x+50;
        this.y = game.figure.y+25;
    }
    //渲染
    BulletFigure.prototype.render = function(){   
        game.context.save(); 
        game.context.translate(this.x,this.y); 
        game.context.rotate(this.red);//旋转角度  
        game.context.drawImage(game.R["zjzhidan"],-this.w/2,-this.h/2);
        game.context.restore();
    }
    //刷新
    BulletFigure.prototype.update = function(){
        this.x+=5;
        if(this.x >800){
            this.delete();
        }
    }
    //当超出可视范围内就进行删除
    BulletFigure.prototype.delete = function(){
        game.BulletFigureArr.splice(game.BulletFigureArr.indexOf(this),1);
    }
    //碰撞检测 当子撞到 障碍物和怪物时  障碍物 和怪物消失
    BulletFigure.prototype.bump  = function(){
        // if(this.x){

        // }
    }

})()