require('dotenv').config();
var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
var retoolAppMap = require('../utils/retoolAppsToUuids')

router.post('/embedUrl', (req, res) => {
  const parsedToken = JSON.parse(atob(req.body.accessToken.split('.')[1]))
  const options = {
    method: "post",
    headers: {
      'Authorization': `Bearer ${process.env.RETOOL_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      "orgId": "1",
      "landingPageUuid": retoolAppMap[req.body.retoolAppName],
      "externalIdentifier": parsedToken.azp,
      "groupIds": [5,6,7]
    })
  }

  fetch(`https://${process.env.RETOOL_URL}/api/embed-url/external-user`, options)
  .then(data => data.json())
  .then(json => res.send(json))
  .catch(e => console.log(e.message))
})

module.exports = router;
