///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "standardUnit": "الوحدة القياسية",
    "metricUnit": "الوحدة المترية"
  },
  "analysisTab": {
    "analysisTabLabel": "تحليل",
    "selectAnalysisLayerLabel": "تحديد طبقات التحليل",
    "addLayerLabel": "إضافة طبقات",
    "noValidLayersForAnalysis": "لم يتم العثور على طبقات صحيحة في خريطة الويب المحددة.",
    "noValidFieldsForAnalysis": "لم يتم العثور على حقول صحيحة في خريطة الويب المحددة. الرجاء إزالة الطبقة المحددة.",
    "addLayersHintText": "لمحة: حدد الطبقات والحقول للتحليل والعرض في التقرير",
    "addLayerNameTitle": "اسم الطبقة",
    "addFieldsLabel": "إضافة حقل",
    "addFieldsPopupTitle": "تحديد حقول",
    "addFieldsNameTitle": "Field Names",
    "aoiToolsLegendLabel": "أدوات AOI",
    "aoiToolsDescriptionLabel": "تمكين الأدوات لإنشاء مناطق اهتمام وتحديد لافتات التسمية",
    "placenameLabel": "اسم المكان",
    "drawToolsLabel": "أدوات الرسم",
    "uploadShapeFileLabel": "تحميل ملف أشكال",
    "coordinatesLabel": "الإحداثيات",
    "coordinatesDrpDwnHintText": "لمحة: حدد الوحدة لعرض الانتقالات المدخلة",
    "coordinatesBearingDrpDwnHintText": "لمحة: حدد المحمل لعرض الانتقالات المدخلة",
    "allowShapefilesUploadLabel": "السماح بتحميل ملفات الأشكال للتحليل",
    "areaUnitsLabel": "إظهار المناطق/الأطوال في",
    "allowShapefilesUploadLabelHintText": "لمحة: عرض 'تحميل ملف أشكال في التحليل' في علامة تبويب التقرير",
    "maxFeatureForAnalysisLabel": "الحد الأقصى للمعالم بغرض التحليل",
    "maxFeatureForAnalysisHintText": "لمحة: تعيين أقصى عدد للمعالم بغرض التحليل",
    "searchToleranceLabelText": "سماحية البحث (قدم)",
    "searchToleranceHint": "لمحة: تستخدم سماحية البحث فقط عند تحليل مدخلات النقطة والخط",
    "placenameButtonText": "اسم المكان",
    "drawToolsButtonText": "رسم",
    "shapefileButtonText": "ملف شكل",
    "coordinatesButtonText": "إحداثيات"
  },
  "downloadTab": {
    "downloadLegend": "إعدادات التنزيل",
    "reportLegend": "إعدادات التقرير",
    "downloadTabLabel": "تحميل",
    "syncEnableOptionLabel": "طبقات المعالم",
    "syncEnableOptionHint": "لمحة: تستخدم لتنزيل معلومات المعالم للمعالم التي تتقاطع مع منطقة الاهتمام في التنسيقات المشار إليها.",
    "syncEnableOptionNote": "ملحوظة: يتطلب خدمات المعالم الممكنة تزامنيًا لخيار قاعدة البيانات الجغرافية الملفية.",
    "extractDataTaskOptionLabel": "استخراج خدمة المعالجة الجغرافية لمهمة البيانات",
    "extractDataTaskOptionHint": "لمحة: استخدم خدمة المعالجة الجغرافية لاستخراج مهمة البيانات المنشورة لتنزيل المعالم التي تتقاطع مع منطقة الاهتمام في قاعدة البيانات الجغرافية الملفية أو تنسيقات ملف الأشكال.",
    "cannotDownloadOptionLabel": "تعطيل التنزيل",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "اسم الطبقة",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "قاعدة البيانات الجغرافية الملفية",
      "allowDownloadLabel": "السماح بالتنزيل"
    },
    "setButtonLabel": "تعيين",
    "GPTaskLabel": "حدد عنوان url لخدمة المعالجة الجغرافية",
    "printGPServiceLabel": "طباعة عنوان URL للخدمة",
    "setGPTaskTitle": "حدد عنوان URL لخدمة المعالجة الجغرافية",
    "logoLabel": "الشعار",
    "logoChooserHint": "لمحة: انقر فوق رمز الصورة لتغيير الصورة",
    "footnoteLabel": "حاشية سفلية",
    "columnTitleColorPickerLabel": "اللون الخاص بعناوين الأعمدة",
    "reportTitleLabel": "عنوان التقرير",
    "errorMessages": {
      "invalidGPTaskURL": "خدمة معالجة جغرافية غير صحيحة. الرجاء تحديد خدمة المعالجة التي تتضمن استخراج مهمة البيانات.",
      "noExtractDataTaskURL": "الرجاء تحديد أي خدمة للمعالجة الجغرافية التي تتضمن استخراج مهمة البيانات."
    }
  },
  "generalTab": {
    "generalTabLabel": "عام",
    "tabLabelsLegend": "لافتات تسمية اللوحة",
    "tabLabelsHint": "لمحة: حدد لافتات التسمية",
    "AOITabLabel": "لوحة منطقة الاهتمام",
    "ReportTabLabel": "لوحة التقرير",
    "bufferSettingsLegend": "إعدادات النطاق",
    "defaultBufferDistanceLabel": "مسافة النطاق الافتراضية",
    "defaultBufferUnitsLabel": "وحدات النطاق",
    "generalBufferSymbologyHint": "لمحة: قم بتعيين الرمز المراد استخدانه لعرض النطاقات حول منطقة الاهتمام المحددة",
    "aoiGraphicsSymbologyLegend": "رموز رسومات AOI",
    "aoiGraphicsSymbologyHint": "لمحة: قم بتعيير الرمز المراد استخدامه في حين تحديد منطق اهتمام النقطة والخط والمضلع",
    "pointSymbologyLabel": "نقطة",
    "previewLabel": "معاينة",
    "lineSymbologyLabel": "خط",
    "polygonSymbologyLabel": "مضلع",
    "aoiBufferSymbologyLabel": "رموز النطاق",
    "pointSymbolChooserPopupTitle": "رمز العنوان أو الموقع",
    "polygonSymbolChooserPopupTitle": "حدد رمزًا لتمييز المضلع",
    "lineSymbolChooserPopupTitle": "حدد رمزًا لتمييز الخط",
    "aoiSymbolChooserPopupTitle": "قم بتعيين رمز المخزن المؤقت",
    "aoiTabText": "AOI",
    "reportTabText": "تقرير"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "البحث في إعدادات المصدر",
    "searchSourceSettingTitle": "البحث في إعدادات المصدر",
    "searchSourceSettingTitleHintText": "أضف خدمات التكويد الجغرافي أو طبقات المعالم وقم بتكوينها كمصادر للبحث، وتُحدد هذه المصادر المحددة ما يمكن البحث عنه في مربع البحث.",
    "addSearchSourceLabel": "إضافة مصدر البحث",
    "featureLayerLabel": "طبقة المعلم",
    "geocoderLabel": "المُكود الجغرافي",
    "generalSettingLabel": "إعدادات عامة",
    "allPlaceholderLabel": "نص العنصر النائب للبحث في كل:",
    "allPlaceholderHintText": "تلميح: أدخل نص لإظهاره في صورة عنصر نائب في حين البحث عن جميع الطبقات والمكود الجغرافي",
    "generalSettingCheckboxLabel": "عرض عناصر منبثقة للمعلم أو الموقع الذي يتم العثور عليه",
    "countryCode": "كود الدولة أو المنطقة",
    "countryCodeEg": "مثال ",
    "countryCodeHint": "سيؤدي ترك هذه القيمة فارغة إلى البحث في كل الدول والمناطق",
    "questionMark": "؟",
    "searchInCurrentMapExtent": "البحث في مدى الخريطة الحالي فقط",
    "zoomScale": "مقياس التكبير/التصغير",
    "locatorUrl": "عنوان URL للمكود الجغرافي",
    "locatorName": "اسم المكود الجغرافي",
    "locatorExample": "مثال",
    "locatorWarning": "هذا الإصدار من خدمة التكويد الجغرافي غير مدعوم، فيما يدعم عنصر واجهة الاستخدام الإصدار 10.0 فأحدث من خدمة التكويد الجغرافي.",
    "locatorTips": "لا توجد اقتراحات بسبب عدم دعم خدمة التكويد الجغرافي لإمكانية الاقتراح.",
    "layerSource": "مصدر الطبقة",
    "setLayerSource": "تحديد مصدر الطبقة",
    "setGeocoderURL": "تحديد عنوان URL للمكود الجغرافي",
    "searchLayerTips": "لا توجد اقتراحات بسبب عدم دعم خدمة المعالم لإمكانية الحدود الفاصلة للصفحات.",
    "placeholder": "نص العنصر النائب",
    "searchFields": "حقول البحث:",
    "displayField": "عرض الحقل",
    "exactMatch": "تطابق تام",
    "maxSuggestions": "الاقتراحات القصوى",
    "maxResults": "النتائج القصوى",
    "enableLocalSearch": "تمكين البحث المحلي",
    "minScale": "أدنى مقياس الرسم",
    "minScaleHint": "عندما يكون مقياس الخريطة أكبر من هذا المقياس، سيتم تطبيق البحث المحلي",
    "radius": "نصف القطر",
    "radiusHint": "يُحدد مُحيط المنطقة حول مركز الخريطة الحالية المستخدمة لتحسين رتبة مرشحي التكويد الجغرافي؛ حتى يتم إرجاع المرشحين الأقرب للموقع أولاً",
    "setSearchFields": "تحديد حقول البحث",
    "set": "تعيين",
    "invalidUrlTip": "عنوان URL لـ ${URL} غير صحيح أو لا يمكن الوصول إليه.",
    "invalidSearchSources": "بحث غير صحيح في إعدادات المصدر"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "الرجاء تعبئة الحقول المطلوبة",
    "bufferDistanceFieldsErrorMsg": "يرجى إدخال قيم صحيحة",
    "invalidSearchToleranceErrorMsg": "يرجى إدخال قيمة صحيحة لسماحية البحث",
    "atLeastOneCheckboxCheckedErrorMsg": "تكوين غير صحيح",
    "noLayerAvailableErrorMsg": "لا توجد أي طبقات",
    "layerNotSupportedErrorMsg": "غير مدعوم ",
    "noFieldSelected": "الرجاء استخدام رمز تحرير لتحديد الحقول الخاصة بالتحليل.",
    "duplicateFieldsLabels": "تكرار لافتة التسمية \"${labelText}\" المضافة لـ: \"${itemNames}\"",
    "noLayerSelected": "الرجاء تحديد طبقة واحدة على الأقل للتحليل",
    "errorInSelectingLayer": "يتعذر اكتمال عملية تحديد الطبقة. الرجاء المحاولة مرة أخرى.",
    "errorInMaxFeatureCount": "الرجاء إدخال الحد الأقصى لعدد المعالم الصحيحة بغرض التحليل."
  }
});