function szProc(xmlDataIn, ff2Loop){xmlData=$.parseXML( xmlDataIn);/* ---- Collect Root Info --------------*/
	szRoot[ff2Loop]['pb']=$(xmlData).find('root').attr('pb'); szRoot[ff2Loop]['tb']=$(xmlData).find('root').attr('tb');
	if (szRoot[ff2Loop]['pb'] >= szLastPB) {szLastPB=szRoot[ff2Loop]['pb'];} else {return;} //same old 
	if (szProduction) {szFinalSetofResults=szRoot[ff2Loop]['tb'];} else {szFinalSetofResults='103';}
	/* --------------------------- Collect NS and any EW Section info -------------------------*/
	$(xmlData).find('section').each(function(idx,item) {szHeat=szNS; // fill out each section
		if (item.getAttribute('n')=='EW') {szHeat=szEW;szEWHeat=true;}; // AllPair, NS or EW
		szEventName=xmlData.getElementsByTagName("eventname")[0].childNodes[0].nodeValue;
		if (szEventNameSW==false) {szEventNameSW=true;gV['out'][szHeat]['EventName']=szEventName;
			gV['out'][szHeat]['totResults']=szRoot[ff2Loop]['tb'];
			console.log('EventName=',szEventName);} // only once per filename
		gV['out'][szHeat]['ResultsSoFar'].push(szRoot[ff2Loop]['pb']);// console.log(szResultsIn);
		szResultsIn=szRoot[ff2Loop]['pb']+"/"+szRoot[ff2Loop]['tb']+" ("+
			Number(100*(szRoot[ff2Loop]['pb']/szRoot[ff2Loop]['tb'])).toFixed(2)+"%)";szHeader();
		$(this).children().each(function(i,sz5) {var szth=this;	var ffArr=[];
			szXml.sItem.forEach(function(xItem) {ffArr[xItem.name]=$.trim($(xItem.bcode,szth).text()); });
			szSec[ff2Loop][szHeat][i]=[];
			szSec[ff2Loop][szHeat][i]['PairName']=ffArr['PairName'];szSec[ff2Loop][szHeat][i]['Rank'] =ffArr['Rank'];
			szSec[ff2Loop][szHeat][i]['PairNum']=ffArr['PairNum'];	szSec[ff2Loop][szHeat][i]['Score']=ffArr['Score'];
		});
	}); /* --------------------------- Heading -----------------------------*/ var ffNewData=false; 
	if (!ff2Loop)	{szUpdate(ff2Loop);}
	if (ff2Loop)	{if (szRoot[ff2Loop]['pb'] !== szRoot[ff2Loop-1]['pb']) {ffNewData=true;}}
	if (ffNewData)	{szUpdate(ff2Loop);}
	if (ff2Loop)	{szRoot[ff2Loop-1]['pb']=szRoot[ff2Loop]['pb'];}
	if (szRoot[ff2Loop]['pb'] == szFinalSetofResults) {szAllResultsIn=true;	console.log('all results in');	}
	$('.szhead').append(szOutHead);$('.panes').append(szOutDetail);
	console.log('----------------------------','complete');
}
function szUpdate(ff3Loop){szHeat=szNS; szDetail(ff3Loop); if (szEWHeat==true) {szHeat=szEW; szDetail(ff3Loop);} }
function szHeader() {szOutHead='<div class="headings">'+brk()+'<div id="szHdrFBr">'+gP['Package']+'</div>'+brk()+
	'<div id="szHdrRankings">Rankings</div>'+brk()+'<div id="szHdrEventName"><em>'+szEventName+'</em></div>'+brk()+
		'<div id="hd">'+brk()+'<div id="szResults">Results in:'+szResultsIn+'</div>'+brk()+'</div></div>'+brk(); }
function szDetail(ff4Loop) {ffZeb='',ffB=false;console.log('szEWHeat',szEWHeat);/* ---- Ranking -------*/
	ffHeatName=(szEWHeat==true)?szHeatNames[szHeat]:'All Pairs';ffHeatCSS='heat'+szHeat;
	szOutDetail += '<div class="szPane'+szHeat+'">'+'<div class="cssHeat">Heat: '+ffHeatName+'</div>'+brk()+ 
	'<section>' +brk()+'<div class="column">Rank&nbsp;</div>'+brk()+'<div class="column">Name'+'</div>'+brk()+
											'<div class="column">'+'%&nbsp;&nbsp;'+'</div>'+brk()+'</section>'+brk();
	for (i=0;i<szSec[ff4Loop][szHeat].length; i++) {ffB=!ffB;ffZeb=ffB?'':' style="background:#333333"';
		szOutDetail +='<div class="szColumn">'+brk();
		szOutDetail +='<section>'+'<div class="column">'+szSec[ff4Loop][szHeat][i]['Rank']    +'</div>'+brk()+
				'<div class="column"'+ffZeb+'>'+szSec[ff4Loop][szHeat][i]['PairName']+'</div>'+brk()+
				'<div class="column"'+ffZeb+'>'+szSec[ff4Loop][szHeat][i]['Score']   +'</div>'+brk()+'</section></div>'+brk();
		gV['out'][szHeat]['Rank'].push(szSec[ff4Loop][szHeat][i]['Rank']);
		gV['out'][szHeat]['PairName'].push(szSec[ff4Loop][szHeat][i]['PairName']);
		gV['out'][szHeat]['Score'].push(szSec[ff4Loop][szHeat][i]['Score']);		
	} szOutDetail +='</div>' +brk();
	var ffDe=[];ffDe[szNS]='body';ffDe[szEW]='.EW';	// if (szHeat==szNS) {ffEnd +='<div class="EW"></div>';} 
}