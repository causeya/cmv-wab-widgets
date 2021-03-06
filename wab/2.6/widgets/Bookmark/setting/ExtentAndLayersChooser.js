///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2017 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/_base/html',
  'dojo/on',
  'dojo/Deferred',
  'dijit/_WidgetBase',
  'dojo/Evented',
  'esri/geometry/Extent',
  'jimu/portalUrlUtils',
  "esri/dijit/Search",
  'jimu/dijit/LoadingShelter',
  'jimu/utils'
],
function(declare, lang, html, on, Deferred, _WidgetBase,
  Evented, Extent, portalUrlUtils, Search,
  LoadingShelter, jimuUtils) {
  /* global esriConfig */

  return declare([_WidgetBase, Evented], {
    baseClass: 'bookmark-extent-chooser',
    declaredClass: 'bookmark.ExtentChooser',

    //portalUrl: String
    //  the portalUrl of webmap. Such as 'http://www.arcgis.com'.
    portalUrl: null,

    //itemId: String
    //  the webmap item id. For now, we only support webmap
    itemId: null,

    initExtent: null,
    //bingMapsKey: String
    //  required if working with Microsoft Bing Maps
    bingMapsKey: '',

    geometryServiceURL: null,

    shelter: null,

    postCreate:function(){
      this.inherited(arguments);

      if(!this.geometryServiceURL){
        if(esriConfig.defaults.geometryService){
          this.geometryServiceURL = esriConfig.defaults.geometryService.url;
        }
      }

      if(!this.geometryServiceURL){
        var servicesObj = jimuUtils.getServices();
        this.geometryServiceURL = servicesObj.geometryService;
      }

      this.shelter = new LoadingShelter({
        hidden: true
      });
      this.shelter.placeAt(this.domNode);
      this.shelter.startup();
      this.shelter.show();

      var mapNode = html.create('div', {
        style: {
          width: '100%',
          height: '100%'
        }
      }, this.domNode);
      this.search = html.create('div', {
        style: {
          position: "absolute",
          right: 0,
          top: 0
        }
      }, mapNode);

      if(!this.portalUrl || !this.itemId){
        return;
      }

      this.portalUrl = portalUrlUtils.getStandardPortalUrl(this.portalUrl);

      var args = {
        geometryServiceURL: this.geometryServiceURL,
        bingMapsKey: this.bingMapsKey
      };

      if(this.initExtent){
        if(this.initExtent.declaredClass !== "esri.geometry.Extent"){
          this.initExtent = new Extent(this.initExtent);
        }
        args.mapOptions = {
          extent:this.initExtent
        };
      }
      if(this.lods){
        if(typeof args.mapOptions === 'object'){
          args.mapOptions.lods = this.lods;
        }else{
          args.mapOptions = {
            lods: this.lods
          };
        }
      }

      var mapDeferred = jimuUtils.createWebMap(this.portalUrl, this.itemId, mapNode, args);

      mapDeferred.then(lang.hitch(this, function(response) {
        this.map = response.map;
        this.map.webMapResponse = response;
        this.own(on(this.map, 'extent-change', lang.hitch(this, function(evt){
          this.onExtentChange(evt.extent);
        })));

        //layers


        //search
        var search = new Search({
          map: this.map,
          enableLabel: false,
          enableHighlight: false,
          enableInfoWindow: false
        }, this.search);
        search.startup();
        this.own(on(search, 'search-results', lang.hitch(this, function (evt) {
          if (evt && evt.results && evt.results[0] &&
            evt.results[0][0] && evt.results[0][0].extent) {
            this.onExtentChange(evt.results[0][0].extent);
          }
        })));

        if(!this.initExtent){
          this.onExtentChange(this.map.extent); // send map default extent
        }else {
          this.onExtentChange(this.initExtent);
        }
        this.shelter.hide();
        this.emit('map-load', this.map);
      }), lang.hitch(this, function(err){
        console.error(err);
      }));
    },

    // getLayers: function(){
    //   var layers = this.map.layerIds;
    //   //this.map.graphicsLayerIds
    // },
    // setLyaers: function(layers){
    //   var allLayers = this.map.layerIds;
    //   //remove
    //   this.map.removeLayer
    // },

    getExtent: function(){
      return this.map && this.map.extent;
    },

    setExtent: function(extent){
      if(this.map){
        return this.map.setExtent(extent);
      }
      else{
        var def = new Deferred();
        setTimeout(lang.hitch(this, function(){
          def.reject('map is null.');
        }), 0);
        return def;
      }
    },

    restoreToDefaultWebMapExtent:function(){
      jimuUtils.restoreToDefaultWebMapExtent(this.map,
                                             this.map.webMapResponse,
                                             this.geometryServiceURL);
    },

    onExtentChange: function(extent){
      this.emit('extent-change', extent);
    }

  });
});