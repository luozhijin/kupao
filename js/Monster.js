(function(){
    var Monster = window.Monster = function(){
     this.x = 800;
     this.rh =game.h-game.land.h+40;
     //剪切的宽高
     this.w = 80;
     this.h = 100;
     game.monsterArr.push(this);
    //  console.log(game.monsterArr);
    this.count = 0;//检测碰撞的次数
    }

    //渲染
    Monster.prototype.render = function(){
        game.context.drawImage(game.R["guaiwu"],0,0,this.w,this.h,this.x,this.rh,this.w,this.h);

    }
    //刷新
    Monster.prototype.update = function(){
        this.x-=13;
        if(this.x<-100){
            this.delete();
        }
    }
    //当超出可视范围内就进行删除
    Monster.prototype.delete = function(){
        game.monsterArr.splice(game.monsterArr.indexOf(this),1);
    }
    //碰撞检测
    Monster.prototype.bump = function(){
        for(var i =0 ;i<game.BulletFigureArr.length;i++){
            for(var j =0;j<game.monsterArr.length;j++){
                if(game.BulletFigureArr[i].x>=game.monsterArr[j].x+30&&game.BulletFigureArr[i].y>=game.monsterArr[j].rh){
                    this.count++;
                    game.BulletFigureArr.splice(game.BulletFigureArr.indexOf(game.BulletFigureArr[i]),1);
                    if(this.count%2==0){
                        game.monsterArr.splice(game.monsterArr.indexOf(game.monsterArr[j]),1);
                        game.bulletMonsterArrTop = false;
                        game.baozha.load();
                        game.baozha.play();
                    }   
                }
            }
           
        }
    }

})()