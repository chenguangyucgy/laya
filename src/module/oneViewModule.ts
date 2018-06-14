/**
* name 
*/
module module{
	export class oneViewModule{
		private static _instance:oneViewModule;
		//字典数据
		private _data:Array<Object> = [
			 {id:0,name:"字典1",exp: 0,current:true,zinum:0,text:"一杯敬百合魂器",chouka:0}
			,{id:1,name:"字典2",exp: 0,current:false,zinum:0,text:"水满田畴稻叶齐",chouka:0}
			,{id:2,name:"字典3",exp: 0,current:false,zinum:0,text:"日光穿树晓烟低",chouka:0}
			,{id:3,name:"字典4",exp: 0,current:false,zinum:0,text:"黄莺也爱新凉好",chouka:0}
			,{id:4,name:"字典5",exp: 0,current:false,zinum:0,text:"飞过青山影里啼",chouka:0}
			];
		//当前使用的字典数据
		private _currentData:Object;
		//当前选择字典
		private _dicnumber:number;
		//选择魂姬
		private _hunjiNum:number;
		//字数量
		private _ziNum:Array<Object> =[];
		//魂姬类型
		private _hunjiClass:number;
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


		public set dataContent(content:Array<Object>)
		{
			
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
					if(this._data[i]["current"])
					{
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
					this._data[i]["current"] = false;
				}
				this._data[ID]["current"] = true;
				
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
					if(this._data[i]["chouka"]>0)
					{
						for(var a:number =0 ;a<this._data[i]["chouka"];a++)
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
						this._data[i]["chouka"]--;
						return;
					}
				}
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