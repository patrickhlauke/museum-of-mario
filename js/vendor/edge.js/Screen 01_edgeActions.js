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
         sym.$("platform1").css("background" , "url(images/start/bg_brick_platform.jpg)");
         sym.$("platform2").css("background" , "url(images/start/bg_brick_platform.jpg)");
         sym.$("platform3").css("background" , "url(images/start/bg_brick_platform.jpg)");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'q-block'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("q-block");
   //Edge symbol end:'q-block'

   //=========================================================
   
   //Edge symbol: 'mario'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 676, function(sym, e) {
         sym.play("run_right");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 944, function(sym, e) {
         sym.play("run_left");

      });
      //Edge binding end

   })("mario");
   //Edge symbol end:'mario'

   //=========================================================
   
   //Edge symbol: 'goomba'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("goomba");
   //Edge symbol end:'goomba'

})(jQuery, AdobeEdge, "mario-canvas");