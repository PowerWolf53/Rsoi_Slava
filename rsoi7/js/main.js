// chrome.exe --allow-file-access-from-files --disable-web-security
$("#load-button").click(function(e) {
    $.post("../resource/data.xml", function(data) {
        let nameValue = $(data).find('university').attr('name')
        let fullnameValue = $(data).find('university').attr('fullname')
        let yearValue = $(data).find('university').attr('year-of-birth')

        document.getElementById('year-input').value = yearValue
        document.getElementById('name-input').value = nameValue
        document.getElementById('fullname-input').value = fullnameValue
    }).fail(function() {
        showErrorModal()
    });
});

$("#script-button").click(function(e) {
    $.getScript("../js/loaded-script.js")
        .fail(function(jqxhr, settings, exception) {
            showErrorModal()
        });
});

$("#show-year-button").click(function(e) {
    var radioArray = document.getElementsByName('result-size')

    for (i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            var resultSize = radioArray[i].value
        }
    }
    console.log(resultSize)
    var textarea = document.createElement('textarea')
    document.getElementById('placeForModal').appendChild(textarea)
    $('#placeForModal').css('text-align', 'center')
    $('textarea').css('font-size', resultSize)
    $("textarea").text(document.getElementById('year-input').value + " " + document.getElementById('name-input').value)
});

function showErrorModal() {
    var modal = document.getElementById("errorModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
}