/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='start/';

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
            id:'platform2',
            type:'rect',
            rect:['160px','529px','480px','48px','auto','auto'],
            fill:["rgba(200,76,12,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'q-block_4',
               type:'rect',
               rect:['144px','0','auto','auto','auto','auto']
            },
            {
               id:'q-block_3',
               type:'rect',
               rect:['144','0','auto','auto','auto','auto']
            },
            {
               id:'q-block_2',
               type:'rect',
               rect:['144','0','auto','auto','auto','auto']
            },
            {
               id:'q-block_5',
               type:'rect',
               rect:['144','0','auto','auto','auto','auto']
            }]
         },
         {
            id:'text_1000',
            display:'none',
            type:'image',
            rect:['233px','377px','39px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1000.png",'0px','0px']
         },
         {
            id:'platform1',
            type:'rect',
            rect:['300px','339px','192px','48px','auto','auto'],
            fill:["rgba(200,76,12,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'sky-block_1',
               type:'rect',
               rect:['144px','0px','48px','48px','auto','auto'],
               fill:["rgba(200,76,12,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'q-block_1',
               type:'rect',
               rect:['144','0px','auto','auto','auto','auto']
            },
            {
               id:'sky-block_0',
               type:'rect',
               rect:['0px','0px','48px','48px','auto','auto'],
               fill:["rgba(200,76,12,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'shroom_bigger',
               display:'none',
               type:'image',
               rect:['0px','-25px','48px','48px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"shroom_bigger.png",'0px','0px']
            },
            {
               id:'q-block_0',
               type:'rect',
               rect:['144','0px','auto','auto','auto','auto']
            }]
         },
         {
            id:'text_100',
            display:'none',
            type:'image',
            rect:['275px','500px','29px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_100.png",'0px','0px']
         },
         {
            id:'goomba_walking',
            type:'rect',
            rect:['77%','88%','auto','auto','auto','auto']
         },
         {
            id:'mario',
            type:'rect',
            rect:['396px','-1px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'mario',
            symbolName:'mario'
         },
         {
            id:'q-block_4',
            symbolName:'q-block'
         },
         {
            id:'q-block_5',
            symbolName:'q-block'
         },
         {
            id:'goomba_walking',
            symbolName:'goomba'
         },
         {
            id:'q-block_2',
            symbolName:'q-block'
         },
         {
            id:'q-block_1',
            symbolName:'q-block'
         },
         {
            id:'q-block_0',
            symbolName:'q-block'
         },
         {
            id:'q-block_3',
            symbolName:'q-block'
         }
         ]
      },
   states: {
      "Base State": {
         "${_q-block_4}": [
            ["style", "left", '384px']
         ],
         "${_sky-block_0}": [
            ["color", "background-color", 'rgba(58,188,254,1)'],
            ["style", "height", '48px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '48px']
         ],
         "${_q-block_5}": [
            ["style", "left", '48px'],
            ["style", "top", '0px']
         ],
         "${_platform1}": [
            ["color", "background-color", 'rgba(200,76,12,1)'],
            ["style", "height", '48px'],
            ["style", "top", '339px'],
            ["style", "left", '300px'],
            ["style", "width", '192px']
         ],
         "${_q-block_0}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_platform2}": [
            ["color", "background-color", 'rgba(200,76,12,1)'],
            ["style", "height", '48px'],
            ["style", "top", '529px'],
            ["style", "left", '160px'],
            ["style", "width", '480px']
         ],
         "${_q-block_1}": [
            ["style", "top", '0px']
         ],
         "${_text_1000}": [
            ["style", "top", '340px'],
            ["style", "left", '233px'],
            ["style", "display", 'none']
         ],
         "${_q-block_3}": [
            ["style", "left", '288px']
         ],
         "${_text_100}": [
            ["style", "top", '500px'],
            ["style", "left", '275px'],
            ["style", "display", 'none']
         ],
         "${_sky-block_1}": [
            ["color", "background-color", 'rgba(58,188,254,1)'],
            ["style", "height", '48px'],
            ["style", "top", '0px'],
            ["style", "left", '144px'],
            ["style", "width", '48px']
         ],
         "${_goomba_walking}": [
            ["style", "top", '60.12%'],
            ["style", "left", '77%'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(58,188,254,1.00)'],
            ["style", "width", '800px'],
            ["style", "height", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_q-block_2}": [
            ["style", "left", '144px'],
            ["style", "top", '0px']
         ],
         "${_mario}": [
            ["motion", "location", '396.5px -0.5px']
         ],
         "${_shroom_bigger}": [
            ["motion", "location", '24px -1px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6344.1757646494,
         autoPlay: true,
         timeline: [
            { id: "eid133", tween: [ "style", "${_shroom_bigger}", "display", 'block', { fromValue: 'none'}], position: 4135, duration: 0 },
            { id: "eid150", tween: [ "style", "${_shroom_bigger}", "display", 'none', { fromValue: 'block'}], position: 5685, duration: 0 },
            { id: "eid151", tween: [ "style", "${_text_1000}", "display", 'block', { fromValue: 'none'}], position: 5685, duration: 0 },
            { id: "eid153", tween: [ "style", "${_text_1000}", "display", 'none', { fromValue: 'block'}], position: 6344, duration: 0 },
            { id: "eid99", tween: [ "style", "${_goomba_walking}", "left", '33.25%', { fromValue: '77%'}], position: 0, duration: 4000 },
            { id: "eid21", tween: [ "motion", "${_mario}", [[396.5,-0.5,0,0],[396.5,341.5,0,0]]], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid51", tween: [ "motion", "${_mario}", [[396.5,341.5,0,0],[396.5,241.5,0,0]]], position: 1000, duration: 250, easing: "easeOutQuad" },
            { id: "eid52", tween: [ "motion", "${_mario}", [[396.5,241.5,0,0],[396.5,341.5,0,0]]], position: 1250, duration: 250, easing: "easeInQuad" },
            { id: "eid81", tween: [ "motion", "${_mario}", [[396.5,341.5,0,0],[289.55,342.6,0,0]]], position: 2199, duration: 484, easing: "easeInQuad" },
            { id: "eid83", tween: [ "motion", "${_mario}", [[289.55,342.6,0,0],[269.09,362.55,-148.19,240.57,-35.12,57.02],[199.36,531.5,0,0]]], position: 2683, duration: 317 },
            { id: "eid91", tween: [ "motion", "${_mario}", [[199.36,531.5,0,0],[176.87,531.5,0,0]]], position: 3000, duration: 218, easing: "easeOutQuad" },
            { id: "eid180", tween: [ "motion", "${_mario}", [[176.87,531.5,0,0],[176.5,531.5,0,0]]], position: 3296, duration: 0, easing: "easeOutQuad" },
            { id: "eid96", tween: [ "motion", "${_mario}", [[176.87,531.5,0,0],[226.44,425.15,15.37,-15.49,78.26,-78.86],[241.95,416.9,99.88,0,15.5,0],[292.57,502.5,0,0]]], position: 3656, duration: 344 },
            { id: "eid102", tween: [ "motion", "${_mario}", [[292.57,502.5,0,0],[323.5,416,0,0]]], position: 4000, duration: 100 },
            { id: "eid103", tween: [ "motion", "${_mario}", [[323.5,416,0,0],[383.13,531.5,0,0]]], position: 4100, duration: 204 },
            { id: "eid145", tween: [ "motion", "${_mario}", [[383.13,531.5,0,0],[414.38,531.5,0,0]]], position: 4304, duration: 190, easing: "easeOutQuad" },
            { id: "eid146", tween: [ "motion", "${_mario}", [[413.5,531.5,0,0],[295.5,531.5,0,0]]], position: 5100, duration: 394, easing: "easeInQuad" },
            { id: "eid147", tween: [ "motion", "${_mario}", [[295.5,531.5,0,0],[255.52,423.93,-82.48,-159.6,-76.32,-147.68],[189.5,338.5,0,0]]], position: 5494, duration: 723, easing: "easeOutCubic" },
            { id: "eid100", tween: [ "style", "${_goomba_walking}", "top", '60.13%', { fromValue: '60.12%'}], position: 0, duration: 4000 },
            { id: "eid129", tween: [ "style", "${_text_100}", "top", '390px', { fromValue: '500px'}], position: 4000, duration: 600 },
            { id: "eid138", tween: [ "motion", "${_shroom_bigger}", [[24,-1,0,0],[24,-24,0,0]]], position: 4135, duration: 965 },
            { id: "eid141", tween: [ "motion", "${_shroom_bigger}", [[24,-24,0,0],[-15.04,-24,0,0]]], position: 5100, duration: 328 },
            { id: "eid142", tween: [ "motion", "${_shroom_bigger}", [[-15.04,-24,0,0],[-29,-9.31,-45.58,78.25,-17.65,30.29],[-60.19,48,0,0]]], position: 5428, duration: 295 },
            { id: "eid128", tween: [ "style", "${_text_100}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid130", tween: [ "style", "${_text_100}", "display", 'none', { fromValue: 'block'}], position: 4600, duration: 0 },
            { id: "eid126", tween: [ "style", "${_goomba_walking}", "display", 'none', { fromValue: 'block'}], position: 4600, duration: 0 },
            { id: "eid108", tween: [ "style", "${_q-block_0}", "top", '-25px', { fromValue: '0px'}], position: 4100, duration: 35 },
            { id: "eid109", tween: [ "style", "${_q-block_0}", "top", '0px', { fromValue: '-25px'}], position: 4135, duration: 92 },
            { id: "eid152", tween: [ "style", "${_text_1000}", "top", '230px', { fromValue: '340px'}], position: 5685, duration: 659 },
            { id: "eid54", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_right'] ], ""], position: 1000 },
            { id: "eid53", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_right'] ], ""], position: 1500 },
            { id: "eid55", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_left'] ], ""], position: 2005 },
            { id: "eid82", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['run_left'] ], ""], position: 2199 },
            { id: "eid89", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stop_right'] ], ""], position: 3000 },
            { id: "eid90", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_right'] ], ""], position: 3217.7181519672 },
            { id: "eid95", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_right'] ], ""], position: 3656.5325082774 },
            { id: "eid107", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_goomba_walking}', ['squished'] ], ""], position: 4000.1757646494 },
            { id: "eid125", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_q-block_0}', ['inert'] ], ""], position: 4135.1757646494 },
            { id: "eid104", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stop_left'] ], ""], position: 4304.1757646494 },
            { id: "eid144", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_left'] ], ""], position: 4493.812615766 },
            { id: "eid148", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['run_left'] ], ""], position: 5100.1757646494 },
            { id: "eid149", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 5494.4469879411 },
            { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 5723.1757646494 },
            { id: "eid159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 5756.7741898695 },
            { id: "eid160", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 5793.6091077492 },
            { id: "eid161", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 5827.2075329693 },
            { id: "eid162", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 5865.1757646494 },
            { id: "eid163", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 5913.9086645773 },
            { id: "eid164", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 5970.5209963608 },
            { id: "eid165", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 6026.4469879411 },
            { id: "eid170", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 6084.9659363716 },
            { id: "eid171", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 6148.5203038705 },
            { id: "eid172", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 6216.9863318537 },
            { id: "eid175", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_q-block_2}', [0] ], ""], position: 6344.1757646494 },
            { id: "eid176", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_q-block_5}', [0] ], ""], position: 6344.1757646494 },
            { id: "eid174", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_q-block_4}', [0] ], ""], position: 6344.1757646494 },
            { id: "eid173", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_q-block_3}', [0] ], ""], position: 6344.1757646494 },
            { id: "eid177", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_q-block_1}', [0] ], ""], position: 6344.1757646494 }         ]
      }
   }
},
"q-block": {
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
      id: 'q-block_01',
      type: 'image',
      rect: ['0px','0px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/start/q-block_01.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'q-block_02',
      fill: ['rgba(0,0,0,0)','images/start/q-block_02.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'q-block_03',
      fill: ['rgba(0,0,0,0)','images/start/q-block_03.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'q-block_inert',
      fill: ['rgba(0,0,0,0)','images/start/q-block_inert.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_q-block_02}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '48px']
         ],
         "${_q-block_inert}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_q-block_03}": [
            ["style", "display", 'none']
         ],
         "${_q-block_01}": [
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
         duration: 1250,
         autoPlay: true,
         labels: {
            "pulsing": 0,
            "inert": 1250
         },
         timeline: [
            { id: "eid111", tween: [ "style", "${_q-block_03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_q-block_03}", "display", 'block', { fromValue: 'none'}], position: 627, duration: 0 },
            { id: "eid117", tween: [ "style", "${_q-block_03}", "display", 'none', { fromValue: 'block'}], position: 820, duration: 0 },
            { id: "eid113", tween: [ "style", "${_q-block_01}", "display", 'none', { fromValue: 'block'}], position: 441, duration: 0 },
            { id: "eid112", tween: [ "style", "${_q-block_02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_q-block_02}", "display", 'block', { fromValue: 'none'}], position: 441, duration: 0 },
            { id: "eid116", tween: [ "style", "${_q-block_02}", "display", 'none', { fromValue: 'block'}], position: 627, duration: 0 },
            { id: "eid120", tween: [ "style", "${_q-block_02}", "display", 'block', { fromValue: 'none'}], position: 820, duration: 0 },
            { id: "eid124", tween: [ "style", "${_q-block_02}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid123", tween: [ "style", "${_q-block_inert}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 }         ]
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
      id: 'mario_small_stand_right',
      type: 'image',
      rect: ['-17px','-48px','36px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/start/mario_small_stand_right.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-17px','-48px','36px','48px','auto','auto'],
      id: 'mario_small_stand_left2',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_stand_left.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-23px','-48px','45px','48px','auto','auto'],
      id: 'mario_small_run_right_01',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_run_right_01.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-14px','-48px','33px','48px','auto','auto'],
      id: 'mario_small_run_right_02',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_run_right_02.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-20px','-47px','39px','45px','auto','auto'],
      id: 'mario_small_run_right_03',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_run_right_03.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-21px','-48px','45px','48px','auto','auto'],
      id: 'mario_small_run_left_01',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_run_left_01.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-18px','-48px','33px','48px','auto','auto'],
      id: 'mario_small_run_left_02',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_run_left_02.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-18px','-48px','39px','45px','auto','auto'],
      id: 'mario_small_run_left_03',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_run_left_03.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-26px','-51px','48px','48px','auto','auto'],
      id: 'mario_small_jump_right',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_jump_right.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-21px','-51px','48px','48px','auto','auto'],
      id: 'mario_small_jump_left',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_jump_left.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-17px','-48px','39px','48px','auto','auto'],
      id: 'mario_small_stop_right',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_stop_right.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-21px','-48px','39px','48px','auto','auto'],
      id: 'mario_small_stop_left',
      fill: ['rgba(0,0,0,0)','images/start/mario_small_stop_left.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-24px','-93px','48px','93px','auto','auto'],
      id: 'mario_big_jump_right',
      fill: ['rgba(0,0,0,0)','images/start/mario_big_jump_right.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-24px','-93px','48px','93px','auto','auto'],
      id: 'mario_big_jump_left',
      fill: ['rgba(0,0,0,0)','images/start/mario_big_jump_left.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mario_small_run_right_02}": [
            ["style", "top", '-48px'],
            ["style", "left", '-14px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_stop_left}": [
            ["style", "top", '-48px'],
            ["style", "left", '-21px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_jump_left}": [
            ["style", "top", '-51px'],
            ["style", "left", '-21px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_stand_right}": [
            ["style", "top", '-48px'],
            ["style", "left", '-17px'],
            ["style", "display", 'block']
         ],
         "${_mario_small_stop_right}": [
            ["style", "top", '-48px'],
            ["style", "left", '-17px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '5px'],
            ["style", "width", '5px']
         ],
         "${_mario_small_stand_left2}": [
            ["style", "top", '-48px'],
            ["style", "left", '-17px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_run_right_01}": [
            ["style", "top", '-48px'],
            ["style", "left", '-23px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_run_left_01}": [
            ["style", "top", '-48px'],
            ["style", "left", '-21px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_jump_right}": [
            ["style", "top", '-51px'],
            ["style", "left", '-26px'],
            ["style", "display", 'none']
         ],
         "${_mario_big_jump_right}": [
            ["style", "top", '-93px'],
            ["style", "left", '-24px'],
            ["style", "display", 'none']
         ],
         "${_mario_big_jump_left}": [
            ["style", "top", '-93px'],
            ["style", "left", '-24px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_run_left_03}": [
            ["style", "top", '-48px'],
            ["style", "left", '-18px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_run_right_03}": [
            ["style", "top", '-48px'],
            ["style", "left", '-20px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_run_left_02}": [
            ["style", "top", '-48px'],
            ["style", "left", '-18px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3301,
         autoPlay: false,
         labels: {
            "stand_right": 0,
            "stand_left": 250,
            "run_right": 500,
            "run_left": 750,
            "jump_right": 1000,
            "jump_left": 1255,
            "stop_right": 1500,
            "stop_left": 1750,
            "big_jump_right": 3000,
            "big_jump_left": 3301
         },
         timeline: [
            { id: "eid85", tween: [ "style", "${_mario_small_stop_right}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid87", tween: [ "style", "${_mario_small_stop_right}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid25", tween: [ "style", "${_mario_small_run_right_01}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid26", tween: [ "style", "${_mario_small_run_right_01}", "display", 'none', { fromValue: 'block'}], position: 588, duration: 0 },
            { id: "eid156", tween: [ "style", "${_mario_big_jump_left}", "display", 'block', { fromValue: 'none'}], position: 3301, duration: 0 },
            { id: "eid22", tween: [ "style", "${_mario_small_run_right_02}", "display", 'block', { fromValue: 'none'}], position: 588, duration: 0 },
            { id: "eid28", tween: [ "style", "${_mario_small_run_right_02}", "display", 'none', { fromValue: 'block'}], position: 676, duration: 0 },
            { id: "eid31", tween: [ "style", "${_mario_small_run_left_01}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid34", tween: [ "style", "${_mario_small_run_left_01}", "display", 'none', { fromValue: 'block'}], position: 846, duration: 0 },
            { id: "eid154", tween: [ "style", "${_mario_big_jump_right}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid157", tween: [ "style", "${_mario_big_jump_right}", "display", 'none', { fromValue: 'block'}], position: 3301, duration: 0 },
            { id: "eid33", tween: [ "style", "${_mario_small_run_left_03}", "display", 'block', { fromValue: 'none'}], position: 944, duration: 0 },
            { id: "eid41", tween: [ "style", "${_mario_small_run_left_03}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid42", tween: [ "style", "${_mario_small_jump_left}", "display", 'block', { fromValue: 'none'}], position: 1255, duration: 0 },
            { id: "eid86", tween: [ "style", "${_mario_small_jump_left}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid37", tween: [ "style", "${_mario_small_stand_left2}", "display", 'block', { fromValue: 'none'}], position: 248, duration: 0 },
            { id: "eid38", tween: [ "style", "${_mario_small_stand_left2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_mario_small_jump_right}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid43", tween: [ "style", "${_mario_small_jump_right}", "display", 'none', { fromValue: 'block'}], position: 1255, duration: 0 },
            { id: "eid29", tween: [ "style", "${_mario_small_run_right_03}", "display", 'block', { fromValue: 'none'}], position: 676, duration: 0 },
            { id: "eid32", tween: [ "style", "${_mario_small_run_right_03}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid23", tween: [ "style", "${_mario_small_stand_right}", "display", 'none', { fromValue: 'block'}], position: 248, duration: 0 },
            { id: "eid35", tween: [ "style", "${_mario_small_run_left_02}", "display", 'block', { fromValue: 'none'}], position: 846, duration: 0 },
            { id: "eid36", tween: [ "style", "${_mario_small_run_left_02}", "display", 'none', { fromValue: 'block'}], position: 944, duration: 0 },
            { id: "eid88", tween: [ "style", "${_mario_small_stop_left}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid155", tween: [ "style", "${_mario_small_stop_left}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 }         ]
      }
   }
},
"goomba": {
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
      id: 'goomba01',
      type: 'image',
      rect: ['0px','0px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/start/goomba01.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'goomba02',
      fill: ['rgba(0,0,0,0)','images/start/goomba02.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'goomba_squashed',
      fill: ['rgba(0,0,0,0)','images/start/goomba_squashed.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_goomba01}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_goomba_squashed}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_goomba02}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '48px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 376,
         autoPlay: true,
         labels: {
            "walking": 0,
            "squished": 376
         },
         timeline: [
            { id: "eid20", tween: [ "style", "${_goomba01}", "display", 'none', { fromValue: 'block'}], position: 126, duration: 0 },
            { id: "eid21", tween: [ "style", "${_goomba01}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid106", tween: [ "style", "${_goomba01}", "display", 'none', { fromValue: 'block'}], position: 376, duration: 0 },
            { id: "eid18", tween: [ "style", "${_goomba02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_goomba02}", "display", 'block', { fromValue: 'none'}], position: 126, duration: 0 },
            { id: "eid22", tween: [ "style", "${_goomba02}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid105", tween: [ "style", "${_goomba_squashed}", "display", 'block', { fromValue: 'none'}], position: 376, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "mario-canvas");
