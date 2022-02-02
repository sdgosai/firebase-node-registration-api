const { admin, firebase } = require('../database/conn');
const catchError = require('../middleware/catchError');
const { getDatabase } = require('firebase-admin/database');
const { push } = require('firebase/database');
const db = getDatabase();
const dbRef = db.ref('/users')
const CryptoJS = require('crypto-js');

exports.register = catchError(async (req, res, next) => {
    const { name, email, password, phone } = req.body;
    var encPass = CryptoJS.AES.encrypt(password, process.env.PASS_SECRET).toString();

    const newUser = {
        name: name,
        email: email,
        phone: phone,
        password: encPass,
    }
    dbRef.push(newUser).then(userAdd => {
        if (userAdd) {
            res.send({
                success: true,
                message: 'Successfully register'
            })
        } else {
            res.send({
                success: false,
                message: 'Unable register'
            })
        }
    }).catch(err => {
        res.send({
            success: false,
            message: 'Failed',
            err: err
        })
    })


});
