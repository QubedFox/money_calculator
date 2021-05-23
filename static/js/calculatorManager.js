//On the webpage loading up
window.onload = function() {
    //Fills the currency dropdown menu
    fillCurrencyDropDown()
    addEmptyFormPlaceholder()
    clearTotalHard()
};

$(function () {
    const body = $('body');
    
    //Updates the input fields when a key is up-pressed
    body.on('keyup', '.input-field', function() {
        //Refreshes total and denomination total
        refreshTotal($('#currencyDropDown').val())
        refreshDenominationTotal($('#currencyDropDown').val())
    })

    //Clicking the increase button on a denomination
    body.on('click', '.increase', function(){
        //Finds closest input field
        let target = $(this).closest('.input-group').find('.input-field')

        //Increases input field
        increaseCount(target)

        //Refreshes total and denomination total
        refreshTotal($('#currencyDropDown').val())
        refreshDenominationTotal($('#currencyDropDown').val())
    })

    //Clicking the decrease button on a denomination
    body.on('click', '.decrease', function(){
        //Finds closest input field
        let target = $(this).closest('.input-group').find('.input-field')
        //decreases closest input field
        decreaseCount(target)
        //Refreshes total and denomination total
        refreshTotal($('#currencyDropDown').val())
        refreshDenominationTotal($('#currencyDropDown').val())
    })

    //Clicking the multiplier button with left click
    body.on('click', '.multiplier', function(){
        //Updates the multiplier button text with the return from cycling to the next multiplier
        updateMultiplierButton(cycleMultiplier())
    })

    //Clicking the multiplier button with right click
    body.on('contextmenu', '.multiplier', function(e){
        //Updates the multiplier button text with the return from cycling to the next multiplier
        e.preventDefault()
        updateMultiplierButton(cycleMultiplierBackwards())
    })

    //Clicking the clear button
    body.on('click', '.clear', function(){
        clearTotal($('#currencyDropDown').val());
        refreshDenominationTotal($('#currencyDropDown').val())
    })

    //Selecting a new item in currency dropdown menu
    $('#currencyDropDown').change(function() {
        //Adds denomination input fields and buttons
        if ($('#currencyDropDown').val() != 'None'){
            addDenominations($('#currencyDropDown').val());
        }
        //If there is no currency selected, adds placeholder text
        else{
            addEmptyFormPlaceholder()
            clearTotalHard()
        }
        //Clears the total and denomination totals
        clearTotal($('#currencyDropDown').val())
        clearDenominationTotals($('#currencyDropDown').val())
    })
})