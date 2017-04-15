const request = require('request')

const sites = [
  'https://api.find.earth',
  'https://admin.find.earth',
  'https://find.earth'
]

sites.forEach(site => {
  request(site, (error, response, body) => {
    if (error) {
      console.log(`${site} error: `, error)
    }
    console.log(`${site} statusCode: `, response && response.statusCode)
  })
})
