(function(){
    var Gold = window.Gold = function(){
        game.goldArr.push(this);
        this.x = 900;
        this.y = _.random(160,260);
  
        this.count = 1;
        this.shu = 0;
   

    }
    //渲染
    Gold.prototype.render = function(num){
        this.shu=this.x+num*60;
        game.context.drawImage(game.R["jianbi_"+this.count],this.shu,this.y);

    }
    //刷新
    Gold.prototype.update = function(){
        this.x -= 13;
        this.count++;
        if(this.count>4){
            this.count=1;
        }
        if(this.x<-400){
            this.delete();
        }

    }
    //当超出可视范围内就进行删除
    Gold.prototype.delete = function(){
        game.goldArr.splice(game.goldArr.indexOf(this),1);
    }
     //碰撞检测
     Gold.prototype.bump = function(){
        for(var i =0 ;i<game.goldArr.length;i++){
                if(game.goldArr[i].shu<=game.figure.x+50&&game.goldArr[i].y+20>=game.figure.y-60&&
                    game.goldArr[i].shu+40>=game.figure.x-50&&game.goldArr[i].y<=game.figure.y+60
                ){
                    game.score++;
                    game.baoshi.load();
                    game.baoshi.play();
                    game.goldArr.splice(game.goldArr.indexOf(game.goldArr[i]),1);
                }
        }
    }
})()