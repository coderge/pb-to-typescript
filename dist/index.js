var e,n=require("protobufjs"),r=(e=n)&&"object"==typeof e&&"default"in e?e.default:e,t={double:"number",float:"number",int32:"number",int64:"string",uint32:"number",uint64:"string",sint32:"number",sint64:"string",fixed32:"number",fixed64:"string",sfixed32:"number",sfixed64:"string",bool:"boolean",string:"string",bytes:"string"},a="google.protobuf.Empty";function o(e){var t,a,o=r.parse(e,{keepCase:!0,alternateCommentMode:!0});return a=(t=o.package?o.root.lookup(o.package):o.root).nestedArray.find(function(e){return e instanceof n.Service}),t.lookupService(a.name).methods}function i(e){switch(e){case"string":return"Hello";case"number":return 10;case"bool":return!0;case"int32":return 10;case"int64":return"20";case"uint32":return 100;case"uint64":return"100";case"sint32":return 100;case"sint64":return"-1200";case"fixed32":return 1400;case"fixed64":return"1500";case"sfixed32":return 1600;case"sfixed64":return"-1700";case"double":return 1.4;case"float":return 1.1;case"bytes":return new Buffer("Hello");default:return null}}function s(e,t){var a=r.parse(e,{keepCase:!0,alternateCommentMode:!0});return function(e,r){var t=e.nestedArray.find(function(e){return e instanceof n.Service}),a=e.lookupService(t.name);return function e(r,t){var a=r.lookupTypeOrEnum(t);return a instanceof n.Enum?Object.values(a.values)[0]:a.fieldsArray&&a.fieldsArray.reduce(function(t,a){var o,s,u,p,c,f,m,y;if(a instanceof n.MapField){var d=i(a.keyType),l=i(a.type),k=l?((s={})[a.name]=((o={})[d]=l,o),s):((p={})[a.name]=((u={})[d]=e(r,a.type),u),p);return Object.assign({},t,k)}if("repeated"===a.rule){var b=i(a.type),g=b?((c={})[a.name]=[b],c):((f={})[a.name]=[e(r,a.type)],f);return Object.assign({},t,g)}var v=i(a.type),j=v?((m={})[a.name]=v,m):((y={})[a.name]=e(r,a.type),y);return Object.assign({},t,j)},{})}(e,a.methods[r].responseType)}(a.package?a.root.lookup(a.package):a.root,t)}var u={isDefinition:!0};function p(e,n){var r=e.nested;return r?Object.keys(r).map(function(e){var o=r[e];return Object.keys(o).map(function(r){return"fields"===r?function(e,n,r){var a=function(e,n){return{category:"fields",name:e,params:Object.keys(n).map(function(e){var r,a=n[e];return{type:t[a.type]||a.type,keyType:(r=a,r.keyType?t[r.keyType]||r.keyType:""),name:e,rule:a.rule,id:a.id}}).sort(function(e,n){return e.id-n.id})}}(e,o.fields),i=a.params.map(function(e){return"repeated"===e.rule?"  "+e.name+": "+e.type+"[];\n":e.keyType?"  "+e.name+": {[key: "+e.keyType+"]: "+e.type+"};\n":"  "+e.name+": "+e.type+";\n"});return(r.isDefinition?"":"export ")+"interface "+a.name+" {\n"+i.join("")+"}\n\n"}(e,0,n):"methods"===r?function(e,n,r){return""+function(e,n){return{category:"methods",name:e,params:Object.keys(n).map(function(e){return Object.assign({},{name:e},n[e])})}}(e,o.methods).params.map(function(e){return(r.isDefinition?"":"export ")+"interface "+e.name+" {\n  ("+(e.requestType===a?"":"params: "+e.requestType)+"): Promise<"+(e.responseType===a?"{}":e.responseType)+">;\n}\n\n"}).join("")}(e,0,n):"values"===r?function(e,n,r){var t=o.values,a=Object.keys(t).map(function(e){return{name:e,id:t[e]}}).sort(function(e,n){return e.id-n.id}).map(function(e){return"  "+e.name+" = "+e.id+",\n"}).join("");return(r.isDefinition?"":"export ")+"enum "+e+" {\n"+a+"}\n\n"}(e,0,n):"nested"===r?p(o,n):void 0})}).reduce(function(e,n){return e.concat(n)},[]).join(""):""}function c(e,n){var t=Object.assign({},u,n),a=r.parse(e,{keepCase:!0});return p(a.package?a.root.lookup(a.package).toJSON():a.root.toJSON(),t)}var f={parseProto:c,getAllMethods:o,mockResponse:s};exports.printTypescript=p,exports.parseProto=c,exports.getAllMethods=o,exports.mockResponse=s,exports.default=f;
//# sourceMappingURL=index.js.map