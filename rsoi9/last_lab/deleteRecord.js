var deleteByName = (body, db, res) => {
    return db.collection('cities').findOneAndDelete({ name: body.name }, (err, result) => {
        if (err) return res.send(500, err)
    })
}

exports.deleteByName = deleteByName