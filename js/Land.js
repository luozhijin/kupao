(function(){
    var Land = window.Land =function(){
        this.w = 800;
        this.h = 164;
        this.x = 0;
    }
    Land.prototype.render = function(){
        game.context.drawImage(game.R["land"],this.x,game.h-this.h+45);
        game.context.drawImage(game.R["land"],this.x+this.w,game.h-this.h+45);
        // game.context.drawImage(game.R["land"],this.x+2*this.w,game.h-this.h);
    }
    Land.prototype.update = function(){
        this.x-=13;
        if(this.x<-this.w){
            this.x=0
        }
    }
})()