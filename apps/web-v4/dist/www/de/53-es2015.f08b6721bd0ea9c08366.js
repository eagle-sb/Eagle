/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{Jmk9:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("z6cu"),r=n("VX4o"),s=n("8Y7J"),o=n("IheW");class c{constructor(t,e){this.http=t,this.telemetrySvc=e,this.API_BASE="/clientApi/v2",this.USER_API=`${this.API_BASE}/user`,this.apiEndpoints={USER_HISTORY:`${this.USER_API}/history`,USER_CONTINUE_LEARNING:`${this.USER_API}/history/continue`}}fetchContinueLearning(t,e,n){return this.http.get(`${this.apiEndpoints.USER_CONTINUE_LEARNING}?pageSize=${t}`+(e?`&pageState=${e}`:"")+(n?`&email=${n}`:""))}saveContinueLearning(t,e){const n=this.apiEndpoints.USER_CONTINUE_LEARNING;return Object.keys(t).length?this.http.post(n,t):(this.telemetrySvc.errorTelemetryEvent(n,t,e),Object(i.a)({message:"EMPTY_REQUEST"}))}fetchContentContinueLearning(t){return this.http.get(`${this.apiEndpoints.USER_CONTINUE_LEARNING}/${t}`)}addHistory(t){return this.http.post(this.apiEndpoints.USER_HISTORY+"/"+t,{})}deleteHistory(t){return this.http.delete(this.apiEndpoints.USER_HISTORY+"/"+t)}}c.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new c(s["\u0275\u0275inject"](o.c),s["\u0275\u0275inject"](r.a))},token:c,providedIn:"root"})},dPHs:function(t,e,n){"use strict";n.r(e);var i=n("8Y7J");class r{}var s=n("pMnS"),o=n("l5mm"),c=n("hFHK"),a=n("lGQG"),l=n("oVAt"),u=n("VX4o"),p=n("qfBg");class d{constructor(t,e,n,i,r,s){this.route=t,this.domSanitizer=e,this.userSvc=n,this.authSvc=i,this.telemetrySvc=r,this.historySvc=s}ngOnInit(){this.paramSubscription=this.route.data.subscribe(t=>{this.processedContent=t.playerDetails.processedResource,this.collectionId=t.playerDetails.toc.identifier,this.onInItFunction()})}onInItFunction(){this.raiseEvent("LOADED"),this.telemetryIntervalSubscription=Object(o.a)(3e4).subscribe(()=>{this.processedContent&&this.processedContent.content&&this.processedContent.content.identifier&&(this.raiseEvent("RUNNING"),null!=this.collectionId&&this.collectionId!==this.processedContent.content.identifier||this.historySvc.saveContinueLearning({contextPathId:this.processedContent.content.identifier,resourceId:this.processedContent.content.identifier,data:JSON.stringify({timestamp:Date.now()}),percentComplete:100},this.processedContent.content.identifier).toPromise().catch(t=>console.warn(t)))}),this.iframeUrl=this.domSanitizer.bypassSecurityTrustResourceUrl(this.processedContent.content.artifactUrl)}ngOnDestroy(){this.telemetryIntervalSubscription&&this.telemetryIntervalSubscription.unsubscribe(),this.raiseEvent("ENDED")}iframeLoaded(){this.userSvc.fetchUserGraphProfile().subscribe(t=>{const e={jwtToken:this.authSvc.token,host:document.baseURI,targetUrl:this.processedContent.content.artifactUrl,resourceId:this.processedContent.content.identifier,empId:t&&t.companyName||""},n=this.fpIframeElement.nativeElement.contentWindow;setTimeout(()=>{n.postMessage(e,"*")},2e3)})}raiseEvent(t){this.telemetrySvc.playerTelemetryEvent({app:"WEB_PLAYER_PLUGIN",plugin:"certifications",type:"TELEMETRY",state:t,data:{courseId:this.collectionId,identifier:this.processedContent.content.identifier,isCompleted:!0,mimeType:c.a.html,isIdeal:!1,url:this.processedContent.content.artifactUrl}})}}var h=n("iInd"),f=n("cUpR"),m=i["\u0275crt"]({encapsulation:0,styles:[[".ilpfp-iframe[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]],data:{}});function I(t){return i["\u0275vid"](0,[i["\u0275qud"](402653184,1,{fpIframeElement:0}),(t()(),i["\u0275eld"](1,0,[[1,0],["fpIframe",1]],null,0,"iframe",[["allow","fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; microphone; camera;"],["class","ilpfp-iframe"],["title","Grundlagenprogramm"]],[[8,"src",5]],[[null,"load"]],function(t,e,n){var i=!0;return"load"===e&&(i=!1!==t.component.iframeLoaded()&&i),i},null,null))],null,function(t,e){t(e,1,0,e.component.iframeUrl)})}function E(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"ws-ilp-fp",[],null,null,null,I,m)),i["\u0275did"](1,245760,null,0,d,[h.a,f.b,p.a,a.a,u.a,l.a],null,null)],function(t,e){t(e,1,0)},null)}var v=i["\u0275ccf"]("ws-ilp-fp",d,E,{},{},[]),y=n("SVse"),S=n("zsyL"),C=n("RB3e");class g{}n.d(e,"IlpFpModuleNgFactory",function(){return b});var b=i["\u0275cmf"](r,[],function(t){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[s.a,v]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,y.q,y.p,[i.LOCALE_ID,[2,y.L]]),i["\u0275mpd"](4608,S.a,S.a,[C.a]),i["\u0275mpd"](1073742336,y.c,y.c,[]),i["\u0275mpd"](1073742336,h.s,h.s,[[2,h.x],[2,h.o]]),i["\u0275mpd"](1073742336,g,g,[]),i["\u0275mpd"](1073742336,r,r,[]),i["\u0275mpd"](256,i.LOCALE_ID,"de",[]),i["\u0275mpd"](1024,h.m,function(){return[[{path:"",pathMatch:"full",component:d,resolve:{playerDetails:S.a}}]]},[]),i["\u0275mpd"](256,i.TRANSLATIONS_FORMAT,"xlf",[])])})},l5mm:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("HDdC"),r=n("D0XW"),s=n("Y7HM");function o(t=0,e=r.a){return(!Object(s.a)(t)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=r.a),new i.a(n=>(n.add(e.schedule(c,t,{subscriber:n,counter:0,period:t})),n))}function c(t){const{subscriber:e,counter:n,period:i}=t;e.next(n),this.schedule({subscriber:e,counter:n+1,period:i},i)}},oVAt:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("Jmk9"),r=n("8Y7J");class s{constructor(t){this.historyApiSvc=t}fetchContinueLearning(t,e,n){return this.historyApiSvc.fetchContinueLearning(t,e,n)}fetchContentContinueLearning(t){return this.historyApiSvc.fetchContentContinueLearning(t)}saveContinueLearning(t,e){return this.historyApiSvc.saveContinueLearning(t,e)}addToHistory(t){return this.historyApiSvc.addHistory(t)}}s.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new s(r["\u0275\u0275inject"](i.a))},token:s,providedIn:"root"})}}]);