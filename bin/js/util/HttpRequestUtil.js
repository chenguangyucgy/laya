/**
* name
*/
var util;
(function (util) {
    var HttpRequestUtil = /** @class */ (function () {
        function HttpRequestUtil() {
        }
        /**
         *
         * @param Url 连接
         */
        HttpRequestUtil.send = function (Url) {
            var xhr = new HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
            xhr.once(Laya.Event.ERROR, this, this.errorHandler);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
            xhr.send(Url, "", "get", "text");
        };
        HttpRequestUtil.processHandler = function (data) {
            //console.log(data);
        };
        //返回数据
        HttpRequestUtil.completeHandler = function (data) {
            var Obj = JSON.parse(data);
            this.arr.push(Obj);
            module.oneViewModule.getInstance().dataContent = this.arr;
        };
        HttpRequestUtil.errorHandler = function (e) {
        };
        //-----------------------------------------------------------------------------------------//
        //更改数据
        HttpRequestUtil.senddata = function (Url) {
            var xhr = new HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandler1);
            xhr.once(Laya.Event.ERROR, this, this.errorHandler1);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandler1);
            xhr.send(Url, "", "get", "text");
        };
        HttpRequestUtil.processHandler1 = function (data) {
            //console.log(data);
        };
        //返回数据
        HttpRequestUtil.completeHandler1 = function (data) {
            //var Obj:Object = JSON.parse(data);
        };
        HttpRequestUtil.errorHandler1 = function (e) {
        };
        //-----------------------------------------------------------------------------------------//
        /**获取魂姬数据 */
        HttpRequestUtil.send2 = function (Url) {
            var xhr = new HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandler2);
            xhr.once(Laya.Event.ERROR, this, this.errorHandler2);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandler2);
            xhr.send(Url, "", "get", "text");
        };
        HttpRequestUtil.processHandler2 = function (data) {
            //console.log(data);
        };
        //返回数据
        HttpRequestUtil.completeHandler2 = function (data) {
            var Obj = JSON.parse(data);
            module.oneViewModule.getInstance().hunjishu = Obj;
        };
        HttpRequestUtil.errorHandler2 = function (e) {
        };
        //-----------------------------------------------------------------------------------------//
        /**更改魂姬数据 */
        HttpRequestUtil.send3 = function (Url) {
            var xhr = new HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandler3);
            xhr.once(Laya.Event.ERROR, this, this.errorHandler3);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandler3);
            xhr.send(Url, "", "get", "text");
        };
        HttpRequestUtil.processHandler3 = function (data) {
            //console.log(data);
        };
        //返回数据
        HttpRequestUtil.completeHandler3 = function (data) {
        };
        HttpRequestUtil.errorHandler3 = function (e) {
        };
        //-----------------------------------------------------------------------------------------//
        /**世界字库 */
        HttpRequestUtil.send4 = function (Url) {
            var xhr = new HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, this.completeHandler4);
            xhr.once(Laya.Event.ERROR, this, this.errorHandler4);
            xhr.on(Laya.Event.PROGRESS, this, this.processHandler4);
            xhr.send(Url, "", "get", "text");
        };
        HttpRequestUtil.processHandler4 = function (data) {
            //console.log(data);
        };
        //返回数据
        HttpRequestUtil.completeHandler4 = function (data) {
            var Obj = JSON.parse(data);
            module.oneViewModule.getInstance().shijie = Obj;
        };
        HttpRequestUtil.errorHandler4 = function (e) {
        };
        HttpRequestUtil.arr = [];
        HttpRequestUtil.shiarr = [];
        return HttpRequestUtil;
    }());
    util.HttpRequestUtil = HttpRequestUtil;
})(util || (util = {}));
//# sourceMappingURL=HttpRequestUtil.js.map