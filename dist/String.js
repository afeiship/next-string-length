!function(e,r){var n=/^\s+/g,t=/\s+$/g,a=e.declare("nx.lang.String",{statics:{trim:function(e){return String(e).replace(n,"").replace(t,"")},camelCase:function(e){return e.replace(/-\D/g,function(e){return e.charAt(1).toUpperCase()})},hyphenate:function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.charAt(0).toLowerCase()})},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},repeat:function(e,r){var n=r+1,t=new Array(n);return t.join(e)}}});"undefined"!=typeof module&&module.exports&&(module.exports=a)}(nx,nx.GLOBAL);