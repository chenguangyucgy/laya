/**
* name 
*/
module jump{
	export class BubblingItem extends ui.BubblingItemUI{
		constructor(){
			super();
			Laya.timer.once(1000,this,this.onclick);
			
		}
		private onclick():void
		{
			this.close();
		}
	}
}