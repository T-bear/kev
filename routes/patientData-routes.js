const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://apanappe11:daldaloo11@ds111568.mlab.com:11568/patientdata";

    MongoClient.connect(url, function(err, db,) {
        
        if (err) throw err;
        var dbo = db.db("patientdata");
        dbo.collection("patient").findOne({}, function(err, result) {
        if (err) throw err;
            console.log(result)
        return resultData = result._id;
            
        db.close();
        });
    });
    res.render('patientData', { user: req.user, result: req.resultData});
});

module.exports = router;