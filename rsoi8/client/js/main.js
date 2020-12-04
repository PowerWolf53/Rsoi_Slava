$("#submit-button").click(function() {
    let about = document.getElementById("about").value
    let position = document.getElementById("position").value
    let email = document.getElementById("email").value
    let married = document.getElementById("married").value
    let ownCar = document.getElementById("ownCar").value

    let employee = {
        about: about,
        position: position,
        email: email,
        married: married,
        ownCar: ownCar
    };
    $.ajax({
        url: 'http://127.0.0.1:3005/employees',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {},
        data: JSON.stringify(employee)
    });
})

$("#get-data-button").click(function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    $.ajax({
        url: 'http://127.0.0.1:3005/employees',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            console.log(data.txt)
            document.getElementById('txtfiledata').value = data.txt
            document.getElementById('xmlfiledata').value = data.xml
        }
    });

})