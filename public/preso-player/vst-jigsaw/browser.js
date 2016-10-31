(function($) {

  this.Browser = {
    
    init: function() {
    },
    
    isIE: function() {
    },

    isIE11: function() {
    },
    
    isChrome: function() {
    },
    
    isSafari: function() {
    },
    
    isFirefox: function() {
    },
    
    isOld: function() {
    },
    
    isLimited: function() {
    },
    
    isAndroid: function() {
    },
    
    isIOS: function() {
      return (/(iPhone|iPad|iPod)/.test(navigator.userAgent)) || navigator.userAgent.match(/Android/i);
    },

    isSurface: function() {
      return window.navigator.pointerEnabled || window.navigator.msPointerEnabled
    },
    
    isIPhone: function() {
    },
    
    isIPad: function() {
    },
    
    isMobile: function() {
    }
  };
}).call(this, jQuery);