const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    res.send("<h1>my app on heroku! mała zmiana w pliku</h1>")
})

app.get("/", function (req, res) {
    res.send("{imie: \"Maksymilian\", nazwisko: \"Holik\", klasa: \"3i2\", grupa: \"a\"}")
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
