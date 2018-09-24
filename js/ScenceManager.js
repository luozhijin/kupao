(function(){
    var ScenceManager = window.ScenceManager = function(){
        
    }
    //设置场景分类
    ScenceManager.prototype.senter = function(num){
        game.sence = num;
        switch(game.sence){
            case 0 :
            game.jingru.pause();
            game.kaishi.load();
            game.kaishi.play();
            //paly的坐标
            this.x = 340;
            this.y = 320;
            break;
            case 1:
            game.jingru.pause();
            game.kaishi.pause();
            break;
            case 2:
            game.jingru.load();
            game.jingru.play();
            game.end = false;
            game.xuetioa = 467;
            game.score = 0;
            game.figure.dirction = "下降";
            game.figure.x =100;
            game.figure.y = 100;
            //计算小人跳的次数
            this.frames =0;
            //控制主角跑步速度
            this.framese = 0;
            break;
            case 3:
            game.jingru.pause();
            break;
        }
    }
    //更新和渲染的方法
    ScenceManager.prototype.updateANDrender = function(){
        this.bindEvent();
    
        switch(game.sence){
            case 0:
            //渲染背景和开始外边框
            this.render();
           
            //文字“酷跑小天地”
            game.context.font = "40px 华文行楷";
            game.context.fillStyle = "red";
            game.context.fillText("酷跑小天地",this.x-50,170);
             //主角的渲染和更新
            game.figure.x = 370;
            game.figure.y = 250;
            game.figure.render();
            if(game.frame%2 == 0){
                game.figure.jiaohuan();
            }
            //PLAY
            game.context.drawImage(game.R["play"],this.x,this.y);
            break;
            case 1:
            game.sppe++;
             //渲染背景和开始外边框
             this.render();
             //主角的渲染和更新
             game.figure.x = 370;
             game.figure.y = 250;
             game.figure.render();
             if(game.frame%2 == 0){
                 game.figure.jiaohuan();
             }
            game.context.font = "30px 华文行楷";
            game.context.fillStyle = "red";
            game.context.fillText("加载中...",330,350);
            if(game.sppe>80){
                this.senter(2);
                game.sppe=0;
            }

            break;
            case 2:
            if(game.end == false){

            
            if(game.frame >=120){
                game.monster.bump();
                game.gold.bump();
                game.bulletBird.bump();
                game.bulletMonster.bump();
                game.obstacles.bump();
            }
            game.bird.bump();
            this.framese++;
             //更新背景
            game.background.update();
            //渲染背景相片
            game.background.render();
            //更新路面
            game.land.update();
            //渲染背景
            game.land.render();
            //渲染人物
            //如果落地重新开始渲染跑
            if(game.figure.fall){
                if(this.framese%2 == 0){
                    game.figure.jiaohuan();
                }
            }
            game.figure.update();
            game.figure.render();
            //随机渲染更新障碍物
            for(var i = 0;i < game.obstaclesArr.length;i++){
                game.obstaclesArr[i].update();//当障碍物超出可视范围时进行水删除
                game.obstaclesArr[i].render();

            }
             //随机渲染更新金币
             for(var i = 0;i < game.goldArr.length;i++){
                 game.goldArr[i].render(i);
                game.goldArr[i].update();//当障碍物超出可视范围时进行水删除

            }
            //随机渲染更新地面怪兽
            for(var i = 0;i < game.monsterArr.length;i++){
                game.monsterArr[i].render();
                game.monsterArr[i].update();//当障碍物超出可视范围时进行水删除

            }
            //渲染和更新飞行怪物
            for(var i = 0;i < game.birdArr.length;i++){
                if(this.framese%2 == 0){
                    game.birdArr[i].update();//当障碍物超出可视范围时进行水删除
                }
                game.birdArr[i].render();
            }
            //随机渲染主角发射的子弹
            for(var i = 0;i < game.BulletFigureArr.length;i++){
                game.BulletFigureArr[i].update(); 
                game.BulletFigureArr[i].render();

            }
            //随机渲染地面怪物发射的子弹
            for(var i = 0;i < game.bulletMonsterArr.length;i++){
                game.bulletMonsterArr[i].render();
                game.bulletMonsterArr[i].update(); 
            }
            //随机渲染飞行怪物发射的子弹
            for(var i = 0;i < game.bulletBirdArr.length;i++){
                game.bulletBirdArr[i].update(); 
                game.bulletBirdArr[i].render();
            }
            game.scores.render();
            game.bloods.render();
            game.bl = game.blood;
            
            if(game.blood>game.bs){
                game.xuetioa -=40;
                if(game.xuetioa<=0){
                    game.xuetioa=0; 
                    game.si.load();
                    game.si.play();
                    game.end = true;
                    this.senter(3);
                }
                game.bs =game.bl;
            }
        }
            break;
            case 3:
             //渲染背景相片
            game.background.render();
            //渲染地面
            game.context.drawImage(game.R["land1"],0,370);
            game.context.drawImage(game.R["kuangend"],0,0,816,487,game.w/2-190,game.h/2-120,380,260);
            game.context.drawImage(game.R["fan"],440,320);
            game.context.drawImage(game.R["tui"],245,320);
            game.context.font = "40px 华文行楷";
            game.context.fillStyle = "red";
            game.context.fillText("游戏结束",300,200);
            game.context.fillText("您的得分:"+game.score,300,270);


            break;
        }

    }
    //事件监听
    ScenceManager.prototype.bindEvent = function(){
        var sels = this;
        
        game.ocanvas.onclick = function(event){
            
            //获取点击点的坐标
            var x = event.clientX;
            var y = event.clientY;
            switch(game.sence){
                case 0:
                //如果点击的坐标在play的坐标返回内 则跳转到下一个页面
                console.log(x,y);
                if(x > sels.x && x < sels.x + 90 && y > sels.y && y < sels.y + 40){
              
                    sels.senter(1);
                }
                break;
                case 1:
                break;
                case 2:
                
                
                //判断当主角旋转之后 就不能调用 game.figure.tiao();
                sels.frames++;
                if(game.figure.fall&&sels.frames<=2){
                    game.figure.tiao();
                }else if(game.figure.fall&&sels.frames>2){
                    sels.frames=0;  
                }
                game.tiao.load();
                game.tiao.play();
                break;
                case 3:
                if(x > 440 && x < 556 && y > 320 && y < 342){
                    sels.senter(1);
                }
                if(x > 245 && x < 361 && y > 320 && y < 342){
                    sels.senter(0);
                }
                break;

            }
        }
        
    }
    //渲染背景和开始外边框
    ScenceManager.prototype.render = function(){
         //渲染背景相片
         game.background.render();
         //渲染地面
        game.context.drawImage(game.R["land1"],0,370);
            //开始外框
        game.context.drawImage(game.R["jiazai_kaisshi"],0,0,305,167,game.w/2-150,game.h/2-120,270,280);
    }

    
})()