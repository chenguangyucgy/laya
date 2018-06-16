/**
* 选择字典界面 
*/
module jump{
	export class updataDictionary extends ui.updataDictionaryUI{
		constructor(){
        super();
		this.returnBtn.on(Laya.Event.CLICK,this,this.onclick);
		this.list.renderHandler = Laya.Handler.create(this,this.renderHandler,null,false);
		//list数据
		this.list.array = module.oneViewModule.getInstance().dataContent;
		var obj:Object = module.oneViewModule.getInstance().currentData;
		var chouka:number = Number(obj["chouka"]);
		this.ZdicItem.expText.text = chouka+"/"+7;
		this.ZdicItem.dictionary_text.text = obj["name"];
		this.list.on(Laya.Event.CLICK,this,this.onclick);
		this.okBtn.on(Laya.Event.CLICK,this,this.onclick);
	    }


		 public updateData():void
        {
            
        }
		private upDataInit():void
		{
			
		}



		private onclick(event:Laya.Event):void
		{
			switch(event.currentTarget){
				case this.returnBtn:
				     //关闭字典界面
			         this.close();
				     break;
				case this.list:
				     //重新加载数据
				     this.list.array = module.oneViewModule.getInstance().dataContent;
				     break;
				case this.okBtn:
				     //确认选择的字典
				     var dicnumder = module.oneViewModule.getInstance().dicnumber;
					 var obj:Object = module.oneViewModule.getInstance().currentData;
					 var id:number = Number(obj["dictionary_id"]);
				     module.oneViewModule.getInstance().updataDictionary(dicnumder);
 					 var timestamp = Date.parse(String(new Date));
					 //dicnumder++;
					 //if(dicnumder !=id)
					 //{
						 //var exp:number = module.oneViewModule.getInstance().expTimer();
						 //var exp:number = obj["exp"];
					     //util.HttpRequestUtil.senddata("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_dictionary_progress2.php?modify=save&&dictionary_id="+id+"&&exp="+exp+"&&logout_time="+timestamp+"&&current="+0+"");
						 //util.HttpRequestUtil.senddata("http://111.230.129.82:8001/tiaotiao_goldofword_2/api/user_dictionary_progress2.php?modify=save&&dictionary_id="+dicnumder+"&&logout_time="+0+"&&current="+1+"");
					 //}
					 
					 jump.updataDictionary.closeAll();
					 jump.oneView.getInstance().randerinit(); 
				     break;
			}
		}

		private onUpdata():void
		{

		}

		//向updataItem传数据
		private renderHandler(item:updataItem,index:number):void
        {
			item.show(index);
        }
	}
}