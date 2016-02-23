(function(){var namespace="StripeCheckout.require".split("."),name=namespace[namespace.length-1],base=this,i;for(i=0;i<namespace.length-1;i++){base=base[namespace[i]]=base[namespace[i]]||{}}if(base[name]===undefined){base[name]=function(){var modules={},cache={};var requireRelative=function(name,root){var path=expand(root,name),indexPath=expand(path,"./index"),module,fn;module=cache[path]||cache[indexPath];if(module){return module}else if(fn=modules[path]||modules[path=indexPath]){module={id:path,exports:{}};cache[path]=module.exports;fn(module.exports,function(name){return require(name,dirname(path))},module);return cache[path]=module.exports}else{throw"module "+name+" not found"}};var expand=function(root,name){var results=[],parts,part;if(/^\.\.?(\/|$)/.test(name)){parts=[root,name].join("/").split("/")}else{parts=name.split("/")}for(var i=0,length=parts.length;i<length;i++){part=parts[i];if(part==".."){results.pop()}else if(part!="."&&part!=""){results.push(part)}}return results.join("/")};var dirname=function(path){return path.split("/").slice(0,-1).join("/")};var require=function(name){return requireRelative(name,"")};require.define=function(bundle){for(var key in bundle){modules[key]=bundle[key]}};require.modules=modules;require.cache=cache;return require}.call()}})();StripeCheckout.require.define({"loader/lib/tracker":function(exports,require,module){(function(){var state,track,__hasProp={}.hasOwnProperty;state={ui_integration:"unknown",loaded:false};track=function(event,payload){var key,url,value;if(!track.enabled){return}url="https://q.stripe.com/?event=checkout."+encodeURIComponent(event);url+="&distinct_id="+track.distinctID;for(key in state){value=state[key];url+="&st_"+key+"="+encodeURIComponent(value)}for(key in payload){value=payload[key];url+="&"+key+"="+encodeURIComponent(value)}return(new Image).src=url};track.enabled=true;track.distinctID="unknown";module.exports={setEnabled:function(enabled){return track.enabled=enabled},setDistinctID:function(value){if(value){return track.distinctID=value}},getDistinctID:function(){return track.distinctID},state:{setUIIntegration:function(value){return state["ui_integration"]=value},setLoaded:function(value){return state["loaded"]=value}},track:{error:function(message){return track("error",{message:message})},reachability:function(name,resource,event,status,text){var data,k,v;if(event==null){event={}}if(status==null){status=0}if(text==null){text=""}data={};for(k in event){if(!__hasProp.call(event,k))continue;v=event[k];if(typeof v!=="object"){data[k]=v}}data=typeof JSON!=="undefined"&&JSON!==null?typeof JSON.stringify==="function"?JSON.stringify(data):void 0:void 0;return track("reachability",{name:name,resource:resource,data:data,status:status,text:text})}}}}).call(this)}});(function(){var handler,tracker;tracker=StripeCheckout.require("loader/lib/tracker");handler=function(msg,url,line){var details,_ref;details=""+url+":"+line+" "+msg;tracker.track.error("Stripe Checkout encountered a script error while loading: "+details);return(_ref=handler.last)!=null?_ref.apply(this,arguments):void 0};handler.last=window.onerror;window.onerror=handler}).call(this);
//# sourceMappingURL=https://sourcemaps.stripe.com/checkout/v3/checkout/loader/error-gfj5EAYWlZCqtnxyiJidLw.js.map