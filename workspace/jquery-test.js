/*global $*/

//just removed the line breaks
var rawXML = '<?xml version="1.0" encoding="utf-8"?><document><row><Col0>1243</Col0 > <Col1>3355</Col1 > <Col2>2312</Col2 > </row> <row> <Col0>4455</Col0 > <Col1>7898</Col1 > <Col2>5232</Col2 > </row> <row> <Col0>6541</Col0 > <Col1>3214</Col1 > <Col2>9874</Col2 > </row> <row> <Col0>7894</Col0 > <Col1>4561</Col1 > <Col2>3212</Col2 > </row></document>';

// Parse it
var xmlParsed = $.parseXML(rawXML);

// find the <document> tag
var xmlDoc = $(xmlParsed).find('document');

// find the <row> tag
var xmlRow = xmlDoc.find('row');

// loop over <row> tags
$(xmlRow).each(function() {
    for(var i=0; i < 3; i++) {
      // find the Col + i and append its text to the #xmlstuff div
      $('#xmlstuff').append($(this).find('Col' + i).text()).append('<br/>');   
    }
});