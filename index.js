const path = require("path")
const express = require("express")
const router = require("./routes/route")
const app = express()

app.use("/",express.static( path.join(__dirname, "public")))

app.use("/api/todos", router)
app.listen(3000)