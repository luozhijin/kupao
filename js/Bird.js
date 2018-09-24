(function(){
    var Bird = window.Bird = function(){
     this.x =700;
     this.rh =230;
     //剪切的宽高
     this.w = 90;
     this.h = 75;
     game.birdArr.push(this);
    //  console.log(game.birdArr);
     this.jianX =0;
     this.count =0;

    }

    //渲染
    Bird.prototype.render = function(){
        game.context.drawImage(game.R["bird"],this.jianX*90,56,this.w,this.h,this.x,this.rh,this.w,this.h);

    }
    //刷新
    Bird.prototype.update = function(){
        this.jianX++;
        if(this.jianX>=4){
            this.jianX = 0;
        }
    }
    //当超出可视范围内就进行删除
    Bird.prototype.delete = function(){
        game.birdArr.splice( game.birdArr.indexOf(this),1);
    }
    //碰撞检测
    Bird.prototype.bump = function(){
        for(var i =0 ;i<game.BulletFigureArr.length;i++){
            for(var j =0;j<game.birdArr.length;j++){
                if(game.BulletFigureArr[i].x>=game.birdArr[j].x+30&&game.BulletFigureArr[i].y<=game.birdArr[j].rh+80){
                    this.count++;
                    game.BulletFigureArr.splice(game.BulletFigureArr.indexOf(game.BulletFigureArr[i]),1);
                    if(this.count%2==0){
                        game.birdArr.splice(game.birdArr.indexOf(game.birdArr[j]),1);
                        game.BulletFigureTop = false;
                    }   
                }
            }
           
        }
    }
})()