$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    jQuery.ajax({
        url:     url, 
        type:     "POST", 
		dataType: "html", 
        data: jQuery("#"+ajax_form).serialize(),  
        success: function(response) {
        	result = jQuery.parseJSON(response);
        	document.getElementById(result_form).innerHTML = "type: "+result.name+"<br>sort: "+result.phonenumber+"<br> weight of one pack:"+result.weight+"<br> amount of packages: "+result.amount+"<br> departure date: "+result.depdate ;
    	}, 
    	error: function(response) { 
    		document.getElementById(result_form).innerHTML = "error. data had not sended to server";
    	}
 	});
}

