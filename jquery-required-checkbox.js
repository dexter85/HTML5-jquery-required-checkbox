/**
 * jquery-required-checkbox.js
 * @version v0.0.1
 * @author Igor Campus <igor.campus@gmail.com>
 * @copyright 2013 Igor Campus
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Simple fixes for multi input checkbox with the required attribute
 */
$(function(){
   
   /**
    * Bind to all the checkboxes that use the required attribute
   */	
   $(document).on('change', ':checkbox[required]', function() 
   {
	   //Get Name Element
	   var name = $(this).attr('name');
	   
	   //Remove attribute required and move on data-required
	   $('input[name="'+name+'"]').removeAttr( "required" ).attr('data-required', 'required');

   });
   
   /**
    * Bind di tutte le checkbox che hanno il data-required attivo 
   */
   $(document).on('change', ':checkbox[data-required="required"]', function() {
	   
	   //Get Name Element
	   var name = $(this).attr('name');
	   
	   //Count element
	   if(0 == $('input[name="'+name+'"]:checked').length)
	   {
		   $('input[name="'+name+'"]').attr('required', 'required').removeAttr('data-required');   
	   }
	   
   });
   
   
});
