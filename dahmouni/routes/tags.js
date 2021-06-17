var router = require('express').Router();
const tagsRepo = require('../repositories/tags');

/* GET tags listing. */
router.get('/', async function(req, res, next) {
  res.send(await tagsRepo.getAllTags() )
});
 
router.post('/',async function(req, res, next) {
  res.send( tagsRepo.addTag(req.body.tag) )
});

router.put('/',async function(req, res, next) {
  res.send( tagsRepo.updateTag(req.body.tag) )

});

router.get('/:id',async function(req, res, next) {
  res.send( await tagsRepo.getTag( req.params.id) );
});


router.get('/:id/articles',async function(req, res, next) {
    res.send( await tagsRepo.getTagArticles( req.params.id) );
});

router.delete('/:id',async function(req, res, next) {
  res.send( commentsRepo.deleteTag(req.params.id) );
});


module.exports = router;