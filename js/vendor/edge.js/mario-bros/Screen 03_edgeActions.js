/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("platform_01").css("background" , "url(/js/vendor/edge.js/mario-bros/images/bg_brick_blue.jpg)");
         sym.$("platform_02").css("background" , "url(/js/vendor/edge.js/mario-bros/images/bg_brick_blue.jpg)");
         sym.$("platform_03").css("background" , "url(/js/vendor/edge.js/mario-bros/images/bg_brick_blue.jpg)");
         sym.$("platform_04").css("background" , "url(/js/vendor/edge.js/mario-bros/images/bg_brick_bridge.jpg)");
         sym.$("platform_05").css("background" , "url(/js/vendor/edge.js/mario-bros/images/bg_brick_red.jpg)");
         sym.$("platform_06").css("background" , "url(/js/vendor/edge.js/mario-bros/images/bg_brick_red.jpg)");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11018, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_replay}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'coin'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("coin");
   //Edge symbol end:'coin'

   //=========================================================
   
   //Edge symbol: 'mario'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1841, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("walking left");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 840, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("walking right");

      });
      //Edge binding end

   })("mario");
   //Edge symbol end:'mario'

   //=========================================================
   
   //Edge symbol: 'coin_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 452, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("coin2");
   //Edge symbol end:'coin2'

   //=========================================================
   
   //Edge symbol: 'coin_1'
   (function(symbolName) {   
   
   })("score");
   //Edge symbol end:'score'

   //=========================================================
   
   //Edge symbol: 'replay'
   (function(symbolName) {   
   
   })("replay");
   //Edge symbol end:'replay'

})(jQuery, AdobeEdge, "EDGE-1995881270-"+edgeCount);