/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{r43C:function(t,e,i){"use strict";i.d(e,"b",function(){return m}),i.d(e,"a",function(){return S}),i.d(e,"c",function(){return l}),i.d(e,"d",function(){return u}),i.d(e,"e",function(){return h});var n=i("CcnG"),o=i("Wf4p"),r=i("n6gG"),s=i("mrSG"),h=new n.InjectionToken("MAT_GRID_LIST"),l=function(){function t(t,e){this._element=t,this._gridList=e,this._rowspan=1,this._colspan=1}return Object.defineProperty(t.prototype,"rowspan",{get:function(){return this._rowspan},set:function(t){this._rowspan=Math.round(Object(r.f)(t))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"colspan",{get:function(){return this._colspan},set:function(t){this._colspan=Math.round(Object(r.f)(t))},enumerable:!0,configurable:!0}),t.prototype._setStyle=function(t,e){this._element.nativeElement.style[t]=e},t}(),u=function(){function t(t){this._element=t}return t.prototype.ngAfterContentInit=function(){Object(o.K)(this._lines,this._element)},t}(),c=function(){function t(){this.columnIndex=0,this.rowIndex=0}return Object.defineProperty(t.prototype,"rowCount",{get:function(){return this.rowIndex+1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowspan",{get:function(){var t=Math.max.apply(Math,this.tracker);return t>1?this.rowCount+t-1:this.rowCount},enumerable:!0,configurable:!0}),t.prototype.update=function(t,e){var i=this;this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(function(t){return i._trackTile(t)})},t.prototype._trackTile=function(t){var e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new a(this.rowIndex,e)},t.prototype._findMatchingGap=function(t){if(t>this.tracker.length)throw Error("mat-grid-list: tile with colspan "+t+' is wider than grid with cols="'+this.tracker.length+'".');var e=-1,i=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e)):-1!=(e=this.tracker.indexOf(0,this.columnIndex))?(i=this._findGapEndIndex(e),this.columnIndex=e+1):(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e))}while(i-e<t||0==i);return Math.max(e,0)},t.prototype._nextRow=function(){this.columnIndex=0,this.rowIndex++;for(var t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)},t.prototype._findGapEndIndex=function(t){for(var e=t+1;e<this.tracker.length;e++)if(0!=this.tracker[e])return e;return this.tracker.length},t.prototype._markTilePosition=function(t,e){for(var i=0;i<e.colspan;i++)this.tracker[t+i]=e.rowspan},t}(),a=function(){return function(t,e){this.row=t,this.col=e}}(),p=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,f=function(){function t(){this._rows=0,this._rowspan=0}return t.prototype.init=function(t,e,i,n){this._gutterSize=w(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=i,this._direction=n},t.prototype.getBaseTileSize=function(t,e){return"("+t+"% - ("+this._gutterSize+" * "+e+"))"},t.prototype.getTilePosition=function(t,e){return 0===e?"0":y("("+t+" + "+this._gutterSize+") * "+e)},t.prototype.getTileSize=function(t,e){return"("+t+" * "+e+") + ("+(e-1)+" * "+this._gutterSize+")"},t.prototype.setStyle=function(t,e,i){var n=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(t,i,n,o),this.setRowStyles(t,e,n,o)},t.prototype.setColStyles=function(t,e,i,n){var o=this.getBaseTileSize(i,n);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(o,e)),t._setStyle("width",y(this.getTileSize(o,t.colspan)))},t.prototype.getGutterSpan=function(){return this._gutterSize+" * ("+this._rowspan+" - 1)"},t.prototype.getTileSpan=function(t){return this._rowspan+" * "+this.getTileSize(t,1)},t.prototype.getComputedHeight=function(){return null},t}(),_=function(t){function e(e){var i=t.call(this)||this;return i.fixedRowHeight=e,i}return Object(s.__extends)(e,t),e.prototype.init=function(e,i,n,o){if(t.prototype.init.call(this,e,i,n,o),this.fixedRowHeight=w(this.fixedRowHeight),!p.test(this.fixedRowHeight))throw Error('Invalid value "'+this.fixedRowHeight+'" set as rowHeight.')},e.prototype.setRowStyles=function(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",y(this.getTileSize(this.fixedRowHeight,t.rowspan)))},e.prototype.getComputedHeight=function(){return["height",y(this.getTileSpan(this.fixedRowHeight)+" + "+this.getGutterSpan())]},e.prototype.reset=function(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(function(t){t._setStyle("top",null),t._setStyle("height",null)})},e}(f),g=function(t){function e(e){var i=t.call(this)||this;return i._parseRatio(e),i}return Object(s.__extends)(e,t),e.prototype.setRowStyles=function(t,e,i,n){this.baseTileHeight=this.getBaseTileSize(i/this.rowHeightRatio,n),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",y(this.getTileSize(this.baseTileHeight,t.rowspan)))},e.prototype.getComputedHeight=function(){return["paddingBottom",y(this.getTileSpan(this.baseTileHeight)+" + "+this.getGutterSpan())]},e.prototype.reset=function(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(function(t){t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})},e.prototype._parseRatio=function(t){var e=t.split(":");if(2!==e.length)throw Error('mat-grid-list: invalid ratio given for row-height: "'+t+'"');this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])},e}(f),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(s.__extends)(e,t),e.prototype.setRowStyles=function(t,e){var i=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(i,e)),t._setStyle("height",y(this.getTileSize(i,t.rowspan)))},e.prototype.reset=function(t){t._tiles&&t._tiles.forEach(function(t){t._setStyle("top",null),t._setStyle("height",null)})},e}(f);function y(t){return"calc("+t+")"}function w(t){return t.match(/([A-Za-z%]+)$/)?t:t+"px"}var S=function(){function t(t,e){this._element=t,this._dir=e,this._gutter="1px"}return Object.defineProperty(t.prototype,"cols",{get:function(){return this._cols},set:function(t){this._cols=Math.max(1,Math.round(Object(r.f)(t)))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gutterSize",{get:function(){return this._gutter},set:function(t){this._gutter=""+(null==t?"":t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowHeight",{get:function(){return this._rowHeight},set:function(t){var e=""+(null==t?"":t);e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){this._checkCols(),this._checkRowHeight()},t.prototype.ngAfterContentChecked=function(){this._layoutTiles()},t.prototype._checkCols=function(){if(!this.cols)throw Error('mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">')},t.prototype._checkRowHeight=function(){this._rowHeight||this._setTileStyler("1:1")},t.prototype._setTileStyler=function(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new d:t&&t.indexOf(":")>-1?new g(t):new _(t)},t.prototype._layoutTiles=function(){var t=this;this._tileCoordinator||(this._tileCoordinator=new c);var e=this._tileCoordinator,i=this._tiles.filter(function(e){return!e._gridList||e._gridList===t}),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,e,this.cols,n),i.forEach(function(i,n){var o=e.positions[n];t._tileStyler.setStyle(i,o.row,o.col)}),this._setListStyle(this._tileStyler.getComputedHeight())},t.prototype._setListStyle=function(t){t&&(this._element.nativeElement.style[t[0]]=t[1])},t}(),m=function(){return function(){}}()}}]);