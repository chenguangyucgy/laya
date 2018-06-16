// 程序入口
var Browser = laya.utils.Browser;
var HttpRequest = laya.net.HttpRequest;
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.modes = "showall";
        Laya.init(640, 1132);
        //性能统计面板
        //Laya.Stat.show();
        //缩放模式
        Laya.stage.scaleMode = this.modes;
        //碎屏对齐方式
        Laya.stage.alignH = "center";
        //垂直对齐方式
        Laya.stage.alignV = "middle";
        //舞台颜色
        Laya.stage.bgColor = "#000000";
        //加载资源
        var resArray = [
            { url: "res/atlas/comp.json", type: Laya.Loader.ATLAS },
            { url: "res/atlas/gameimg.json", type: Laya.Loader.ATLAS }
        ];
        //加载资源
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoader));
        window.onbeforeunload = function () {
            var obj = module.oneViewModule.getInstance().dataContent;
            if (obj) {
                for (var i = 0; i < obj.length; i++) {
                    var exp = Number(obj[i]["exp"]);
                    var id = Number(obj[i]["dictionary_id"]);
                    var current = Number(obj[i]["current"]);
                    var chouka = Number(obj[i]["chouka"]);
                    var logout_time = Date.parse(String(new Date));
                    if (current == 1) {
                        util.HttpRequestUtil.senddata("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_dictionary_progress2.php?modify=save&&dictionary_id=" + id + "&&exp=" + exp + "&&current=" + current + "&&chouka=" + chouka + "&&logout_time=" + logout_time + "");
                    }
                    else {
                        util.HttpRequestUtil.senddata("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_dictionary_progress2.php?modify=save&&dictionary_id=" + id + "&&exp=" + exp + "&&current=" + current + "&&chouka=" + chouka + "&&logout_time=0");
                    }
                }
            }
        };
    }
    GameMain.prototype.removewin = function () {
    };
    GameMain.prototype.onLoader = function () {
        //var view:oneView = new oneView;
        //Laya.stage.addChild(view);
        //var view:laya.ui.View = new jump.oneView;
        //Laya.stage.addChild(view);
        //获取本地存储
        //连接服务器
        var xhr = new HttpRequest();
        xhr.http.timeout = 10000; //设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
        xhr.once(Laya.Event.ERROR, this, this.errorHandler);
        xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        xhr.send("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/dictionary_all.php", "", "get", "text");
        util.HttpRequestUtil.send4("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/world_charbank_char.php?id=1");
        if (Laya.LocalStorage.getJSON("ziData")) {
            module.oneViewModule.getInstance().ziArr(Laya.LocalStorage.getJSON("ziData"));
        }
        //Laya.stage.renderingEnabled = true;
    };
    GameMain.prototype.processHandler = function (data) {
        console.log(data);
    };
    //返回数据
    GameMain.prototype.completeHandler = function (data) {
        util.HttpRequestUtil.send2("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_hunji.php?user_id=1");
        var Arrobj = JSON.parse(data);
        for (var i = 0; i < Arrobj.length; i++) {
            util.HttpRequestUtil.send("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_dictionary_progress2.php?modify=query&&dictionary_id=" + Arrobj[i]["id"] + "");
            //实例化添加舞台
            Laya.timer.once(7000, this, this.onclick);
        }
    };
    GameMain.prototype.errorHandler = function (e) {
    };
    GameMain.prototype.onclick = function () {
        jump.oneView.getInstance();
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map