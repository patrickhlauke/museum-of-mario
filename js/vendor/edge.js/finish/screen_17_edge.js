/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='/js/vendor/edge.js/finish/images/';

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
            id:'ground',
            type:'rect',
            rect:['0px','752px','100%','30px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'castle-flag',
            type:'image',
            rect:['497px','529px','39px','42px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"castle-flag.png",'0px','0px']
         },
         {
            id:'firework',
            display:'none',
            type:'rect',
            rect:['400px','386px','auto','auto','auto','auto']
         },
         {
            id:'castle',
            type:'image',
            rect:['400px','512px','240px','240px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"castle.png",'0px','0px']
         },
         {
            id:'text_5000',
            display:'none',
            type:'image',
            rect:['204px','670px','48px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_5000.png",'0px','0px']
         },
         {
            id:'flagpole',
            type:'image',
            rect:['170px','248px','48px','504px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"desktop-flagpole.png",'0px','0px']
         },
         {
            id:'pole_flag',
            type:'image',
            rect:['143px','272px','48px','48px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"pole_flag.png",'0px','0px']
         },
         {
            id:'mario',
            type:'rect',
            rect:['287','255','auto','auto','auto','auto']
         },
         {
            id:'replay2',
            display:'none',
            type:'rect',
            rect:['660px','40','auto','auto','auto','auto'],
            cursor:['pointer'],
            transform:[]
         }],
         symbolInstances: [
         {
            id:'firework',
            symbolName:'firework'
         },
         {
            id:'mario',
            symbolName:'mario'
         },
         {
            id:'replay2',
            symbolName:'replay'
         }
         ]
      },
   states: {
      "Base State": {
         "${_flagpole}": [
            ["style", "left", '170px'],
            ["style", "top", '248px']
         ],
         "${_firework}": [
            ["style", "top", '386px'],
            ["style", "left", '400px'],
            ["style", "display", 'none']
         ],
         "${_castle-flag}": [
            ["style", "top", '529px'],
            ["style", "opacity", '1'],
            ["style", "left", '497px']
         ],
         "${_pole_flag}": [
            ["style", "left", '143px'],
            ["style", "top", '272px']
         ],
         "${_ground}": [
            ["color", "background-color", 'rgba(200,76,12,1)'],
            ["style", "height", '48px'],
            ["style", "top", '752px'],
            ["style", "width", '100%']
         ],
         "${_replay2}": [
            ["style", "display", 'none'],
            ["style", "left", '660px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(58,188,254,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
            ["style", "width", '800px']
         ],
         "${_text_5000}": [
            ["style", "top", '670px'],
            ["style", "opacity", '1'],
            ["style", "left", '204px'],
            ["style", "display", 'none']
         ],
         "${_mario}": [
            ["style", "top", '86px'],
            ["style", "left", '-48px'],
            ["style", "display", 'block']
         ],
         "${_castle}": [
            ["style", "left", '400px'],
            ["style", "top", '512px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: false,
         timeline: [
            { id: "eid47", tween: [ "style", "${_mario}", "display", 'none', { fromValue: 'block'}], position: 2954, duration: 0 },
            { id: "eid12", tween: [ "style", "${_mario}", "top", '218px', { fromValue: '86px'}], position: 0, duration: 250 },
            { id: "eid13", tween: [ "style", "${_mario}", "top", '585px', { fromValue: '218px'}], position: 250, duration: 1000 },
            { id: "eid41", tween: [ "style", "${_mario}", "top", '593px', { fromValue: '585px'}], position: 1627, duration: 78 },
            { id: "eid48", tween: [ "style", "${_mario}", "top", '655px', { fromValue: '593px'}], position: 1706, duration: 122 },
            { id: "eid46", tween: [ "style", "${_mario}", "top", '655px', { fromValue: '655px'}], position: 1828, duration: 0 },
            { id: "eid66", tween: [ "style", "${_firework}", "top", '386px', { fromValue: '386px'}], position: 4544, duration: 0 },
            { id: "eid69", tween: [ "style", "${_firework}", "top", '416px', { fromValue: '386px'}], position: 5165, duration: 0 },
            { id: "eid71", tween: [ "style", "${_firework}", "top", '376px', { fromValue: '416px'}], position: 5794, duration: 0 },
            { id: "eid75", tween: [ "style", "${_text_5000}", "top", '285px', { fromValue: '670px'}], position: 250, duration: 1000 },
            // { id: "eid76", tween: [ "style", "${_replay2}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
            { id: "eid74", tween: [ "style", "${_text_5000}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid79", tween: [ "style", "${_castle-flag}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 750 },
            { id: "eid67", tween: [ "style", "${_firework}", "left", '400px', { fromValue: '400px'}], position: 4544, duration: 0 },
            { id: "eid68", tween: [ "style", "${_firework}", "left", '597px', { fromValue: '400px'}], position: 5165, duration: 0 },
            { id: "eid70", tween: [ "style", "${_firework}", "left", '493px', { fromValue: '597px'}], position: 5794, duration: 0 },
            { id: "eid83", tween: [ "style", "${_text_5000}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 750 },
            { id: "eid61", tween: [ "style", "${_firework}", "display", 'block', { fromValue: 'none'}], position: 4544, duration: 0 },
            { id: "eid50", tween: [ "style", "${_castle-flag}", "top", '470px', { fromValue: '529px'}], position: 3500, duration: 666 },
            { id: "eid14", tween: [ "style", "${_pole_flag}", "top", '637px', { fromValue: '272px'}], position: 250, duration: 1000 },
            { id: "eid82", tween: [ "style", "${_pole_flag}", "top", '272px', { fromValue: '637px'}], position: 6500, duration: 750 },
            { id: "eid11", tween: [ "style", "${_mario}", "left", '149px', { fromValue: '-48px'}], position: 0, duration: 250 },
            { id: "eid43", tween: [ "style", "${_mario}", "left", '191px', { fromValue: '149px'}], position: 1250, duration: 0 },
            { id: "eid40", tween: [ "style", "${_mario}", "left", '212px', { fromValue: '191px'}], position: 1627, duration: 78 },
            { id: "eid49", tween: [ "style", "${_mario}", "left", '226px', { fromValue: '212px'}], position: 1706, duration: 122 },
            { id: "eid45", tween: [ "style", "${_mario}", "left", '493px', { fromValue: '226px'}], position: 1828, duration: 1046 },
            { id: "eid10", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', [0] ], ""], position: 0 },
            { id: "eid62", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_firework}', [] ], ""], position: 0 },
            { id: "eid15", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['climbing'] ], ""], position: 250 },
            { id: "eid44", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['climbing_right'] ], ""], position: 1250 },
            { id: "eid24", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jumping_left'] ], ""], position: 1627.171875 },
            { id: "eid37", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['walking_right'] ], ""], position: 1827.734375 },
            { id: "eid63", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_firework}', [0] ], ""], position: 4544 },
            { id: "eid72", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_firework}', [0] ], ""], position: 5165.0463359794 },
            { id: "eid73", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_firework}', [0] ], ""], position: 5794 }         ]
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
      id: 'mario_big_jump_right',
      type: 'image',
      rect: ['0px','0px','48px','93px','auto','auto'],
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/mario_big_jump_right.png','0px','0px']
   },
   {
      rect: ['3px','6px','42px','90px','auto','auto'],
      id: 'mario_big_flag_right_01',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/mario_big_flag_right_01.png','0px','0px']
   },
   {
      rect: ['3px','6px','42px','81px','auto','auto'],
      id: 'mario_big_flag_right_02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/mario_big_flag_right_02.png','0px','0px']
   },
   {
      rect: ['0px','7px','42px','90px','auto','auto'],
      id: 'mario_big_flag_left_01',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/mario_big_flag_left_01.png','0px','0px']
   },
   {
      rect: ['0px','7px','48px','90px','auto','auto'],
      id: 'mario_big_run_right_01',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/mario_big_run_right_01.png','0px','0px']
   },
   {
      rect: ['6px','4px','42px','93px','auto','auto'],
      id: 'mario_big_run_right_02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/mario_big_run_right_02.png','0px','0px']
   },
   {
      rect: ['3px','1px','48px','96px','auto','auto'],
      id: 'mario_big_run_right_03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/mario_big_run_right_03.png','0px','0px']
   },
   {
      rect: ['-3px','1px','48px','96px','auto','auto'],
      id: 'mario_big_run_left_03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/mario_big_run_left_03.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mario_big_run_right_01}": [
            ["style", "top", '7px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_mario_big_run_right_02}": [
            ["style", "top", '4px'],
            ["style", "display", 'none'],
            ["style", "left", '6px']
         ],
         "${_mario_big_run_left_03}": [
            ["style", "top", '1px'],
            ["style", "left", '-3px'],
            ["style", "display", 'none']
         ],
         "${_mario_big_run_right_03}": [
            ["style", "top", '1px'],
            ["style", "left", '3px'],
            ["style", "display", 'none']
         ],
         "${_mario_big_flag_right_01}": [
            ["style", "top", '6px'],
            ["style", "left", '3px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '93px'],
            ["style", "width", '48px']
         ],
         "${_mario_big_jump_right}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_mario_big_flag_left_01}": [
            ["style", "top", '7px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_mario_big_flag_right_02}": [
            ["style", "top", '6px'],
            ["style", "left", '3px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1582,
         autoPlay: true,
         labels: {
            "jumping_right": 0,
            "climbing": 500,
            "climbing_right": 750,
            "jumping_left": 1000,
            "walking_right": 1299
         },
         timeline: [
            { id: "eid34", tween: [ "style", "${_mario_big_run_right_03}", "display", 'block', { fromValue: 'none'}], position: 1453, duration: 0 },
            { id: "eid35", tween: [ "style", "${_mario_big_run_right_03}", "display", 'none', { fromValue: 'block'}], position: 1517, duration: 0 },
            { id: "eid32", tween: [ "style", "${_mario_big_run_right_02}", "display", 'block', { fromValue: 'none'}], position: 1377, duration: 0 },
            { id: "eid33", tween: [ "style", "${_mario_big_run_right_02}", "display", 'none', { fromValue: 'block'}], position: 1453, duration: 0 },
            { id: "eid36", tween: [ "style", "${_mario_big_run_right_02}", "display", 'block', { fromValue: 'none'}], position: 1517, duration: 0 },
            { id: "eid38", tween: [ "style", "${_mario_big_run_left_03}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid39", tween: [ "style", "${_mario_big_run_left_03}", "display", 'none', { fromValue: 'block'}], position: 1299, duration: 0 },
            { id: "eid6", tween: [ "style", "${_mario_big_flag_right_01}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid8", tween: [ "style", "${_mario_big_flag_right_01}", "display", 'none', { fromValue: 'block'}], position: 558, duration: 0 },
            { id: "eid25", tween: [ "style", "${_mario_big_flag_left_01}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid28", tween: [ "style", "${_mario_big_flag_left_01}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid29", tween: [ "style", "${_mario_big_run_right_01}", "display", 'block', { fromValue: 'none'}], position: 1299, duration: 0 },
            { id: "eid31", tween: [ "style", "${_mario_big_run_right_01}", "display", 'none', { fromValue: 'block'}], position: 1377, duration: 0 },
            { id: "eid9", tween: [ "style", "${_mario_big_flag_right_02}", "display", 'block', { fromValue: 'none'}], position: 558, duration: 0 },
            { id: "eid16", tween: [ "style", "${_mario_big_flag_right_02}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid5", tween: [ "style", "${_mario_big_jump_right}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"firework": {
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
      id: 'firework_01',
      type: 'image',
      rect: ['12px','12px','24px','24px','auto','auto'],
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/firework_01.png','0px','0px']
   },
   {
      rect: ['6px','3px','36px','42px','auto','auto'],
      id: 'firework_02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/firework_02.png','0px','0px']
   },
   {
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'firework_03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/finish/images/firework_03.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '48px']
         ],
         "${_firework_03}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_firework_02}": [
            ["style", "top", '3px'],
            ["style", "left", '6px'],
            ["style", "display", 'none']
         ],
         "${_firework_01}": [
            ["style", "top", '12px'],
            ["style", "left", '12px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 372,
         autoPlay: true,
         timeline: [
            { id: "eid52", tween: [ "style", "${_firework_02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_firework_02}", "display", 'block', { fromValue: 'none'}], position: 130, duration: 0 },
            { id: "eid56", tween: [ "style", "${_firework_02}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid54", tween: [ "style", "${_firework_01}", "display", 'none', { fromValue: 'block'}], position: 130, duration: 0 },
            { id: "eid51", tween: [ "style", "${_firework_03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_firework_03}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid60", tween: [ "style", "${_firework_03}", "display", 'none', { fromValue: 'block'}], position: 372, duration: 0 }         ]
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
      type: 'text',
      id: 'Text',
      text: 'REPLAY',
      rect: ['22px','12px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','700','none','']
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
})(jQuery, AdobeEdge, "EDGE-1693577303-"+edgeCount);
