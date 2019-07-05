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
    $('#color').html('');
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


});


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


// Creates, Appends and Hides all error messages. (Errors are hidden by default)

$('label[for="name"]').before('<label class="error" id="name-error"><font color="white">Please Enter Your Name. This field can not be Empty.</font></label>');
$('label[for="mail"]').before('<label class="error" id="email-error"><font color="white">Please enter a VALID email address.</font></label>');
$('.activities legend').before('<label class="error" id="activity-error"><font color="white">You MUST select at least one activity.</font></label>');
$('#credit-card').before('<label class="error" id="cc-empty-error"><font color="white">Credit Card Information Needed!</font></label>');
$('#credit-card').before('<label class="error" id="cc-number-error"><font color="white">Please enter a valid credit card number between 13-16 digits</font></label>');
$('#credit-card').before('<label class="error" id="cc-zip-error"><font color="white">Please enter a 5 digit ZIP code</font></label>');
$('#credit-card').before('<label class="error" id="cc-cvv-error"><font color="white">Please enter a 3 digit CVV number</font></label>');
$('.error').hide();

// Name validation function to test for valid name input - Error message will appear if user entry is not valid.

const validName = (name) => {
    let valid = /^\S/.test(name);                                       
    if (valid) {
        $('#name-error').hide();                                        
        return true;
    } else {
        $('#name-error').show();                                   
        return false;
    }
}

// Real-time name validation to listen for valid name input.  If name field is left empty an error message will produced.

$('#name').on('input', (e) => {                                        
    if ($('#name').val() == '') {                                        
        validName($('#name').val());                                      
    } else {
        $('#name-error').hide();                                      
    }
});

// Email validation function to listen for valid email input.  An error message will appear if email format is invalid.

const validEmail = (email) => {
    let valid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);  
    if (valid) {
        $('#email-error').hide();                        
        return true;
    } else {
        $('#email-error').show();                    
        return false;
    }
}

// Real-time validation of email to listen for valid email input.  If email field is left empty an error message will produced.

$('#mail').on('input', () => {                             
    if ($('#mail').val() !== '') {                           
        validEmail($('#mail').val());                        
    } else {
        $('#email-error').hide();                         
    }
});

// Activities validation function to hide and or show activities that are "checked".

const validActivities = () => {

    if ($('.activities input:checked').length > 0) {              
        $('#activity-error').hide();                               
        return true;
    } else {
        $('#activity-error').show();                           
        return false;
    }
}

//Real-time validation of activities is listening for input of chosen activities.
$('.activities').on('input', () => {                     
    validActivities();                                    
})

// Will hide errors associated with 'credit card' if any other payment option is chosen.

$('#payment').on('change', function () {
    if ($('#payment').val() === 'paypal' || $('#payment').val() === 'bitcoin') {
        $('#cc-cvv-error').hide();
        $('#cc-zip-error').hide();
        $('#cc-number-error').hide();
        $('#cc-empty-error').hide();
    }
});

// Credit Card validation function when 'credit card' is chosen - validation will test for proper formulation of numbers.
// Will produce an error message if field is left empty or or wrong input.

const validCardNumber = (cc) => {
    if ($('#payment').val() === 'credit card') {                     
        let valid = /^\d{13,16}$/.test(cc);                           

        if (valid) {
            $('#cc-number-error').hide();
            $('#cc-empty-error').hide();                             
            return true;
        } else if (cc !== '') {                                   
            $('#cc-empty-error').hide();                        
            $('#cc-number-error').show();                       
        } else {
            $('#cc-number-error').hide();
            $('#cc-empty-error').show();                  
            return false;
        }
    }
}

// Real-time validation of credit card listening for cc number input by user.  Will show error message if field is left empty or input wrong.

$('#cc-num').on('input', () => {                          
    if ($('#cc-num').val() !== '') {                       
        validCardNumber($('#cc-num').val())                 
    } else if ($('#cc-num').val() == '') {               
        $('#cc-empty-error').show();                   
    } else {
        $('#cc-number-error').show();              
    }
});

// Zip code validation function will test for proper zip code sequence.  If improper will produce an error message

const validZip = (zip) => {
    if ($('#payment').val() === 'credit card') {                
        let valid = /^\d{5}$/.test(zip);                         

        if (valid) {                                           
            $('#cc-zip-error').hide();                          
            return true;
        } else {
            $('#cc-zip-error').show();                     
            return false;
        }
    }
}

// Real-time validation of zip code to listen for proper number input for zip code.  Error message produce if input invalid.

$('#zip').on('input', () => {                           
    if ($('#zip').val() !== '') {                        
        validZip($('#zip').val());                        
    } else {
        $('#cc-zip-error').hide();                    
    }
});

// Cvv validation function test for a valid three digit input for cvv code.  Error message will be produced if invalid.

const validCVV = (cvv) => {
    if ($('#payment').val() === 'credit card') {                   
        let valid = /^\d{3}$/.test(cvv);                           

        if (valid) {                                              
            $('#cc-cvv-error').hide();                              
            return true;
        } else {
            $('#cc-cvv-error').show();                         
            return false;
        }
    }
}

// Real-time validation of cvv - makes sure field is not empty and input properly.  Error produced if invalid.

$('#cvv').on('input', () => {                          
    if ($('#cvv').val() !== '') {                     
        validCVV($('#cvv').val());                    
    } else {
        $('#cc-cvv-error').hide();                  
    }
});

// Checks the validity of all fields at simultaneously. 
const isValid = () => {

    // Credit Card option: Valid if all fields are input properly.
    
    if ($('#payment').val() === 'credit card') {
        if (validName($('#name').val()) && validEmail($('#mail').val()) && validActivities() && validCardNumber($('#cc-num').val()) &&
            validZip($('#zip').val()) && validCVV($('#cvv').val())) {
            return true;                                                            
        } else {
            validName($('#name').val());
            validEmail($('#mail').val());
            validActivities();
            validCardNumber($('#cc-num').val());
            validZip($('#zip').val());
            validCVV($('#cvv').val());
            return false;                                                   
        }

    // Credit Card is not chosen: 
        
    } else {
        if (validName($('#name').val()) && validEmail($('#mail').val()) && validActivities()) {
            return true;                                                                             
        } else {
            validName($('#name').val());
            validEmail($('#mail').val());
            validActivities();
            return false;                                                                      
        }
    }
}

// Submit Button: This will prevents form being submitted if errors are present.

$('form').on('submit', (e) => {
    if (isValid() === true) {
        window.location.reload();                                                        

    } else {
        e.preventDefault();                                                            
    }
});






