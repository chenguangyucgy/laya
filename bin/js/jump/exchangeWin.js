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
    var exchangeWin = /** @class */ (function (_super) {
        __extends(exchangeWin, _super);
        function exchangeWin() {
            var _this = _super.call(this) || this;
            _this.list.renderHandler = Laya.Handler.create(_this, _this.renderHandler, null, false);
            _this.list.array = module.oneViewModule.getInstance().dataContent;
            _this.removerBtn.on(Laya.Event.CLICK, _this, _this.onclick);
            return _this;
        }
        exchangeWin.prototype.renderHandler = function (item, index) {
            //item.show(index);
        };
        exchangeWin.prototype.onclick = function (event) {
            switch (event.currentTarget) {
                case this.removerBtn:
                    this.close();
                    break;
            }
        };
        return exchangeWin;
    }(ui.exchangeWinUI));
    jump.exchangeWin = exchangeWin;
})(jump || (jump = {}));
//# sourceMappingURL=exchangeWin.js.map