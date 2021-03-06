/*
 | Copyright 2017 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
//====================================================================================================================//
define([
  'dojo/_base/declare',
  'jimu/utils',
  './settingComponents',
  './SettingObject'
], function (
  declare,
  jimuUtils,
  settingComponents,
  SettingObject
) {
  return declare(SettingObject, {

    //================================================================================================================//

    /**
     * Constructor for class.
     * @param {object} config App configuration object; see subclass for required parameter(s)
     * @memberOf SettingStaticText#
     * @constructor
     */
    constructor: function (name, classes, text) {
      /*jshint unused:false*/
      this._name = '';
      this._mainDiv = settingComponents.text(classes, text);
    },

    setValue: function (value) {
      this._mainDiv.innerHTML = jimuUtils.sanitizeHTML(value || '');
    },

    getValue: function () {
      return this._mainDiv.innerHTML;
    }

    //================================================================================================================//
  });
});
