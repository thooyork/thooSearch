
(function( $ ) {

  $.fn.thooSearch = function(options) {
  
    var el,
        theHTML,
        defaults,
        settings;

    defaults = {
        width:400,
        formName:'thoosearch',
        formId:'thoosearch',
        formMethod:'get',
        placeholderText:'search',
        inputName:'search',
        buttonImage:'_gfx/magnifier.png'
    };

    settings = $.extend({}, defaults, options);

    el = this;

    el.width = settings.width;
    el.inputWidth = settings.width - 50;
    el.formName = settings.formName;
    el.formId = settings.formId;
    el.formAction = settings.formAction;
    el.formMethod = settings.formMethod;
    el.placeholderText = settings.placeholderText;
    el.inputName = settings.inputName;
    el.buttonImage = settings.buttonImage;

    theHTML = '<div class="ts_wrapper" style="width:'+el.width+'px">';
    theHTML = theHTML + '<div id="ts_sbox" class="ts_sbox" style="width:'+el.inputWidth+'px"><div class="ts_sbox_inner">';
    theHTML = theHTML + '<form name="'+el.formName+'" id="'+el.formId+'" action="'+el.formAction+'" method="'+el.formMethod+'">';
    theHTML = theHTML + '<input type="text" placeholder="'+ el.placeholderText +'" class="ts_input_inner" style="width:'+el.inputWidth+'px" name="'+el.inputName+'"/>';
    theHTML = theHTML + '</form></div></div>';
    theHTML = theHTML + '<div class="ts_sgo"><a href="javascript:void(0)"><img src="'+el.buttonImage+'"/></a></div></div>'; 
    //append html template to element
    $(el).html(theHTML);


    el.slideOut = function(){
        //$('.ts_sbox_inner').addClass('ts_slideout');
    };

    el.buttonClick = function(){
        //$('#'+el.formId).submit();
        var inpval = $('.ts_input_inner').val();
        if(inpval != ''){
            $('#'+el.formId).submit();
        }
        else{
            $('.ts_sbox_inner').toggleClass('ts_slide');
        }
    };


    
    //listener
    el.on("slideOut", el.slideOut);
    el.on("buttonClick", el.buttonClick);


    //trigger
    $('.ts_sgo').on('mouseover', el.slideOut);
    $('.ts_sgo').on('click', el.buttonClick);
    
    
    //preserve chainability:
    return this;

  };
})( jQuery );