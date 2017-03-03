/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
    $('.header').click(function() {
        $(this).toggleClass('active').find('i').toggleClass('fa-plus fa-minus')
            .closest('div').siblings('div')
            .removeClass('active').find('i').removeClass('fa-minus').addClass('fa-plus');
        $(this).next('.accordion_content').slideToggle().siblings('.accordion_content').slideUp() 
    });

    $('.accordion_content').hide();

    $( function() {
        $( "#selectable-glass" ).selectable({
            stop: function() {
                var result = $( "#select-result-glass" ).empty();
                $( ".glass-selector.ui-selected", this ).each(function() {
                    result.append( $(".glass-selector.ui-selected").text() );
                    $('.gc-header').next('.accordion_content').slideToggle().siblings('.accordion_content').slideUp();
                });
            }
        });
    });

    $( function() {
        $( "#selectable-hardware" ).selectable({
            stop: function() {
                var result = $( "#select-result-hardware" ).empty();
                $( ".hardware-selector.ui-selected", this ).each(function() {
                    result.append( $(".hardware-selector.ui-selected").text() );
                    $('.hf-header').next('.accordion_content').slideToggle().siblings('.accordion_content').slideUp();
                });
            }
        });
    });

    $( function() {
        $( "#selectable-mounting" ).selectable({
            stop: function() {
                var result = $( "#select-result-mounting" ).empty();
                $( ".mounting-selector.ui-selected", this ).each(function() {
                    result.append( $(".mounting-selector.ui-selected").text() );
                    $('.m-header').next('.accordion_content').slideToggle().siblings('.accordion_content').slideUp();
                });
            }
        });
    });
});

