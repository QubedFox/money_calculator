//
//  Code by Nicholas Taplin
//  GitHub: https://github.com/QubedFox
//


//Add the denomination input group for the user to add values too
//Input group contains:
    //Denomination Label
    //Input Field
    //Denomination Total
    //Increase and Decrease Buttons
function addDenominations(currency){
    let denominations = getDenominations(currency)
    let html = ''

    for (i = 0; i < denominations.length; i++){     
        html += '<div class="input-group mb-2 mt-2 justify-content-center">'
        html += '   <span class="input-group-text denomination-label justify-content-center">'+denominations[i][0]+'</span>'
        html += '   <input type="number" class="form-control input-field '+denominations[i][2]+'" value="0">'
        html += '   <input type="text" class="form-control denomination-total denomination-total-'+denominations[i][2]+'" value="0" readonly>'
        html += '   <button class="btn btn-primary increase" id="'+denominations[i][2]+' " type="button"><i class="fas fa-plus"></i></button>'
        html += '   <button class="btn btn-primary decrease" id="'+denominations[i][2]+' " type="button"><i class="fas fa-minus"></i></button>'
        html += '</div>'
    }
    $('.input-form').html(html);
}

//Refreshes the denomination totals for each denomination
function refreshDenominationTotal(currency){
    let denominations = getDenominations(currency)

    for (i = 0; i < denominations.length; i++){
        let total = 0.00
        total += (parseInt($('.' + denominations[i][2]).val() || 0) * parseFloat(denominations[i][1]))
        editDenominationTotal(denominations[i][2], getCurrencySymbol(currency) + total.toFixed(2))
    }
}

//Clears the denomination totals
function clearDenominationTotals(currency){
    let denominations = getDenominations(currency)

    for (i = 0; i < denominations.length; i++){
        editDenominationTotal(denominations[i][2], getCurrencySymbol(currency) + 0.00.toFixed(2))
    }
}

//Edits the denomination total fields
function editDenominationTotal(target, value) {
    $('.denomination-total-' + target).val(value)
}

//Refreshes the total at the bottom of the page
function refreshTotal(currency){
    let total = 0.00;
    let denominations = getDenominations(currency)

    for (i = 0; i < denominations.length; i++){
        total += (parseInt($('.' + denominations[i][2]).val() || 0) * parseFloat(denominations[i][1]))
    }    

    editTotal(getCurrencySymbol(currency) + total.toFixed(2))
}

//Clears the total at the bottom of the page
function clearTotal(currency){
    let denominations = getDenominations(currency)

    editTotal(getCurrencySymbol(currency) + 0.00.toFixed(2))
    clearInputFields()
}

function clearTotalHard() {
    editTotal( 0.00.toFixed(2))
    clearInputFields()
}

//Clears denomination input fields to be 0
function clearInputFields(){
    $('.input-field').val(0)
}

//Edit the total at the bottom of the page
function editTotal(value){
    $('.total').val(value)
}

//Increases the count of the nearest input field the
//increase button was clicked in
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

//Decreases the count of the nearest input field the
//decrease button was clicked in
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

//Edits the text in the multiplier button
function updateMultiplierButton(multiplier){
    $('.multiplier').text(multiplier)
}

//Fills the drop down with all the currencies stored in moneyHandler.js
function fillCurrencyDropDown(){
    let currency_descriptions = getCurrencyDescriptions()
    let html = ''

    html += '<option value="None">Select a Currency</option>'

    for (i = 0; i < currency_descriptions.length; i++){
        html += '<option value="' + currency_descriptions[i][1] + '">' + currency_descriptions[i][0] + ' - ' + currency_descriptions[i][1] +  '</option>'
    }

    $('#currencyDropDown').html(html)
}

//Checks if there are any denomination input fields on the page
function isFormEmpty(){
    if ($('.input-form').is(':empty')){
        return true
    }
    else{
        return false
    }
}

//Adds place holder text if there are no denomination input fields
//on the page
function addEmptyFormPlaceholder(){
    let html = '<p class="text-center lead mt-4 mb-4">Select a currency to begin...</p>'
    $('.input-form').html(html)
}