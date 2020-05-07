const express = require('express')
const partners = express.Router()
const crypto = require('crypto')
const secret = "s4llg54hj%df"
const partnerRepository = require('./repository')
const MongoClient = require('mongodb').MongoClient


partners.get('/', async function(req, res){
  let result = await partnerRepository.getAll();

  res.send(result) 
})

partners.get('/search/:query', async function(req, res){
  let search = req.params.query
  let query = {"$text": {"$search": search}}
  let result = await partnerRepository.search(query);

  res.send(result) 
})

partners.post('/add', async function(req, res){
  const data = {name:'', industry:'', phone_number:'', email:'', img_url:''} 
  data.id = crypto.createHmac('sha256', secret).update(req.body.name).digest('hex');
  data.name = req.body.name;
  data.industry = req.body.industry;
  data.phone_number = req.body.phone_number;
  data.email = req.body.email;
  data.img_url = req.body.img_url;

  let result = await partnerRepository.insertOne(data);

  res.send(result)

})

module.exports = partners;
