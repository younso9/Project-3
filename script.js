/***********************************************************************************/
/************************** SAGE YOUNGBLOOD ****************************************/
/************************* PISCATAWAY - CODEX **************************************/
/**************** Project 3 - Interactive Form - CODEX *****************************/
/***********************************************************************************/

// This puts the first field in the 'focus' state.//

const nameInput = $('#name');

$('name').focus();

console.log

// 'Other' option added the job role section and manipulated to be viewed only when selected 
//$('.basic-info').append("<input type='text' id='other-title' placeholder='Your Job Role' name='job_role_other'>");

$('#other-title').hide();

console.log
// The "change"function is used here to display the "other" field

$('#title').on('change', function () {

    if ($(this).val() === 'other') {
        $('#other-title').show();
    }

    else {
        $('#other-title').hide();
    }
});


/***************************** T-SHIRT SECTION *****************************
 **************Hide the color choice until a design is selcted**************/

$('#colors-js-puns').hide();

//************************ Display of Tshirt Colors *************************

//$('#color').append('<option value="cornflowerblue">CornflowerBlue (JS Puns shirt only)</option>

let teeShirtColor = false;

$('#design').change(function () {
    $("#color").html('');
    if ($(this).val() === "js puns") {
        $('#color').empty();
        $('#color').append('<option value="cornflowerblue" > Cornflower Blue (JS Puns shirt only)</option>')
        $('#color').append('<option value="darkslategrey" > Dark Slate Grey(JS Puns shirt only)</option>')
        $('#color').append('<option value="gold">Gold (JS Puns shirt only)</option>')
        $('#colors-js-puns').show();

        teeShirtColor = true;
        return teeShirtColor;

    } else if

        ($(this).val() === "heart js") {
        $('#color').append('<option value="tomato">Tomato (JS Puns shirt only)</option>');
        $('#color').append('<option value="steelblue">Steel Blue (JS Puns shirt only)</option>');
        $('#color').append('<option value="dimgrey">Dim Grey (JS Puns shirt only)</option>');
        $('#colors-js-puns').show();

        teeShirtColor = true;
        return teeShirtColor;

    } else
        $('#colors-js-puns').hide();
    teeShirtColor = false;
    return teeShirtColor;

});


//**************************** ACTIVITY SECTION *****************************

//Variables set for all activities

let mainConference = $('input[name="all"]');
let javFrameWork = $('input[name="js-framework"]');
let libWork = $('input[name="js-libs"]');
let exWork = $('input[name="express"]');
let nodeWork = $('input[name="node"]');
let buildWork = $('input[name="build-tools"]');
let npmWork = $('input[name="npm"]');
let totalCost = 0
$(".activities").append("<p id=total><strong>Total</strong></p>");

$('input[name ="all"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(200);
    } else {
        updateCost(-200); $(".inner");
    }
});

$('input[name ="js-frameworks"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});

$('input[name ="js-libs"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});

$('input[name ="express"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});

$('input[name ="node"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});

$('input[name ="build-tools"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});

$('input[name ="npm"]').change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});

const updateCost = function (cost) {
    totalCost += cost;
    document.getElementById("total").innerHTML = "<p id=total><strong>Total $" + totalCost + "</strong></p>";
};

/*
   .change();


$("SELECTOR").prop("disabled", false);
$("SELECTOR").prop("checked", true);  */

//The sum of cost of activities


/**
//totalCost () finds the Total Cost based on the check box selections

function totalCost() {
    let totalCost = 0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["includecandles"];

    //If they checked the box set candlePrice to 5
    if (includeCandles.checked == true) {
        candlePrice = 5;
    }
    //finally we return the candlePrice
    return candlePrice;
}
***/




/***

// Reference Source: https://stackoverflow.com/questions/47161814/how-to-calculate-numbers-total-based-on-the-checked-checkboxes-using-jquery


$(document).on("change", ".checks", function () {
    var checked = $('.checks:checked'),
        sum = checked.get().reduce(function (prev, item) {
            return prev + parseFloat(item.getAttribute('data-price'));
        }, 0);

    $('#tots').text(sum.toFixed(2));
});



//source: http://www.dotnetfox.com/articles/get-sum-of-multiple-checkbox-values-by-using-jquery-1103.aspx
$('input:checkbox').change(function () {
    var total = 0;
    var basic_single = parseInt($('#basic_single:checked').val());
    var basic_double = parseInt($('#basic_double:checked').val());

    var total = basic_single + basic_double;

    $("#total").val(total);

});


/***
$(function () {
    $('input').click(function () {

        var total = 0;
        $('input:checked').each(function (index, item) {
            total += parseFloat(item.value);
        });
        $('.total').text(total);
    });
});


***/



