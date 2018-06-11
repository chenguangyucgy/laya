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
            _this.dicName.text = obj["name"];
            _this.expText.text = obj["exp"] + "/" + 50;
            _this.progressBar.x = -310 + obj["exp"] * 310 / 50;
            _this.rewardBtn.disabled = true;
            _this.maojian();
            Laya.timer.loop(1000, _this, _this.init);
            Laya.timer.once(500, _this, _this.huxi1);
            Laya.timer.once(1000, _this, _this.huxi2);
            Laya.timer.once(1500, _this, _this.huxi3);
            return _this;
        }
        oneView.prototype.init = function () {
            var obj = module.oneViewModule.getInstance().currentData;
            if (obj != null) {
                if (this.hunjiImg1.visible || this.hunjiImg2.visible || this.hunjiImg3.visible) {
                    obj["exp"]++;
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
            //Laya.timer.loop(100,this,this.randerinit);
            this.maobi.text = this.textrander + "";
            this.dicName.text = obj["name"];
            this.expText.text = obj["exp"] + "/" + 50;
            this.progressBar.x = -310 + obj["exp"] * 310 / 50;
            //Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.progressBar);
            this.miaoBtn.mouseEnabled = true;
            if (obj["exp"] >= 50) {
                this.rewardBtn.disabled = false;
            }
            if (this.hunjiImg1.visible || this.hunjiImg1.visible || this.hunjiImg1.visible) {
                Laya.Tween.to(this.progressBar, { x: 0 }, 50000 - 1000 * obj["exp"]);
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
                    obj["exp"] += 1;
                    if (obj["exp"] >= 50) {
                        this.miaoBtn.mouseEnabled = false;
                        obj["exp"] = 50;
                    }
                    this.expText.text = obj["exp"] + "/" + 50;
                    Laya.Tween.clearAll(this.progressBar);
                    this.progressBar.x += 6.5;
                    if (this.hunjiImg1.visible || this.hunjiImg1.visible || this.hunjiImg1.visible) {
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
                    obj["exp"] = 0;
                    obj["chouka"] = obj["chouka"] + 1;
                    this.expText.text = obj["exp"] + "/" + 500;
                    this.progressBar.x = -310 + obj["exp"] * 310 / 50;
                    this.rewardBtn.disabled = true;
                    this.miaoBtn.mouseEnabled = true;
                    this.ani.play();
                    this.ani.on(Laya.Event.COMPLETE, this, this.removeAni);
                    Laya.Tween.to(this.progressBar, { x: 0 }, 50000 - 1000 * obj["exp"]);
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
        /**添加魂姬时设置魂姬 */
        oneView.prototype.hunjiUpdata = function () {
            var hunjiClass = module.oneViewModule.getInstance().hunjiClass;
            if (!this.hunjiImg1.visible && !this.hunjiImg2.visible && !this.hunjiImg3.visible) {
                var obj = module.oneViewModule.getInstance().currentData;
                Laya.Tween.to(this.progressBar, { x: 0 }, 50000 - 1000 * obj["exp"]);
            }
            if (hunjiClass) {
                this["hunjiBtn" + hunjiClass].visible = false;
                this["diImg" + hunjiClass].visible = false;
                this["hunjiImg" + hunjiClass].visible = true;
            }
        };
        /**移除魂姬时设置魂姬 */
        oneView.prototype.hunjiRemover = function () {
            var hunjiClass = module.oneViewModule.getInstance().hunjiClass;
            if (hunjiClass) {
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