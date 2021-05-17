$(function () {
    const body = $('body');

    body.on('click', '.calculate', function() {
        calcTotal();
    });

    body.on('click', '.increase', function(){
        let target = $(this).closest('.row').find('.input-field');
        increaseCount(target);
    });

    body.on('click', '.decrease', function(){
        let target = $(this).closest('.row').find('.input-field');
        decreaseCount(target);
    });

    body.on('click', '.multiplier', function(){
        updateMultiplierButton()
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

    $('.total').html('<p>Total = $' + total + '</p>');
}

function increaseCount(field){
    let currentCount = $(field).val()
    let modifier = getMultiplier()

    if (isNaN(parseInt(currentCount))){
        $(field).attr('value', parseInt(0))
    }
    else{
        $(field).attr('value', parseInt(currentCount) + parseInt(modifier))
    }
}

function decreaseCount(field){
    let currentCount = $(field).val()
    let modifier = getMultiplier()

    if (currentCount > 0 && currentCount - modifier >= 0){
        $(field).attr('value', parseInt(currentCount) - parseInt(modifier))
    }
    else if (currentCount - modifier < 0){
        $(field).attr('value', 0)
    }
}