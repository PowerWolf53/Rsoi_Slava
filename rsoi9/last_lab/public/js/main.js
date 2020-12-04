var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function() {
    fetch('cities', {
            method: 'put',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                'name': document.getElementById('name-input').value,
                'year': document.getElementById('year-input').value,
                'population': document.getElementById('population-input').value,
                'capital': document.getElementById('capital-input').value
            })
        })
        .then(response => {
            window.location.replace("/cities");
        })
})

del.addEventListener('click', function() {
    fetch('cities', {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': document.getElementById('name-input').value
        })
    }).then(function(response) {
        window.location.replace("/cities");
    })
})