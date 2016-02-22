$(document).ready(function()
  {
    $('.js-form-validate').validate();
    if($('.field').length)
    {
      $('.field').each(function() {
        attachSourceCode.attach($(this), $(this));
      });
    }
    
    $(document).on('click', 'code', function() {
      $(this).focus().selectText();
    });
  }
);

var attachSourceCode = {
  attach: function (elementToAttach, elementToAppend) {
    var content = $('<pre />').append($('<code />').text($.trim(elementToAttach.html())));
    elementToAppend.append(content).next('a.view-code').click(function(e) {
      e.preventDefault();
      content.slideToggle();
    });
  }
};

jQuery.fn.selectText = function() {
   var doc = document;
   var element = this[0];
   console.log(this, element);
   if (doc.body.createTextRange) {
     var range = document.body.createTextRange();
     range.moveToElementText(element);
     range.select();
   }
   else if (window.getSelection) {
     var selection = window.getSelection();        
     var range = document.createRange();
     range.selectNodeContents(element);
     selection.removeAllRanges();
     selection.addRange(range);
   }
};