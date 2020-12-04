function firstButtonLogic() {
    $('#id2').attr("id", "newId")
    $('#id4').attr("id", "newId")
    $('#id6').attr("id", "newId")

    var size = parseInt($('.block1').css("font-size"));
    var size2X = size * 2 + "px";

    $('.block1 > img').css('border', '1px solid black')
    $('.block1 > p').css('border', '1px solid black')
    $('.block1').css('font-size', size2X)
    $('.block3 > img').css('border', '1px solid black')
    $('.block3 > p').css('border', '1px solid black')
    $('.block3').css('font-size', size2X)
    $('.block5 > img').css('border', '1px solid black')
    $('.block5 > p').css('border', '1px solid black')
    $('.block5').css('font-size', size2X)
}

function secondButtonLogic() {
    $('img').animate({opacity: 0}, 1000);
    $('.first-button').attr('disabled', true)
}