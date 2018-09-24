(function(){
    var BulletMonster = window.BulletMonster = function(){
        game.bulletMonsterArr.push(this);
        // console.log(game);
        this.x = game.monster.x;
        this.y = game.monster.rh+55;
        this.count =1;
        this.w = 32;
        this.h = 32;
        this.red = 3.1
     
    }
    //渲染
    BulletMonster.prototype.render = function(){   
        game.context.save(); 
        game.context.translate(this.x,this.y); 
        game.context.rotate(this.red);//旋转角度  
        game.context.drawImage(game.R["dmzhidan_"+this.count],-this.w/2,-this.h/2);
        game.context.restore();
  
    }
    //刷新
    BulletMonster.prototype.update = function(){
        this.x-=17;
        this.count++;
        if(this.count>2){
            this.count=1;
        }
        if(this.x <-10 ){
            this.delete();
        }
    }
    //当超出可视范围内就进行删除
    BulletMonster.prototype.delete = function(){
        game.bulletMonsterArr.splice(game.bulletMonsterArr.indexOf(this),1);
    }
    //碰撞检测
    BulletMonster.prototype.bump = function(){
    for(var i =0 ;i<game.bulletMonsterArr.length;i++){
            if(game.bulletMonsterArr[i].x<=game.figure.x+10&&game.bulletMonsterArr[i].y>=game.figure.y-40&&
                game.bulletMonsterArr[i].x>=game.figure.x-10&&game.bulletMonsterArr[i].y<=game.figure.y+40
            ){
                game.blood++;
                game.banjiao.load();
                game.banjiao.play();
                game.bulletMonsterArr.splice(game.bulletMonsterArr.indexOf(game.bulletMonsterArr[i]),1);
            }
        }
    }
})()