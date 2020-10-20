const { Router } = require("express")
const bodyParser = require("body-parser")
const data = require("../controller.js")
const router = Router()
const jsonParser = bodyParser.json()

router
    .route("/")
    .get(data.get)
    .post(jsonParser, data.post)

router
    .route("/:id")
    .delete(data.delete)
    .put(jsonParser, data.put)

module.exports = router  