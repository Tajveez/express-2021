const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('User Lists')
})

router.get('/new', (req, res) => {
  res.send('User New')
})

module.exports = router