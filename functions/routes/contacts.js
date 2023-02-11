const router = require("express").Router();
const bodyParser = require("body-parser");
let Contact = require("../model/contact.model");

router.use(bodyParser.urlencoded({ extended: true}));

router.route("/").get((req, res) => {
    Contact.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err))
});

router.route("/").post((req, res) => {
    const newContacts = new Contact({
        username: req.body.username,
        email: req.body.email,
        message: req.body.message
    });
    console.log(newContacts)

    newContacts.save()
    .then(() => res.send("Thankyou for contacting me!"))
    .catch(err => res.status(400).json("Error:" + err))
});

module.exports = router;