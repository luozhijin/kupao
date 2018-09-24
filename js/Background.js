(function(){
    var Background = window.Background = function(){
        this.w = 800;
        this.h = 480;
        this.x = 0;
        // this.render();
    }
    //渲染
    Background.prototype.render = function(){
        //让相放到指定的位置
        game.context.drawImage(game.R["bj"],this.x,game.h-this.h);
        game.context.drawImage(game.R["bj"],this.x + this.w,game.h-this.h);
        // game.context.drawImage(game.R["bj"],this.x + 2*this.w,game.h-this.h);
    }
    //让相片运动 更新
    Background.prototype.update = function(){
        this.x-=7;
        if(this.x<-this.w){
            this.x=0
        }

    }
})()