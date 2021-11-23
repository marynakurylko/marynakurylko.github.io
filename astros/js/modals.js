   
    $('.btn_login').on('click', function() {
        $('.overlay, #login').fadeIn('slow');
    });

    $('.btn_register').on('click', function() {
        $('.overlay, #register').fadeIn('slow');
    });
    
    $('.modal_close').on('click', function() {
        $('.overlay, #register, #login').fadeOut('slow');
    });
