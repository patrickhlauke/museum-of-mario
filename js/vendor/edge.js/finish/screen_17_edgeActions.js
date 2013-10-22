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
         sym.$("ground").css("background" , "url(/js/vendor/edge.js/finish/images/bg_brick.jpg)");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_replay2}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mario'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 625, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("climbing");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1582, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("walking_right");

      });
      //Edge binding end

   })("mario");
   //Edge symbol end:'mario'

   //=========================================================
   
   //Edge symbol: 'firework'
   (function(symbolName) {   
   
   })("firework");
   //Edge symbol end:'firework'

   //=========================================================
   
   //Edge symbol: 'replay'
   (function(symbolName) {   
   
   })("replay");
   //Edge symbol end:'replay'

})(jQuery, AdobeEdge, "EDGE-1693577303-"+edgeCount);