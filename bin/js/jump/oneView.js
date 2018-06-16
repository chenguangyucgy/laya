var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* 主界面
*/
var jump;
(function (jump) {
    var oneView = /** @class */ (function (_super) {
        __extends(oneView, _super);
        function oneView() {
            var _this = _super.call(this) || this;
            _this.textrander = 0;
            var resArray = [
                { url: "res/atlas/comp.json", type: Laya.Loader.ATLAS }
            ];
            _this.dictionaryUpdata.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.miaoBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.miaoBtn.on(Laya.Event.MOUSE_DOWN, _this, _this.mouse_down);
            _this.miaoBtn.on(Laya.Event.MOUSE_UP, _this, _this.mouse_up);
            _this.hunjiBtn1.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.hunjiBtn2.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.hunjiBtn3.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.rewardBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.ziWin.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.chou.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.mallWin.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.hunjiImg1.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.hunjiImg2.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.hunjiImg3.on(Laya.Event.CLICK, _this, _this.onclick);
            var obj = module.oneViewModule.getInstance().currentData;
            if (obj) {
                _this.dicName.text = obj["name"];
                var exp = Number(obj["exp"]);
                _this.expText.text = exp + "/" + 50;
                if (exp >= 50) {
                    exp = 50;
                }
                _this.progressBar.x = -310 + exp * 310 / 50;
            }
            _this.rewardBtn.disabled = true;
            _this.maojian();
            Laya.timer.loop(1000, _this, _this.init);
            Laya.timer.once(500, _this, _this.huxi1);
            Laya.timer.once(1000, _this, _this.huxi2);
            Laya.timer.once(1500, _this, _this.huxi3);
            _this.hunjisever();
            return _this;
        }
        oneView.prototype.init = function () {
            var obj = module.oneViewModule.getInstance().currentData;
            var logout_time = Date.parse(String(new Date));
            if (obj != null) {
                var exp = Number(obj["exp"]);
                if (this.hunjiImg1.visible || this.hunjiImg2.visible || this.hunjiImg3.visible) {
                    exp++;
                    obj["exp"] = exp;
                    if (obj["exp"] >= 50) {
                        Laya.timer.clearAll(this);
                        Laya.Tween.clearAll(this.progressBar);
                        this.rewardBtn.disabled = false;
                        obj["exp"] = 50;
                    }
                    this.dicName.text = obj["name"];
                    this.expText.text = obj["exp"] + "/" + 50;
                    //this.progressBar.x = -272 + obj["exp"]*262/500;
                }
            }
        };
        //切换字典刷新页面
        oneView.prototype.randerinit = function () {
            var obj = module.oneViewModule.getInstance().currentData;
            if (obj != null) {
                var exp = Number(obj["exp"]);
                //Laya.timer.loop(100,this,this.randerinit);
                this.maobi.text = this.textrander + "";
                this.dicName.text = obj["name"];
                //Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this.progressBar);
                this.miaoBtn.mouseEnabled = true;
                if (exp >= 50) {
                    exp = 50;
                    this.rewardBtn.disabled = false;
                    this.miaoBtn.mouseEnabled = true;
                }
                else {
                    this.rewardBtn.disabled = true;
                }
                this.expText.text = exp + "/" + 50;
                this.progressBar.x = -310 + exp * 310 / 50;
                if (this.hunjiImg1.visible || this.hunjiImg2.visible || this.hunjiImg3.visible) {
                    Laya.Tween.to(this.progressBar, { x: 0 }, 50000 - 1000 * exp);
                    Laya.timer.loop(1000, this, this.init);
                }
            }
        };
        oneView.getInstance = function () {
            if (this._instance == null) {
                this._instance = new oneView;
                Laya.stage.addChild(this._instance);
            }
            return this._instance;
        };
        oneView.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.dictionaryUpdata:
                    var panel = new jump.updataDictionary;
                    this.addChild(panel);
                    panel.show();
                    break;
                case this.miaoBtn:
                    var obj = module.oneViewModule.getInstance().currentData;
                    var bubbling = new jump.BubblingItem;
                    //this.miaoBtn.addChild(bubbling);
                    bubbling.show();
                    //this.startLearn();
                    var exp = Number(obj["exp"]);
                    if (exp < 50) {
                        this.progressBar.x += 310 / 50;
                    }
                    exp += 1;
                    var id = Number(obj["dictionary_id"]);
                    obj["exp"] = exp;
                    if (exp >= 50) {
                        this.miaoBtn.mouseEnabled = false;
                        this.rewardBtn.disabled = false;
                        obj["exp"] = 50;
                    }
                    this.expText.text = obj["exp"] + "/" + 50;
                    Laya.Tween.clearAll(this.progressBar);
                    if (this.hunjiImg1.visible || this.hunjiImg2.visible || this.hunjiImg3.visible) {
                        Laya.Tween.to(this.progressBar, { x: 0 }, 50000 - 1000 * obj["exp"]);
                    }
                    //Laya.timer.loop(1000,this,this.init);
                    //Laya.timer.once(1000,this,this.openBubbing,[bubbling]);
                    break;
                case this.hunjiImg1:
                    module.oneViewModule.getInstance().hunjiClass = 1;
                    var hunji = new jump.updataHunJiDialog;
                    this.addChild(hunji);
                    hunji.show();
                    break;
                case this.hunjiImg2:
                    module.oneViewModule.getInstance().hunjiClass = 2;
                    var hunji = new jump.updataHunJiDialog;
                    this.addChild(hunji);
                    hunji.show();
                    break;
                case this.hunjiImg3:
                    module.oneViewModule.getInstance().hunjiClass = 3;
                    var hunji = new jump.updataHunJiDialog;
                    this.addChild(hunji);
                    hunji.show();
                    break;
                case this.hunjiBtn1:
                    module.oneViewModule.getInstance().hunjiClass = 1;
                    var hunji = new jump.updataHunJiDialog;
                    this.addChild(hunji);
                    hunji.show();
                    break;
                case this.hunjiBtn2:
                    var hunji = new jump.updataHunJiDialog;
                    module.oneViewModule.getInstance().hunjiClass = 2;
                    this.addChild(hunji);
                    hunji.show();
                    break;
                case this.hunjiBtn3:
                    var hunji = new jump.updataHunJiDialog;
                    module.oneViewModule.getInstance().hunjiClass = 3;
                    this.addChild(hunji);
                    hunji.show();
                    break;
                case this.rewardBtn:
                    var obj = module.oneViewModule.getInstance().currentData;
                    var id = Number(obj["dictionary_id"]);
                    var timestamp = Date.parse(String(new Date));
                    //util.HttpRequestUtil.senddata("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_dictionary_progress2.php?modify=save&&dictionary_id="+id+"&&exp="+0+"&&logout_time="+0+"");
                    obj["exp"] = 0;
                    var chou = Number(obj["chouka"]);
                    obj["chouka"] = chou + 1;
                    this.expText.text = obj["exp"] + "/" + 500;
                    this.progressBar.x = -310 + obj["exp"] * 310 / 50;
                    this.rewardBtn.disabled = true;
                    this.miaoBtn.mouseEnabled = true;
                    this.ani.play();
                    this.ani.on(Laya.Event.COMPLETE, this, this.removeAni);
                    if (this.hunjiImg1.visible || this.hunjiImg2.visible || this.hunjiImg3.visible) {
                        Laya.Tween.to(this.progressBar, { x: 0 }, 50000 - 1000 * obj["exp"]);
                    }
                    Laya.timer.loop(1000, this, this.init);
                    break;
                case this.chou:
                    var chouka = new jump.chouka;
                    this.addChild(chouka);
                    chouka.popup(true, true);
                    break;
                case this.ziWin:
                    var chouka = new jump.wordStockWin;
                    this.addChild(chouka);
                    chouka.popup(true, true);
                    break;
                case this.mallWin:
                    var exchange = new jump.exchangeWin;
                    this.addChild(exchange);
                    exchange.popup(true, true);
                    break;
            }
        };
        /**server是否有魂姬 */
        oneView.prototype.hunjisever = function () {
            var hunjishu = module.oneViewModule.getInstance().hunjishu;
            //魂姬1
            if (hunjishu["hunji1"] == "1") {
                this.hunjiBtn1.visible = false;
                this.diImg1.visible = false;
                this.hunjiImg1.visible = true;
            }
            else {
                this.hunjiBtn1.visible = true;
                this.diImg1.visible = true;
                this.hunjiImg1.visible = false;
            }
            //魂姬2
            if (hunjishu["hunji2"] == "1") {
                this.hunjiBtn2.visible = false;
                this.diImg2.visible = false;
                this.hunjiImg2.visible = true;
            }
            else {
                this.hunjiBtn2.visible = true;
                this.diImg2.visible = true;
                this.hunjiImg2.visible = false;
            }
            //魂姬3
            if (hunjishu["hunji3"] == "1") {
                this.hunjiBtn3.visible = false;
                this.diImg3.visible = false;
                this.hunjiImg3.visible = true;
            }
            else {
                this.hunjiBtn3.visible = true;
                this.diImg3.visible = true;
                this.hunjiImg3.visible = false;
            }
        };
        /**添加魂姬时设置魂姬 */
        oneView.prototype.hunjiUpdata = function () {
            var hunjishu = module.oneViewModule.getInstance().hunjishu;
            var hunjiClass = module.oneViewModule.getInstance().hunjiClass;
            if (!this.hunjiImg1.visible && !this.hunjiImg2.visible && !this.hunjiImg3.visible) {
                var obj = module.oneViewModule.getInstance().currentData;
                var exp = Number(obj["exp"]);
                Laya.Tween.to(this.progressBar, { x: 0 }, 50000 - 1000 * exp);
            }
            if (hunjiClass) {
                util.HttpRequestUtil.send3("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_hunji_update.php?user_id=1&&hunji" + hunjiClass + "=1");
                this["hunjiBtn" + hunjiClass].visible = false;
                this["diImg" + hunjiClass].visible = false;
                this["hunjiImg" + hunjiClass].visible = true;
            }
        };
        /**移除魂姬时设置魂姬 */
        oneView.prototype.hunjiRemover = function () {
            var hunjiClass = module.oneViewModule.getInstance().hunjiClass;
            if (hunjiClass) {
                util.HttpRequestUtil.send3("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_hunji_update.php?user_id=1&&hunji" + hunjiClass + "=0");
                this["hunjiBtn" + hunjiClass].visible = true;
                this["diImg" + hunjiClass].visible = true;
                this["hunjiImg" + hunjiClass].visible = false;
            }
            if (!this.hunjiImg1.visible && !this.hunjiImg2.visible && !this.hunjiImg3.visible) {
                var obj = module.oneViewModule.getInstance().currentData;
                Laya.Tween.clearAll(this.progressBar);
            }
        };
        //猫酱缩小
        oneView.prototype.mouse_down = function () {
            Laya.Tween.clearAll(this.miaoBtn);
            this.miaoBtn.scaleX = 0.7;
            this.miaoBtn.scaleY = 0.7;
        };
        //猫酱放大
        oneView.prototype.mouse_up = function () {
            this.miaoBtn.scaleX = 1;
            this.miaoBtn.scaleY = 1;
            this.maojian();
        };
        //魂姬效果
        oneView.prototype.huxi1 = function () {
            var _this = this;
            //魂姬1
            if (this.hunjiImg1.scaleX >= 1) {
                Laya.Tween.to(this.hunjiImg1, { scaleX: 0.9, scaleY: 0.9 }, 2000, null, Laya.Handler.create(this, function () {
                    _this.huxi1();
                }));
            }
            else {
                Laya.Tween.to(this.hunjiImg1, { scaleX: 1, scaleY: 1 }, 2000, null, Laya.Handler.create(this, function () {
                    _this.huxi1();
                }));
            }
        };
        oneView.prototype.huxi2 = function () {
            var _this = this;
            //魂姬2
            if (this.hunjiImg2.scaleX >= 1) {
                Laya.Tween.to(this.hunjiImg2, { scaleX: 0.9, scaleY: 0.9 }, 2000, null, Laya.Handler.create(this, function () {
                    _this.huxi2();
                }));
            }
            else {
                Laya.Tween.to(this.hunjiImg2, { scaleX: 1, scaleY: 1 }, 2000, null, Laya.Handler.create(this, function () {
                    _this.huxi2();
                }));
            }
        };
        oneView.prototype.huxi3 = function () {
            var _this = this;
            //魂姬3
            if (this.hunjiImg3.scaleX >= 1) {
                Laya.Tween.to(this.hunjiImg3, { scaleX: 0.9, scaleY: 0.9 }, 2000, null, Laya.Handler.create(this, function () {
                    _this.huxi3();
                }));
            }
            else {
                Laya.Tween.to(this.hunjiImg3, { scaleX: 1, scaleY: 1 }, 2000, null, Laya.Handler.create(this, function () {
                    _this.huxi3();
                }));
            }
        };
        oneView.prototype.maojian = function () {
            var _this = this;
            //喵酱
            if (this.miaoBtn.scaleX >= 1) {
                Laya.Tween.to(this.miaoBtn, { scaleX: 0.9, scaleY: 0.9 }, 2000, null, Laya.Handler.create(this, function () {
                    _this.maojian();
                }));
            }
            else {
                Laya.Tween.to(this.miaoBtn, { scaleX: 1, scaleY: 1 }, 2000, null, Laya.Handler.create(this, function () {
                    _this.maojian();
                }));
            }
        };
        //停止动画
        oneView.prototype.removeAni = function () {
            this.ani.stop();
        };
        oneView.prototype.startLearn = function () {
            module.oneViewModule.getInstance().updataCurrentData(1);
        };
        oneView.prototype.openBubbing = function (bubbling) {
            bubbling.close();
        };
        oneView.getPopUp = function (popUp) {
            if (popUp == null) {
                return null;
            }
        };
        return oneView;
    }(ui.oneViewUI));
    jump.oneView = oneView;
})(jump || (jump = {}));
//# sourceMappingURL=oneView.js.map