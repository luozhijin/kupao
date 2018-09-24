(function(){
    var Obstacles = window.Obstacles = function(){
        this.x = 820;
        game.obstaclesArr.push(this);
        // console.log( game.obstaclesArr);
        //随机一个数  生成随机障碍物
        this.suiji = _.random(1,3);
        //障碍我的高度
        this.h =game.h-game.land.h+65;

    }

    //渲染
    Obstacles.prototype.render = function(){
        if(this.suiji==3){
            this.h=game.h-game.land.h-50;
        }
        game.context.drawImage(game.R["zhamgai_"+this.suiji],this.x,this.h);
        // game.context.drawImage(game.R["shitou"],this.x,game.h-game.land.h+80);
        
    }
    //刷新
    Obstacles.prototype.update = function(){
        this.x-=13;
        if(this.x<-game.w){
            this.delete();
        }

    }
    //当超出可视范围内就进行删除
    Obstacles.prototype.delete = function(){
        game.obstaclesArr.splice(game.obstaclesArr.indexOf(this),1);
    }
    //碰撞检测
    Obstacles.prototype.bump = function(){
        for(var i =0 ;i<game.obstaclesArr.length;i++){
                if(game.obstaclesArr[i].x+40>=game.figure.x-50&&game.obstaclesArr[i].h<=game.figure.y+40&&
                    game.obstaclesArr[i].x+20<=game.figure.x+40  &&game.obstaclesArr[i].h+50>=game.figure.y-50
                ){
                    game.blood++;
                   
                    game.obstaclesArr.splice(game.obstaclesArr.indexOf(game.obstaclesArr[i]),1);
                    game.banjiao.load();
                    game.banjiao.play();
                 
                }
            }
        }
    
})()