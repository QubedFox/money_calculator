
function addDenominations(currency){
    let denominations = getDenominations(currency)
    let html = ''

    for (i = 0; i < denominations.length; i++){     
        html += '<div class="row">'
        html += '<div class="col-2">'
        html += '<p>' + denominations[i][0] + ' x </p>'
        html += '</div>'
        html += '<div class="col-3">'
        html += '<input class="' + denominations[i][2] + ' form-control input-field" type="number" value=0>'
        html += '</div>'
        html += '<div class="col-6">'
        html += '<button id="' + denominations[i][2] + '" class="increase btn btn-primary"><i class="fas fa-plus"></i></button>'
        html += '<button id="' + denominations[i][2] + '" class="decrease btn btn-primary"><i class="fas fa-minus"></i></button>'
        html += '</div>'
        html += '</div>'
    }
    $('.input-form').html(html);

}

function refreshTotal(currency){
    let total = 0.00;
    let denominations = getDenominations(currency)

    for (i = 0; i < denominations.length; i++){
        total += (parseFloat($('.' + denominations[i][2]).val() || 0) * parseFloat(denominations[i][1]))
    }    

    $('.total').html('<p>Total = $' + total + '</p>');
}

function clearTotal(){
    $('.total').html('<p>Total</p>')
}

function increaseCount(field){
    let currentCount = $(field).val()
    let modifier = getMultiplier()

    if (isNaN(parseInt(currentCount))){
        $(field).val(parseInt(modifier))
    }
    else{
        $(field).val(parseInt(currentCount) + parseInt(modifier))
    }
}

function decreaseCount(field){
    let currentCount = $(field).val()
    let modifier = getMultiplier()

    if (currentCount > 0 && currentCount - modifier >= 0){
        $(field).val(parseInt(currentCount) - parseInt(modifier))
    }
    else if (currentCount - modifier < 0){
        $(field).val( 0)
    }
}

function updateMultiplierButton(multiplier){
    $('.multiplier').text(multiplier)
}

function fillCurrencyDropDown(){
    let currency_descriptions = getCurrencyDescriptions()
    console.log(currency_descriptions)
    let html = ''

    html += '<option value="None">Select a Currency</option>'

    for (i = 0; i < currency_descriptions.length; i++){
        html += '<option value="' + currency_descriptions[i][1] + '">' + currency_descriptions[i][0] + ' - ' + currency_descriptions[i][1] +  '</option>'
    }

    $('#currencyDropDown').html(html)
}

function isFormEmpty(){
    if ($('.input-form').is(':empty')){
        return true
    }
    else{
        return false
    }
}

function addEmptyFormPlaceholder(){
    let html = '<p class="text-muted text-center lead mt-4 mb-4">Select a currency to begin...</p>'
    $('.input-form').html(html)
}