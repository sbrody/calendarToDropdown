window.onload = function() {

var calendarToList = function() {

  jQuery('.yui-calendar').addClass('sb1');
  var specialDate = document.getElementsByClassName('specialdate');
  var specialDateLength = specialDate.length;
  for (var i=0; i <= specialDateLength; i++) {
    var table = specialDate[i].closest('table');
    var month = jQuery(table).find('.calheader').text();
    var span = document.createElement("span");
    var link = specialDate[i].childNodes[0];
    jQuery(link).append(span);
    jQuery(span).text(month);
   var rowPosition = specialDate[i].cellIndex;
    var day;
    switch (rowPosition) {
      case 1: day = "Monday";
        break;
      case 2: day = "Tuesday";
      break;
      case 3: day = "Wednesday";
      break;
      case 4: day = "Thursday";
      break;
      case 5: day = "Friday";
      break;
      case 6: day = "Saturday";
      break;
      case 7: day = "Sunday";
      break;
    }
    var span2 = document.createElement("span");
    jQuery(link).prepend(span2);
    jQuery(span2).text(day);
    jQuery('#calarea_1').addClass('collapse').attr('id', 'collapseList');
  }
};
calendarToList();

jQuery('body').click(function(){
  window.setTimeout(function(){
    if (!jQuery('.yui-calendar').hasClass('sb1')){
      calendarToList();
    }
  }, 50);
});
};
