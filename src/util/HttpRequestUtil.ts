/**
* name 
*/
module util{
	export class HttpRequestUtil{
		/**
		 * 
		 * @param Url 连接
		 */
		public static send(Url:string):void
		{
			var xhr:HttpRequest = new HttpRequest();
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandler);
			xhr.once(Laya.Event.ERROR,this,this.errorHandler);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandler);
			xhr.send(Url,"","get","text");
		}

		public static processHandler(data:Object):void
		{
			//console.log(data);
			
		}
		public static arr:Array<Object> =[];
		//返回数据
		public static completeHandler(data:any):void
		{
			var Obj:Object = JSON.parse(data);
			this.arr.push(Obj);
			module.oneViewModule.getInstance().dataContent =this.arr;
		}
		public static errorHandler(e:Object):void
		{
		}

//-----------------------------------------------------------------------------------------//
        //更改数据
		public static senddata(Url:string):void
		{
			var xhr:HttpRequest = new HttpRequest();
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandler1);
			xhr.once(Laya.Event.ERROR,this,this.errorHandler1);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandler1);
			xhr.send(Url,"","get","text");
		}

		public static processHandler1(data:Object):void
		{
			//console.log(data);
			
		}
		//返回数据
		public static completeHandler1(data:any):void
		{
			//var Obj:Object = JSON.parse(data);
			
		}
		public static errorHandler1(e:Object):void
		{
		}

//-----------------------------------------------------------------------------------------//
        /**获取魂姬数据 */
		public static send2(Url:string):void
		{
			var xhr:HttpRequest = new HttpRequest();
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandler2);
			xhr.once(Laya.Event.ERROR,this,this.errorHandler2);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandler2);
			xhr.send(Url,"","get","text");
		}

		public static processHandler2(data:Object):void
		{
			//console.log(data);
			
		}
		private static arrhunji:Array<Object>
		//返回数据
		public static completeHandler2(data:any):void
		{
			var Obj:Object = JSON.parse(data);
			module.oneViewModule.getInstance().hunjishu = Obj;
		}
		public static errorHandler2(e:Object):void
		{
		}
//-----------------------------------------------------------------------------------------//
        /**更改魂姬数据 */
		public static send3(Url:string):void
		{
			var xhr:HttpRequest = new HttpRequest();
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandler3);
			xhr.once(Laya.Event.ERROR,this,this.errorHandler3);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandler3);
			xhr.send(Url,"","get","text");
		}

		public static processHandler3(data:Object):void
		{
			//console.log(data);
			
		}
		//返回数据
		public static completeHandler3(data:any):void
		{
			
		}
		public static errorHandler3(e:Object):void
		{
		}
//-----------------------------------------------------------------------------------------//
        /**世界字库 */
		public static send4(Url:string):void
		{
			var xhr:HttpRequest = new HttpRequest();
			xhr.http.timeout = 10000;//设置超时时间；
			xhr.once(Laya.Event.COMPLETE,this,this.completeHandler4);
			xhr.once(Laya.Event.ERROR,this,this.errorHandler4);
			xhr.on(Laya.Event.PROGRESS,this,this.processHandler4);
			xhr.send(Url,"","get","text");
		}

		public static processHandler4(data:Object):void
		{
			//console.log(data);
			
		}

		public static shiarr:Array<Object> =[];
		//返回数据
		public static completeHandler4(data:any):void
		{
			var Obj:Array<Object> = JSON.parse(data);
			module.oneViewModule.getInstance().shijie =Obj;	
		}
		public static errorHandler4(e:Object):void
		{
		}
	}
}