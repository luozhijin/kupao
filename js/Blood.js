(function(){
    var Blood = window.Blood = function(){
    
        this.x = 150;
        this.y = 460;
        this.w = 242;
        this.h= 64;
        this.ws = 500;
        this.hs = 20;
        
    }
    //渲染
    Blood.prototype.render = function(){
        //让相放到指定的位置
        game.context.drawImage(game.R["xuetiao"],0,0,this.w,this.h,this.x,this.y,this.ws,this.hs);
         //设置填充颜色
         game.context.fillStyle = "red";
        //绘制图形fillRect(x,y,宽，高);
        game.context.fillRect(this.x+15,this.y+5,game.xuetioa,10);
    }
    //让相片运动 更新
    Blood.prototype.update = function(){
        this.x-=7;
        if(this.x<-this.w){
            this.x=0
        }

    }

})()