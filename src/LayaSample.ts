// 程序入口
class GameMain{
    private modes:string = "showall";
    constructor()
    {
        Laya.init(640,1132);
        //性能统计面板
        Laya.Stat.show();
        //缩放模式
        Laya.stage.scaleMode = this.modes;
        //碎屏对齐方式
        Laya.stage.alignH = "center";
        //垂直对齐方式
        Laya.stage.alignV = "middle";
        //舞台颜色
        Laya.stage.bgColor = "#000000";
        var resArray:Array<any>=[
            {url:"res/atlas/comp.json",type:Laya.Loader.ATLAS}
            ,{url:"res/atlas/gameimg.json",type:Laya.Loader.ATLAS}
        ];
        //加载资源
        Laya.loader.load(resArray,Laya.Handler.create(this,this.onLoader));
    }
    
    

    onLoader():void{
         //var view:oneView = new oneView;
         //Laya.stage.addChild(view);
         //var view:laya.ui.View = new jump.oneView;
         //Laya.stage.addChild(view);
         //获取本地存储
         if(Laya.LocalStorage.getJSON("ziData"))
         {
             module.oneViewModule.getInstance().ziArr(Laya.LocalStorage.getJSON("ziData"));
         }
         //实例化添加舞台
         jump.oneView.getInstance();
         //Laya.stage.renderingEnabled = true;

    }
    
}
new GameMain();
