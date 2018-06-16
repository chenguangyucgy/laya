/**
* name 
*/
module module{
	export class oneViewModule{
		private static _instance:oneViewModule;
		/**字典数据*/
		private _data:Array<Object> = [];
		/**当前使用的字典数据*/
		private _currentData:Object;
		/**当前选择字典*/
		private _dicnumber:number;
		/**选择魂姬*/
		private _hunjiNum:number;
		/**字数量*/
		private _ziNum:Array<Object> =[];
		/**魂姬类型*/
		private _hunjiClass:number;
		/**魂姬数据 */
		private _hunjishu:Object;
		/**世界字库 */
		private _shijie:Array<Object> =[];
		constructor(){
			
		}
        
		/**单例*/
		public static getInstance():oneViewModule
		{
			if(this._instance == null)
			{
				this._instance = new oneViewModule;
			}
			return this._instance;
		}

        /**获取所有字典数据*/
		public get dataContent():Array<Object>
		{
			return this._data;
		}

        /**设置所有字典 */
		public set dataContent(content:Array<Object>)
		{
			this._data = content;
			jump.oneView.getInstance().randerinit();
		}
		/**获取*/
		public get hunjishu():Object
		{
			return this._hunjishu;
		}

        /**设置 */
		public set hunjishu(content:Object)
		{
			this._hunjishu = content;
		}

		/**获取世界字库*/
		public get shijie():Array<Object>
		{
			return this._shijie;
		}

        /**设置世界字库 */
		public set shijie(content:Array<Object>)
		{
			this._shijie = content;
		}

		/**获取当前选择相对应位子的魂姬数据*/
		public get hunjiClass():number
		{
			return this._hunjiClass;
		}

		public set hunjiClass(num:number)
		{
			this._hunjiClass = num;
		}

        /**获取当前使用的字典*/
        public get currentData():Object
		{
			if(this._data)
			{
				for(var i:number =0;i<this._data.length;i++){
					if(this._data[i]["current"] ==1)
					{
						var timer:number = Number(this._data[i]["logout_time"]);
						var danTimer:number = Date.parse(String(new Date));
						var expdata:number = Number(this._data[i]["exp"]);
						if(timer>0)
						{
							var exp:number = expdata+(danTimer-timer)/1000;
						}else
						{
							var exp:number = expdata;
						}
						console.log(exp);
						
						this._data[i]["exp"] = exp
						this._data[i]["logout_time"] = 0;
						this._currentData = this._data[i];
						return this._currentData;
					}
				}
			}
			return this._currentData =null;
			
		}

		/**更改当前字典经验*/
		public updataCurrentData(num:number):void
		{
             if(this._data)
			 {
				 for(var i:number =0;i<this._data.length;i++){
					if(this._data[i]["current"])
					{
						this._data[i]["exp"] += num;
					}
				}
			 }
		}

		/**更改字典*/
		public updataDictionary(ID:number):void
		{
			if(this._data && ID !=undefined)
			{
				for(var i:number = 0;i<this._data.length;i++)
				{
					this._data[i]["current"] = 0;
				}
				this._data[ID]["current"] = 1;
				
			}
		}

        /**获取抽到的字体*/
		public ziku(str:string):void
		{
			if(this._ziNum.length <= 0)
			{
				this._ziNum.push({ziName:str,num:1});
			}else
			{
				for(var i:number =0; i<this._ziNum.length;i++){
					var a = this._ziNum[i]["ziName"];
					if(this._ziNum[i]["ziName"] ==str)
					{
						this._ziNum[i]["num"]++;
						//本地浏览器存储
						if(Laya.LocalStorage.getJSON("ziData"))
						{
							Laya.LocalStorage.removeItem("ziData");
						}
						Laya.LocalStorage.setJSON("ziData",this._ziNum);
						return;
					}
				}
				this._ziNum.push({ziName:str,num:1});
				//本地浏览器存储
				if(Laya.LocalStorage.getJSON("ziData"))
				{
					Laya.LocalStorage.removeItem("ziData");
				}
				Laya.LocalStorage.setJSON("ziData",this._ziNum);
				return;
			}
		}

		public ziArr(arr:Array<Object>):void
		{
			this._ziNum = arr;
		}

		
        /**获取卡片*/
		public kapianUpdata():Array<Object>
		{
			var arr:Array<Object> = [];
			if(this._data.length>0)
			{
				for(var i:number =0;i<this._data.length;i++)
				{
					var chouka:number = Number(this._data[i]["chouka"]); 
					if(chouka>0)
					{
						for(var a:number =0 ;a<chouka;a++)
						{
							arr.push(this._data[i]);
						}
					}
				}
				return arr;
			}
		}
		/**删除卡片*/
		public kapianRemover(obj:Object):void
		{
			if(this._data.length>0)
			{
				for(var i:number=0;i<this._data.length;i++)
				{
					if(this._data[i]["id"] == obj["id"])
					{
						var num:number = Number(this._data[i]["chouka"]);
						num--;
						this._data[i]["chouka"] =num;
						return;
					}
				}
			}
		}
        /**时间计算经验 */
		public expTimer():number
		{
			var timer:number = Number(this._currentData["logout_time"]);
			var danTimer:number = Date.parse(String(new Date));
			var expdata:number = Number(this._currentData["exp"]);
		    var exp:number = expdata+(danTimer-timer)/1000;
			this._currentData["exp"] = exp;
			return exp;
		}

		public removershijiezi(data:string):string
		{
			if(this._shijie)
			{
			     for(var i:number = 0;i<this._shijie.length;i++)
				 {
					 if(this._shijie[i]["name"] == data)
					 {
						 util.HttpRequestUtil.senddata("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/world_charbank_char_jian1.php?id="+this._shijie[i]["id"]+"");
						 console.log("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/world_charbank_char_jian1.php?id="+this._shijie[i]["id"]+"");
						 
						 util.HttpRequestUtil.send4("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/world_charbank_char.php?id=1");
						 return data;
					 }
				 }
				 var zi = "";
				 return zi;
			}
		}

		public get ziNum():Array<Object>
		{
			return this._ziNum;
		}	

		public get dicnumber():number
		{
			return this._dicnumber;
		}

		public set dicnumber(index:number)
		{
			this._dicnumber = index;
		}

		public get hunjiNum():number
		{
			return this._hunjiNum;
		}

		public set hunjiNum(index:number)
		{
			this._hunjiNum = index;
		}

	}
}