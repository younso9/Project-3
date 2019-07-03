/***********************************************************************************/
/************************** SAGE YOUNGBLOOD ****************************************/
/************************* PISCATAWAY - CODEX **************************************/
/**************** Project 3 - Interactive Form - CODEX *****************************/
/***********************************************************************************/

// This puts the first field in the 'focus' state.//

const nameInput = $('#name');

$('#name').focus();


// 'Other' option added the job role section and manipulated to be viewed only when selected 
//$('.basic-info').append("<input type='text' id='other-title' placeholder='Your Job Role' name='job_role_other'>");

$('#other-title').hide();


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



$('#design').on('change', function () {

    if ($(this).val() === "js puns") {
        $('#colors-js-puns').show();

        $('#color').children().eq(0).show();
        $('#color').children().eq(1).show();
        $('#color').children().eq(2).show();
        $('#color').children().eq(0).attr('selected', true);

        $('#color').children().eq(3).hide();
        $('#color').children().eq(4).hide();
        $('#color').children().eq(5).hide();

    }
    else if ($(this).val() === "heart js") {
        $('#colors-js-puns').show();


        $('#color').children().eq(0).hide();
        $('#color').children().eq(1).hide();
        $('#color').children().eq(2).hide();

        $('#color').children().eq(3).show();
        $('#color').children().eq(4).show();
        $('#color').children().eq(5).show();
        $('#color').children().eq(3).attr('selected', true);
    }
    else {
        $('#colors-js-puns').hide();
    }


})


//**************************** ACTIVITY SECTION *****************************

//Variables set for all activities

let mainConference = $('input[name="all"]');
let javFrameWork = $('input[name="js-frameworks"]');
let libWork = $('input[name="js-libs"]');
let exWork = $('input[name="express"]');
let nodeWork = $('input[name="node"]');
let buildWork = $('input[name="build-tools"]');
let npmWork = $('input[name="npm"]');
let totalCost = 0;

//Activities with conflicting dates and times disabled.  Prices added for each activity.

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
    // console.log(totalCost);
    document.getElementById("total").innerHTML = "<p id=total><strong>Total $" + totalCost + "</strong></p>";
};


//********************************************************* */


$(javFrameWork).change(function (event) {
    if ($(event.target).is(':checked')) {
        //console.log("me");
        exWork.prop('disabled', true);
    } else {
        exWork.prop('disabled', false);
    }
});


$(exWork).change(function (event) {
    if ($(event.target).is(':checked')) {
        javFrameWork.prop('disabled', true);
    } else {
        javFrameWork.prop('disabled', false);
    }
});


$(libWork).change(function (event) {
    if ($(event.target).is(':checked')) {
        nodeWork.prop('disabled', true);
    } else {
        nodeWork.prop('disabled', false);
    }
});


$(nodeWork).change(function (event) {
    if ($(event.target).is(':checked')) {
        libWork.prop('disabled', true);
    } else {
        libWork.prop('disabled', false);
    }
});



//**************************** PAYMENT SECTION *****************************//


// Add IDs to paypal and bitcoin paragraphs for easy selection
$('#credit-card').next().attr('id', 'paypal');
$('#credit-card').next().next().attr('id', 'bitcoin');



const $payment = $('#payment');
const $ccDiv = $('#credit-card');
const $paypalDiv = $('#paypal');
const $bitcoinDiv = $('#bitcoin');

// Default credit card option as selected and hide others
$payment.prop('selectedIndex', 1);
$paypalDiv.hide();
$bitcoinDiv.hide();

// On payment type change, display the correct payment type fields or info
$payment.change(() => {
    const val = $('#payment option').filter(':selected').val();
    switch (val) {

        case 'select_method':
            $ccDiv.hide();
            $paypalDiv.hide();
            $bitcoinDiv.hide();
            break;
        case 'credit card':
            $ccDiv.show();
            $paypalDiv.hide();
            $bitcoinDiv.hide();
            break;
        case 'paypal':
            $ccDiv.hide();
            $paypalDiv.show();
            $bitcoinDiv.hide();
            break;
        case 'bitcoin':
            $ccDiv.hide();
            $paypalDiv.hide();
            $bitcoinDiv.show();
            break;
        default:
            $ccDiv.show();
            $paypalDiv.hide();
            $bitcoinDiv.hide();
            break;
    }
});


//**************************** FORM VALIDATION FUNCTIONS AND EVENTS *****************************//

    const validationCreditCardNumber = () => {
    const validSizeMin = 13;
    const validSizeMax = 16;
        
        const ccNumberVal = $()
        





}


















// // EFFECTS: Compares the regEx to the input val and returns true if matched
// //          Adds an error class and appends an error message when not matched
// function isValidInput($input, regEx, val, message = '') {

//     if (regEx.test(val)) {
//         // Remove possible error class and error message when test passes
//         $input.removeClass('error');

//         if ($input.prev().filter('.error-message').length !== 0) {
//             $input.prev().remove();

//         }

//         return true;
//     }
//     else {
//         $input.addClass('error');

//         // Check for empty versus malformatted input, display appropriate message
//         if (val === '') {
//             message = ('Please enter your ').concat(message);
//         }
//         else {
//             message = 'Your ' + message + ' is formatted incorrectly'
//         }

//         // Check for existence of error message, add html to document, or change text
//         if ($input.prev().filter('.error-message').length === 0)
//             $input.before('<p class="error-message">' + message + '</p>');
//         else {
//             $input.prev().filter('.error-message').text(message);
//         }

//         return false;
//     }

// }

// // EFFECTS: Checks for at least one selected (checked) activity, returns false otherwise
// //          Handles error message adding/removing depending on check
// function isAttendingActivity() {

//     const $activities = $('.activities input');
//     const $errorHTML = $('<p class="error-message">Please select at least one activity.</p>');

//     // If there is at least 1 checked activity, returns true
//     if ($activities.filter(':checked').length) {
//         $('.activities > .error-message').remove();
//         return true;
//     }
//     else {
//         if ($('.activities > .error-message').length === 0)
//             $('.activities legend').after($errorHTML);
//         return false;
//     }
// }

// // EFFECTS: Call this function in order to add real-time form validation
// //          Currently only supports Name and Email input fields
// function realtimeValidation() {

//     const nameRegEx = /[a-zA-Z]{1,}/;

//     const $emailInput = $('#mail');
//     const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     // These listeners bind to input events, and check the validity of each input
//     $nameInput.bind('input', () => { isValidInput($nameInput, nameRegEx, $nameInput.val(), 'name') });
//     $emailInput.bind('input', () => { isValidInput($emailInput, emailRegEx, $emailInput.val(), 'email') });
// }


// // EFFECTS: Calls input validation functions and returns true if all pass
// //          If one or more validation functions fail, the function returns false
// function validateForm() {
//     const nameRegEx = /[a-zA-Z]{1,}/;
//     const nameVal = $nameInput.val();

//     const $emailInput = $('#mail');
//     const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const emailVal = $emailInput.val();

//     const $ccInput = $('#cc-num');
//     const ccRegEx = /^[0-9]{13,16}$/;
//     const ccVal = $ccInput.val();

//     const $zipInput = $('#zip');
//     const zipRegEx = /^[0-9]{5}$/;
//     const zipVal = $zipInput.val();

//     const $cvvInput = $('#cvv');
//     const cvvRegEx = /^[0-9]{3}$/;
//     const cvvVal = $cvvInput.val();

//     let isValid = true;


//     // Each condition calls valid check. If the check returns false, we flip the isValid flag
//     if (!isValidInput($nameInput, nameRegEx, nameVal, 'name')) {
//         isValid = false;
//     }
//     if (!isValidInput($emailInput, emailRegEx, emailVal, 'email')) {
//         isValid = false;
//     }
//     if (!isAttendingActivity()) {
//         isValid = false;
//     }

//     // Only check for credit card validation if "Credit Card" payment type is selected
//     if ($('#payment option').filter(':selected').val() === 'credit card') {

//         if (!isValidInput($ccInput, ccRegEx, ccVal, 'card number')) {
//             isValid = false;
//         }
//         if (!isValidInput($zipInput, zipRegEx, zipVal, 'zip code')) {
//             isValid = false;
//         }
//         if (!isValidInput($cvvInput, cvvRegEx, cvvVal, 'CVV')) {
//             isValid = false;
//         }
//         realtimeValidation();
//     }

//     return isValid;
// }

// // Call the function for enabling real-time validation on the form
// //realtimeValidation();

// // Listener on form submission, validates form fields, otherwise, prevents submission
// $('form').submit((ev) => {
//     if (validateForm() == true) {
//         window.location.reload();

//     } else {
//         ev.preventDefault();
//     }
//     return
// });

// // function register() {

// //  if ($('#payment option').filter(':selected').val() === 'paypal') {
// //      window.location.href = "https://www.paypal.com";
// //  }
// //  if ($('#payment option').filter(':selected').val() === 'bitcoin') {
// //      window.location.href = "https://bitcoin.org";
// //  }
// // }
















// // //$('#payment').children().eq(3).attr('selected', true);

// // /*
// // $("credit-card").siblings().eq(3).addClass("paypal");
// // $("credit-card").siblings().eq(4).addClass("bitcoin");
// // $('select option[value="credit card"]').attr("selected", true);
// // $('select option[value="select_method"]').attr("disabled", true);
// // $('select option[value="select_method"]').hide();
// // $(".paypal").hide();
// // $(".bitcoin").hide();



// // $("payment").on('change', function () {
// //     if ($(this).val() === "credit card") {
// //         $("#credit-card").show();
// //         $(".paypal").hide();
// //         $(".bitcoin").hide();
// //     } else if ($(this).val() === "paypal") {
// //         $("#credit-card").hide();
// //         $(".paypal").show();
// //         $(".bitcoin").hide();
// //     } else if ($(this).val() === "bitcoin") {
// //         $("#credit-card").hide();
// //         $(".paypal").hide();
// //         $(".bitcoin").show();
// //     }

// // }








// $('#payment').show();

// $('#payment').children().eq(0).show();
// $('#payment').children().eq(1).hide();
// $('#payment').children().eq(2).hide();
// $('#payment').children().eq(3).hide();
// $('#payment').children().eq(0).attr('selected', true);

// $('#color').children().eq(3).hide();
// $('#color').children().eq(4).hide();
// $('#color').children().eq(5).hide();




// /*


// $("#credit-card").siblings().eq(3).addClass("paypal");











// function isValidInput($input, regEx, val, message = '') {

//     if (regEx.test(val)) {
//         // Remove possible error class and error message when test passes
//         $input.removeClass('error');

//         if ($input.prev().filter('.error-message').length !== 0) {
//             $input.prev().remove();

//         }

//         return true;
//     }
//     else {
//         $input.addClass('error');

//         // Check for empty versus malformatted input, display appropriate message
//         if (val === '') {
//             message = ('Please enter your ').concat(message);
//         }
//         else {
//             message = 'Your ' + message + ' is formatted incorrectly'
//         }

//         // Check for existence of error message, add html to document, or change text
//         if ($input.prev().filter('.error-message').length === 0)
//             $input.before('<p class="error-message">' + message + '</p>');
//         else {
//             $input.prev().filter('.error-message').text(message);
//         }

//         return false;
//     }

// }

// // EFFECTS: Checks for at least one selected (checked) activity, returns false otherwise
// //          Handles error message adding/removing depending on check
// function isAttendingActivity() {

//     const $activities = $('.activities input');
//     const $errorHTML = $('<p class="error-message">Please select at least one activity.</p>');

//     // If there is at least 1 checked activity, returns true
//     if ($activities.filter(':checked').length) {
//         $('.activities > .error-message').remove();
//         return true;
//     }
//     else {
//         if ($('.activities > .error-message').length === 0)
//             $('.activities legend').after($errorHTML);
//         return false;
//     }
// }

// // EFFECTS: Call this function in order to add real-time form validation
// //          Currently only supports Name and Email input fields
// function realtimeValidation() {

//     const nameRegEx = /[a-zA-Z]{1,}/;

//     const $emailInput = $('#mail');
//     const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     // These listeners bind to input events, and check the validity of each input
//     $nameInput.bind('input', () => { isValidInput($nameInput, nameRegEx, $nameInput.val(), 'name') });
//     $emailInput.bind('input', () => { isValidInput($emailInput, emailRegEx, $emailInput.val(), 'email') });
// }











// // EFFECTS: Calls input validation functions and returns true if all pass
// //          If one or more validation functions fail, the function returns false
// function validateForm() {
//     const nameRegEx = /[a-zA-Z]{1,}/;
//     const nameVal = $nameInput.val();

//     const $emailInput = $('#mail');
//     const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const emailVal = $emailInput.val();

//     const $ccInput = $('#cc-num');
//     const ccRegEx = /^[0-9]{13,16}$/;
//     const ccVal = $ccInput.val();

//     const $zipInput = $('#zip');
//     const zipRegEx = /^[0-9]{5}$/;
//     const zipVal = $zipInput.val();

//     const $cvvInput = $('#cvv');
//     const cvvRegEx = /^[0-9]{3}$/;
//     const cvvVal = $cvvInput.val();

//     let isValid = true;

//     // Each condition calls valid check. If the check returns false, we flip the isValid flag
//     if (!isValidInput($nameInput, nameRegEx, nameVal, 'name')) {
//         isValid = false;
//     }
//     if (!isValidInput($emailInput, emailRegEx, emailVal, 'email')) {
//         isValid = false;
//     }
//     if (!isAttendingActivity()) {
//         isValid = false;
//     }

//     // Only check for credit card validation if "Credit Card" payment type is selected
//     if ($('#payment option').filter(':selected').val() === 'credit card') {

//         if (!isValidInput($ccInput, ccRegEx, ccVal, 'card number')) {
//             isValid = false;
//         }
//         if (!isValidInput($zipInput, zipRegEx, zipVal, 'zip code')) {
//             isValid = false;
//         }
//         if (!isValidInput($cvvInput, cvvRegEx, cvvVal, 'CVV')) {
//             isValid = false;
//         }
//     }

//     // else if ($('#payment option').filter(':selected').val() === 'paypal') {
//     //  isValid = false;

//     // }

//     // else if ($('#payment option').filter(':selected').val() === 'bitcoin') {
//     //  isValid = false;

//     // }
//     // Return the flag, will be false if any of the tests failed
//     return isValid;
// }

// // Call the function for enabling real-time validation on the form
// realtimeValidation();

// // Listener on form submission, validates form fields, otherwise, prevents submission
// $('form').submit ((ev) => {
//     if (validateForm() == true) {
//         window.location.reload();

//     } else {
//         ev.preventDefault();
//     }
//     return
// });

// // function register() {

// //  if ($('#payment option').filter(':selected').val() === 'paypal') {
// //      window.location.href = "https://www.paypal.com";
// //  }
// //  if ($('#payment option').filter(':selected').val() === 'bitcoin') {
// //      window.location.href = "https://bitcoin.org";
// //  }
// // }














// /*

// const updateCost = function (cost) {
//     totalCost += 0;
//     document.getElementById("total").innerHTML = "<p id=total><strong>Total $" + totalCost + "</strong></p>";


// //**************************** ACTIVITY SECTION *****************************

// $(jsFramework).change(function (event) {
//     if ($(event.target).is(':checked')) {
//         express.prop('disabled', true);
//     } else {
//         express.prop('disabled', false);
//     }
// });

// $(jsLibrary).change(function (event) {
//     if ($(event.target).is(':checked')) {
//         node.prop('disabled', true);
//     } else {
//         node.prop('disabled', false);
//     }
// });

// $(express).change(function (event) {
//     if ($(event.target).is(':checked')) {
//         jsFramework.prop('disabled', true);
//     } else {
//         jsFramework.prop('disabled', false);
//     }
// });

// $(node).change(function (event) {
//     if ($(event.target).is(':checked')) {
//         jsLibrary.prop('disabled', true);
//     } else {
//         jsLibrary.prop('disabled', false);
//     }
// });




// */