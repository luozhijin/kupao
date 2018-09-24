(function(){
    var BulletBird = window.BulletBird = function(){
        game.bulletBirdArr.push(this);
        this.x = game.bird.x;
        this.y = game.bird.rh+60;
        this.count =1;
        this.w = 32;
        this.h = 32;
        this.red = 3.1
        this.idx =_.random(5,7);
        this.idy = _.random(0.5,1);
    }
    //渲染
    BulletBird.prototype.render = function(){   
        game.context.save(); 
        game.context.translate(this.x,this.y); 
        game.context.rotate(this.red);//旋转角度  
        game.context.drawImage(game.R["fnzhidan_"+this.count],-this.w/2,-this.h/2);
        game.context.restore();
  
    }
    //刷新
    BulletBird.prototype.update = function(){
        this.x-=this.idx;
        this.y+=this.idy;
        this.count++;
        if(this.count>2){
            this.count=1;
        }
        if(this.x <-10 ||this.y >=500){
            this.delete();
        }
    }
    //当超出可视范围内就进行删除
    BulletBird.prototype.delete = function(){
        game.bulletBirdArr.splice(game.bulletBirdArr.indexOf(this),1);
    }
   //碰撞检测
   BulletBird.prototype.bump = function(){
    for(var i =0 ;i<game.bulletBirdArr.length;i++){
            if(game.bulletBirdArr[i].x<=game.figure.x+10&&game.bulletBirdArr[i].y>=game.figure.y-40&&
                game.bulletBirdArr[i].x>=game.figure.x-10&&game.bulletBirdArr[i].y<=game.figure.y+40
            ){
                game.blood++;
                game.banjiao.load();
                game.banjiao.play();
                game.bulletBirdArr.splice(game.bulletBirdArr.indexOf(game.bulletBirdArr[i]),1);
            }
        }
    }
})()