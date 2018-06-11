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
    var BubblingItem = /** @class */ (function (_super) {
        __extends(BubblingItem, _super);
        function BubblingItem() {
            var _this = _super.call(this) || this;
            Laya.timer.once(1000, _this, _this.onclick);
            return _this;
        }
        BubblingItem.prototype.onclick = function () {
            this.close();
        };
        return BubblingItem;
    }(ui.BubblingItemUI));
    jump.BubblingItem = BubblingItem;
})(jump || (jump = {}));
//# sourceMappingURL=BubblingItem.js.map