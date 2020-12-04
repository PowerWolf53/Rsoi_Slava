var updateByName = (body, db, res) => {
    db.collection('cities').findOneAndUpdate({ name: body.name }, {
        $set: {
            name: body.name,
            year: body.year,
            population: body.population,
            capital: body.capital,
        }
    }, {
        sort: { _id: -1 },
        upsert: true
    }, (err, result) => {
        if (err) return res.send(err)
    })
}

exports.updateByName = updateByName