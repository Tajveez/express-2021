const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('User Lists')
})

router.post('/', (req, res) => {
  res.send('User Post')
})

router.get('/new', (req, res) => {
  res.send('User New')
})

router.get('/:id', (req, res) => {
    res.send(`User with id: ${req.params.id}`)
})


module.exports = router