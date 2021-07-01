var express = require("express")

var bodyParser = require('body-parser')
var app = express()
let userService = require("./database/service")
app.use(bodyParser.urlencoded({ extended: false }))

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var bodyParser = require('body-parser')

app.get("/getAllBreakingNews", (req, res, next) => {
    userService.getAllBreakingNews().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
})

app.get("/getAllTechNews", (req, res, next) => {
    userService.getAllTechNews().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
})
app.get("/getAllPoliticalNews", (req, res, next) => {
    userService.getAllPoliticalNews().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
})
app.get("/getAllEntertaimentNews", (req, res, next) => {
    userService.getAllEntertaimentNews().then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
})
app.get("/searchValue/:name", (req, res, next) => {
    var name = req.params.name
    userService.searchByName(name).then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
})
app.listen(3000, () => {
    console.log("connect")
})