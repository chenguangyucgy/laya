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
* 选择字典界面
*/
var jump;
(function (jump) {
    var updataDictionary = /** @class */ (function (_super) {
        __extends(updataDictionary, _super);
        function updataDictionary() {
            var _this = _super.call(this) || this;
            _this.returnBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            //list数据
            _this.list.array = module.oneViewModule.getInstance().dataContent;
            var obj = module.oneViewModule.getInstance().currentData;
            var chouka = Number(obj["chouka"]);
            _this.ZdicItem.expText.text = chouka + "/" + 7;
            _this.ZdicItem.dictionary_text.text = obj["name"];
            _this.list.on(Laya.Event.CLICK, _this, _this.onclick);
            _this.okBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        updataDictionary.prototype.updateData = function () {
        };
        updataDictionary.prototype.upDataInit = function () {
        };
        updataDictionary.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.returnBtn:
                    //关闭字典界面
                    this.close();
                    break;
                case this.list:
                    //重新加载数据
                    this.list.array = module.oneViewModule.getInstance().dataContent;
                    break;
                case this.okBtn:
                    //确认选择的字典
                    var dicnumder = module.oneViewModule.getInstance().dicnumber;
                    var obj = module.oneViewModule.getInstance().currentData;
                    var id = Number(obj["dictionary_id"]);
                    module.oneViewModule.getInstance().updataDictionary(dicnumder);
                    var timestamp = Date.parse(String(new Date));
                    //dicnumder++;
                    //if(dicnumder !=id)
                    //{
                    //var exp:number = module.oneViewModule.getInstance().expTimer();
                    //var exp:number = obj["exp"];
                    //util.HttpRequestUtil.senddata("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_dictionary_progress2.php?modify=save&&dictionary_id="+id+"&&exp="+exp+"&&logout_time="+timestamp+"&&current="+0+"");
                    //util.HttpRequestUtil.senddata("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_dictionary_progress2.php?modify=save&&dictionary_id="+dicnumder+"&&logout_time="+0+"&&current="+1+"");
                    //}
                    jump.updataDictionary.closeAll();
                    jump.oneView.getInstance().randerinit();
                    break;
            }
        };
        updataDictionary.prototype.onUpdata = function () {
        };
        //向updataItem传数据
        updataDictionary.prototype.renderHandler = function (item, index) {
            item.show(index);
        };
        return updataDictionary;
    }(ui.updataDictionaryUI));
    jump.updataDictionary = updataDictionary;
})(jump || (jump = {}));
//# sourceMappingURL=updataDictionary.js.map