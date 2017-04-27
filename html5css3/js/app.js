$(function() {
    (function($) {
        $.getUrlParam = function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    })(jQuery);
    var xx = $.getUrlParam('promotionlogin');
    if ("" != xx && null != xx) {
        $("#promotionlogin").val(xx);
    }
    alert(xx);
});
function hklogin(){
     $('#smart-form').submit();
}