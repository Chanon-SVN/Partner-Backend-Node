const mongoose = require('mongoose');
const schema = mongoose.Schema;
const partnerSchema = require('./schema.js')
const database_host = 'mongodb://localhost:27017'
const MongoClient = require('mongodb').MongoClient

class PartnerRepository {

  getAll = () => {
    return new Promise((resolve, reject)=>{
      MongoClient.connect(database_host, function (err, client) {
        if (err) throw err

        var db = client.db('partners')

        db.collection('partners').find().toArray(function (err, result) {
          if (err) reject(err)
          resolve(result);
        })
      })
    });
  }

  search = (query) => {
    return new Promise((resolve, reject)=>{
      MongoClient.connect(database_host, function (err, client) {
        if (err) throw err

        var db = client.db('partners')

        db.collection('partners').find(query).toArray(function (err, result) {
          if (err) reject(err)
          resolve(result)
        })
      })
    });
  }

  insertOne = (data) => {
    return new Promise((resolve, reject)=>{
      MongoClient.connect(database_host, function (err, client) {
        if (err) throw err

        var db = client.db('partners')

        db.collection('partners').insertOne(data, function (err, result) {
          if (err) reject(err)
          resolve(result)
        })
      })
    })
  }

  }


module.exports = new PartnerRepository();

