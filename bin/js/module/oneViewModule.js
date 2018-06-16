/**
* name
*/
var module;
(function (module) {
    var oneViewModule = /** @class */ (function () {
        function oneViewModule() {
            /**字典数据*/
            this._data = [];
            /**字数量*/
            this._ziNum = [];
            /**世界字库 */
            this._shijie = [];
        }
        /**单例*/
        oneViewModule.getInstance = function () {
            if (this._instance == null) {
                this._instance = new oneViewModule;
            }
            return this._instance;
        };
        Object.defineProperty(oneViewModule.prototype, "dataContent", {
            /**获取所有字典数据*/
            get: function () {
                return this._data;
            },
            /**设置所有字典 */
            set: function (content) {
                this._data = content;
                jump.oneView.getInstance().randerinit();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(oneViewModule.prototype, "hunjishu", {
            /**获取*/
            get: function () {
                return this._hunjishu;
            },
            /**设置 */
            set: function (content) {
                this._hunjishu = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(oneViewModule.prototype, "shijie", {
            /**获取世界字库*/
            get: function () {
                return this._shijie;
            },
            /**设置世界字库 */
            set: function (content) {
                this._shijie = content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(oneViewModule.prototype, "hunjiClass", {
            /**获取当前选择相对应位子的魂姬数据*/
            get: function () {
                return this._hunjiClass;
            },
            set: function (num) {
                this._hunjiClass = num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(oneViewModule.prototype, "currentData", {
            /**获取当前使用的字典*/
            get: function () {
                if (this._data) {
                    for (var i = 0; i < this._data.length; i++) {
                        if (this._data[i]["current"] == 1) {
                            var timer = Number(this._data[i]["logout_time"]);
                            var danTimer = Date.parse(String(new Date));
                            var expdata = Number(this._data[i]["exp"]);
                            if (timer > 0) {
                                var exp = expdata + (danTimer - timer) / 1000;
                            }
                            else {
                                var exp = expdata;
                            }
                            console.log(exp);
                            this._data[i]["exp"] = exp;
                            this._data[i]["logout_time"] = 0;
                            this._currentData = this._data[i];
                            return this._currentData;
                        }
                    }
                }
                return this._currentData = null;
            },
            enumerable: true,
            configurable: true
        });
        /**更改当前字典经验*/
        oneViewModule.prototype.updataCurrentData = function (num) {
            if (this._data) {
                for (var i = 0; i < this._data.length; i++) {
                    if (this._data[i]["current"]) {
                        this._data[i]["exp"] += num;
                    }
                }
            }
        };
        /**更改字典*/
        oneViewModule.prototype.updataDictionary = function (ID) {
            if (this._data && ID != undefined) {
                for (var i = 0; i < this._data.length; i++) {
                    this._data[i]["current"] = 0;
                }
                this._data[ID]["current"] = 1;
            }
        };
        /**获取抽到的字体*/
        oneViewModule.prototype.ziku = function (str) {
            if (this._ziNum.length <= 0) {
                this._ziNum.push({ ziName: str, num: 1 });
            }
            else {
                for (var i = 0; i < this._ziNum.length; i++) {
                    var a = this._ziNum[i]["ziName"];
                    if (this._ziNum[i]["ziName"] == str) {
                        this._ziNum[i]["num"]++;
                        //本地浏览器存储
                        if (Laya.LocalStorage.getJSON("ziData")) {
                            Laya.LocalStorage.removeItem("ziData");
                        }
                        Laya.LocalStorage.setJSON("ziData", this._ziNum);
                        return;
                    }
                }
                this._ziNum.push({ ziName: str, num: 1 });
                //本地浏览器存储
                if (Laya.LocalStorage.getJSON("ziData")) {
                    Laya.LocalStorage.removeItem("ziData");
                }
                Laya.LocalStorage.setJSON("ziData", this._ziNum);
                return;
            }
        };
        oneViewModule.prototype.ziArr = function (arr) {
            this._ziNum = arr;
        };
        /**获取卡片*/
        oneViewModule.prototype.kapianUpdata = function () {
            var arr = [];
            if (this._data.length > 0) {
                for (var i = 0; i < this._data.length; i++) {
                    var chouka = Number(this._data[i]["chouka"]);
                    if (chouka > 0) {
                        for (var a = 0; a < chouka; a++) {
                            arr.push(this._data[i]);
                        }
                    }
                }
                return arr;
            }
        };
        /**删除卡片*/
        oneViewModule.prototype.kapianRemover = function (obj) {
            if (this._data.length > 0) {
                for (var i = 0; i < this._data.length; i++) {
                    if (this._data[i]["id"] == obj["id"]) {
                        var num = Number(this._data[i]["chouka"]);
                        num--;
                        this._data[i]["chouka"] = num;
                        return;
                    }
                }
            }
        };
        /**时间计算经验 */
        oneViewModule.prototype.expTimer = function () {
            var timer = Number(this._currentData["logout_time"]);
            var danTimer = Date.parse(String(new Date));
            var expdata = Number(this._currentData["exp"]);
            var exp = expdata + (danTimer - timer) / 1000;
            this._currentData["exp"] = exp;
            return exp;
        };
        oneViewModule.prototype.removershijiezi = function (data) {
            if (this._shijie) {
                for (var i = 0; i < this._shijie.length; i++) {
                    if (this._shijie[i]["name"] == data) {
                        util.HttpRequestUtil.senddata("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/world_charbank_char_jian1.php?id=" + this._shijie[i]["id"] + "");
                        console.log("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/world_charbank_char_jian1.php?id=" + this._shijie[i]["id"] + "");
                        util.HttpRequestUtil.send4("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/world_charbank_char.php?id=1");
                        return data;
                    }
                }
                var zi = "";
                return zi;
            }
        };
        Object.defineProperty(oneViewModule.prototype, "ziNum", {
            get: function () {
                return this._ziNum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(oneViewModule.prototype, "dicnumber", {
            get: function () {
                return this._dicnumber;
            },
            set: function (index) {
                this._dicnumber = index;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(oneViewModule.prototype, "hunjiNum", {
            get: function () {
                return this._hunjiNum;
            },
            set: function (index) {
                this._hunjiNum = index;
            },
            enumerable: true,
            configurable: true
        });
        return oneViewModule;
    }());
    module.oneViewModule = oneViewModule;
})(module || (module = {}));
//# sourceMappingURL=oneViewModule.js.map