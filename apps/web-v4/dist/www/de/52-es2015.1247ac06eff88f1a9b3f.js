/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{GRON:function(e,t,n){"use strict";n.r(t);var i=n("8Y7J");class o{}var r=n("pMnS"),s=n("SVse"),c=n("lzlj"),l=n("igqZ"),a=n("bujt"),u=n("Fwaw"),d=n("/HVE"),h=n("5GAg"),p=n("omvX"),f=n("l5mm"),m=n("hFHK"),g=n("oVAt"),v=n("VX4o");class y{constructor(e,t,n,i){this.route=e,this.domSanitizer=t,this.telemetrySvc=n,this.historySvc=i,this.proctoringWarning=!1,this.proctoringStarted=!1,this.contextCheck=(e=>{this.sendProctoringInfo("rightClick"),e.preventDefault()}),this.beforeUnload=(e=>{this.sendProctoringInfo("beforeunload"),e.returnValue="You are not allowed to close window."}),this.visibilityCheck=(()=>{console.log("document.visibilityState >",document.visibilityState),this.sendProctoringInfo("visibilitychange")}),this.fullscreenCheck=(()=>{this.sendProctoringInfo("fullScreen")}),this.keydownCheck=(e=>{e.altKey?(this.sendProctoringInfo("alt"),e.preventDefault()):e.ctrlKey?(this.sendProctoringInfo("ctrl"),e.preventDefault()):9===e.keyCode?(this.sendProctoringInfo("tab"),e.preventDefault()):27===e.keyCode?(this.sendProctoringInfo("esc"),e.preventDefault()):91===e.keyCode?(this.sendProctoringInfo("window"),e.preventDefault()):112===e.keyCode?(this.sendProctoringInfo("f1"),e.preventDefault()):119===e.keyCode?(this.sendProctoringInfo("f8"),e.preventDefault()):123===e.keyCode&&(this.sendProctoringInfo("f12"),e.preventDefault())}),this.copyCheck=(e=>{this.sendProctoringInfo("copy"),e.preventDefault()}),this.cutCheck=(e=>{this.sendProctoringInfo("cut"),e.preventDefault()}),this.pasteCheck=(e=>{this.sendProctoringInfo("paste"),e.preventDefault()})}ngOnInit(){this.paramSubscription=this.route.data.subscribe(e=>{this.processedContent=e.playerDetails.processedResource,this.collectionId=e.playerDetails.toc.identifier,this.onChangeFunction(),this.onInItFunction()})}onInItFunction(){this.telemetryIntervalSubscription=Object(f.a)(3e4).subscribe(()=>{this.processedContent&&this.processedContent.content&&this.processedContent.content.identifier&&this.raiseEvent("RUNNING")})}ngAfterViewInit(){window.addEventListener("message",e=>{e.data?e.data.functionToExecute&&"turnOnProctoring"===e.data.functionToExecute?(this.turnOnProctoring(),this.proctoringStarted=!0):e.data.functionToExecute&&"turnOffProctoring"===e.data.functionToExecute&&(this.turnOffProctoring(),this.proctoringStarted=!1):console.log("data unavailable")})}ngOnChanges(){this.onChangeFunction()}onChangeFunction(){this.processedContent&&this.processedContent.content&&this.processedContent.content.artifactUrl?(this.raiseEvent("LOADED"),null!=this.collectionId&&this.collectionId!==this.processedContent.content.identifier||this.historySvc.saveContinueLearning({contextPathId:this.processedContent.content.identifier,resourceId:this.processedContent.content.identifier,data:JSON.stringify({timestamp:Date.now()}),percentComplete:100},this.processedContent.content.identifier).toPromise().catch(e=>console.warn(e)),this.iframeUrl=this.domSanitizer.bypassSecurityTrustResourceUrl(this.processedContent.content.artifactUrl)):this.iframeUrl=null}ngOnDestroy(){this.telemetryIntervalSubscription&&this.telemetryIntervalSubscription.unsubscribe(),this.raiseEvent("ENDED"),this.proctoringStarted&&this.turnOffProctoring()}raiseEvent(e){this.telemetrySvc.playerTelemetryEvent({app:"WEB_PLAYER_PLUGIN",plugin:"certifications",type:"TELEMETRY",state:e,data:{courseId:this.collectionId,identifier:this.processedContent.content.identifier,isCompleted:!0,mimeType:m.a.html,isIdeal:!1,url:this.processedContent.content.artifactUrl}})}turnOnProctoring(){this.sendProctoringInfo("none"),this.sendProctoringInfo("fullScreen"),window.addEventListener("contextmenu",this.contextCheck),window.addEventListener("beforeunload",this.beforeUnload),window.addEventListener("keydown",this.keydownCheck),document.body.addEventListener("copy",this.copyCheck),document.body.addEventListener("cut",this.cutCheck),document.body.addEventListener("paste",this.pasteCheck),document.addEventListener("visibilitychange",this.visibilityCheck),document.addEventListener("webkitfullscreenchange",this.fullscreenCheck,!1),document.addEventListener("mozfullscreenchange",this.fullscreenCheck,!1),document.addEventListener("msfullscreenchange",this.fullscreenCheck,!1),document.addEventListener("fullscreenchange",this.fullscreenCheck,!1)}sendProctoringInfo(e){document.getElementById("iap-iframe").contentWindow.postMessage({proctoring:e},"*"),"esc"!==e&&"fullScreen"!==e||(this.proctoringWarning=!0)}enterFullScreen(){this.proctoringWarning=!1;const e=document.getElementById("iap-iframe");e&&(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen())}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}turnOffProctoring(){window.removeEventListener("contextmenu",this.contextCheck),window.removeEventListener("beforeunload",this.beforeUnload),window.removeEventListener("keydown",this.keydownCheck),document.body.removeEventListener("copy",this.copyCheck),document.body.removeEventListener("cut",this.cutCheck),document.body.removeEventListener("paste",this.pasteCheck),document.removeEventListener("visibilitychange",this.visibilityCheck),document.removeEventListener("webkitfullscreenchange",this.fullscreenCheck),document.removeEventListener("fullscreenchange",this.fullscreenCheck),document.removeEventListener("mozfullscreenchange",this.fullscreenCheck),document.removeEventListener("msfullscreenchange",this.fullscreenCheck),this.exitFullscreen(),this.proctoringWarning=!1}}var C=n("iInd"),E=n("cUpR"),b=i["\u0275crt"]({encapsulation:0,styles:[[".iap-iframe[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.proctoring-warning-holder[_ngcontent-%COMP%]{position:fixed;top:60px;right:0;bottom:0;left:0}.proctoring-warning-holder[_ngcontent-%COMP%]   .proctoring-warning[_ngcontent-%COMP%]{text-align:center;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:50%;min-width:300px;max-width:600px}"]],data:{}});function I(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,0,"iframe",[["allow","fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; microphone; camera;"],["class","iap-iframe"],["frameborder","0"],["id","iap-iframe"],["title","IAP Bewertungs-Betrachter"]],[[8,"src",5]],null,null,null,null)),(e()(),i["\u0275eld"](1,0,null,null,10,"div",[],null,null,null,null,null)),i["\u0275prd"](512,null,s.G,s.H,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](3,278528,null,0,s.m,[s.G],{ngClass:[0,"ngClass"]},null),i["\u0275pod"](4,{"proctoring-warning-holder":0}),(e()(),i["\u0275eld"](5,0,null,null,6,"mat-card",[["class","proctoring-warning mat-card"]],[[8,"hidden",0]],null,null,c.d,c.a)),i["\u0275did"](6,49152,null,0,l.a,[],null,null),(e()(),i["\u0275eld"](7,0,null,0,1,"h2",[["class","mat-h2"]],null,null,null,null,null)),(e()(),i["\u0275ted"](-1,null,[" Nur auf Vollbildschirm verf\xfcgbar. Um fortzufahren auf Okay klicken "])),(e()(),i["\u0275eld"](9,0,null,0,2,"button",[["mat-flat-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(e,t,n){var i=!0;return"click"===t&&(i=!1!==e.component.enterFullScreen()&&i),i},a.d,a.b)),i["\u0275did"](10,180224,null,0,u.b,[i.ElementRef,d.a,h.h,[2,p.a]],{color:[0,"color"]},null),(e()(),i["\u0275ted"](-1,0,[" Okay "]))],function(e,t){var n=e(t,4,0,t.component.proctoringWarning);e(t,3,0,n),e(t,10,0,"primary")},function(e,t){var n=t.component;e(t,0,0,n.iframeUrl),e(t,5,0,!n.proctoringWarning),e(t,9,0,i["\u0275nov"](t,10).disabled||null,"NoopAnimations"===i["\u0275nov"](t,10)._animationMode)})}function k(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,0,null,null,1,"ws-iap",[],null,null,null,I,b)),i["\u0275did"](1,4964352,null,0,y,[C.a,E.b,v.a,g.a],null,null)],function(e,t){e(t,1,0)},null)}var w=i["\u0275ccf"]("ws-iap",y,k,{},{},[]),S=n("zsyL"),L=n("RB3e");class P{}var R=n("IP0z"),O=n("Xd0L");n.d(t,"IapModuleNgFactory",function(){return F});var F=i["\u0275cmf"](o,[],function(e){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,w]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,s.q,s.p,[i.LOCALE_ID,[2,s.L]]),i["\u0275mpd"](4608,S.a,S.a,[L.a]),i["\u0275mpd"](1073742336,s.c,s.c,[]),i["\u0275mpd"](1073742336,C.s,C.s,[[2,C.x],[2,C.o]]),i["\u0275mpd"](1073742336,P,P,[]),i["\u0275mpd"](1073742336,R.a,R.a,[]),i["\u0275mpd"](1073742336,O.n,O.n,[[2,O.f],[2,E.f]]),i["\u0275mpd"](1073742336,l.g,l.g,[]),i["\u0275mpd"](1073742336,d.b,d.b,[]),i["\u0275mpd"](1073742336,O.y,O.y,[]),i["\u0275mpd"](1073742336,u.c,u.c,[]),i["\u0275mpd"](1073742336,o,o,[]),i["\u0275mpd"](256,i.LOCALE_ID,"de",[]),i["\u0275mpd"](1024,C.m,function(){return[[{path:"",pathMatch:"full",component:y,resolve:{playerDetails:S.a}}]]},[]),i["\u0275mpd"](256,i.TRANSLATIONS_FORMAT,"xlf",[])])})},Jmk9:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var i=n("z6cu"),o=n("VX4o"),r=n("8Y7J"),s=n("IheW");class c{constructor(e,t){this.http=e,this.telemetrySvc=t,this.API_BASE="/clientApi/v2",this.USER_API=`${this.API_BASE}/user`,this.apiEndpoints={USER_HISTORY:`${this.USER_API}/history`,USER_CONTINUE_LEARNING:`${this.USER_API}/history/continue`}}fetchContinueLearning(e,t,n){return this.http.get(`${this.apiEndpoints.USER_CONTINUE_LEARNING}?pageSize=${e}`+(t?`&pageState=${t}`:"")+(n?`&email=${n}`:""))}saveContinueLearning(e,t){const n=this.apiEndpoints.USER_CONTINUE_LEARNING;return Object.keys(e).length?this.http.post(n,e):(this.telemetrySvc.errorTelemetryEvent(n,e,t),Object(i.a)({message:"EMPTY_REQUEST"}))}fetchContentContinueLearning(e){return this.http.get(`${this.apiEndpoints.USER_CONTINUE_LEARNING}/${e}`)}addHistory(e){return this.http.post(this.apiEndpoints.USER_HISTORY+"/"+e,{})}deleteHistory(e){return this.http.delete(this.apiEndpoints.USER_HISTORY+"/"+e)}}c.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new c(r["\u0275\u0275inject"](s.c),r["\u0275\u0275inject"](o.a))},token:c,providedIn:"root"})},l5mm:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("HDdC"),o=n("D0XW"),r=n("Y7HM");function s(e=0,t=o.a){return(!Object(r.a)(e)||e<0)&&(e=0),t&&"function"==typeof t.schedule||(t=o.a),new i.a(n=>(n.add(t.schedule(c,e,{subscriber:n,counter:0,period:e})),n))}function c(e){const{subscriber:t,counter:n,period:i}=e;t.next(n),this.schedule({subscriber:t,counter:n+1,period:i},i)}},oVAt:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n("Jmk9"),o=n("8Y7J");class r{constructor(e){this.historyApiSvc=e}fetchContinueLearning(e,t,n){return this.historyApiSvc.fetchContinueLearning(e,t,n)}fetchContentContinueLearning(e){return this.historyApiSvc.fetchContentContinueLearning(e)}saveContinueLearning(e,t){return this.historyApiSvc.saveContinueLearning(e,t)}addToHistory(e){return this.historyApiSvc.addHistory(e)}}r.ngInjectableDef=o["\u0275\u0275defineInjectable"]({factory:function(){return new r(o["\u0275\u0275inject"](i.a))},token:r,providedIn:"root"})}}]);