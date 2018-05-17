







loadjs.ready(['site','pfx'], function(){
	console.log('pfx override')

	tsrouter.onNavigate(function(evt) {
		if (evt.type == tsrouter.NAV)  { //start
			console.log('XXX XXX XXX NAV')

			//$('#router').fadeTo(100,.2)
		}
		else if (evt.type == tsrouter.PAGE)  {
			console.log('XXX XXX XXX PAGE')
			//$(tsrouter.zone).html(evt.newContent)

			//$('#router').fadeTo(100,1)
			$(tsrouter.zone).transition({animation: 'fade', duration: '0.2s',
				onComplete : function() {
					$(tsrouter.zone).html(evt.newContent)
					$(tsrouter.zone).transition({animation: 'fly left', duration: '0.4s'})
					window.scrollTo(0, 0)
				}
			})//trans

		}//else

	})//onNav
})//ready

loadjs(['//cdn.jsdelivr.net/npm/alloyfinger@0.1.13/alloy_finger.js'
		, '//cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/components/transition.min.js'
		,'//cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/components/transition.css'
		], 'pfx', {
	async: false //required due to loadjs bug with bundles
})