/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"69Nf":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),a=function(){return function(){}}(),o=t("pMnS"),u=t("bujt"),i=t("UodH"),r=t("dWZg"),c=t("lLAP"),d=t("wFw1"),s=t("ZYCi"),p=t("Ip0R"),m=t("Wf4p"),f=t("OBdK"),g=t("J12g"),h=t("Mr+X"),v=t("SMsm"),b=t("FbN9"),x=t("8mMr"),y=t("lzlj"),R=t("FVSy"),C=t("OBjS"),w=t("sFxA"),_=t("r4Kj"),S=function(){function n(n,l,t){var e=this;this.route=n,this.routingSvc=l,this.configSvc=t,this.catalog=this.route.snapshot.data.catalog.children[0].children,this.config=this.configSvc.instanceConfig.features.catalog.config,this.hasNestedChild=function(n,l){return l&&l.children&&l.children.length&&e.config.ignoreChildren.indexOf(l.identifier)<0},this.getChildren=function(n){return n&&n.children?n.children:[]},this.nestedTreeControl=new f.i(this.getChildren),this.nestedDataSource=new g.d}return n.prototype.shouldDisplayNode=function(n){return this.config.ignoreNodes.indexOf(n)<0},n.prototype.ngOnInit=function(){this.route.snapshot.data.catalog&&this.route.snapshot.data.catalog.children&&this.route.snapshot.data.catalog.children.length&&this.route.snapshot.data.catalog.children[0].children&&(this.catalog=this.route.snapshot.data.catalog.children[0].children,this.nestedDataSource.data=this.catalog)},n}(),k=e["\u0275crt"]({encapsulation:0,styles:[[".catalog-container[_ngcontent-%COMP%]{max-width:800px;margin-left:auto;margin-right:auto;height:calc(100% - 56px);box-sizing:border-box;padding:16px}@media only screen and (min-width:600px){.catalog-container[_ngcontent-%COMP%]{height:calc(100% - 64px)}}.catalog-tree-invisible[_ngcontent-%COMP%]{display:none}.catalog-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .catalog-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit;margin:0!important}.tree-node-text[_ngcontent-%COMP%]{display:inline-block;width:100%}"]],data:{}});function O(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"h1",[["class","margin-top-xl text-center mat-title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Keine Daten verf\xfcgbar"]))],null,null)}function q(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,6,"li",[["class","mat-tree-node"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"button",[["disabled",""],["mat-icon-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,u.d,u.b)),e["\u0275did"](2,180224,null,0,i.b,[e.ElementRef,r.a,c.h,[2,d.a]],{disabled:[0,"disabled"]},null),(n()(),e["\u0275eld"](3,0,null,null,3,"a",[["class","mat-title tree-node-text text-truncate mat-ripple"],["matRipple",""]],[[1,"target",0],[8,"href",4],[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e["\u0275nov"](n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&a),a},null,null)),e["\u0275did"](4,671744,null,0,s.r,[s.o,s.a,p.l],{routerLink:[0,"routerLink"]},null),e["\u0275did"](5,212992,null,0,m.x,[e.ElementRef,e.NgZone,r.a,[2,m.m],[2,d.a]],null,null),(n()(),e["\u0275ted"](6,null,["",""]))],function(n,l){var t=l.component;n(l,2,0,""),n(l,4,0,t.config.customUrls[l.parent.context.$implicit.identifier]||"/catalog/"+l.parent.context.$implicit.identifier),n(l,5,0)},function(n,l){n(l,1,0,e["\u0275nov"](l,2).disabled||null,"NoopAnimations"===e["\u0275nov"](l,2)._animationMode),n(l,3,0,e["\u0275nov"](l,4).target,e["\u0275nov"](l,4).href,e["\u0275nov"](l,5).unbounded),n(l,6,0,l.parent.context.$implicit.value)})}function L(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,6,"mat-tree-node",[["class","mat-tree-node"],["matTreeNodeToggle",""]],[[1,"aria-expanded",0],[1,"aria-level",0],[1,"role",0]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e["\u0275nov"](n,4)._toggle(t)&&a),a},null,null)),e["\u0275prd"](6144,null,f.h,null,[g.h]),e["\u0275did"](2,16384,null,0,g.e,[e.ElementRef,f.c,[8,null]],null,null),e["\u0275prd"](2048,null,f.e,null,[g.e]),e["\u0275did"](4,16384,null,0,g.h,[f.c,f.e],null,null),(n()(),e["\u0275and"](16777216,null,null,1,null,q)),e["\u0275did"](6,16384,null,0,p.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,l.component.shouldDisplayNode(l.context.$implicit.identifier))},function(n,l){n(l,0,0,e["\u0275nov"](l,2).isExpanded,"treeitem"===e["\u0275nov"](l,2).role?e["\u0275nov"](l,2).level:null,e["\u0275nov"](l,2).role)})}function I(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,15,"li",[],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,11,"div",[["class","mat-tree-node"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,6,"button",[["mat-icon-button",""],["matTreeNodeToggle",""]],[[1,"aria-label",0],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e["\u0275nov"](n,4)._toggle(t)&&a),a},u.d,u.b)),e["\u0275prd"](6144,null,f.h,null,[g.h]),e["\u0275did"](4,16384,null,0,g.h,[f.c,f.e],null,null),e["\u0275did"](5,180224,null,0,i.b,[e.ElementRef,r.a,c.h,[2,d.a]],null,null),(n()(),e["\u0275eld"](6,0,null,0,2,"mat-icon",[["class","mat-icon-rtl-mirror mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e["\u0275did"](7,9158656,null,0,v.b,[e.ElementRef,v.d,[8,null],[2,v.a]],null,null),(n()(),e["\u0275ted"](8,0,[" "," "])),(n()(),e["\u0275eld"](9,0,null,null,3,"a",[["class","mat-title tree-node-text text-truncate mat-ripple"],["matRipple",""]],[[1,"target",0],[8,"href",4],[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e["\u0275nov"](n,10).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&a),a},null,null)),e["\u0275did"](10,671744,null,0,s.r,[s.o,s.a,p.l],{routerLink:[0,"routerLink"]},null),e["\u0275did"](11,212992,null,0,m.x,[e.ElementRef,e.NgZone,r.a,[2,m.m],[2,d.a]],null,null),(n()(),e["\u0275ted"](12,null,["",""])),(n()(),e["\u0275eld"](13,0,null,null,2,"ul",[],[[2,"catalog-tree-invisible",null]],null,null,null,null)),(n()(),e["\u0275eld"](14,16777216,null,null,1,null,null,null,null,null,null,null)),e["\u0275did"](15,16384,[[3,4]],0,g.g,[e.ViewContainerRef,[2,f.a]],null,null)],function(n,l){var t=l.component;n(l,7,0),n(l,10,0,t.config.customUrls[l.parent.context.$implicit.identifier]||"/catalog/"+l.parent.context.$implicit.identifier),n(l,11,0)},function(n,l){var t=l.component;n(l,2,0,"toggle "+l.parent.context.$implicit.value,e["\u0275nov"](l,5).disabled||null,"NoopAnimations"===e["\u0275nov"](l,5)._animationMode),n(l,6,0,e["\u0275nov"](l,7).inline,"primary"!==e["\u0275nov"](l,7).color&&"accent"!==e["\u0275nov"](l,7).color&&"warn"!==e["\u0275nov"](l,7).color),n(l,8,0,t.nestedTreeControl.isExpanded(l.parent.context.$implicit)?"expand_more":"chevron_right"),n(l,9,0,e["\u0275nov"](l,10).target,e["\u0275nov"](l,10).href,e["\u0275nov"](l,11).unbounded),n(l,12,0,l.parent.context.$implicit.value),n(l,13,0,!t.nestedTreeControl.isExpanded(l.parent.context.$implicit))})}function K(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,7,"mat-nested-tree-node",[["class","mat-nested-tree-node"]],[[1,"aria-expanded",0],[1,"role",0]],null,null,null,null)),e["\u0275prd"](6144,null,f.e,null,[g.a]),e["\u0275prd"](6144,null,f.a,null,[g.a]),e["\u0275prd"](6144,null,f.b,null,[g.a]),e["\u0275did"](4,1196032,null,1,g.a,[e.ElementRef,f.c,e.IterableDiffers,[8,null]],null,null),e["\u0275qud"](603979776,3,{nodeOutlet:1}),(n()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](7,16384,null,0,p.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,7,0,l.component.shouldDisplayNode(l.context.$implicit.identifier))},function(n,l){n(l,0,0,e["\u0275nov"](l,4).isExpanded,e["\u0275nov"](l,4).role)})}function N(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,10,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,b.b,b.a)),e["\u0275did"](1,4243456,null,1,x.a,[e.ElementRef,r.a,p.d],{color:[0,"color"]},null),e["\u0275qud"](603979776,1,{_toolbarRows:1}),(n()(),e["\u0275eld"](3,0,null,0,5,"a",[["mat-icon-button",""]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e["\u0275nov"](n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&a),"click"===l&&(a=!1!==e["\u0275nov"](n,5)._haltDisabledEvents(t)&&a),a},u.c,u.a)),e["\u0275did"](4,671744,null,0,s.r,[s.o,s.a,p.l],{queryParams:[0,"queryParams"],fragment:[1,"fragment"],routerLink:[2,"routerLink"]},null),e["\u0275did"](5,180224,null,0,i.a,[r.a,c.h,e.ElementRef,[2,d.a]],null,null),(n()(),e["\u0275eld"](6,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e["\u0275did"](7,9158656,null,0,v.b,[e.ElementRef,v.d,[8,null],[2,v.a]],null,null),(n()(),e["\u0275ted"](-1,0,["arrow_back"])),(n()(),e["\u0275eld"](9,0,null,0,1,"span",[["class","margin-left-xs"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Katalog"])),(n()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](12,16384,null,0,p.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](13,0,null,null,12,"div",[["class","catalog-container"]],null,null,null,null,null)),(n()(),e["\u0275eld"](14,0,null,null,11,"mat-card",[["class","mat-card"]],null,null,null,y.d,y.a)),e["\u0275did"](15,49152,null,0,R.a,[],null,null),(n()(),e["\u0275eld"](16,0,null,0,9,"mat-tree",[["class","catalog-tree mat-tree"],["role","tree"]],null,null,null,C.b,C.a)),e["\u0275prd"](6144,null,f.c,null,[g.b]),e["\u0275did"](18,2342912,null,1,g.b,[e.IterableDiffers,e.ChangeDetectorRef],{dataSource:[0,"dataSource"],treeControl:[1,"treeControl"]},null),e["\u0275qud"](603979776,2,{_nodeDefs:1}),(n()(),e["\u0275and"](0,null,null,2,null,L)),e["\u0275did"](21,16384,null,0,g.f,[e.TemplateRef],null,null),e["\u0275prd"](2048,[[2,4]],f.f,null,[g.f]),(n()(),e["\u0275and"](0,null,null,2,null,K)),e["\u0275did"](24,16384,null,0,g.f,[e.TemplateRef],{when:[0,"when"]},null),e["\u0275prd"](2048,[[2,4]],f.f,null,[g.f]),(n()(),e["\u0275eld"](26,0,[["noContentAvailable",1]],null,0,"input",[["type","hidden"],["value","Kein Inhalt verf\xfcgbar"]],null,null,null,null,null))],function(n,l){var t=l.component;n(l,1,0,"primary"),n(l,4,0,t.routingSvc.getLastUrl().qparams,t.routingSvc.getLastUrl().fragment,t.routingSvc.getLastUrl().route),n(l,7,0),n(l,12,0,!t.catalog),n(l,18,0,t.nestedDataSource,t.nestedTreeControl),n(l,24,0,t.hasNestedChild)},function(n,l){n(l,0,0,e["\u0275nov"](l,1)._toolbarRows.length>0,0===e["\u0275nov"](l,1)._toolbarRows.length),n(l,3,0,e["\u0275nov"](l,4).target,e["\u0275nov"](l,4).href,e["\u0275nov"](l,5).disabled?-1:e["\u0275nov"](l,5).tabIndex||0,e["\u0275nov"](l,5).disabled||null,e["\u0275nov"](l,5).disabled.toString(),"NoopAnimations"===e["\u0275nov"](l,5)._animationMode),n(l,6,0,e["\u0275nov"](l,7).inline,"primary"!==e["\u0275nov"](l,7).color&&"accent"!==e["\u0275nov"](l,7).color&&"warn"!==e["\u0275nov"](l,7).color)})}function P(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-catalog",[],null,null,null,N,k)),e["\u0275did"](1,114688,null,0,S,[s.a,w.a,_.a],null,null)],function(n,l){n(l,1,0)},null)}var j=e["\u0275ccf"]("app-catalog",S,P,{},{},[]),D=t("Aq6j"),M=t("mYcw"),E=t("NBun"),A=t("A1CT"),F=function(){function n(n,l,t,e){this.route=n,this.utilitySvc=l,this.routingSvc=t,this.configSvc=e,this.disableStrips=this.configSvc.instanceConfig.features.catalog.config.disableStrips,this.hasData={overview:!0,program:!0,course:!0,collection:!0,resource:!0},this.showStrip={overview:!0,program:!0,course:!0,collection:!0,resource:!0}}return n.prototype.ngOnInit=function(){var n=this;this.route.params.subscribe(function(l){n.pageHasContent=!0,n.catalogId=l.id,n.showStrip.overview=n.disableStrips.overview.indexOf(n.catalogId)<0,n.initializeData(l.id)})},n.prototype.initializeData=function(n){this.catalog=this.route.snapshot.data.catalog.children[0].children,this.path=this.utilitySvc.getPath(this.route.snapshot.data.catalog.children[0],n).slice(1),this.tags=this.path.map(function(n){return n.value}).join("/"),this.searchRequest={Concepts:this.createSearchRequestForCatalog("Resource","Concepts"),Programs:this.createSearchRequestForCatalog("Learning Path"),Course:this.createSearchRequestForCatalog("Course"),Collection:this.createSearchRequestForCatalog("Collection"),Resource:this.createSearchRequestForCatalog("Resource")}},n.prototype.createSearchRequestForCatalog=function(n,l){var t={contentType:[n],tags:[this.tags],resourceCategory:[]};return l&&(t.resourceCategory=[l]),{filters:t,pageNo:0,pageSize:20}},n.prototype.status=function(n,l){"none"===n&&(this.hasData[l]=!1);for(var t=!1,e=Object.values(this.hasData),a=Object.values(this.showStrip),o=0;o<e.length;o++)e[o]&&a[o]&&(t=!0);this.pageHasContent=t},n}(),T=e["\u0275crt"]({encapsulation:0,styles:[[".breadcrumb-card[_ngcontent-%COMP%]{margin-bottom:16px}.breadcrumb[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.row-wrap[_ngcontent-%COMP%]{-ms-flex-flow:wrap row;flex-flow:wrap row}"]],data:{}});function U(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,7,null,null,null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e["\u0275did"](2,9158656,null,0,v.b,[e.ElementRef,v.d,[8,null],[2,v.a]],null,null),(n()(),e["\u0275ted"](-1,0,["chevron_right"])),(n()(),e["\u0275eld"](4,0,null,null,3,"a",[["mat-button",""]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e["\u0275nov"](n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&a),"click"===l&&(a=!1!==e["\u0275nov"](n,6)._haltDisabledEvents(t)&&a),a},u.c,u.a)),e["\u0275did"](5,671744,null,0,s.r,[s.o,s.a,p.l],{routerLink:[0,"routerLink"]},null),e["\u0275did"](6,180224,null,0,i.a,[r.a,c.h,e.ElementRef,[2,d.a]],null,null),(n()(),e["\u0275ted"](7,0,["",""]))],function(n,l){n(l,2,0),n(l,5,0,"/catalog/"+l.context.$implicit.identifier)},function(n,l){n(l,1,0,e["\u0275nov"](l,2).inline,"primary"!==e["\u0275nov"](l,2).color&&"accent"!==e["\u0275nov"](l,2).color&&"warn"!==e["\u0275nov"](l,2).color),n(l,4,0,e["\u0275nov"](l,5).target,e["\u0275nov"](l,5).href,e["\u0275nov"](l,6).disabled?-1:e["\u0275nov"](l,6).tabIndex||0,e["\u0275nov"](l,6).disabled||null,e["\u0275nov"](l,6).disabled.toString(),"NoopAnimations"===e["\u0275nov"](l,6)._animationMode),n(l,7,0,l.context.$implicit.value)})}function $(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"h2",[["class","mat-title text-center margin-top-xl"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" No Data Available\n"]))],null,null)}function z(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,10,"mat-toolbar",[["class","mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,b.b,b.a)),e["\u0275did"](1,4243456,null,1,x.a,[e.ElementRef,r.a,p.d],{color:[0,"color"]},null),e["\u0275qud"](603979776,1,{_toolbarRows:1}),(n()(),e["\u0275eld"](3,0,null,0,5,"a",[["mat-icon-button",""]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e["\u0275nov"](n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&a),"click"===l&&(a=!1!==e["\u0275nov"](n,5)._haltDisabledEvents(t)&&a),a},u.c,u.a)),e["\u0275did"](4,671744,null,0,s.r,[s.o,s.a,p.l],{queryParams:[0,"queryParams"],fragment:[1,"fragment"],routerLink:[2,"routerLink"]},null),e["\u0275did"](5,180224,null,0,i.a,[r.a,c.h,e.ElementRef,[2,d.a]],null,null),(n()(),e["\u0275eld"](6,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),e["\u0275did"](7,9158656,null,0,v.b,[e.ElementRef,v.d,[8,null],[2,v.a]],null,null),(n()(),e["\u0275ted"](-1,0,["arrow_back"])),(n()(),e["\u0275eld"](9,0,null,0,1,"span",[["class","margin-left-xs"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Katalog"])),(n()(),e["\u0275eld"](11,0,null,null,10,"mat-card",[["class","breadcrumb-card mat-card"]],null,null,null,y.d,y.a)),e["\u0275did"](12,49152,null,0,R.a,[],null,null),(n()(),e["\u0275eld"](13,0,null,0,8,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),e["\u0275did"](14,16384,null,0,R.c,[],null,null),(n()(),e["\u0275eld"](15,0,null,null,6,"nav",[["class","breadcrumb row-wrap"]],null,null,null,null,null)),(n()(),e["\u0275eld"](16,0,null,null,3,"a",[["mat-button",""],["routerLink","/catalog"]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e["\u0275nov"](n,17).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&a),"click"===l&&(a=!1!==e["\u0275nov"](n,18)._haltDisabledEvents(t)&&a),a},u.c,u.a)),e["\u0275did"](17,671744,null,0,s.r,[s.o,s.a,p.l],{routerLink:[0,"routerLink"]},null),e["\u0275did"](18,180224,null,0,i.a,[r.a,c.h,e.ElementRef,[2,d.a]],null,null),(n()(),e["\u0275ted"](-1,0,["Catalog"])),(n()(),e["\u0275and"](16777216,null,null,1,null,U)),e["\u0275did"](21,278528,null,0,p.n,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,$)),e["\u0275did"](23,16384,null,0,p.o,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](24,0,null,null,1,"app-search-strip",[["heading","Programme"]],null,[[null,"contentStatus"]],function(n,l,t){var e=!0;return"contentStatus"===l&&(e=!1!==n.component.status(t,"program")&&e),e},D.b,D.a)),e["\u0275did"](25,638976,null,0,M.a,[E.a],{searchRequest:[0,"searchRequest"],heading:[1,"heading"]},{contentStatus:"contentStatus"}),(n()(),e["\u0275eld"](26,0,null,null,1,"app-search-strip",[["heading","Kurse"]],null,[[null,"contentStatus"]],function(n,l,t){var e=!0;return"contentStatus"===l&&(e=!1!==n.component.status(t,"course")&&e),e},D.b,D.a)),e["\u0275did"](27,638976,null,0,M.a,[E.a],{searchRequest:[0,"searchRequest"],heading:[1,"heading"]},{contentStatus:"contentStatus"}),(n()(),e["\u0275eld"](28,0,null,null,1,"app-search-strip",[["heading","Lernmodule"]],null,[[null,"contentStatus"]],function(n,l,t){var e=!0;return"contentStatus"===l&&(e=!1!==n.component.status(t,"collection")&&e),e},D.b,D.a)),e["\u0275did"](29,638976,null,0,M.a,[E.a],{searchRequest:[0,"searchRequest"],heading:[1,"heading"]},{contentStatus:"contentStatus"}),(n()(),e["\u0275eld"](30,0,null,null,1,"app-search-strip",[["heading","Ressourcen"]],null,[[null,"contentStatus"]],function(n,l,t){var e=!0;return"contentStatus"===l&&(e=!1!==n.component.status(t,"resource")&&e),e},D.b,D.a)),e["\u0275did"](31,638976,null,0,M.a,[E.a],{searchRequest:[0,"searchRequest"],heading:[1,"heading"]},{contentStatus:"contentStatus"})],function(n,l){var t=l.component;n(l,1,0,"primary"),n(l,4,0,t.routingSvc.getLastUrl().qparams,t.routingSvc.getLastUrl().fragment,t.routingSvc.getLastUrl().route),n(l,7,0),n(l,17,0,"/catalog"),n(l,21,0,t.path),n(l,23,0,!t.pageHasContent),n(l,25,0,t.searchRequest.Programs,"Programme"),n(l,27,0,t.searchRequest.Course,"Kurse"),n(l,29,0,t.searchRequest.Collection,"Lernmodule"),n(l,31,0,t.searchRequest.Resource,"Ressourcen")},function(n,l){n(l,0,0,e["\u0275nov"](l,1)._toolbarRows.length>0,0===e["\u0275nov"](l,1)._toolbarRows.length),n(l,3,0,e["\u0275nov"](l,4).target,e["\u0275nov"](l,4).href,e["\u0275nov"](l,5).disabled?-1:e["\u0275nov"](l,5).tabIndex||0,e["\u0275nov"](l,5).disabled||null,e["\u0275nov"](l,5).disabled.toString(),"NoopAnimations"===e["\u0275nov"](l,5)._animationMode),n(l,6,0,e["\u0275nov"](l,7).inline,"primary"!==e["\u0275nov"](l,7).color&&"accent"!==e["\u0275nov"](l,7).color&&"warn"!==e["\u0275nov"](l,7).color),n(l,16,0,e["\u0275nov"](l,17).target,e["\u0275nov"](l,17).href,e["\u0275nov"](l,18).disabled?-1:e["\u0275nov"](l,18).tabIndex||0,e["\u0275nov"](l,18).disabled||null,e["\u0275nov"](l,18).disabled.toString(),"NoopAnimations"===e["\u0275nov"](l,18)._animationMode)})}function Y(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-catalog-details",[],null,null,null,z,T)),e["\u0275did"](1,114688,null,0,F,[s.a,A.a,w.a,_.a],null,null)],function(n,l){n(l,1,0)},null)}var Z=e["\u0275ccf"]("app-catalog-details",F,Y,{},{},[]),V=t("NcP4"),B=t("t68o"),J=t("xYTU"),W=t("nFLJ"),G=t("9jgq"),H=t("FOUJ"),X=t("WV2o"),Q=t("nOXA"),nn=t("+1eP"),ln=t("+Rr6"),tn=t("yWMr"),en=t("wxxq"),an=t("lBxs"),on=t("v+9p"),un=t("gIcY"),rn=t("M2Lx"),cn=t("eDkP"),dn=t("Fzqc"),sn=t("v9Dh"),pn=t("ZYjt"),mn=t("o3x0"),fn=t("mVsa"),gn=t("uGex"),hn=function(){return function(){}}(),vn=t("Blfk"),bn=t("ze1e"),xn=t("UdHn"),yn=t("4c35"),Rn=t("qAlS"),Cn=t("vARd"),wn=t("de3e"),_n=t("/dO6"),Sn=t("/VYK"),kn=t("seP3"),On=t("b716"),qn=t("Z+uX"),Ln=t("vGXY"),In=t("Bkhm"),Kn=t("fkS7"),Nn=t("kvPK"),Pn=t("tLzf"),jn=t("BgWK"),Dn=t("LC5p"),Mn=t("0/Q6"),En=t("Le/g"),An=t("1Ut4"),Fn=t("OLRN"),Tn=t("YhbO"),Un=t("jlZm"),$n=t("w+lc"),zn=t("kWGw"),Yn=t("aoOz"),Zn=t("bH7S"),Vn=t("YSh2");t.d(l,"CatalogModuleNgFactory",function(){return Bn});var Bn=e["\u0275cmf"](a,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,j,Z,V.a,B.a,J.a,J.b,W.a,G.a,H.a,X.a,Q.a,nn.a,ln.a,tn.a,en.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,p.q,p.p,[e.LOCALE_ID,[2,p.L]]),e["\u0275mpd"](4608,an.a,an.a,[on.a]),e["\u0275mpd"](135680,c.h,c.h,[e.NgZone,r.a]),e["\u0275mpd"](4608,f.f,f.f,[e.TemplateRef]),e["\u0275mpd"](4608,un.e,un.e,[]),e["\u0275mpd"](4608,un.A,un.A,[]),e["\u0275mpd"](4608,rn.c,rn.c,[]),e["\u0275mpd"](4608,cn.c,cn.c,[cn.i,cn.e,e.ComponentFactoryResolver,cn.h,cn.f,e.Injector,e.NgZone,p.d,dn.b,[2,p.k]]),e["\u0275mpd"](5120,cn.j,cn.k,[cn.c]),e["\u0275mpd"](5120,sn.b,sn.c,[cn.c]),e["\u0275mpd"](4608,pn.e,m.e,[[2,m.i],[2,m.n]]),e["\u0275mpd"](5120,mn.c,mn.d,[cn.c]),e["\u0275mpd"](135680,mn.e,mn.e,[cn.c,e.Injector,[2,p.k],[2,mn.b],mn.c,[3,mn.e],cn.e]),e["\u0275mpd"](4608,m.d,m.d,[]),e["\u0275mpd"](5120,fn.b,fn.h,[cn.c]),e["\u0275mpd"](5120,gn.a,gn.b,[cn.c]),e["\u0275mpd"](1073742336,p.c,p.c,[]),e["\u0275mpd"](1073742336,s.s,s.s,[[2,s.x],[2,s.o]]),e["\u0275mpd"](1073742336,hn,hn,[]),e["\u0275mpd"](1073742336,f.d,f.d,[]),e["\u0275mpd"](1073742336,dn.a,dn.a,[]),e["\u0275mpd"](1073742336,m.n,m.n,[[2,m.f],[2,pn.f]]),e["\u0275mpd"](1073742336,g.c,g.c,[]),e["\u0275mpd"](1073742336,v.c,v.c,[]),e["\u0275mpd"](1073742336,R.g,R.g,[]),e["\u0275mpd"](1073742336,r.b,r.b,[]),e["\u0275mpd"](1073742336,m.y,m.y,[]),e["\u0275mpd"](1073742336,i.c,i.c,[]),e["\u0275mpd"](1073742336,x.b,x.b,[]),e["\u0275mpd"](1073742336,vn.c,vn.c,[]),e["\u0275mpd"](1073742336,bn.a,bn.a,[]),e["\u0275mpd"](1073742336,xn.a,xn.a,[]),e["\u0275mpd"](1073742336,un.z,un.z,[]),e["\u0275mpd"](1073742336,un.w,un.w,[]),e["\u0275mpd"](1073742336,un.k,un.k,[]),e["\u0275mpd"](1073742336,rn.d,rn.d,[]),e["\u0275mpd"](1073742336,c.a,c.a,[]),e["\u0275mpd"](1073742336,yn.g,yn.g,[]),e["\u0275mpd"](1073742336,Rn.c,Rn.c,[]),e["\u0275mpd"](1073742336,cn.g,cn.g,[]),e["\u0275mpd"](1073742336,sn.e,sn.e,[]),e["\u0275mpd"](1073742336,mn.k,mn.k,[]),e["\u0275mpd"](1073742336,Cn.f,Cn.f,[]),e["\u0275mpd"](1073742336,wn.c,wn.c,[]),e["\u0275mpd"](1073742336,_n.f,_n.f,[]),e["\u0275mpd"](1073742336,Sn.c,Sn.c,[]),e["\u0275mpd"](1073742336,kn.e,kn.e,[]),e["\u0275mpd"](1073742336,On.c,On.c,[]),e["\u0275mpd"](1073742336,qn.c,qn.c,[]),e["\u0275mpd"](1073742336,Ln.c,Ln.c,[]),e["\u0275mpd"](1073742336,In.a,In.a,[]),e["\u0275mpd"](1073742336,Kn.a,Kn.a,[]),e["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),e["\u0275mpd"](1073742336,Pn.a,Pn.a,[]),e["\u0275mpd"](1073742336,jn.e,jn.e,[]),e["\u0275mpd"](1073742336,m.p,m.p,[]),e["\u0275mpd"](1073742336,m.w,m.w,[]),e["\u0275mpd"](1073742336,Dn.b,Dn.b,[]),e["\u0275mpd"](1073742336,Mn.e,Mn.e,[]),e["\u0275mpd"](1073742336,fn.f,fn.f,[]),e["\u0275mpd"](1073742336,En.a,En.a,[]),e["\u0275mpd"](1073742336,An.a,An.a,[]),e["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),e["\u0275mpd"](1073742336,Tn.c,Tn.c,[]),e["\u0275mpd"](1073742336,Un.d,Un.d,[]),e["\u0275mpd"](1073742336,m.t,m.t,[]),e["\u0275mpd"](1073742336,gn.d,gn.d,[]),e["\u0275mpd"](1073742336,$n.b,$n.b,[]),e["\u0275mpd"](1073742336,zn.c,zn.c,[]),e["\u0275mpd"](1073742336,Yn.a,Yn.a,[]),e["\u0275mpd"](1073742336,Zn.a,Zn.a,[]),e["\u0275mpd"](1073742336,a,a,[]),e["\u0275mpd"](256,e.LOCALE_ID,"de",[]),e["\u0275mpd"](1024,s.m,function(){return[[{path:"",pathMatch:"full",component:S,resolve:{catalog:an.a}},{path:":id",component:F,resolve:{catalog:an.a}}]]},[]),e["\u0275mpd"](256,_n.a,{separatorKeyCodes:[Vn.g]},[]),e["\u0275mpd"](256,e.TRANSLATIONS_FORMAT,"xlf",[])])})},J12g:function(n,l,t){"use strict";t.d(l,"e",function(){return m}),t.d(l,"f",function(){return f}),t.d(l,"a",function(){return g}),t.d(l,"b",function(){return h}),t.d(l,"c",function(){return b}),t.d(l,"h",function(){return v}),t.d(l,"g",function(){return d}),t.d(l,"d",function(){return x});var e=t("OBdK"),a=t("mrSG"),o=t("Wf4p"),u=t("YlbQ"),i=t("26FU"),r=t("p0ib"),c=(t("t9fZ"),t("67Y/")),d=function(){return function(n,l){this.viewContainer=n,this._node=l}}(),s=Object(o.J)(Object(o.G)(e.e)),p=Object(o.J)(Object(o.G)(e.b)),m=function(n){function l(l,t,e){var a=n.call(this,l,t)||this;return a._elementRef=l,a._tree=t,a.role="treeitem",a.tabIndex=Number(e)||0,a}return Object(a.__extends)(l,n),l}(s),f=function(n){function l(){return null!==n&&n.apply(this,arguments)||this}return Object(a.__extends)(l,n),l}(e.f),g=function(n){function l(l,t,e,a){var o=n.call(this,l,t,e)||this;return o._elementRef=l,o._tree=t,o._differs=e,o.tabIndex=Number(a)||0,o}return Object(a.__extends)(l,n),l.prototype.ngAfterContentInit=function(){n.prototype.ngAfterContentInit.call(this)},l.prototype.ngOnDestroy=function(){n.prototype.ngOnDestroy.call(this)},l}(p),h=function(n){function l(){return null!==n&&n.apply(this,arguments)||this}return Object(a.__extends)(l,n),l}(e.c),v=function(n){function l(){var l=null!==n&&n.apply(this,arguments)||this;return l.recursive=!1,l}return Object(a.__extends)(l,n),l}(e.h),b=function(){return function(){}}(),x=function(n){function l(){var l=null!==n&&n.apply(this,arguments)||this;return l._data=new i.a([]),l}return Object(a.__extends)(l,n),Object.defineProperty(l.prototype,"data",{get:function(){return this._data.value},set:function(n){this._data.next(n)},enumerable:!0,configurable:!0}),l.prototype.connect=function(n){var l=this;return r.a.apply(void 0,[n.viewChange,this._data]).pipe(Object(c.a)(function(){return l.data}))},l.prototype.disconnect=function(){},l}(u.b)},OBjS:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return i});var e=t("CcnG"),a=t("J12g"),o=(t("Ip0R"),t("lLAP"),t("dWZg"),t("OBdK")),u=(t("Fzqc"),t("Wf4p"),t("ZYjt"),e["\u0275crt"]({encapsulation:2,styles:[".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;overflow:hidden;word-wrap:break-word}.mat-nested-tree-ndoe{border-bottom-width:0}"],data:{}}));function i(n){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{_nodeOutlet:0}),(n()(),e["\u0275eld"](1,16777216,null,null,1,null,null,null,null,null,null,null)),e["\u0275did"](2,16384,[[1,4]],0,a.g,[e.ViewContainerRef,[2,o.a]],null,null)],null,null)}}}]);