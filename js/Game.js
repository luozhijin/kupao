(function(){
    var Game = window.Game = function(){
        this.background = new Background;
        this.land = new Land;
        
        // this.figureArr = [];//装主角的数组
        this.figure = new Figure;
        
        //获取canvas
        this.ocanvas = document.querySelector("canvas");
        this.context = this.ocanvas.getContext("2d");
        this.banjiao = document.getElementById("banjiao");
        this.kaishi = document.getElementById("kaishi");
        this.si = document.getElementById("shi");
        this.baoshi = document.getElementById("baoshi");
        this.jingru = document.getElementById("jingru");
        this.tiao = document.getElementById("tiao");
        this.baozha = document.getElementById("baozha");
        this.sheji = document.getElementById("sheji");

        //设置cavas的宽高
        this.w = 800;
        this.h = 480;

        this.ocanvas.width = this.w;
        this.ocanvas.height = this.h;
        this.photo();
        this.bindEvent();
    }
    //加载相片
    Game.prototype.photo = function(){
        this.R = {
            "bj":"img/bj.png",
            "land":"img/bj1.png",
            "land1":"img/bj2.png",
            "figure_0":"img/r.png",
            "figure_1":"img/r1.png",
            "figure_2":"img/r2.png",
            "figure_3":"img/r3.png",
            "jiazai_kaisshi":"img/jiazai_kaisshi.png",
            "play":"img/play.bmp",
            "zhamgai_1":"img/shitou.png",
            "zhamgai_2":"img/motou1.png",
            "zhamgai_3":"img/motou2.png",
            "jianbi_1":"img/jb.png",
            "jianbi_2":"img/jb1.png",
            "jianbi_3":"img/jb2.png",
            "jianbi_4":"img/jb3.png",
            "guaiwu":"img/gs3.gif",
            "bird":"img/niao.fw.png", 
            "zjzhidan":"img/zidan.png",
            "dmzhidan_1":"img/h (1).png",
            "dmzhidan_2":"img/h (2).png",
            "fnzhidan_1":"img/h (3).png",
            "fnzhidan_2":"img/h (4).png",
            "score":"img/score.png",
            "xuetiao":"img/fengshu.bmp",
            "kuangend":"img/123.png",
            "fan":"img/fanhui.png",
            "tui":"img/tuichu.png",
        }
        //相片数量
        var allCount = Object.keys(this.R).length;
        //已经加载相片数量
        var count = 0;
        //遍历 this
        for(k in this.R){
            //对相片路劲进行备份
            var scr = this.R[k];
            //对相片进行实例化
            this.R[k] = new Image();
            this.R[k].src = scr;
            //判断相片是否加载完毕
    
            var sel = this;
            this.R[k].onload = function(ag){
          
                count++;
                if(count == allCount){
                    sel.start();
                    
                }
            }
        }
    }
    //进行刷新
    Game.prototype.clear = function(){
        this.context.clearRect(0,0,800,480);
    }
    Game.prototype.start = function(){
        
        var sel = this;
        sel.scenceManager = new ScenceManager;
        sel.scenceManager.senter(0);
        sel.frame=0
        sel.obstaclesArr = [];//装障碍物的数组
        sel.goldArr = []//装金币
        sel.monsterArr = [];//装地面怪兽
        sel.birdArr = [];//装飞行怪物
        sel.bird = new Bird;//实例化飞行怪物
        sel.BulletFigureArr= [];//装主角发射出来的子弹
        sel.bulletMonsterArr= [];//装地面怪物发射出来的子弹
        sel.bulletBirdArr = [];//装飞行怪物发出来的子弹
        sel.BulletFigureTop = true;//定义一个变量 当飞鸟死之后 不再变量和生成火球
        sel.bulletMonsterArrTop = true;//定义一个变量 当地面怪物死之后 不再变量和生成火球
        sel.score = 0;//定义一个变量 加分
        sel.blood = 0;
        //对血条和分数的管理
        sel.scores = new Score;
        sel.bloods = new Blood;
        sel.xuetioa = 467;
        sel.bl = 0;
        sel.bs = 0;
        //定义一个变量来控制界面2 的开始和结束
        sel.end = false;
        sel.sppe = 0;
        setInterval(function(){
            sel.clear();
            // sel.sppe++;
            sel.frame++;
            if(sel.end == false){
            //实例化障碍物
            if(sel.frame%80==0){
                sel.obstacles = new Obstacles;
            }
            //实例化金币
            if(sel.frame%120==0){
                for(var i=0 ;i<4;i++){
                    sel.gold = new Gold;
                }
                
            }
            //实例化地面的怪兽
            if(sel.frame%100==0&&sel.frame%80!=0){
                sel.monster = new Monster;
                sel.bulletMonsterArrTop = true
               
            }
            //实例化地面怪物发射的子弹
            if(sel.bulletMonsterArrTop){
                if(sel.frame%100==0){
                    sel.bulletMonster = new BulletMonster;
                }
            }
            //实例化飞鸟怪物发出的子弹
            if(sel.BulletFigureTop){
                if(sel.frame%70==0){
                    sel.bulletBird = new BulletBird;
                }
            }
            //
            if(!sel.BulletFigureTop){
                if(sel.frame%80==0){
                    sel.bird = new Bird;
                    sel.BulletFigureTop = true;
                }
            }
            
            // if(sel.frame >=120){
            //     sel.monster.bump();
            //     sel.gold.bump();
            //     sel.bulletBird.bump();
            //     sel.bulletMonster.bump();
            //     sel.obstacles.bump();
            // }
            // sel.bird.bump();
        }
            sel.scenceManager.updateANDrender();
        
        },50)
       
    }
    //点击空格键主角发射子弹
    Game.prototype.bindEvent = function(){
        var selss = this;
        document.onkeydown = function(event){
            switch(event.keyCode){
                case 32:
                //实例化主角发射的子弹  点击一次发射一次
                selss.bulletFigure = new BulletFigure;
                selss.sheji.load();
                self.sheji.play();
                break;
            }
        }
    }
   
})()