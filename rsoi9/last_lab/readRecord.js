var fetchAll = (db, res) => {
    return db.collection('cities').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('index.ejs', { results: result })
    })
}

exports.fetchAll = fetchAll