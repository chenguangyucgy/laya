/**
* name 
*/
module jump{
	export class exchangeWin extends ui.exchangeWinUI{
		constructor(){
			super();
			this.list.renderHandler = Laya.Handler.create(this,this.renderHandler,null,false);
			this.list.array = module.oneViewModule.getInstance().dataContent;
			this.removerBtn.on(Laya.Event.CLICK,this,this.onclick)

		}

		private renderHandler(item:exchangeItem,index:number):void
		{
			item.show(index);
		}

		private onclick(event:Laya.Event):void
		{
			switch(event.currentTarget)
			{
				case this.removerBtn:
				     this.close();
				     break;
			}
		}
		
	}
}