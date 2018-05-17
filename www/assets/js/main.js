/*
	TT.handle(function(evt) {
		console.log(':')
		if(TT.PRE==evt.typ)  {//start
			console.log(evt.$new)
			pgSplit($('#content-wrapper'), 350 )
			//$('#content-wrapper').fadeTo(100,.2)
		}
		if(TT.PAGE==evt.typ)  {//new pg loaded
			$(TT.ScontentID).html(evt.$new)
			//$('#content-wrapper').fadeTo(100,1)

		}
*/

console.log('MAIN override')
loadjs.ready(['site','split'], function(){
	console.log('MAIN override')

	tsrouter.onNavigate(function(evt) {
		if (evt.type == tsrouter.NAV)  { //start
			console.log('XXX XXX XXX NAV')
			pgSplit($('#router'), 350 )

			//$('#router').fadeTo(100,.2)
		}
		else if (evt.type == tsrouter.PAGE)  {
			console.log('XXX XXX XXX PAGE')
			$(tsrouter.zone).html(evt.newContent)
			//$('#router').fadeTo(100,1)
			window.scrollTo(0, 0)
		}
	})
})

loadjs([
		'/assets/js/split.js'
		,'//cdn.jsdelivr.net/jquery.transit/0.9.12/jquery.transit.min.js']
	, 'split', {
	async: false //required due to loadjs bug with bundles
})