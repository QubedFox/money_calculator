
function addDenominations(){
    let html = ''
    let denominations = getDenominations('AUD')

    html += '                <div class="row">'
    html += '                    <div class="col-1">'
    html += '                        <p></p>'
    html += '                    </div>'
    html += '                    <div class="col-1">'
    html += '                        <input class="hundred form-control input-field" type="number" value=0>'
    html += '                    </div>'
    html += '                    <div class="col-2">'
    html += '                        <button id="100" class="increase btn btn-primary"><i class="fas fa-plus"></i></button>'
    html += '                        <button id="100" class="decrease btn btn-primary"><i class="fas fa-minus"></i></button>'
    html += '                    </div>'
    html += '                </div>'

}