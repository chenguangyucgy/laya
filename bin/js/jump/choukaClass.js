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
* name
*/
var jump;
(function (jump) {
    var choukaClass = /** @class */ (function (_super) {
        __extends(choukaClass, _super);
        function choukaClass() {
            return _super.call(this) || this;
        }
        //接受数据
        choukaClass.prototype.show = function (index) {
            this.on(Laya.Event.CLICK, this, this.onclick);
            var objData = this.dataSource;
        };
        choukaClass.prototype.onclick = function () {
            var objData = this.dataSource;
            var a = Math.floor(Math.random() * objData["text"].length);
            var str = String(objData["text"]);
            var zi = str.slice(a, a + 1);
            //删除世界库字体
            var Czi = module.oneViewModule.getInstance().removershijiezi(zi);
            this.chuoImg.visible = false;
            this.text_cl.text = Czi;
            this.mouseEnabled = false;
            //obj["chouka"]--;
            module.oneViewModule.getInstance().kapianRemover(objData);
            module.oneViewModule.getInstance().ziku(Czi);
        };
        return choukaClass;
    }(ui.choukaClassUI));
    jump.choukaClass = choukaClass;
})(jump || (jump = {}));
//# sourceMappingURL=choukaClass.js.map