(function(window) {

    L.Icon.Pulse = L.DivIcon.extend({

        options: {
            className: '',
            iconSize: [0,0],
            color: 'red',
            animate: true,
            heartbeat: 1,
            animationCount:'infinite'
        },

        initialize: function (options) {
        	//TODO xzy add
        	options.size=[0,0];
        	
            L.setOptions(this,options);

            // css
            
            var uniqueClassName = 'lpi-'+ new Date().getTime()+'-'+Math.round(Math.random()*100000);

            var before = ['background-color: '+this.options.color];
            var after = [

                'box-shadow: 0 0 6px 2px '+this.options.color,

                'animation: pulsate ' + this.options.heartbeat + 's ease-out',
                
                //TODO xzy changed
                'animation-iteration-count: '+this.options.animationCount
                //,'animation-delay: '+ (this.options.heartbeat + .1) + 's',
            ];

            if (!this.options.animate){
                after.push('animation: none');
            }

            var css = [
                '.'+uniqueClassName+'{'+before.join(';')+';}',
                '.'+uniqueClassName+':after{'+after.join(';')+';}',
            ].join('');
 
            var el = document.createElement('style');
            if (el.styleSheet){
                el.styleSheet.cssText = css;
            } else {
                el.appendChild(document.createTextNode(css));
            }

            document.getElementsByTagName('head')[0].appendChild(el);

            // apply css class

            this.options.className = this.options.className+' leaflet-pulsing-icon '+uniqueClassName;

            // initialize icon
            
            L.DivIcon.prototype.initialize.call(this, options);
        
        }
    });

    L.icon.pulse = function (options) {
        return new L.Icon.Pulse(options);
    };


    L.Marker.Pulse = L.Marker.extend({
        initialize: function (latlng,options) {
            options.icon = L.icon.pulse(options);
            L.Marker.prototype.initialize.call(this, latlng, options);
        }
    });

    L.marker.pulse = function (latlng,options) {
        return new L.Marker.Pulse(latlng,options);
    };
    
    //TODO xzy add
    L.Marker.include({
		bindPulse: function (group) {
			var self = this;
			
			if(!group){
				group = this._map;
			}
			this._group = group;
			var pulsingIcon = L.icon.pulse({color:'red'});
			
//			setTimeout(function(){
				if(self.pulse){
					return;
				}
				self.pulse =L.marker([self._latlng.lat,self._latlng.lng],{icon:pulsingIcon,zIndexOffset:-1});
				self.pulse.addTo(self._group);
//			},500);
	
			return this;
		},
		unbindPulse:function(){
			if(this.pulse){
				this._group.removeLayer(this.pulse);
			}
			this.pulse = null;
		}
    	
    });


    


})(window);

