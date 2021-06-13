
var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
const config = require('../config/config.json');
//const jwt = require('jsonwebtoken');
router.get('/', async function(req, res, next) {  

  res.send(await usersRepo.getUsers( req.query.offset, req.query.limit))
  
  });
  
  router.post('/',async function(req, res, next) {
  
  res.send( await usersRepo.addUser( req.body.user ) );
  
  });
  
  router.put('/',async function(req, res, next) {
  
  res.send( await usersRepo.updateUser( req.body.user ) );
  
  });
  
  router.get('/:id',async function(req, res, next) {
  
  res.send( await usersRepo.getUser( req.params.id) );
  
  });
  
  router.delete('/:id',async function(req, res, next) {
  
  res.send( await usersRepo.deleteUser( req.params.id ) );

router.get('/articles/:id', async function(req, res, next) {
  res.send(await usersRepo.findUserArticles(req.params.id))
})
});
module.exports = router;