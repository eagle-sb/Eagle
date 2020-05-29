/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"6ZFr":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),a=function(){return function(){}}(),i=e("pMnS"),o=e("bujt"),u=e("UodH"),d=e("dWZg"),r=e("lLAP"),s=e("wFw1"),c=e("Mr+X"),m=e("SMsm"),b=e("Ip0R"),p=e("Rlre"),f=e("La40"),g=e("FbN9"),h=e("8mMr"),v=e("ZYCi"),x=e("lzlj"),y=e("FVSy"),w=e("sFxA"),k=e("2TuL"),R=e("r4Kj"),C=function(){function n(n,l,e,t){this.sanitizer=n,this.routingSvc=l,this.valuesSvc=e,this.configSvc=t,this.selectedTabIndex=this.valuesSvc.isIos?1:0,this.isAndroidPlayStoreLink=!1,this.isClient=this.configSvc.instanceConfig.features.client.available,this.mobilePlatformCode=this.configSvc.instanceConfig.platform.mobilePlatformCode}return n.prototype.ngOnInit=function(){this.mobileLinks={android:this.configSvc.instanceConfig.externalLinks.appsAndroid,androidMirror:this.configSvc.instanceConfig.externalLinks.appsAndroidMirror,ios:this.configSvc.instanceConfig.externalLinks.appsIos,iosSanitized:this.sanitizer.bypassSecurityTrustUrl(this.configSvc.instanceConfig.externalLinks.appsIos)},this.mobileLinks&&this.mobileLinks.android&&this.mobileLinks.android.includes("google")&&(this.isAndroidPlayStoreLink=!0)},n}(),_=e("ZYjt"),I=t["\u0275crt"]({encapsulation:0,styles:[[".mobile-app-container[_ngcontent-%COMP%]{max-width:800px;margin-left:auto;margin-right:auto;height:calc(100% - 56px);padding-top:0;padding-bottom:0}@media only screen and (min-width:600px){.mobile-app-container[_ngcontent-%COMP%]{height:calc(100% - 64px)}}.mobile-qr-image[_ngcontent-%COMP%]{width:200px;height:200px}.app-unavailable[_ngcontent-%COMP%]{text-align:center;padding-top:32px}"]],data:{}});function L(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["accesskey","1"],["class","mat-body-2"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ANDROID"]))],null,null)}function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","margin-top-s mat-h3"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" This application requires Multi Factor Authentication (MFA) as set by your organization. Please note the following before you install this app. "])),(n()(),t["\u0275eld"](3,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Post installation you will have to log in with the MFA. To reset or configure MFA, go to your organization portal "]))],null,null)}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"h3",[["class","margin-top-m text-center"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[' When prompted for code, please enter "','" ']))],null,function(n,l){n(l,1,0,l.component.mobilePlatformCode)})}function A(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"a",[["class","margin-top-xs"],["color","primary"],["mat-raised-button",""],["type","button"]],[[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==t["\u0275nov"](n,1)._haltDisabledEvents(e)&&a),a},o.c,o.a)),t["\u0275did"](1,180224,null,0,u.a,[d.a,r.h,t.ElementRef,[2,s.a]],{color:[0,"color"]},null),(n()(),t["\u0275ted"](-1,0,["IN PLAYSTORE \xd6FFNEN"]))],function(n,l){n(l,1,0,"primary")},function(n,l){n(l,0,0,l.component.mobileLinks.android,t["\u0275nov"](l,1).disabled?-1:t["\u0275nov"](l,1).tabIndex||0,t["\u0275nov"](l,1).disabled||null,t["\u0275nov"](l,1).disabled.toString(),"NoopAnimations"===t["\u0275nov"](l,1)._animationMode)})}function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"a",[["accesskey","J"],["class","margin-top-xs"],["color","primary"],["download",""],["mat-raised-button",""],["type","button"]],[[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==t["\u0275nov"](n,1)._haltDisabledEvents(e)&&a),a},o.c,o.a)),t["\u0275did"](1,180224,null,0,u.a,[d.a,r.h,t.ElementRef,[2,s.a]],{color:[0,"color"]},null),(n()(),t["\u0275eld"](2,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,c.b,c.a)),t["\u0275did"](3,9158656,null,0,m.b,[t.ElementRef,m.d,[8,null],[2,m.a]],null,null),(n()(),t["\u0275ted"](-1,0,["cloud_download"])),(n()(),t["\u0275eld"](5,0,null,0,1,"span",[["class","padding-left-xs"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["DOWNLOAD"]))],function(n,l){n(l,1,0,"primary"),n(l,3,0)},function(n,l){n(l,0,0,l.component.mobileLinks.android,t["\u0275nov"](l,1).disabled?-1:t["\u0275nov"](l,1).tabIndex||0,t["\u0275nov"](l,1).disabled||null,t["\u0275nov"](l,1).disabled.toString(),"NoopAnimations"===t["\u0275nov"](l,1)._animationMode),n(l,2,0,t["\u0275nov"](l,3).inline,"primary"!==t["\u0275nov"](l,3).color&&"accent"!==t["\u0275nov"](l,3).color&&"warn"!==t["\u0275nov"](l,3).color)})}function P(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"a",[["accesskey","J"],["class","margin-top-xs margin-left-s"],["color","primary"],["download",""],["mat-raised-button",""],["type","button"]],[[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==t["\u0275nov"](n,1)._haltDisabledEvents(e)&&a),a},o.c,o.a)),t["\u0275did"](1,180224,null,0,u.a,[d.a,r.h,t.ElementRef,[2,s.a]],{color:[0,"color"]},null),(n()(),t["\u0275eld"](2,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,c.b,c.a)),t["\u0275did"](3,9158656,null,0,m.b,[t.ElementRef,m.d,[8,null],[2,m.a]],null,null),(n()(),t["\u0275ted"](-1,0,["cloud_download"])),(n()(),t["\u0275eld"](5,0,null,0,1,"span",[["class","padding-left-xs"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Herunterladen von unserem Server"])),(n()(),t["\u0275eld"](7,0,null,0,1,"sup",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["*"]))],function(n,l){n(l,1,0,"primary"),n(l,3,0)},function(n,l){n(l,0,0,l.component.mobileLinks.androidMirror,t["\u0275nov"](l,1).disabled?-1:t["\u0275nov"](l,1).tabIndex||0,t["\u0275nov"](l,1).disabled||null,t["\u0275nov"](l,1).disabled.toString(),"NoopAnimations"===t["\u0275nov"](l,1)._animationMode),n(l,2,0,t["\u0275nov"](l,3).inline,"primary"!==t["\u0275nov"](l,3).color&&"accent"!==t["\u0275nov"](l,3).color&&"warn"!==t["\u0275nov"](l,3).color)})}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","mat-h3 margin-top-m margin-remove-bottom"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Oder Sie scannen den QR Code zum Herunterladen: "])),(n()(),t["\u0275eld"](3,0,null,null,0,"img",[["alt","android qr code"],["class","mobile-qr-image"],["src","/public-assets/common/misc/mobile_app/qr_android.png"]],null,null,null,null,null))],null,null)}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"p",[["class","mat-caption"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" * If prompted, allow installation from unknown sources. You can disable this option after the app installation is complete. "]))],null,null)}function q(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,15,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](2,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](4,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](5,0,null,null,10,"div",[["class","text-center margin-top-m"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](7,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](9,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](11,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](13,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,E)),t["\u0275did"](15,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,!e.isClient),n(l,4,0,e.isClient&&e.mobilePlatformCode),n(l,7,0,e.mobileLinks&&e.isAndroidPlayStoreLink),n(l,9,0,e.mobileLinks&&!e.isAndroidPlayStoreLink),n(l,11,0,(null==e.mobileLinks?null:e.mobileLinks.androidMirror)&&e.isAndroidPlayStoreLink),n(l,13,0,e.isAndroidPlayStoreLink),n(l,15,0,(null==e.mobileLinks?null:e.mobileLinks.androidMirror)&&e.isAndroidPlayStoreLink)},null)}function z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"h2",[["class","text-center margin-top-s"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Kommt bald\u2026 "]))],null,null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["accesskey","2"],["class","mat-body-2"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["iOS"]))],null,null)}function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"h3",[["class","margin-top-s mat-h3"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" This application requires Multi Factor Authentication (MFA) as set by your organization. Please note the following before you install this app. "])),(n()(),t["\u0275eld"](3,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Post installation you will have to log in with the MFA. To reset or configure MFA, go to your organization portal "]))],null,null)}function V(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"h3",[["class","margin-top-m text-center"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[' When prompted for code, please enter "','" ']))],null,function(n,l){n(l,1,0,l.component.mobilePlatformCode)})}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","margin-top-m text-center"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,"a",[["accesskey","J"],["color","primary"],["download",""],["mat-raised-button",""],["type","button"]],[[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==t["\u0275nov"](n,2)._haltDisabledEvents(e)&&a),a},o.c,o.a)),t["\u0275did"](2,180224,null,0,u.a,[d.a,r.h,t.ElementRef,[2,s.a]],{color:[0,"color"]},null),(n()(),t["\u0275eld"](3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,c.b,c.a)),t["\u0275did"](4,9158656,null,0,m.b,[t.ElementRef,m.d,[8,null],[2,m.a]],null,null),(n()(),t["\u0275ted"](-1,0,["cloud_download"])),(n()(),t["\u0275eld"](6,0,null,0,1,"span",[["class","padding-left-xs"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["DOWNLOAD"]))],function(n,l){n(l,2,0,"primary"),n(l,4,0)},function(n,l){n(l,1,0,l.component.mobileLinks.iosSanitized,t["\u0275nov"](l,2).disabled?-1:t["\u0275nov"](l,2).tabIndex||0,t["\u0275nov"](l,2).disabled||null,t["\u0275nov"](l,2).disabled.toString(),"NoopAnimations"===t["\u0275nov"](l,2)._animationMode),n(l,3,0,t["\u0275nov"](l,4).inline,"primary"!==t["\u0275nov"](l,4).color&&"accent"!==t["\u0275nov"](l,4).color&&"warn"!==t["\u0275nov"](l,4).color)})}function j(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](2,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,V)),t["\u0275did"](4,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](6,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](0,null,null,0))],function(n,l){var e=l.component;n(l,2,0,!e.isClient),n(l,4,0,e.isClient&&e.mobilePlatformCode),n(l,6,0,e.mobileLinks)},null)}function W(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"h2",[["class","text-center margin-top-s"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Kommt bald\u2026 "]))],null,null)}function $(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,22,"mat-tab-group",[["class","mat-tab-group"],["dynamicHeight",""],["mat-align-tabs","center"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,p.d,p.b)),t["\u0275did"](1,3325952,null,1,f.g,[t.ElementRef,t.ChangeDetectorRef,[2,f.a]],{dynamicHeight:[0,"dynamicHeight"],selectedIndex:[1,"selectedIndex"]},null),t["\u0275qud"](603979776,2,{_tabs:1}),(n()(),t["\u0275eld"](3,16777216,null,null,9,"mat-tab",[],null,null,null,p.f,p.a)),t["\u0275did"](4,770048,[[2,4]],2,f.c,[t.ViewContainerRef],null,null),t["\u0275qud"](335544320,3,{templateLabel:0}),t["\u0275qud"](335544320,4,{_explicitContent:0}),(n()(),t["\u0275and"](16777216,null,0,1,null,L)),t["\u0275did"](8,16384,[[3,4]],0,f.i,[t.TemplateRef,t.ViewContainerRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,q)),t["\u0275did"](10,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,z)),t["\u0275did"](12,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](13,16777216,null,null,9,"mat-tab",[],null,null,null,p.f,p.a)),t["\u0275did"](14,770048,[[2,4]],2,f.c,[t.ViewContainerRef],null,null),t["\u0275qud"](335544320,5,{templateLabel:0}),t["\u0275qud"](335544320,6,{_explicitContent:0}),(n()(),t["\u0275and"](16777216,null,0,1,null,D)),t["\u0275did"](18,16384,[[5,4]],0,f.i,[t.TemplateRef,t.ViewContainerRef],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,j)),t["\u0275did"](20,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,W)),t["\u0275did"](22,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,"",e.selectedTabIndex),n(l,4,0),n(l,10,0,(null==e.mobileLinks?null:e.mobileLinks.android)||(null==e.mobileLinks?null:e.mobileLinks.androidMirror)),n(l,12,0,!(null!=e.mobileLinks&&e.mobileLinks.android||null!=e.mobileLinks&&e.mobileLinks.androidMirror)),n(l,14,0),n(l,20,0,null==e.mobileLinks?null:e.mobileLinks.ios),n(l,22,0,!(null!=e.mobileLinks&&e.mobileLinks.ios))},function(n,l){n(l,0,0,t["\u0275nov"](l,1).dynamicHeight,"below"===t["\u0275nov"](l,1).headerPosition)})}function H(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"h2",[["class","mat-h2 app-unavailable"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Mobile Apps are not yet available for the Web-App"]))],null,null)}function Z(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,10,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,g.b,g.a)),t["\u0275did"](1,4243456,null,1,h.a,[t.ElementRef,d.a,b.d],{color:[0,"color"]},null),t["\u0275qud"](603979776,1,{_toolbarRows:1}),(n()(),t["\u0275eld"](3,0,null,0,5,"a",[["mat-icon-button",""]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==t["\u0275nov"](n,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&a),"click"===l&&(a=!1!==t["\u0275nov"](n,5)._haltDisabledEvents(e)&&a),a},o.c,o.a)),t["\u0275did"](4,671744,null,0,v.r,[v.o,v.a,b.l],{queryParams:[0,"queryParams"],fragment:[1,"fragment"],routerLink:[2,"routerLink"]},null),t["\u0275did"](5,180224,null,0,u.a,[d.a,r.h,t.ElementRef,[2,s.a]],null,null),(n()(),t["\u0275eld"](6,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,c.b,c.a)),t["\u0275did"](7,9158656,null,0,m.b,[t.ElementRef,m.d,[8,null],[2,m.a]],null,null),(n()(),t["\u0275ted"](-1,0,["arrow_back"])),(n()(),t["\u0275eld"](9,0,null,0,1,"span",[["class","margin-left-xs"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Mobile Apps"])),(n()(),t["\u0275eld"](11,0,null,null,5,"mat-card",[["class","mobile-app-container mat-card"]],null,null,null,x.d,x.a)),t["\u0275did"](12,49152,null,0,y.a,[],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,$)),t["\u0275did"](14,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,H)),t["\u0275did"](16,16384,null,0,b.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,"primary"),n(l,4,0,e.routingSvc.getLastUrl().qparams,e.routingSvc.getLastUrl().fragment,e.routingSvc.getLastUrl().route),n(l,7,0),n(l,14,0,e.mobileLinks),n(l,16,0,!e.mobileLinks)},function(n,l){n(l,0,0,t["\u0275nov"](l,1)._toolbarRows.length>0,0===t["\u0275nov"](l,1)._toolbarRows.length),n(l,3,0,t["\u0275nov"](l,4).target,t["\u0275nov"](l,4).href,t["\u0275nov"](l,5).disabled?-1:t["\u0275nov"](l,5).tabIndex||0,t["\u0275nov"](l,5).disabled||null,t["\u0275nov"](l,5).disabled.toString(),"NoopAnimations"===t["\u0275nov"](l,5)._animationMode),n(l,6,0,t["\u0275nov"](l,7).inline,"primary"!==t["\u0275nov"](l,7).color&&"accent"!==t["\u0275nov"](l,7).color&&"warn"!==t["\u0275nov"](l,7).color)})}function B(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-mobile-apps",[],null,null,null,Z,I)),t["\u0275did"](1,114688,null,0,C,[_.b,w.a,k.a,R.a],null,null)],function(n,l){n(l,1,0)},null)}var K=t["\u0275ccf"]("app-mobile-apps",C,B,{},{},[]),J=e("M2Lx"),U=function(){return function(){}}(),Y=e("Fzqc"),G=e("Wf4p"),Q=e("4c35");e.d(l,"MobileAppsModuleNgFactory",function(){return X});var X=t["\u0275cmf"](a,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,K]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,b.q,b.p,[t.LOCALE_ID,[2,b.L]]),t["\u0275mpd"](4608,J.c,J.c,[]),t["\u0275mpd"](1073742336,b.c,b.c,[]),t["\u0275mpd"](1073742336,v.s,v.s,[[2,v.x],[2,v.o]]),t["\u0275mpd"](1073742336,U,U,[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[]),t["\u0275mpd"](1073742336,G.n,G.n,[[2,G.f],[2,_.f]]),t["\u0275mpd"](1073742336,h.b,h.b,[]),t["\u0275mpd"](1073742336,m.c,m.c,[]),t["\u0275mpd"](1073742336,d.b,d.b,[]),t["\u0275mpd"](1073742336,G.y,G.y,[]),t["\u0275mpd"](1073742336,u.c,u.c,[]),t["\u0275mpd"](1073742336,Q.g,Q.g,[]),t["\u0275mpd"](1073742336,J.d,J.d,[]),t["\u0275mpd"](1073742336,r.a,r.a,[]),t["\u0275mpd"](1073742336,f.m,f.m,[]),t["\u0275mpd"](1073742336,y.g,y.g,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](256,t.LOCALE_ID,"de",[]),t["\u0275mpd"](1024,v.m,function(){return[[{path:"",component:C}]]},[]),t["\u0275mpd"](256,t.TRANSLATIONS_FORMAT,"xlf",[])])})},Rlre:function(n,l,e){"use strict";e.d(l,"b",function(){return p}),e.d(l,"d",function(){return y}),e.d(l,"a",function(){return I}),e.d(l,"f",function(){return T}),e.d(l,"c",function(){return S}),e.d(l,"e",function(){return A});var t=e("CcnG"),a=e("La40"),i=e("Ip0R"),o=e("M2Lx"),u=e("Fzqc"),d=e("Wf4p"),r=(e("ZYjt"),e("4c35")),s=e("dWZg"),c=e("lLAP"),m=e("wFw1"),b=e("qAlS"),p=t["\u0275crt"]({encapsulation:2,styles:[".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{padding:0 12px}}@media (max-width:959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height .5s cubic-bezier(.35,0,.25,1)}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"],data:{}});function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](0,null,null,0))],null,null)}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](1,212992,null,0,r.c,[t.ComponentFactoryResolver,t.ViewContainerRef],{portal:[0,"portal"]},null),(n()(),t["\u0275and"](0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.templateLabel)},null)}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275ted"](0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.textLabel)})}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[["cdkMonitorElementFocus",""],["class","mat-tab-label mat-ripple"],["mat-ripple",""],["matTabLabelWrapper",""],["role","tab"]],[[8,"id",0],[1,"tabIndex",0],[1,"aria-posinset",0],[1,"aria-setsize",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-label",0],[1,"aria-labelledby",0],[2,"mat-tab-label-active",null],[2,"mat-ripple-unbounded",null],[2,"mat-tab-disabled",null],[1,"aria-disabled",0]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==n.component._handleClick(n.context.$implicit,t["\u0275nov"](n.parent,3),n.context.index)&&a),a},null,null)),t["\u0275did"](1,212992,null,0,d.x,[t.ElementRef,t.NgZone,s.a,[2,d.m],[2,m.a]],{disabled:[0,"disabled"]},null),t["\u0275did"](2,147456,null,0,c.e,[t.ElementRef,c.h],null,null),t["\u0275did"](3,16384,[[3,4]],0,a.j,[t.ElementRef],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](4,0,null,null,4,"div",[["class","mat-tab-label-content"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](6,16384,null,0,i.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](8,16384,null,0,i.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.context.$implicit.disabled||l.component.disableRipple),n(l,3,0,l.context.$implicit.disabled),n(l,6,0,l.context.$implicit.templateLabel),n(l,8,0,!l.context.$implicit.templateLabel)},function(n,l){var e=l.component;n(l,0,1,[e._getTabLabelId(l.context.index),e._getTabIndex(l.context.$implicit,l.context.index),l.context.index+1,e._tabs.length,e._getTabContentId(l.context.index),e.selectedIndex==l.context.index,l.context.$implicit.ariaLabel||null,!l.context.$implicit.ariaLabel&&l.context.$implicit.ariaLabelledby?l.context.$implicit.ariaLabelledby:null,e.selectedIndex==l.context.index,t["\u0275nov"](l,1).unbounded,t["\u0275nov"](l,3).disabled,!!t["\u0275nov"](l,3).disabled])})}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"mat-tab-body",[["class","mat-tab-body"],["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0],[2,"mat-tab-body-active",null]],[[null,"_onCentered"],[null,"_onCentering"]],function(n,l,e){var t=!0,a=n.component;return"_onCentered"===l&&(t=!1!==a._removeTabBodyWrapperHeight()&&t),"_onCentering"===l&&(t=!1!==a._setTabBodyWrapperHeight(e)&&t),t},R,w)),t["\u0275did"](1,245760,null,0,a.d,[t.ElementRef,[2,u.b],t.ChangeDetectorRef],{_content:[0,"_content"],origin:[1,"origin"],animationDuration:[2,"animationDuration"],position:[3,"position"]},{_onCentering:"_onCentering",_onCentered:"_onCentered"})],function(n,l){n(l,1,0,l.context.$implicit.content,l.context.$implicit.origin,l.component.animationDuration,l.context.$implicit.position)},function(n,l){var e=l.component;n(l,0,0,e._getTabContentId(l.context.index),e._getTabLabelId(l.context.index),e.selectedIndex==l.context.index)})}function y(n){return t["\u0275vid"](2,[t["\u0275qud"](402653184,1,{_tabBodyWrapper:0}),t["\u0275qud"](402653184,2,{_tabHeader:0}),(n()(),t["\u0275eld"](2,0,null,null,4,"mat-tab-header",[["class","mat-tab-header"]],[[2,"mat-tab-header-pagination-controls-enabled",null],[2,"mat-tab-header-rtl",null]],[[null,"indexFocused"],[null,"selectFocusedIndex"]],function(n,l,e){var t=!0,a=n.component;return"indexFocused"===l&&(t=!1!==a._focusChanged(e)&&t),"selectFocusedIndex"===l&&(t=!1!==(a.selectedIndex=e)&&t),t},_,C)),t["\u0275did"](3,7520256,[[2,4],["tabHeader",4]],1,a.h,[t.ElementRef,t.ChangeDetectorRef,b.e,[2,u.b],t.NgZone,s.a],{disableRipple:[0,"disableRipple"],selectedIndex:[1,"selectedIndex"]},{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}),t["\u0275qud"](603979776,3,{_labelWrappers:1}),(n()(),t["\u0275and"](16777216,null,0,1,null,v)),t["\u0275did"](6,278528,null,0,i.n,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275eld"](7,0,[[1,0],["tabBodyWrapper",1]],null,2,"div",[["class","mat-tab-body-wrapper"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](9,278528,null,0,i.n,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,3,0,e.disableRipple,e.selectedIndex),n(l,6,0,e._tabs),n(l,9,0,e._tabs)},function(n,l){n(l,2,0,t["\u0275nov"](l,3)._showPaginationControls,"rtl"==t["\u0275nov"](l,3)._getLayoutDirection())})}var w=t["\u0275crt"]({encapsulation:2,styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}"],data:{animation:[{type:7,name:"translateTab",definitions:[{type:0,name:"center, void, left-origin-center, right-origin-center",styles:{type:6,styles:{transform:"none"},offset:null},options:void 0},{type:0,name:"left",styles:{type:6,styles:{transform:"translate3d(-100%, 0, 0)",minHeight:"1px"},offset:null},options:void 0},{type:0,name:"right",styles:{type:6,styles:{transform:"translate3d(100%, 0, 0)",minHeight:"1px"},offset:null},options:void 0},{type:1,expr:"* => left, * => right, left => center, right => center",animation:{type:4,styles:null,timings:"{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"},options:null},{type:1,expr:"void => left-origin-center",animation:[{type:6,styles:{transform:"translate3d(-100%, 0, 0)"},offset:null},{type:4,styles:null,timings:"{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"}],options:null},{type:1,expr:"void => right-origin-center",animation:[{type:6,styles:{transform:"translate3d(100%, 0, 0)"},offset:null},{type:4,styles:null,timings:"{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"}],options:null}],options:{}}]}});function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](0,null,null,0))],null,null)}function R(n){return t["\u0275vid"](2,[t["\u0275qud"](402653184,1,{_portalHost:0}),(n()(),t["\u0275eld"](1,0,[["content",1]],null,4,"div",[["class","mat-tab-body-content"]],[[24,"@translateTab",0]],[[null,"@translateTab.start"],[null,"@translateTab.done"]],function(n,l,e){var t=!0,a=n.component;return"@translateTab.start"===l&&(t=!1!==a._onTranslateTabStarted(e)&&t),"@translateTab.done"===l&&(t=!1!==a._translateTabComplete.next(e)&&t),t},null,null)),t["\u0275pod"](2,{animationDuration:0}),t["\u0275pod"](3,{value:0,params:1}),(n()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](5,212992,null,0,a.e,[t.ComponentFactoryResolver,t.ViewContainerRef,a.d],null,null)],function(n,l){n(l,5,0)},function(n,l){var e=l.component,t=n(l,3,0,e._position,n(l,2,0,e.animationDuration));n(l,1,0,t)})}var C=t["\u0275crt"]({encapsulation:2,styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:0}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-label{opacity:1}}@media (max-width:599px){.mat-tab-label{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-pagination-after,.mat-tab-header-rtl .mat-tab-header-pagination-before{padding-right:4px}.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-list{flex-grow:1;position:relative;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}"],data:{}});function _(n){return t["\u0275vid"](2,[t["\u0275qud"](402653184,1,{_inkBar:0}),t["\u0275qud"](402653184,2,{_tabListContainer:0}),t["\u0275qud"](402653184,3,{_tabList:0}),t["\u0275qud"](402653184,4,{_nextPaginator:0}),t["\u0275qud"](402653184,5,{_previousPaginator:0}),(n()(),t["\u0275eld"](5,0,[[5,0],["previousPaginator",1]],null,2,"div",[["aria-hidden","true"],["class","mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4 mat-ripple"],["mat-ripple",""]],[[2,"mat-tab-header-pagination-disabled",null],[2,"mat-ripple-unbounded",null]],[[null,"click"],[null,"mousedown"],[null,"touchend"]],function(n,l,e){var t=!0,a=n.component;return"click"===l&&(t=!1!==a._handlePaginatorClick("before")&&t),"mousedown"===l&&(t=!1!==a._handlePaginatorPress("before")&&t),"touchend"===l&&(t=!1!==a._stopInterval()&&t),t},null,null)),t["\u0275did"](6,212992,null,0,d.x,[t.ElementRef,t.NgZone,s.a,[2,d.m],[2,m.a]],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](7,0,null,null,0,"div",[["class","mat-tab-header-pagination-chevron"]],null,null,null,null,null)),(n()(),t["\u0275eld"](8,0,[[2,0],["tabListContainer",1]],null,6,"div",[["class","mat-tab-label-container"]],null,[[null,"keydown"]],function(n,l,e){var t=!0;return"keydown"===l&&(t=!1!==n.component._handleKeydown(e)&&t),t},null,null)),(n()(),t["\u0275eld"](9,0,[[3,0],["tabList",1]],null,5,"div",[["class","mat-tab-list"],["role","tablist"]],null,[[null,"cdkObserveContent"]],function(n,l,e){var t=!0;return"cdkObserveContent"===l&&(t=!1!==n.component._onContentChanges()&&t),t},null,null)),t["\u0275did"](10,1196032,null,0,o.a,[o.b,t.ElementRef,t.NgZone],null,{event:"cdkObserveContent"}),(n()(),t["\u0275eld"](11,0,null,null,1,"div",[["class","mat-tab-labels"]],null,null,null,null,null)),t["\u0275ncd"](null,0),(n()(),t["\u0275eld"](13,0,null,null,1,"mat-ink-bar",[["class","mat-ink-bar"]],null,null,null,null,null)),t["\u0275did"](14,16384,[[1,4]],0,a.b,[t.ElementRef,t.NgZone,a.n],null,null),(n()(),t["\u0275eld"](15,0,[[4,0],["nextPaginator",1]],null,2,"div",[["aria-hidden","true"],["class","mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4 mat-ripple"],["mat-ripple",""]],[[2,"mat-tab-header-pagination-disabled",null],[2,"mat-ripple-unbounded",null]],[[null,"mousedown"],[null,"click"],[null,"touchend"]],function(n,l,e){var t=!0,a=n.component;return"mousedown"===l&&(t=!1!==a._handlePaginatorPress("after")&&t),"click"===l&&(t=!1!==a._handlePaginatorClick("after")&&t),"touchend"===l&&(t=!1!==a._stopInterval()&&t),t},null,null)),t["\u0275did"](16,212992,null,0,d.x,[t.ElementRef,t.NgZone,s.a,[2,d.m],[2,m.a]],{disabled:[0,"disabled"]},null),(n()(),t["\u0275eld"](17,0,null,null,0,"div",[["class","mat-tab-header-pagination-chevron"]],null,null,null,null,null))],function(n,l){var e=l.component;n(l,6,0,e._disableScrollBefore||e.disableRipple),n(l,16,0,e._disableScrollAfter||e.disableRipple)},function(n,l){var e=l.component;n(l,5,0,e._disableScrollBefore,t["\u0275nov"](l,6).unbounded),n(l,15,0,e._disableScrollAfter,t["\u0275nov"](l,16).unbounded)})}var I=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function L(n){return t["\u0275vid"](0,[t["\u0275ncd"](null,0),(n()(),t["\u0275and"](0,null,null,0))],null,null)}function T(n){return t["\u0275vid"](2,[t["\u0275qud"](402653184,1,{_implicitContent:0}),(n()(),t["\u0275and"](0,[[1,2]],null,0,null,L))],null,null)}var S=t["\u0275crt"]({encapsulation:2,styles:[".mat-tab-nav-bar{overflow:hidden;position:relative;flex-shrink:0}.mat-tab-links{position:relative;display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:0}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-link:focus{outline:dotted 2px}}.mat-tab-link.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-link.mat-tab-disabled{opacity:.5}}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-link{opacity:1}}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media (max-width:599px){.mat-tab-link{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}"],data:{}});function A(n){return t["\u0275vid"](2,[t["\u0275qud"](402653184,1,{_inkBar:0}),(n()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","mat-tab-links"]],null,[[null,"cdkObserveContent"]],function(n,l,e){var t=!0;return"cdkObserveContent"===l&&(t=!1!==n.component._alignInkBar()&&t),t},null,null)),t["\u0275did"](2,1196032,null,0,o.a,[o.b,t.ElementRef,t.NgZone],null,{event:"cdkObserveContent"}),t["\u0275ncd"](null,0),(n()(),t["\u0275eld"](4,0,null,null,1,"mat-ink-bar",[["class","mat-ink-bar"]],null,null,null,null,null)),t["\u0275did"](5,16384,[[1,4]],0,a.b,[t.ElementRef,t.NgZone,a.n],null,null)],null,null)}}}]);