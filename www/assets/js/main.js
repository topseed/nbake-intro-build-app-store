
console.log('MAIN override')
loadjs.ready('site', function(){
	console.log('setup tsr')
	tsrouter.onNavigate(function(evt) {
		if (evt.type == tsrouter.NAV)  { //start
			console.log('XXX XXX XXX NAV')
			//$('#content-wrapper').fadeTo(100,.2)
		}
		else if (evt.type == tsrouter.PAGE)  {
			console.log('XXX XXX XXX PAGE')
			$(tsrouter.zone).html(evt.newContent)
			//$('#content-wrapper').fadeTo(100,1)
			window.scrollTo(0, 0)
		}
	})
})