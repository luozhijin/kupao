(function(){
    var Figure = window.Figure = function(){
        // this.w =
        this.wing = 0
        //小鸟几何中心
        this.x = 100;
        this.y = 100;
        this.w =123;
        this.h =105;
         //人物翻滚
         this.red = 0.01;
        this.count = 0;
        //y轴的变化值
        this.idy = 0;
        //交换图片
        this.wing = 0;
        // //主角跳起来旋转的y轴变化
        this.tiaoY =0;
        //判断主角是不是跳到地面
        this.fall = false;
        // console.log(game.figureArr);
        // 
    }
    //渲染
    Figure.prototype.render = function(){

        game.context.save(); 
        game.context.translate(this.x,this.y); 
        game.context.rotate(this.red);//旋转角度  
        game.context.drawImage(game.R["figure_"+this.wing],-this.w/2,-this.h/2);
        game.context.restore();
    }
    //刷新
    Figure.prototype.update = function(){
        if(this.dirction == "下降"){
            this.tiaoY+=6;
            this.y+=this.tiaoY;
            this.wing = 0;
            if(this.y >=380){
                this.y = 380;
                this.count = 0;
                this.fall =true; 
                this.dirction =" ";
            }
            this.red = 0.01;
        }else if(this.dirction == "上升"){
            //如果上升
          //让我们的y轴的变化量左减法
          if(this.count%2==0){
                this.tiaoY -=0.8;
                this.red +=0.35;
                this.fall = false;//判断主角是否下落到地面
                if(this.tiaoY >0){
                    //如果y轴的变化量是正数需要做减法
                    this.y-=this.tiaoY;
                    this.wing = 0;
                }else{
                    //如果是idy的数值小于零我们就向下落
                    this.dirction = "下降";
                    
                }
            }else{
                this.tiaoY -=0.8;
                this.red =0.1;
                console.log();
                if(this.tiaoY >0){
                    //如果y轴的变化量是正数需要做减法
                    this.y-=this.tiaoY;
                    this.wing = 0;
                }else{
                    //如果是idy的数值小于零我们就向下落
                    this.dirction = "下降";
                }
            }
            
         
        }
       
        


    }
    //让主角跑起来
    Figure.prototype.jiaohuan = function(){
        this.wing++;
        if(this.wing>3){
            this.wing = 0;
        }
    }
    //让主角跳起来旋转
    
    Figure.prototype.tiao = function(){
        this.count++; 
       this.dirction = "上升";
       this.tiaoY =13;
    }
     //事件的监听 监听主角
    //  Figure.prototype.bindEvent = function(){
    //     game.ocanvas.onclick = function(event){
    //         switch(){
                
    //         }
    //     }
    //  }
})()