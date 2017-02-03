$(function(){
$(".parentnew").show();
$(".parentactive").hide();
$(".parentexpired").hide();
$(".expiredlink").click(function(e){
e.preventDefault();
$(".filter").hide();
$(".parentexpired").show();
$(".parentnew").hide();
$(".parentactive").hide();
});
$(".activelink").click(function(e){
e.preventDefault()
$(".filter").hide();
$(".parentactive").show();;
$(".parentexpired").hide();
$(".parentnew").hide();
});
$(".newlink").click(function(e){
e.preventDefault();
$(".filter").show();
$(".parentnew").show();
$(".parentexpired").hide();
$(".parentactive").hide();
});
(function( $ ) {
$.sortByDate = function( elements, order ) {
var arr = [];
elements.each(function() {
var obj = {},
$el = $( this ),
time = $el.find( "time" ).text(),
date = new Date( $.trim( time ) ),
timestamp = date.getTime();
console.log(timestamp);
console.log($el[0]);
obj.html = $el[0].outerHTML;
obj.time = timestamp;
arr.push( obj);
;
});
var sorted = arr.sort(function( a, b ) {
if( order == "ASC" ) {
return a.time > b.time;
} else {
return b.time > a.time;
}
});
console.log(">>>>>>>>>>>>>>>>>>>.sorted",sorted)
return sorted;
};
$(function() {
var $newer = $( "#newer" ),
$older = $( "#older" ),
$content = $( "#posts" ),
$elements = $( ".post" );

$newer.click(function() {
var elements = $.sortByDate( $elements, "DESC" );
var html = "";
for( var i = 0; i < elements.length; ++i ) {
html += elements[i].html;
}
$content[0].innerHTML = html;
});
$older.click(function() {
var elements = $.sortByDate( $elements, "ASC" );
var html = "";
for( var i = 0; i < elements.length; ++i ) {
html += elements[i].html;
}
$content[0].innerHTML = html;
});
});
})( jQuery );  
});