// ====================================================================================================
// number of guests
// ====================================================================================================
$('#next').click(function() {
    var guests = $('#guests').val().trim();

    slices(guests);
}); 
// ====================================================================================================
// cake shape
// ====================================================================================================
$('#round').click(function() {
    var shape = "round";

    console.log(shape);
});
$('#square').click(function() {
    var shape = "square";

    console.log(shape);
});
$('#custom').click(function() {
    var shape = "custom";

    console.log(shape);
});
// ====================================================================================================
// cake flavor
// ====================================================================================================
$('#vanilla_flavor').click(function() {
    var flavor = "vanilla_flavor";

    console.log(flavor);
});
$('#chocolate_flavor').click(function() {
    var flavor = "chocolate_flavor";

    console.log(flavor);
});
$('#strawberry_flavor').click(function() {
    var flavor = "strawberry_flavor";

    console.log(flavor);
});
// ====================================================================================================
// cake size
// ====================================================================================================
$('#6').click(function() {
    var size = "6";

    console.log(size);
});
$('#8').click(function() {
    var size = "8";

    console.log(size);
});
$('#10').click(function() {
    var size = "10";

    console.log(size);
});
$('#12').click(function() {
    var size = "12";

    console.log(size);
});
// ====================================================================================================
// topping
// ====================================================================================================
$('#buttercream_icing').click(function() {
    var topping = "buttercream_icing";

    console.log(topping);
});
$('#fondant').click(function() {
    var topping = "fondant";

    console.log(topping);
});
// ====================================================================================================
// filling
// ====================================================================================================
$('#butter_filling').click(function() {
    var filling = "butter_filling";

    console.log(filling);
});
$('#strawberry_filling').click(function() {
    var filling = "strawberry_filling";
    var cost = 5;

    quote(cost);
});
$('#peach_filling').click(function() {
    var filling = "peach_filling";

    console.log(filling);
});
// ====================================================================================================
// special instructions
// ====================================================================================================
$("#modalSubmit").click(function() {
    var instructions = $('#instructions').val();

    $.ajax({
        type: "POST",
        url: "#",
        data: {
            instructions: instructions
        },
        success: function(res) {
        },
        error: function(res) { 
        },
        complete: function() {}
    });
    console.log(instructions);
});


function slices(guests) {
    var slices = guests * 4.50;

    quote(slices);
};

function quote(slices, cost) {
    console.log(slices);
    console.log(cost);
    // var slices = slices;
    // var filling = cost;
    // var quote = slices + filling;

    // console.log("Quote total: " + quote);
};