/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='/js/vendor/edge.js/intro/images/';

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
            id:'platform3',
            type:'rect',
            rect:['340px','640px','240px','48px','auto','auto'],
            fill:["rgba(200,76,12,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'platform2',
            type:'rect',
            rect:['150px','460px','192px','48px','auto','auto'],
            fill:["rgba(200,76,12,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'sky-block_1',
               type:'rect',
               rect:['72px','0px','48px','48px','auto','auto'],
               fill:["rgba(200,76,12,1)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'q-block_1',
               type:'rect',
               rect:['144','0px','auto','auto','auto','auto']
            }]
         },
         {
            id:'text_1000',
            display:'none',
            type:'image',
            rect:['157px','377px','39px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_10002.png",'0px','0px']
         },
         {
            id:'platform1',
            type:'rect',
            rect:['300px','259px','192px','48px','auto','auto'],
            fill:["rgba(200,76,12,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
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
            id:'mario',
            type:'rect',
            rect:['396px','-1px','auto','auto','auto','auto']
         },
         {
            id:'text_100',
            display:'none',
            type:'image',
            rect:['432px','580px','29px','24px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"text_1002.png",'0px','0px']
         },
         {
            id:'goomba_walking',
            type:'rect',
            rect:['77%','88%','auto','auto','auto','auto']
         },
         {
            id:'replay2',
            display:'none',
            type:'rect',
            rect:['660px','40','auto','auto','auto','auto'],
            cursor:['pointer'],
            transform:[]
         }
         ],
         symbolInstances: [
         {
            id:'mario',
            symbolName:'mario'
         },
         {
            id:'goomba_walking',
            symbolName:'goomba'
         },
         {
            id:'q-block_1',
            symbolName:'q-block'
         },
         {
            id:'replay2',
            symbolName:'replay'
         },
         {
            id:'q-block_0',
            symbolName:'q-block'
         }
         ]
      },
   states: {
      "Base State": {
         "${_shroom_bigger}": [
            ["style", "top", '-25px'],
            ["motion", "location", '0px -25px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_sky-block_0}": [
            ["color", "background-color", 'rgba(58,188,254,1)'],
            ["style", "height", '48px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '48px']
         ],
         "${_q-block_0}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_platform2}": [
            ["color", "background-color", 'rgba(200,76,12,1)'],
            ["style", "height", '48px'],
            ["style", "top", '460px'],
            ["style", "left", '150px'],
            ["style", "width", '192px']
         ],
         "${_q-block_1}": [
            ["style", "top", '0px'],
            ["style", "left", '72px']
         ],
         "${_text_1000}": [
            ["style", "top", '408px'],
            ["style", "left", '157px'],
            ["style", "display", 'none']
         ],
         "${_platform1}": [
            ["color", "background-color", 'rgba(200,76,12,1)'],
            ["style", "height", '48px'],
            ["style", "top", '259px'],
            ["style", "left", '300px'],
            ["style", "width", '192px']
         ],
         "${_platform3}": [
            ["color", "background-color", 'rgba(200,76,12,1)'],
            ["style", "height", '48px'],
            ["style", "top", '640px'],
            ["style", "left", '340px'],
            ["style", "width", '240px']
         ],
         "${_text_100}": [
            ["style", "display", 'none'],
            ["style", "left", '432px'],
            ["style", "top", '580px']
         ],
         "${_goomba_walking}": [
            ["style", "top", '51.5%'],
            ["style", "opacity", '1'],
            ["style", "left", '18.75%'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(58,188,254,1.00)'],
            ["style", "width", '800px'],
            ["style", "height", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_sky-block_1}": [
            ["color", "background-color", 'rgba(58,188,254,1)'],
            ["style", "height", '48px'],
            ["style", "top", '0px'],
            ["style", "left", '72px'],
            ["style", "width", '48px']
         ],
         "${_mario}": [
            ["motion", "location", '396.5px -0.5px'],
            ["style", "opacity", '1']
         ],
         "${_replay2}": [
            ["style", "display", 'none'],
            ["style", "left", '660px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9347,
         autoPlay: false,
         timeline: [
            { id: "eid6", tween: [ "style", "${_shroom_bigger}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid145", tween: [ "style", "${_shroom_bigger}", "display", 'block', { fromValue: 'none'}], position: 5584, duration: 0, easing: "easeOutQuad" },
            { id: "eid159", tween: [ "style", "${_shroom_bigger}", "display", 'none', { fromValue: 'block'}], position: 7847, duration: 0 },
            { id: "eid184", tween: [ "style", "${_text_1000}", "display", 'block', { fromValue: 'none'}], position: 7847, duration: 0 },
            { id: "eid183", tween: [ "style", "${_text_1000}", "display", 'none', { fromValue: 'block'}], position: 8415, duration: 0 },
            { id: "eid179", tween: [ "style", "${_goomba_walking}", "display", 'none', { fromValue: 'block'}], position: 4419, duration: 0 },
            { id: "eid197", tween: [ "style", "${_goomba_walking}", "display", 'block', { fromValue: 'none'}], position: 8415, duration: 0 },
            { id: "eid51", tween: [ "style", "${_goomba_walking}", "top", '74%', { fromValue: '51.5%'}], position: 2553, duration: 401 },
            { id: "eid195", tween: [ "style", "${_goomba_walking}", "top", '51.5%', { fromValue: '74%'}], position: 8415, duration: 0 },
            { id: "eid9", tween: [ "motion", "${_mario}", [[398.5,2.5,0,0],[398.5,261.49,0,0]]], position: 0, duration: 378 },
            { id: "eid16", tween: [ "motion", "${_mario}", [[399.5,261.5,0,0],[412.2,261.75,0,0]]], position: 960, duration: 149 },
            { id: "eid53", tween: [ "motion", "${_mario}", [[412.2,261.75,0,0],[465.05,111.2,73.48,-54.77]]], position: 1109, duration: 263, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "motion", "${_mario}", [[469.58,109.17,24.52,-3.14],[488.48,127.85,129.88,333.58,14.44,37.09],[560.45,642.5,0,0]]], position: 1372, duration: 628, easing: "easeInQuad" },
            { id: "eid55", tween: [ "motion", "${_mario}", [[560.45,642.5,0,0],[577.5,642.5,0,0]]], position: 2000, duration: 149, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "motion", "${_mario}", [[577.5,642.5,0,0],[547.78,642.5,0,0]]], position: 2954, duration: 195 },
            { id: "eid56", tween: [ "motion", "${_mario}", [[547.78,642.5,0,0],[497.18,488.45,-0.49,-0.16,-85.8,-28.61],[496.69,488.3,-0.49,-0.13]]], position: 3149, duration: 295, easing: "easeOutQuad" },
            { id: "eid73", tween: [ "motion", "${_mario}", [[493.8,488.11,-75.12,9.67],[448.79,620.15,0,0]]], position: 3444, duration: 301, easing: "easeInQuad" },
            { id: "eid59", tween: [ "motion", "${_mario}", [[448.79,620.15,0,0],[366.83,405.69,-147.18,-32.39]]], position: 3745, duration: 372, easing: "easeOutQuad" },
            { id: "eid62", tween: [ "motion", "${_mario}", [[364.05,405.57,-86.26,-6.64],[321.43,462.72,0,0]]], position: 4117, duration: 224, easing: "easeInQuad" },
            { id: "eid79", tween: [ "motion", "${_mario}", [[321.43,462.72,0,0],[297.5,462.5,0,0]]], position: 4341, duration: 195, easing: "easeOutQuad" },
            { id: "eid97", tween: [ "motion", "${_mario}", [[297.5,462.5,0,0],[305.5,462.5,0,0]]], position: 5272, duration: 114 },
            { id: "eid89", tween: [ "motion", "${_mario}", [[305.5,462.5,0,0],[323.5,335.52,0,0]]], position: 5386, duration: 140 },
            { id: "eid90", tween: [ "motion", "${_mario}", [[323.5,335.52,0,0],[339.5,462.5,0,0]]], position: 5527, duration: 197 },
            { id: "eid151", tween: [ "motion", "${_mario}", [[339.5,462.5,0,0],[343.5,462.5,0,0]]], position: 5723, duration: 115, easing: "easeOutQuad" },
            { id: "eid220", tween: [ "motion", "${_mario}", [[343.5,462.5,0,0],[313.5,462.5,0,0]]], position: 6500, duration: 349, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "motion", "${_mario}", [[313.48,462.5,0,0],[203.5,462.5,0,0]]], position: 7470, duration: 377 },
            { id: "eid160", tween: [ "motion", "${_mario}", [[203.5,462.5,0,0],[171.62,362.71,-52.42,-135.68,-65.63,-169.84],[134.5,282.5,-27.07,-26.33]]], position: 7847, duration: 568, easing: "easeOutCubic" },
            { id: "eid30", tween: [ "style", "${_goomba_walking}", "left", '52.93%', { fromValue: '18.75%'}], position: 0, duration: 3750 },
            { id: "eid196", tween: [ "style", "${_goomba_walking}", "left", '18.75%', { fromValue: '52.93%'}], position: 8415, duration: 0 },
            { id: "eid182", tween: [ "style", "${_text_1000}", "top", '288px', { fromValue: '408px'}], position: 7847, duration: 568 },
            { id: "eid174", tween: [ "style", "${_text_100}", "top", '460px', { fromValue: '580px'}], position: 3745, duration: 674 },
            { id: "eid147", tween: [ "style", "${_shroom_bigger}", "left", '-150px', { fromValue: '0px'}], position: 6500, duration: 1500 },
            { id: "eid186", tween: [ "style", "${_mario}", "opacity", '0', { fromValue: '1'}], position: 8415, duration: 661 },
            { id: "eid177", tween: [ "style", "${_text_100}", "display", 'block', { fromValue: 'none'}], position: 3745, duration: 0 },
            { id: "eid178", tween: [ "style", "${_text_100}", "display", 'none', { fromValue: 'block'}], position: 4419, duration: 0 },
            // { id: "eid219", tween: [ "style", "${_replay2}", "display", 'block', { fromValue: 'none'}], position: 8415, duration: 0, easing: "easeInQuad" },
            { id: "eid146", tween: [ "style", "${_shroom_bigger}", "top", '-48px', { fromValue: '-25px'}], position: 5584, duration: 916 },
            { id: "eid149", tween: [ "style", "${_shroom_bigger}", "top", '153px', { fromValue: '-48px'}], position: 6902, duration: 389 },
            { id: "eid137", tween: [ "style", "${_q-block_0}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid217", tween: [ "style", "${_q-block_0}", "top", '-25px', { fromValue: '0px'}], position: 5527, duration: 57, easing: "easeOutQuad" },
            { id: "eid144", tween: [ "style", "${_q-block_0}", "top", '0px', { fromValue: '-25px'}], position: 5584, duration: 205 },
            { id: "eid210", tween: [ "style", "${_goomba_walking}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid215", tween: [ "style", "${_goomba_walking}", "opacity", '1', { fromValue: '0'}], position: 8415, duration: 661 },
            { id: "eid188", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_q-block_1}', ['pulsing'] ], ""], position: 0 },
            { id: "eid187", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_q-block_0}', ['pulsing'] ], ""], position: 0 },
            { id: "eid194", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_right'] ], ""], position: 0 },
            { id: "eid193", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_goomba_walking}', ['walking'] ], ""], position: 0 },
            { id: "eid102", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_left'] ], ""], position: 594 },
            { id: "eid103", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['run_right'] ], ""], position: 960.28743861958 },
            { id: "eid104", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_right'] ], ""], position: 1108.9002375432 },
            { id: "eid107", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stop_left'] ], ""], position: 2000 },
            { id: "eid108", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_left'] ], ""], position: 2149 },
            { id: "eid109", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['run_left'] ], ""], position: 2954.3764482866 },
            { id: "eid110", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 3149.3764482866 },
            { id: "eid101", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_goomba_walking}', ['squished'] ], ""], position: 3750 },
            { id: "eid118", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stop_right'] ], ""], position: 4385.8809324001 },
            { id: "eid119", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_right'] ], ""], position: 4535.8809324001 },
            { id: "eid121", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['run_right'] ], ""], position: 5272.4918785905 },
            { id: "eid122", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_right'] ], ""], position: 5386.1104839751 },
            { id: "eid150", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_q-block_0}', ['inert'] ], ""], position: 5526.5573168637 },
            { id: "eid125", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_right'] ], ""], position: 5723.5092457643 },
            { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_left'] ], ""], position: 6102 },
            { id: "eid222", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['run_left'] ], ""], position: 6500 },
            { id: "eid223", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['stand_left'] ], ""], position: 6750 },
            { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mario}', ['run_left'] ], ""], position: 7470.0318339628 },
            { id: "eid162", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 7847.4383884827 },
            { id: "eid163", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 7881.0368137028 },
            { id: "eid164", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 7917.8717315825 },
            { id: "eid165", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 7951.4701568026 },
            { id: "eid166", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 7989.4383884827 },
            { id: "eid167", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 8038.1712884106 },
            { id: "eid168", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 8094.7836201941 },
            { id: "eid169", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 8150.7096117744 },
            { id: "eid170", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 8209.2285602049 },
            { id: "eid171", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['jump_left'] ], ""], position: 8272.7829277038 },
            { id: "eid172", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mario}', ['big_jump_left'] ], ""], position: 8341.248955687 },
            { id: "eid200", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_goomba_walking}', ['walking'] ], ""], position: 8414.7943333911 },
            { id: "eid185", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_q-block_1}', ['pulsing'] ], ""], position: 8414.7943333911 }         ]
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
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_stand_right.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-17px','-48px','36px','48px','auto','auto'],
      id: 'mario_small_stand_left2',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_stand_left.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-23px','-48px','45px','48px','auto','auto'],
      id: 'mario_small_run_right_01',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_run_right_01.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-14px','-48px','33px','48px','auto','auto'],
      id: 'mario_small_run_right_02',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_run_right_02.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-20px','-47px','39px','45px','auto','auto'],
      id: 'mario_small_run_right_03',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_run_right_03.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-21px','-48px','45px','48px','auto','auto'],
      id: 'mario_small_run_left_01',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_run_left_01.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-18px','-48px','33px','48px','auto','auto'],
      id: 'mario_small_run_left_02',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_run_left_02.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-18px','-48px','39px','45px','auto','auto'],
      id: 'mario_small_run_left_03',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_run_left_03.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-26px','-51px','48px','48px','auto','auto'],
      id: 'mario_small_jump_right',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_jump_right.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-21px','-51px','48px','48px','auto','auto'],
      id: 'mario_small_jump_left',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_jump_left.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-17px','-48px','39px','48px','auto','auto'],
      id: 'mario_small_stop_right',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_stop_right.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-21px','-48px','39px','48px','auto','auto'],
      id: 'mario_small_stop_left',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_small_stop_left.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-24px','-93px','48px','93px','auto','auto'],
      id: 'mario_big_jump_right',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_big_jump_right.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-24px','-93px','48px','93px','auto','auto'],
      id: 'mario_big_jump_left',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/mario_big_jump_left.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mario_small_stand_left2}": [
            ["style", "top", '-48px'],
            ["style", "left", '-17px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_stop_left}": [
            ["style", "top", '-48px'],
            ["style", "left", '-21px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_stop_right}": [
            ["style", "top", '-48px'],
            ["style", "left", '-17px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_stand_right}": [
            ["style", "top", '-48px'],
            ["style", "left", '-17px'],
            ["style", "display", 'block']
         ],
         "${_mario_small_jump_left}": [
            ["style", "top", '-51px'],
            ["style", "left", '-21px'],
            ["style", "display", 'none']
         ],
         "${_mario_big_jump_right}": [
            ["style", "top", '-93px'],
            ["style", "left", '-24px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_run_left_03}": [
            ["style", "top", '-48px'],
            ["style", "left", '-18px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '5px'],
            ["style", "width", '5px']
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
         "${_mario_small_run_right_01}": [
            ["style", "top", '-48px'],
            ["style", "left", '-23px'],
            ["style", "display", 'none']
         ],
         "${_mario_big_jump_left}": [
            ["style", "top", '-93px'],
            ["style", "left", '-24px'],
            ["style", "display", 'none']
         ],
         "${_mario_small_run_right_02}": [
            ["style", "top", '-48px'],
            ["style", "left", '-14px'],
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
            { id: "eid33", tween: [ "style", "${_mario_small_run_left_03}", "display", 'block', { fromValue: 'none'}], position: 944, duration: 0 },
            { id: "eid41", tween: [ "style", "${_mario_small_run_left_03}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_mario_small_run_right_01}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid26", tween: [ "style", "${_mario_small_run_right_01}", "display", 'none', { fromValue: 'block'}], position: 588, duration: 0 },
            { id: "eid156", tween: [ "style", "${_mario_big_jump_left}", "display", 'block', { fromValue: 'none'}], position: 3301, duration: 0 },
            { id: "eid88", tween: [ "style", "${_mario_small_stop_left}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid155", tween: [ "style", "${_mario_small_stop_left}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid31", tween: [ "style", "${_mario_small_run_left_01}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid34", tween: [ "style", "${_mario_small_run_left_01}", "display", 'none', { fromValue: 'block'}], position: 846, duration: 0 },
            { id: "eid42", tween: [ "style", "${_mario_small_jump_left}", "display", 'block', { fromValue: 'none'}], position: 1255, duration: 0 },
            { id: "eid86", tween: [ "style", "${_mario_small_jump_left}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid85", tween: [ "style", "${_mario_small_stop_right}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid87", tween: [ "style", "${_mario_small_stop_right}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid154", tween: [ "style", "${_mario_big_jump_right}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid157", tween: [ "style", "${_mario_big_jump_right}", "display", 'none', { fromValue: 'block'}], position: 3301, duration: 0 },
            { id: "eid29", tween: [ "style", "${_mario_small_run_right_03}", "display", 'block', { fromValue: 'none'}], position: 676, duration: 0 },
            { id: "eid32", tween: [ "style", "${_mario_small_run_right_03}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid40", tween: [ "style", "${_mario_small_jump_right}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid43", tween: [ "style", "${_mario_small_jump_right}", "display", 'none', { fromValue: 'block'}], position: 1255, duration: 0 },
            { id: "eid37", tween: [ "style", "${_mario_small_stand_left2}", "display", 'block', { fromValue: 'none'}], position: 248, duration: 0 },
            { id: "eid38", tween: [ "style", "${_mario_small_stand_left2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid23", tween: [ "style", "${_mario_small_stand_right}", "display", 'none', { fromValue: 'block'}], position: 248, duration: 0 },
            { id: "eid35", tween: [ "style", "${_mario_small_run_left_02}", "display", 'block', { fromValue: 'none'}], position: 846, duration: 0 },
            { id: "eid36", tween: [ "style", "${_mario_small_run_left_02}", "display", 'none', { fromValue: 'block'}], position: 944, duration: 0 },
            { id: "eid22", tween: [ "style", "${_mario_small_run_right_02}", "display", 'block', { fromValue: 'none'}], position: 588, duration: 0 },
            { id: "eid28", tween: [ "style", "${_mario_small_run_right_02}", "display", 'none', { fromValue: 'block'}], position: 676, duration: 0 }         ]
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
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/q-block_01.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'q-block_02',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/q-block_02.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'q-block_03',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/q-block_03.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'q-block_inert',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/q-block_inert.png','0px','0px']
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
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/goomba012.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'goomba02',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/goomba022.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','48px','48px','auto','auto'],
      id: 'goomba_squashed',
      fill: ['rgba(0,0,0,0)','/js/vendor/edge.js/intro/images/goomba_squashed2.png','0px','0px']
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
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '48px']
         ],
         "${_goomba02}": [
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
      type: 'rect',
      rect: ['0px','0px','100px','40px','auto','auto'],
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
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
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

/* Altered below
$(window).ready(function() {
     Edge.launchComposition(compId);
}); */
$(window).bind( "animationReady", function() {
   Edge.launchComposition(compId);
});
/* end alteration */

})(jQuery, AdobeEdge, "EDGE-1672177555-"+edgeCount);
