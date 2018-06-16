/**
* name 
*/
module jump{
	export class choukaClass extends ui.choukaClassUI{
		constructor(){
			super();
		}

		//接受数据
		public show(index:number):void
		{
			this.on(Laya.Event.CLICK,this,this.onclick);
			var objData:Object = this.dataSource;
		}

		private onclick():void
		{
			var objData:Object = this.dataSource;
			var a:number = Math.floor(Math.random()*objData["text"].length);
			var str:string = String(objData["text"]);
			var zi:string= str.slice(a,a+1);
			//删除世界库字体
			var Czi:string = module.oneViewModule.getInstance().removershijiezi(zi);
			this.chuoImg.visible = false;
			this.text_cl.text = Czi;
			this.mouseEnabled = false;
			//obj["chouka"]--;
			module.oneViewModule.getInstance().kapianRemover(objData);
			module.oneViewModule.getInstance().ziku(Czi);
		}
	}
}