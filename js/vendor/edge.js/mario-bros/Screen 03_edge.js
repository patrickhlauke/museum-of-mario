/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='/js/vendor/edge.js/mario-bros/images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'platforms',
            type:'group',
            rect:['41','58','648','637','auto','auto'],
            c:[
            {
               id:'platform_06',
               type:'rect',
               rect:['0px','134px','170px','24px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'platform_05',
               type:'rect',
               rect:['79px','533px','170px','24px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'platform_04',
               type:'rect',
               rect:['332px','613px','170px','24px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'platform_03',
               type:'rect',
               rect:['522px','533px','126px','24px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'platform_02',
               type:'rect',
               rect:['522px','0px','126px','24px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'platform_01',
               type:'rect',
               rect:['250px','110px','252px','24px','auto','auto'],
               fill:["rgba(192,192,192,1)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            }]
         },
         {
            id:'logo',
            type:'image',
            rect:['100px','292px','600px','216px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
         },
         {
            id:'score',
            display:'none',
            type:'rect',
            rect:['499px','431px','auto','auto','auto','auto']
         },
         {
            id:'score2',
            display:'none',
            type:'rect',
            rect:['207px','431px','auto','auto','auto','auto']
         },
         {
            id:'coin_06',
            type:'rect',
            rect:['563px','173px','auto','auto','auto','auto']
         },
         {
            id:'coin_05',
            type:'rect',
            rect:['167px','139px','auto','auto','auto','auto']
         },
         {
            id:'coin_04',
            type:'rect',
            rect:['207px','538px','auto','auto','auto','auto']
         },
         {
            id:'coin_03',
            type:'rect',
            rect:['247px','538px','auto','auto','auto','auto']
         },
         {
            id:'coin_02',
            type:'rect',
            rect:['583px','538px','auto','auto','auto','auto']
         },
         {
            id:'coin_01',
            type:'rect',
            rect:['499px','115px','auto','auto','auto','auto']
         },
         {
            id:'mario',
            type:'rect',
            rect:['393px','-15px','auto','auto','auto','auto']
         },
         {
            id:'pipe',
            type:'image',
            rect:['390px','-48px','54px','96px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pipe.png",'0px','0px']
         },
         {
            id:'replay',
            display:'none',
            type:'rect',
            rect:['40px','42px','auto','auto','auto','auto'],
            cursor:['pointer'],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'coin_02',
            symbolName:'coin2'
         },
         {
            id:'coin_01',
            symbolName:'coin'
         },
         {
            id:'coin_04',
            symbolName:'coin2'
         },
         {
            id:'coin_05',
            symbolName:'coin2'
         },
         {
            id:'coin_06',
            symbolName:'coin'
         },
         {
            id:'score2',
            symbolName:'score'
         },
         {
            id:'replay',
            symbolName:'replay'
         },
         {
            id:'mario',
            symbolName:'mario'
         },
         {
            id:'coin_03',
            symbolName:'coin'
         },
         {
            id:'score',
            symbolName:'score'
         }
         ]
      },
   states: {
      "Base State": {
         "${_coin_04}": [
            ["style", "top", '538px'],
            ["style", "opacity", '1'],
            ["style", "left", '207px'],
            ["style", "display", 'block']
         ],
         "${_pipe}": [
            ["style", "left", '390px'],
            ["style", "top", '-48px']
         ],
         "${_coin_01}": [
            ["style", "top", '115px'],
            ["style", "opacity", '1'],
            ["style", "left", '499px'],
            ["style", "display", 'block']
         ],
         "${_replay}": [
            ["style", "display", 'none'],
            ["style", "top", '42px'],
            ["style", "left", '40px'],
            ["style", "cursor", 'pointer']
         ],
         "${_coin_03}": [
            ["style", "top", '538px'],
            ["style", "opacity", '1'],
            ["style", "left", '247px'],
            ["style", "display", 'block']
         ],
         "${_platform_03}": [
            ["style", "height", '24px'],
            ["style", "top", '533px'],
            ["style", "left", '522px'],
            ["style", "width", '126px']
         ],
         "${_mario}": [
            ["motion", "location", '417px 16.499967575073px']
         ],
         "${_logo}": [
            ["style", "left", '100px'],
            ["style", "top", '292px']
         ],
         "${_coin_05}": [
            ["style", "top", '139px'],
            ["style", "opacity", '1'],
            ["style", "left", '167px'],
            ["style", "display", 'block']
         ],
         "${_coin_02}": [
            ["style", "top", '538px'],
            ["style", "opacity", '1'],
            ["style", "left", '583px'],
            ["style", "display", 'block']
         ],
         "${_score2}": [
            ["style", "display", 'none'],
            ["style", "left", '207px'],
            ["style", "top", '538px']
         ],
         "${_platform_05}": [
            ["style", "height", '24px'],
            ["style", "top", '533px'],
            ["style", "left", '79px'],
            ["style", "width", '170px']
         ],
         "${_score}": [
            ["style", "top", '115px'],
            ["style", "display", 'none'],
            ["style", "left", '499px']
         ],
         "${_platform_01}": [
            ["style", "height", '24px'],
            ["style", "top", '110px'],
            ["style", "left", '250px'],
            ["style", "width", '252px']
         ],
         "${_coin_06}": [
            ["style", "top", '139px'],
            ["style", "opacity", '1'],
            ["style", "left", '127px'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(13,13,13,1.00)'],
            ["style", "width", '800px'],
            ["style", "height", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_platform_02}": [
            ["style", "top", '0px'],
            ["style", "height", '24px'],
            ["style", "left", '522px'],
            ["style", "width", '126px']
         ],
         "${_platform_04}": [
            ["style", "top", '613px'],
            ["style", "height", '24px'],
            ["style", "left", '332px'],
            ["style", "width", '170px']
         ],
         "${_platform_06}": [
            ["style", "top", '134px'],
            ["style", "height", '24px'],
            ["style", "left", '0px'],
            ["style", "width", '170px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11500,
         autoPlay: false,
         timeline: [
            { id: "eid213", tween: [ "style", "${_coin_04}", "display", 'none', { fromValue: 'block'}], position: 6954, duration: 0 },
            { id: "eid245", tween: [ "style", "${_coin_04}", "display", 'block', { fromValue: 'none'}], position: 11018, duration: 0 },
            // { id: "eid228", tween: [ "style", "${_replay}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            // { id: "eid229", tween: [ "style", "${_replay}", "display", 'block', { fromValue: 'none'}], position: 11018, duration: 0 },
            // { id: "eid226", tween: [ "style", "${_replay}", "display", 'none', { fromValue: 'block'}], position: 11123, duration: 0 },
            { id: "eid277", tween: [ "style", "${_coin_06}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid301", tween: [ "style", "${_coin_06}", "opacity", '1', { fromValue: '0'}], position: 11018, duration: 418 },
            { id: "eid216", tween: [ "style", "${_coin_05}", "display", 'none', { fromValue: 'block'}], position: 9842, duration: 0 },
            { id: "eid246", tween: [ "style", "${_coin_05}", "display", 'block', { fromValue: 'none'}], position: 11018, duration: 0 },
            { id: "eid199", tween: [ "style", "${_score}", "top", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
            { id: "eid197", tween: [ "style", "${_score}", "top", '538px', { fromValue: '115px'}], position: 5408, duration: 0 },
            { id: "eid202", tween: [ "style", "${_score}", "top", '538px', { fromValue: '538px'}], position: 6805, duration: 0 },
            { id: "eid215", tween: [ "style", "${_score}", "top", '139px', { fromValue: '538px'}], position: 9842, duration: 0 },
            { id: "eid274", tween: [ "style", "${_coin_03}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid310", tween: [ "style", "${_coin_03}", "opacity", '1', { fromValue: '0'}], position: 11018, duration: 418 },
            { id: "eid220", tween: [ "style", "${_score2}", "top", '538px', { fromValue: '538px'}], position: 6954, duration: 0 },
            { id: "eid218", tween: [ "style", "${_score2}", "top", '139px', { fromValue: '538px'}], position: 10166, duration: 0 },
            { id: "eid273", tween: [ "style", "${_coin_02}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid306", tween: [ "style", "${_coin_02}", "opacity", '1', { fromValue: '0'}], position: 11018, duration: 418 },
            { id: "eid275", tween: [ "style", "${_coin_04}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid302", tween: [ "style", "${_coin_04}", "opacity", '1', { fromValue: '0'}], position: 11018, duration: 418 },
            { id: "eid203", tween: [ "style", "${_coin_03}", "display", 'none', { fromValue: 'block'}], position: 6805, duration: 0 },
            { id: "eid244", tween: [ "style", "${_coin_03}", "display", 'block', { fromValue: 'none'}], position: 11018, duration: 0 },
            { id: "eid272", tween: [ "style", "${_coin_01}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid304", tween: [ "style", "${_coin_01}", "opacity", '1', { fromValue: '0'}], position: 11018, duration: 418 },
            { id: "eid198", tween: [ "style", "${_score}", "left", '499px', { fromValue: '499px'}], position: 0, duration: 0 },
            { id: "eid196", tween: [ "style", "${_score}", "left", '583px', { fromValue: '499px'}], position: 5408, duration: 0 },
            { id: "eid201", tween: [ "style", "${_score}", "left", '247px', { fromValue: '583px'}], position: 6805, duration: 0 },
            { id: "eid214", tween: [ "style", "${_score}", "left", '167px', { fromValue: '247px'}], position: 9842, duration: 0 },
            { id: "eid188", tween: [ "style", "${_coin_01}", "display", 'none', { fromValue: 'block'}], position: 2401, duration: 0 },
            { id: "eid242", tween: [ "style", "${_coin_01}", "display", 'block', { fromValue: 'none'}], position: 11018, duration: 0 },
            { id: "eid219", tween: [ "style", "${_score2}", "left", '207px', { fromValue: '207px'}], position: 6954, duration: 0 },
            { id: "eid217", tween: [ "style", "${_score2}", "left", '127px', { fromValue: '207px'}], position: 10166, duration: 0 },
            { id: "eid221", tween: [ "style", "${_coin_06}", "display", 'none', { fromValue: 'block'}], position: 10166, duration: 0 },
            { id: "eid247", tween: [ "style", "${_coin_06}", "display", 'block', { fromValue: 'none'}], position: 11018, duration: 0 },
            { id: "eid43", tween: [ "motion", "${_mario}", [[417,16.5,0,0],[417,79.5,0,0]]], position: 302, duration: 698 },
            { id: "eid44", tween: [ "motion", "${_mario}", [[417,79.5,0,0],[417,136.5,0,0]]], position: 1000, duration: 219 },
            { id: "eid45", tween: [ "motion", "${_mario}", [[417,136.5,0,0],[554.88,136.61,0,0]]], position: 2000, duration: 750 },
            { id: "eid51", tween: [ "motion", "${_mario}", [[554.88,136.61,0,0],[566.23,142.99,15.93,22.94,14.78,21.28],[595.66,194.82,42.25,92.1,44.58,97.18],[618.98,260.18,0,0]]], position: 2750, duration: 374 },
            { id: "eid93", tween: [ "motion", "${_mario}", [[618.98,260.18,0,0],[629,260.18,0,0]]], position: 3124, duration: 126 },
            { id: "eid84", tween: [ "motion", "${_mario}", [[632.35,260.33,0,0],[629.63,243.65,-12.87,-57.75,-4.86,-21.83],[615.48,213.44,-13.14,-2.54]]], position: 3750, duration: 155, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "motion", "${_mario}", [[615.32,213.42,-7.76,-0.9],[606.26,228.9,-38.48,161.79,-8.14,34.24],[593.21,452.54,0,0]]], position: 3905, duration: 471, easing: "easeInQuad" },
            { id: "eid94", tween: [ "motion", "${_mario}", [[593.21,452.46,0,0],[593.24,386.99,0.59,-4.77]]], position: 4750, duration: 219, easing: "easeOutQuad" },
            { id: "eid95", tween: [ "motion", "${_mario}", [[593.24,386.99,0.08,-0.67],[593.34,390.37,1.54,91.92,0.13,7.78],[595,559.5,0,0]]], position: 4969, duration: 495, easing: "easeInQuad" },
            { id: "eid116", tween: [ "motion", "${_mario}", [[595,559.5,0,0],[553.79,559.92,0,0]]], position: 5626, duration: 250 },
            { id: "eid117", tween: [ "motion", "${_mario}", [[553.79,559.92,0,0],[525.91,588.04,-45.24,70.94,-38.84,60.91],[496.82,639.88,0,0]]], position: 5876, duration: 250 },
            { id: "eid119", tween: [ "motion", "${_mario}", [[496.82,639.88,0,0],[397,639.5,0,0]]], position: 6126, duration: 341 },
            { id: "eid136", tween: [ "motion", "${_mario}", [[397,639.5,0,0],[334.73,570.34,-103.26,-64.59,-107.04,-66.95],[271,559.5,0,0]]], position: 6467, duration: 366 },
            { id: "eid131", tween: [ "motion", "${_mario}", [[271,559.5,0,0],[191,559.5,0,0]]], position: 6833, duration: 255 },
            { id: "eid139", tween: [ "motion", "${_mario}", [[191,559.5,0,0],[171,559.5,0,0]]], position: 7088, duration: 126, easing: "easeOutQuad" },
            { id: "eid140", tween: [ "motion", "${_mario}", [[168,559.5,0,0],[177.99,451.7,11.91,-64.33,17.75,-95.84],[190.33,420.29,12.83,0.09]]], position: 7376, duration: 389, easing: "easeOutQuad" },
            { id: "eid142", tween: [ "motion", "${_mario}", [[190.33,420.29,15.42,0.11],[203,452.5,0,0]]], position: 7765, duration: 201, easing: "easeInQuad" },
            { id: "eid145", tween: [ "motion", "${_mario}", [[199.97,452.5,0,0],[230.93,221.65,6.63,-24.47,44.13,-162.92],[237.78,210.66,6.93,0.73]]], position: 8190, duration: 504, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "motion", "${_mario}", [[237.78,210.66,26.34,2.78],[255,260.5,0,0]]], position: 8695, duration: 223, easing: "easeInQuad" },
            { id: "eid146", tween: [ "motion", "${_mario}", [[257,260.5,0,0],[219.27,99.5,-3.91,-5.75,-58.22,-85.62],[215.64,96.17,-4.08,-0.6]]], position: 9250, duration: 416, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "motion", "${_mario}", [[215.64,96.17,-38.11,-5.58],[187,160.5,0,0]]], position: 9666, duration: 237, easing: "easeInQuad" },
            { id: "eid154", tween: [ "motion", "${_mario}", [[187.03,160.38,0,0],[65,160.5,0,0]]], position: 10062, duration: 370 },
            { id: "eid155", tween: [ "motion", "${_mario}", [[65,160.5,0,0],[10.45,114.28,-85.92,-58.49,-83.84,-57.07],[-46.17,89.5,0,0]]], position: 10431, duration: 271 },
            { id: "eid187", tween: [ "style", "${_score}", "display", 'block', { fromValue: 'none'}], position: 2401, duration: 0 },
            { id: "eid195", tween: [ "style", "${_coin_02}", "display", 'none', { fromValue: 'block'}], position: 5408, duration: 0 },
            { id: "eid243", tween: [ "style", "${_coin_02}", "display", 'block', { fromValue: 'none'}], position: 11018, duration: 0 },
            { id: "eid276", tween: [ "style", "${_coin_05}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid303", tween: [ "style", "${_coin_05}", "opacity", '1', { fromValue: '0'}], position: 11018, duration: 418 },
            { id: "eid212", tween: [ "style", "${_score2}", "display", 'block', { fromValue: 'none'}], position: 6954, duration: 0 },
            { id: "eid315", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['standing right'] ], ""], position: 0 },
            { id: "eid262", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coin_02}', [] ], ""], position: 0 },
            { id: "eid189", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_score}', [] ], ""], position: 0 },
            { id: "eid222", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_score2}', [] ], ""], position: 0 },
            { id: "eid264", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coin_03}', [] ], ""], position: 0 },
            { id: "eid265", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coin_05}', [] ], ""], position: 0 },
            { id: "eid263", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coin_04}', [] ], ""], position: 0 },
            { id: "eid260", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coin_06}', [] ], ""], position: 0 },
            { id: "eid261", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_coin_01}', [] ], ""], position: 0 },
            { id: "eid46", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['walking right'] ], ""], position: 2000 },
            { id: "eid190", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_score}', [] ], ""], position: 2401 },
            { id: "eid52", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stopping right'] ], ""], position: 2763.3165236594 },
            { id: "eid63", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['standing left'] ], ""], position: 3250 },
            { id: "eid87", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jumping left'] ], ""], position: 3750 },
            { id: "eid88", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['standing left'] ], ""], position: 4375 },
            { id: "eid96", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jumping right'] ], ""], position: 4750 },
            { id: "eid200", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_score}', [0] ], ""], position: 5408 },
            { id: "eid97", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['standing right'] ], ""], position: 5464.1727235847 },
            { id: "eid118", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['walking left'] ], ""], position: 5626 },
            { id: "eid121", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jumping left'] ], ""], position: 6467.0814926145 },
            { id: "eid211", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_score}', [0] ], ""], position: 6805 },
            { id: "eid132", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['walking left'] ], ""], position: 6832.8049420024 },
            { id: "eid223", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_score2}', [] ], ""], position: 6954 },
            { id: "eid137", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stopping left'] ], ""], position: 7088.127539699 },
            { id: "eid138", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['standing left'] ], ""], position: 7214.3757671089 },
            { id: "eid141", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jumping right'] ], ""], position: 7376 },
            { id: "eid143", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['standing right'] ], ""], position: 7965.5757090858 },
            { id: "eid147", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jumping right'] ], ""], position: 8190.3270788601 },
            { id: "eid148", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['standing right'] ], ""], position: 8917.9305469078 },
            { id: "eid149", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['standing left'] ], ""], position: 9095.3307604353 },
            { id: "eid150", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jumping left'] ], ""], position: 9250 },
            { id: "eid224", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_score}', [0] ], ""], position: 9842 },
            { id: "eid151", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['standing left'] ], ""], position: 9902.0542687824 },
            { id: "eid156", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['walking left'] ], ""], position: 10038.132895 },
            { id: "eid225", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_score2}', [0] ], ""], position: 10166 },
            { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jumping left'] ], ""], position: 10431.149708158 }         ]
      }
   }
},
"coin": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'c01',
      type: 'image',
      rect: ['0px','0px','24px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/coin_01.png','0px','0px']
   },
   {
      rect: ['6px','0px','12px','33px','auto','auto'],
      id: 'c02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/coin_02.png','0px','0px']
   },
   {
      rect: ['10px','0px','3px','33px','auto','auto'],
      id: 'c03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/coin_03.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_c02}": [
            ["style", "top", '0px'],
            ["style", "left", '6px'],
            ["style", "display", 'none']
         ],
         "${_c03}": [
            ["style", "top", '0px'],
            ["style", "left", '10px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '24px']
         ],
         "${_c01}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         labels: {
            "rotate": 0
         },
         timeline: [
            { id: "eid55", tween: [ "style", "${_c03}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
            { id: "eid58", tween: [ "style", "${_c03}", "display", 'none', { fromValue: 'block'}], position: 190, duration: 0 },
            { id: "eid53", tween: [ "style", "${_c02}", "display", 'block', { fromValue: 'none'}], position: 70, duration: 0 },
            { id: "eid56", tween: [ "style", "${_c02}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
            { id: "eid57", tween: [ "style", "${_c02}", "display", 'block', { fromValue: 'none'}], position: 190, duration: 0 },
            { id: "eid54", tween: [ "style", "${_c01}", "display", 'none', { fromValue: 'block'}], position: 70, duration: 0 }         ]
      }
   }
},
"mario": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'mario_little_standing_right',
      type: 'image',
      rect: ['0px','0px','48px','63px','auto','auto'],
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_standing_right.png','0px','0px']
   },
   {
      rect: ['6px','-6px','45px','63px','auto','auto'],
      id: 'mario_little_jumping_right',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_jumping_right.png','0px','0px']
   },
   {
      rect: ['6px','0px','45px','63px','auto','auto'],
      id: 'mario_little_stopping_right',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_stopping_right.png','0px','0px']
   },
   {
      rect: ['6px','0px','36px','63px','auto','auto'],
      id: 'mario_little_walking_right_01',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_walking_right_01.png','0px','0px']
   },
   {
      rect: ['3px','0px','42px','63px','auto','auto'],
      id: 'mario_little_walking_right_02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_walking_right_02.png','0px','0px']
   },
   {
      rect: ['3px','0px','42px','63px','auto','auto'],
      id: 'mario_little_walking_right_03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_walking_right_03.png','0px','0px']
   },
   {
      rect: ['0px','0px','48px','63px','auto','auto'],
      id: 'mario_little_standing_left',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_standing_left.png','0px','0px']
   },
   {
      rect: ['-3px','-6px','45px','63px','auto','auto'],
      id: 'mario_little_jumping_left',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_jumping_left.png','0px','0px']
   },
   {
      rect: ['-3px','0px','45px','63px','auto','auto'],
      id: 'mario_little_stopping_left',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_stopping_left.png','0px','0px']
   },
   {
      rect: ['6px','0px','36px','63px','auto','auto'],
      id: 'mario_little_walking_left_01',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_walking_left_01.png','0px','0px']
   },
   {
      rect: ['3px','0px','42px','63px','auto','auto'],
      id: 'mario_little_walking_left_02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_walking_left_02.png','0px','0px']
   },
   {
      rect: ['3px','0px','42px','63px','auto','auto'],
      id: 'mario_little_walking_left_03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/mario_little_walking_left_03.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mario_little_walking_right_01}": [
            ["style", "top", '0px'],
            ["style", "left", '6px'],
            ["style", "display", 'none']
         ],
         "${_mario_little_jumping_left}": [
            ["style", "top", '-6px'],
            ["style", "left", '-3px'],
            ["style", "display", 'none']
         ],
         "${_mario_little_standing_left}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_mario_little_stopping_left}": [
            ["style", "top", '0px'],
            ["style", "left", '-3px'],
            ["style", "display", 'none']
         ],
         "${_mario_little_walking_right_03}": [
            ["style", "top", '0px'],
            ["style", "left", '3px'],
            ["style", "display", 'none']
         ],
         "${_mario_little_walking_left_01}": [
            ["style", "top", '0px'],
            ["style", "left", '6px'],
            ["style", "display", 'none']
         ],
         "${_mario_little_walking_left_03}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "left", '3px']
         ],
         "${_mario_little_walking_left_02}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "left", '3px']
         ],
         "${_mario_little_jumping_right}": [
            ["style", "top", '-6px'],
            ["style", "left", '6px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '48px']
         ],
         "${_mario_little_standing_right}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_mario_little_stopping_right}": [
            ["style", "top", '0px'],
            ["style", "left", '6px'],
            ["style", "display", 'none']
         ],
         "${_mario_little_walking_right_02}": [
            ["style", "top", '0px'],
            ["style", "left", '3px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1841.3828125,
         autoPlay: false,
         labels: {
            "standing right": 0,
            "jumping right": 250,
            "stopping right": 500,
            "walking right": 750,
            "standing left": 1000,
            "jumping left": 1250,
            "stopping left": 1501,
            "walking left": 1750
         },
         timeline: [
            { id: "eid81", tween: [ "style", "${_mario_little_walking_left_03}", "display", 'block', { fromValue: 'none'}], position: 1799, duration: 0 },
            { id: "eid73", tween: [ "style", "${_mario_little_walking_left_01}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid75", tween: [ "style", "${_mario_little_walking_left_01}", "display", 'none', { fromValue: 'block'}], position: 1775, duration: 0 },
            { id: "eid64", tween: [ "style", "${_mario_little_walking_right_01}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid66", tween: [ "style", "${_mario_little_walking_right_01}", "display", 'none', { fromValue: 'block'}], position: 772, duration: 0 },
            { id: "eid82", tween: [ "style", "${_mario_little_stopping_left}", "display", 'block', { fromValue: 'none'}], position: 1501, duration: 0 },
            { id: "eid83", tween: [ "style", "${_mario_little_stopping_left}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid35", tween: [ "style", "${_mario_little_jumping_left}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid40", tween: [ "style", "${_mario_little_jumping_left}", "display", 'none', { fromValue: 'block'}], position: 1501, duration: 0 },
            { id: "eid72", tween: [ "style", "${_mario_little_stopping_right}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid76", tween: [ "style", "${_mario_little_stopping_right}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid28", tween: [ "style", "${_mario_little_standing_right}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid27", tween: [ "style", "${_mario_little_jumping_right}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid47", tween: [ "style", "${_mario_little_jumping_right}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid33", tween: [ "style", "${_mario_little_standing_left}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid36", tween: [ "style", "${_mario_little_standing_left}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid67", tween: [ "style", "${_mario_little_walking_right_03}", "display", 'block', { fromValue: 'none'}], position: 794, duration: 0 },
            { id: "eid69", tween: [ "style", "${_mario_little_walking_right_03}", "display", 'none', { fromValue: 'block'}], position: 816, duration: 0 },
            { id: "eid65", tween: [ "style", "${_mario_little_walking_right_02}", "display", 'block', { fromValue: 'none'}], position: 772, duration: 0 },
            { id: "eid68", tween: [ "style", "${_mario_little_walking_right_02}", "display", 'none', { fromValue: 'block'}], position: 794, duration: 0 },
            { id: "eid70", tween: [ "style", "${_mario_little_walking_right_02}", "display", 'block', { fromValue: 'none'}], position: 816, duration: 0 },
            { id: "eid71", tween: [ "style", "${_mario_little_walking_right_02}", "display", 'none', { fromValue: 'block'}], position: 840, duration: 0 },
            { id: "eid79", tween: [ "style", "${_mario_little_walking_left_02}", "display", 'block', { fromValue: 'none'}], position: 1775, duration: 0 },
            { id: "eid80", tween: [ "style", "${_mario_little_walking_left_02}", "display", 'none', { fromValue: 'block'}], position: 1799, duration: 0 }         ]
      }
   }
},
"coin2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'c01',
      type: 'image',
      rect: ['0px','0px','24px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/coin_01.png','0px','0px']
   },
   {
      rect: ['6px','0px','12px','33px','auto','auto'],
      id: 'c02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/coin_02.png','0px','0px']
   },
   {
      rect: ['10px','0px','3px','33px','auto','auto'],
      id: 'c03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/coin_03.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_c02}": [
            ["style", "top", '0px'],
            ["style", "left", '6px'],
            ["style", "display", 'none']
         ],
         "${_c03}": [
            ["style", "top", '0px'],
            ["style", "left", '10px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '24px']
         ],
         "${_c01}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 451.96404490256,
         autoPlay: true,
         timeline: [
            { id: "eid53", tween: [ "style", "${_c02}", "display", 'block', { fromValue: 'none'}], position: 106, duration: 0 },
            { id: "eid56", tween: [ "style", "${_c02}", "display", 'none', { fromValue: 'block'}], position: 215, duration: 0 },
            { id: "eid57", tween: [ "style", "${_c02}", "display", 'block', { fromValue: 'none'}], position: 330, duration: 0 },
            { id: "eid55", tween: [ "style", "${_c03}", "display", 'block', { fromValue: 'none'}], position: 215, duration: 0 },
            { id: "eid58", tween: [ "style", "${_c03}", "display", 'none', { fromValue: 'block'}], position: 330, duration: 0 },
            { id: "eid54", tween: [ "style", "${_c01}", "display", 'none', { fromValue: 'block'}], position: 106, duration: 0 }         ]
      }
   }
},
"score": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','24px','33px','auto','auto'],
      id: 'c01',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/coin_01.png','0px','0px']
   },
   {
      rect: ['-5px','-40px','33px','33px','auto','auto'],
      id: 'burst',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/burst.png','0px','0px']
   },
   {
      rect: ['0px','-43px','24px','37px','auto','auto'],
      id: 'dollar_sign',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/dollar_sign.png','0px','0px']
   },
   {
      rect: ['-5px','-57px','34px','22px','auto','auto'],
      id: 'number_800',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/mario-bros/images/number_800.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_number_800}": [
            ["style", "top", '-57px'],
            ["style", "left", '-5px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '24px']
         ],
         "${_dollar_sign}": [
            ["style", "top", '-43px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_burst}": [
            ["style", "top", '-40px'],
            ["style", "left", '-5px'],
            ["style", "display", 'none']
         ],
         "${_c01}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         labels: {
            "score": 0
         },
         timeline: [
            { id: "eid193", tween: [ "style", "${_number_800}", "display", 'block', { fromValue: 'none'}], position: 459, duration: 0 },
            { id: "eid194", tween: [ "style", "${_number_800}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid191", tween: [ "style", "${_dollar_sign}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid192", tween: [ "style", "${_dollar_sign}", "display", 'none', { fromValue: 'block'}], position: 459, duration: 0 },
            { id: "eid161", tween: [ "style", "${_c01}", "top", '-30px', { fromValue: '0px'}], position: 0, duration: 118 },
            { id: "eid164", tween: [ "style", "${_burst}", "display", 'block', { fromValue: 'none'}], position: 118, duration: 0 },
            { id: "eid168", tween: [ "style", "${_burst}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid160", tween: [ "style", "${_c01}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "style", "${_c01}", "display", 'none', { fromValue: 'block'}], position: 118, duration: 0 }         ]
      }
   }
},
"replay": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','100px','40px','auto','auto'],
      type: 'rect',
      id: 'replay',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(215,29,29,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'REPLAY',
      type: 'text',
      rect: ['22px','12px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '12px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '22px'],
            ["style", "font-size", '14px']
         ],
         "${_replay}": [
            ["color", "background-color", 'rgba(215,29,29,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '40px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '100px']
         ],
         "${symbolSelector}": [
            ["style", "height", '40px'],
            ["style", "width", '40px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).bind( "animationReady", function() {
   Edge.launchComposition(compId);
});

})(jQuery, AdobeEdge, "EDGE-1995881270-"+edgeCount);
