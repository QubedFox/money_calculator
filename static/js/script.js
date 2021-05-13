$(function () {
    const body = $('body');

    body.on('click', '.calculate', function() {
        calcTotal();
    });
})

function calcTotal(){
    let total = 0;

    total += (parseInt($('.hundred').val() || 0) * 100);
    total += (parseInt($('.fifty').val() || 0) * 50);
    total += (parseInt($('.twenty').val() || 0) * 20);
    total += (parseInt($('.ten').val() || 0) * 10);
    total += (parseInt($('.five').val() || 0) * 5);
    total += (parseInt($('.two').val() || 0) * 2);
    total += (parseInt($('.one').val() || 0) * 1);
    total += (parseInt($('.half').val() || 0) * 0.5);
    total += (parseInt($('.fifth').val() || 0) * 0.2);
    total += (parseInt($('.tenth').val() || 0) * 0.1);
    total += (parseInt($('.twentieth').val() || 0) * 0.05); 


    console.log(total);

    $('.total').html('<p>Total = $' + total + '</p>');
}