/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BHnd:function(t,e,n){"use strict";n.d(e,"m",function(){return b}),n.d(e,"b",function(){return p}),n.d(e,"f",function(){return y}),n.d(e,"c",function(){return w}),n.d(e,"e",function(){return m}),n.d(e,"a",function(){return g}),n.d(e,"k",function(){return _}),n.d(e,"h",function(){return R}),n.d(e,"j",function(){return v}),n.d(e,"g",function(){return C}),n.d(e,"d",function(){return D}),n.d(e,"i",function(){return S}),n.d(e,"l",function(){return O});var r=n("mrSG"),i=n("y4qS"),o=n("YlbQ"),s=n("n6gG"),a=n("26FU"),c=n("K9Ia"),u=n("pugT"),h=n("p0ib"),f=n("F/XL"),l=n("dzgT"),d=n("67Y/"),_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.stickyCssClass="mat-table-sticky",e}return Object(r.__extends)(e,t),e}(i.o),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(i.b),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(i.j),w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(i.d),m=function(t){function e(e,n){var r=t.call(this,e,n)||this;return n.nativeElement.classList.add("mat-column-"+e.cssClassFriendlyName),r}return Object(r.__extends)(e,t),e}(i.i),g=function(t){function e(e,n){var r=t.call(this,e,n)||this;return n.nativeElement.classList.add("mat-column-"+e.cssClassFriendlyName),r}return Object(r.__extends)(e,t),e}(i.a),R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(i.l),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(i.n),C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(i.k),D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(i.g),S=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(i.m),b=function(){return function(){}}(),k=9007199254740991,O=function(t){function e(e){void 0===e&&(e=[]);var n=t.call(this)||this;return n._renderData=new a.a([]),n._filter=new a.a(""),n._internalPageChanges=new c.a,n._renderChangesSubscription=u.a.EMPTY,n.sortingDataAccessor=function(t,e){var n=t[e];if(Object(s.a)(n)){var r=Number(n);return r<k?r:n}return n},n.sortData=function(t,e){var r=e.active,i=e.direction;return r&&""!=i?t.sort(function(t,e){var o=n.sortingDataAccessor(t,r),s=n.sortingDataAccessor(e,r),a=0;return null!=o&&null!=s?o>s?a=1:o<s&&(a=-1):null!=o?a=1:null!=s&&(a=-1),a*("asc"==i?1:-1)}):t},n.filterPredicate=function(t,e){var n=Object.keys(t).reduce(function(e,n){return e+t[n]+"\u25ec"},"").toLowerCase(),r=e.trim().toLowerCase();return-1!=n.indexOf(r)},n._data=new a.a(e),n._updateChangeSubscription(),n}return Object(r.__extends)(e,t),Object.defineProperty(e.prototype,"data",{get:function(){return this._data.value},set:function(t){this._data.next(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filter",{get:function(){return this._filter.value},set:function(t){this._filter.next(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sort",{get:function(){return this._sort},set:function(t){this._sort=t,this._updateChangeSubscription()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paginator",{get:function(){return this._paginator},set:function(t){this._paginator=t,this._updateChangeSubscription()},enumerable:!0,configurable:!0}),e.prototype._updateChangeSubscription=function(){var t=this,e=this._sort?Object(h.a)(this._sort.sortChange,this._sort.initialized):Object(f.a)(null),n=this._paginator?Object(h.a)(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Object(f.a)(null),r=this._data,i=Object(l.a)(r,this._filter).pipe(Object(d.a)(function(e){return t._filterData(e[0])})),o=Object(l.a)(i,e).pipe(Object(d.a)(function(e){return t._orderData(e[0])})),s=Object(l.a)(o,n).pipe(Object(d.a)(function(e){return t._pageData(e[0])}));this._renderChangesSubscription.unsubscribe(),this._renderChangesSubscription=s.subscribe(function(e){return t._renderData.next(e)})},e.prototype._filterData=function(t){var e=this;return this.filteredData=this.filter?t.filter(function(t){return e.filterPredicate(t,e.filter)}):t,this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData},e.prototype._orderData=function(t){return this.sort?this.sortData(t.slice(),this.sort):t},e.prototype._pageData=function(t){if(!this.paginator)return t;var e=this.paginator.pageIndex*this.paginator.pageSize;return t.slice().splice(e,this.paginator.pageSize)},e.prototype._updatePaginator=function(t){var e=this;Promise.resolve().then(function(){var n=e.paginator;if(n&&(n.length=t,n.pageIndex>0)){var r=Math.ceil(n.length/n.pageSize)-1||0,i=Math.min(n.pageIndex,r);i!==n.pageIndex&&(n.pageIndex=i,e._internalPageChanges.next())}})},e.prototype.connect=function(){return this._renderData},e.prototype.disconnect=function(){},e}(o.b)},y4qS:function(t,e,n){"use strict";n.d(e,"q",function(){return N}),n.d(e,"s",function(){return P}),n.d(e,"r",function(){return T}),n.d(e,"o",function(){return I}),n.d(e,"b",function(){return d}),n.d(e,"j",function(){return _}),n.d(e,"f",function(){return p}),n.d(e,"d",function(){return y}),n.d(e,"i",function(){return m}),n.d(e,"e",function(){return g}),n.d(e,"a",function(){return R}),n.d(e,"l",function(){return C}),n.d(e,"h",function(){return D}),n.d(e,"n",function(){return S}),n.d(e,"c",function(){return b}),n.d(e,"k",function(){return k}),n.d(e,"g",function(){return O}),n.d(e,"m",function(){return j}),n.d(e,"p",function(){return H});var r=n("mrSG"),i=n("n6gG"),o=n("CcnG"),s=n("YlbQ"),a=n("K9Ia"),c=n("26FU"),u=n("6blF"),h=n("F/XL"),f=n("ny24");function l(t){return function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.apply(this,e)||this;return r._sticky=!1,r._hasStickyChanged=!1,r}return Object(r.__extends)(e,t),Object.defineProperty(e.prototype,"sticky",{get:function(){return this._sticky},set:function(t){var e=this._sticky;this._sticky=Object(i.c)(t),this._hasStickyChanged=e!==this._sticky},enumerable:!0,configurable:!0}),e.prototype.hasStickyChanged=function(){var t=this._hasStickyChanged;return this._hasStickyChanged=!1,t},e.prototype.resetStickyChanged=function(){this._hasStickyChanged=!1},e}(t)}var d=function(){return function(t){this.template=t}}(),_=function(){return function(t){this.template=t}}(),p=function(){return function(t){this.template=t}}(),y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._stickyEnd=!1,e}return Object(r.__extends)(e,t),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},set:function(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"stickyEnd",{get:function(){return this._stickyEnd},set:function(t){var e=this._stickyEnd;this._stickyEnd=Object(i.c)(t),this._hasStickyChanged=e!==this._stickyEnd},enumerable:!0,configurable:!0}),e}(l(function(){return function(){}}())),w=function(){return function(t,e){e.nativeElement.classList.add("cdk-column-"+t.cssClassFriendlyName)}}(),m=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.__extends)(e,t),e}(w),g=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.__extends)(e,t),e}(w),R=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.__extends)(e,t),e}(w),v=function(){function t(t,e){this.template=t,this._differs=e}return t.prototype.ngOnChanges=function(t){if(!this._columnsDiffer){var e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}},t.prototype.getColumnsDiff=function(){return this._columnsDiffer.diff(this.columns)},t.prototype.extractCellTemplate=function(t){return this instanceof C?t.headerCell.template:this instanceof D?t.footerCell.template:t.cell.template},t}(),C=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.__extends)(e,t),e.prototype.ngOnChanges=function(e){t.prototype.ngOnChanges.call(this,e)},e}(l(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(v))),D=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.__extends)(e,t),e.prototype.ngOnChanges=function(e){t.prototype.ngOnChanges.call(this,e)},e}(l(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e}(v))),S=function(t){function e(e,n){return t.call(this,e,n)||this}return Object(r.__extends)(e,t),e}(v),b=function(){function t(e){this._viewContainer=e,t.mostRecentCellOutlet=this}return t.prototype.ngOnDestroy=function(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)},t.mostRecentCellOutlet=null,t}(),k=function(){return function(){}}(),O=function(){return function(){}}(),j=function(){return function(){}}();function x(t){return Error('Could not find column with id "'+t+'".')}var E=["top","bottom","left","right"],F=function(){function t(t,e,n,r){void 0===r&&(r=!0),this.isNativeHtmlTable=t,this.stickCellCss=e,this.direction=n,this._isBrowser=r}return t.prototype.clearStickyPositioning=function(t,e){for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i.nodeType===i.ELEMENT_NODE){this._removeStickyStyle(i,e);for(var o=0;o<i.children.length;o++)this._removeStickyStyle(i.children[o],e)}}},t.prototype.updateStickyColumns=function(t,e,n){var r=e.some(function(t){return t})||n.some(function(t){return t});if(t.length&&r&&this._isBrowser)for(var i=t[0],o=i.children.length,s=this._getCellWidths(i),a=this._getStickyStartColumnPositions(s,e),c=this._getStickyEndColumnPositions(s,n),u="rtl"===this.direction,h=0,f=t;h<f.length;h++)for(var l=f[h],d=0;d<o;d++){var _=l.children[d];e[d]&&this._addStickyStyle(_,u?"right":"left",a[d]),n[d]&&this._addStickyStyle(_,u?"left":"right",c[d])}},t.prototype.stickRows=function(t,e,n){if(this._isBrowser)for(var r="bottom"===n?t.reverse():t,i=0,o=0;o<r.length;o++)if(e[o]){var s=r[o];if(this.isNativeHtmlTable)for(var a=0;a<s.children.length;a++)this._addStickyStyle(s.children[a],n,i);else this._addStickyStyle(s,n,i);if(o===r.length-1)return;i+=s.getBoundingClientRect().height}},t.prototype.updateStickyFooterContainer=function(t,e){if(this.isNativeHtmlTable){var n=t.querySelector("tfoot");e.some(function(t){return!t})?this._removeStickyStyle(n,["bottom"]):this._addStickyStyle(n,"bottom",0)}},t.prototype._removeStickyStyle=function(t,e){for(var n=0,r=e;n<r.length;n++)t.style[r[n]]="";t.style.zIndex=this._getCalculatedZIndex(t),E.some(function(e){return!!t.style[e]})||(t.style.position="",t.classList.remove(this.stickCellCss))},t.prototype._addStickyStyle=function(t,e,n){t.classList.add(this.stickCellCss),t.style[e]=n+"px",t.style.cssText+="position: -webkit-sticky; position: sticky; ",t.style.zIndex=this._getCalculatedZIndex(t)},t.prototype._getCalculatedZIndex=function(t){for(var e={top:100,bottom:10,left:1,right:1},n=0,r=0,i=E;r<i.length;r++){var o=i[r];t.style[o]&&(n+=e[o])}return n?""+n:""},t.prototype._getCellWidths=function(t){for(var e=[],n=t.children,r=0;r<n.length;r++)e.push(n[r].getBoundingClientRect().width);return e},t.prototype._getStickyStartColumnPositions=function(t,e){for(var n=[],r=0,i=0;i<t.length;i++)e[i]&&(n[i]=r,r+=t[i]);return n},t.prototype._getStickyEndColumnPositions=function(t,e){for(var n=[],r=0,i=t.length;i>0;i--)e[i]&&(n[i]=r,r+=t[i]);return n},t}(),N=function(){return function(t,e){this.viewContainer=t,this.elementRef=e}}(),P=function(){return function(t,e){this.viewContainer=t,this.elementRef=e}}(),T=function(){return function(t,e){this.viewContainer=t,this.elementRef=e}}(),I=function(){function t(t,e,n,r,i,o,s){this._differs=t,this._changeDetectorRef=e,this._elementRef=n,this._dir=i,this._platform=s,this._onDestroy=new a.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this._multiTemplateDataRows=!1,this.viewChange=new c.a({start:0,end:Number.MAX_VALUE}),r||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=o,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}return Object.defineProperty(t.prototype,"trackBy",{get:function(){return this._trackByFn},set:function(t){Object(o.isDevMode)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn("trackBy must be a function, but received "+JSON.stringify(t)+"."),this._trackByFn=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataSource",{get:function(){return this._dataSource},set:function(t){this._dataSource!==t&&this._switchDataSource(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"multiTemplateDataRows",{get:function(){return this._multiTemplateDataRows},set:function(t){this._multiTemplateDataRows=Object(i.c)(t),this._rowOutlet.viewContainer.length&&this._forceRenderDataRows()},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create(function(e,n){return t.trackBy?t.trackBy(n.dataIndex,n.data):n})},t.prototype.ngAfterContentChecked=function(){if(this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&!this._rowDefs.length)throw Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");this._renderUpdatedColumns(),this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription&&this._observeRenderChanges(),this._checkStickyStates()},t.prototype.ngOnDestroy=function(){this._rowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),Object(s.e)(this.dataSource)&&this.dataSource.disconnect(this)},t.prototype.renderRows=function(){var t=this;this._renderRows=this._getAllRenderRows();var e=this._dataDiffer.diff(this._renderRows);if(e){var n=this._rowOutlet.viewContainer;e.forEachOperation(function(e,r,i){if(null==e.previousIndex)t._insertRow(e.item,i);else if(null==i)n.remove(r);else{var o=n.get(r);n.move(o,i)}}),this._updateRowIndexContext(),e.forEachIdentityChange(function(t){n.get(t.currentIndex).context.$implicit=t.item.data}),this.updateStickyColumnStyles()}},t.prototype.setHeaderRowDef=function(t){this._customHeaderRowDefs=new Set([t]),this._headerRowDefChanged=!0},t.prototype.setFooterRowDef=function(t){this._customFooterRowDefs=new Set([t]),this._footerRowDefChanged=!0},t.prototype.addColumnDef=function(t){this._customColumnDefs.add(t)},t.prototype.removeColumnDef=function(t){this._customColumnDefs.delete(t)},t.prototype.addRowDef=function(t){this._customRowDefs.add(t)},t.prototype.removeRowDef=function(t){this._customRowDefs.delete(t)},t.prototype.addHeaderRowDef=function(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0},t.prototype.removeHeaderRowDef=function(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0},t.prototype.addFooterRowDef=function(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0},t.prototype.removeFooterRowDef=function(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0},t.prototype.updateStickyHeaderRowStyles=function(){var t=this._getRenderedRows(this._headerRowOutlet),e=this._elementRef.nativeElement.querySelector("thead");e&&(e.style.display=t.length?"":"none");var n=this._headerRowDefs.map(function(t){return t.sticky});this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,n,"top"),this._headerRowDefs.forEach(function(t){return t.resetStickyChanged()})},t.prototype.updateStickyFooterRowStyles=function(){var t=this._getRenderedRows(this._footerRowOutlet),e=this._elementRef.nativeElement.querySelector("tfoot");e&&(e.style.display=t.length?"":"none");var n=this._footerRowDefs.map(function(t){return t.sticky});this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,n,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,n),this._footerRowDefs.forEach(function(t){return t.resetStickyChanged()})},t.prototype.updateStickyColumnStyles=function(){var t=this,e=this._getRenderedRows(this._headerRowOutlet),n=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning(e.concat(n,r),["left","right"]),e.forEach(function(e,n){t._addStickyColumnStyles([e],t._headerRowDefs[n])}),this._rowDefs.forEach(function(e){for(var r=[],i=0;i<n.length;i++)t._renderRows[i].rowDef===e&&r.push(n[i]);t._addStickyColumnStyles(r,e)}),r.forEach(function(e,n){t._addStickyColumnStyles([e],t._footerRowDefs[n])}),Array.from(this._columnDefsByName.values()).forEach(function(t){return t.resetStickyChanged()})},t.prototype._getAllRenderRows=function(){var t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(var n=0;n<this._data.length;n++){var r=this._data[n],i=this._getRenderRowsForData(r,n,e.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(var o=0;o<i.length;o++){var s=i[o],a=this._cachedRenderRowsMap.get(s.data);a.has(s.rowDef)?a.get(s.rowDef).push(s):a.set(s.rowDef,[s]),t.push(s)}}return t},t.prototype._getRenderRowsForData=function(t,e,n){return this._getRowDefs(t,e).map(function(r){var i=n&&n.has(r)?n.get(r):[];if(i.length){var o=i.shift();return o.dataIndex=e,o}return{data:t,rowDef:r,dataIndex:e}})},t.prototype._cacheColumnDefs=function(){var t=this;this._columnDefsByName.clear(),B(this._contentColumnDefs,this._customColumnDefs).forEach(function(e){if(t._columnDefsByName.has(e.name))throw Error('Duplicate column definition name provided: "'+e.name+'".');t._columnDefsByName.set(e.name,e)})},t.prototype._cacheRowDefs=function(){this._headerRowDefs=B(this._contentHeaderRowDefs,this._customHeaderRowDefs),this._footerRowDefs=B(this._contentFooterRowDefs,this._customFooterRowDefs),this._rowDefs=B(this._contentRowDefs,this._customRowDefs);var t=this._rowDefs.filter(function(t){return!t.when});if(!this.multiTemplateDataRows&&t.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultRowDef=t[0]},t.prototype._renderUpdatedColumns=function(){var t=function(t,e){return t||!!e.getColumnsDiff()};this._rowDefs.reduce(t,!1)&&this._forceRenderDataRows(),this._headerRowDefs.reduce(t,!1)&&this._forceRenderHeaderRows(),this._footerRowDefs.reduce(t,!1)&&this._forceRenderFooterRows()},t.prototype._switchDataSource=function(t){this._data=[],Object(s.e)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t},t.prototype._observeRenderChanges=function(){var t=this;if(this.dataSource){var e;if(Object(s.e)(this.dataSource)?e=this.dataSource.connect(this):this.dataSource instanceof u.a?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Object(h.a)(this.dataSource)),void 0===e)throw Error("Provided data source did not match an array, Observable, or DataSource");this._renderChangeSubscription=e.pipe(Object(f.a)(this._onDestroy)).subscribe(function(e){t._data=e||[],t.renderRows()})}},t.prototype._forceRenderHeaderRows=function(){var t=this;this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach(function(e,n){return t._renderRow(t._headerRowOutlet,e,n)}),this.updateStickyHeaderRowStyles(),this.updateStickyColumnStyles()},t.prototype._forceRenderFooterRows=function(){var t=this;this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach(function(e,n){return t._renderRow(t._footerRowOutlet,e,n)}),this.updateStickyFooterRowStyles(),this.updateStickyColumnStyles()},t.prototype._addStickyColumnStyles=function(t,e){var n=this,r=Array.from(e.columns||[]).map(function(t){var e=n._columnDefsByName.get(t);if(!e)throw x(t);return e}),i=r.map(function(t){return t.sticky}),o=r.map(function(t){return t.stickyEnd});this._stickyStyler.updateStickyColumns(t,i,o)},t.prototype._getRenderedRows=function(t){for(var e=[],n=0;n<t.viewContainer.length;n++){var r=t.viewContainer.get(n);e.push(r.rootNodes[0])}return e},t.prototype._getRowDefs=function(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];var n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(function(n){return!n.when||n.when(e,t)});else{var r=this._rowDefs.find(function(n){return n.when&&n.when(e,t)})||this._defaultRowDef;r&&n.push(r)}if(!n.length)throw function(t){return Error("Could not find a matching row definition for theprovided row data: "+JSON.stringify(t))}(t);return n},t.prototype._insertRow=function(t,e){this._renderRow(this._rowOutlet,t.rowDef,e,{$implicit:t.data})},t.prototype._renderRow=function(t,e,n,r){void 0===r&&(r={}),t.viewContainer.createEmbeddedView(e.template,r,n);for(var i=0,o=this._getCellTemplates(e);i<o.length;i++)b.mostRecentCellOutlet&&b.mostRecentCellOutlet._viewContainer.createEmbeddedView(o[i],r);this._changeDetectorRef.markForCheck()},t.prototype._updateRowIndexContext=function(){for(var t=this._rowOutlet.viewContainer,e=0,n=t.length;e<n;e++){var r=t.get(e).context;r.count=n,r.first=0===e,r.last=e===n-1,r.even=e%2==0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[e].dataIndex,r.renderIndex=e):r.index=this._renderRows[e].dataIndex}},t.prototype._getCellTemplates=function(t){var e=this;return t&&t.columns?Array.from(t.columns,function(n){var r=e._columnDefsByName.get(n);if(!r)throw x(n);return t.extractCellTemplate(r)}):[]},t.prototype._applyNativeTableSections=function(){for(var t=this._document||document,e=t.createDocumentFragment(),n=0,r=[{tag:"thead",outlet:this._headerRowOutlet},{tag:"tbody",outlet:this._rowOutlet},{tag:"tfoot",outlet:this._footerRowOutlet}];n<r.length;n++){var i=r[n],o=t.createElement(i.tag);o.setAttribute("role","rowgroup"),o.appendChild(i.outlet.elementRef.nativeElement),e.appendChild(o)}this._elementRef.nativeElement.appendChild(e)},t.prototype._forceRenderDataRows=function(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows(),this.updateStickyColumnStyles()},t.prototype._checkStickyStates=function(){var t=function(t,e){return t||e.hasStickyChanged()};this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()},t.prototype._setupStickyStyler=function(){var t=this;this._stickyStyler=new F(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",!this._platform||this._platform.isBrowser),(this._dir?this._dir.change:Object(h.a)()).pipe(Object(f.a)(this._onDestroy)).subscribe(function(e){t._stickyStyler.direction=e,t.updateStickyColumnStyles()})},t}();function B(t,e){return t.toArray().concat(Array.from(e))}var H=function(){return function(){}}()}}]);