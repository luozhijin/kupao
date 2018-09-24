(function(){
    var Score = window.Score = function(){
    
        this.x = 580;
        this.y = 0;

    }
    //渲染
    Score.prototype.render = function(){
        //让相放到指定的位置
        game.context.drawImage(game.R["score"],this.x,this.y);
        game.context.font = "italic small-caps bold 35px 华文行楷 ";
        game.context.fillStyle = "red";
        game.context.fillText( game.score+"",this.x+90,this.y+38);
    }


})()