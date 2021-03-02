const express = require('express')
const app = express()
const port = 3001
var Twit = require('twit')

var T = new Twit({
  consumer_key: "XyV11gL5qjFj4MuQJroVyuEm5",
  consumer_secret: "gpckYPB7VVDar83o3nuIXk1bmLAFuLmH64sbRMoM0YiU2wR71s",
  access_token: "1125757371861520389-mhDiO93hwCy4P9BLHrnShmsV5Ede5K",
  access_token_secret: "kXrTf5NfdlJRl60LwsQqah8LanKP4iGVyYBE6d2qhCfrc",
})

app.get('/', (req, res) => {
    var result = T.get('friendships/show', { source_screen_name	: req.fname, target_screen_name: req.sname },  function (err, data, response) {
        var following = data.relationship.source.following
        var followed = data.relationship.source.followed_by
        if (String(following) === "true" && String(followed) === "true") {
            res.send("done")
        } else {
            res.send("NA")
        }
      })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})