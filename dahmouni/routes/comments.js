var router = require('express').Router();
const commentsRepo = require('../repositories/comments');

/* GET comment  listing. */
router.get('/', async function(req, res, next) {
  res.send(await commentsRepo.getAllComments() )
});
 
router.post('/',async function(req, res, next) {
  res.send( commentsRepo.addComment(req.body.comment) )
});

router.put('/',async function(req, res, next) {
  res.send( commentsRepo.updateComment(req.body.comment) )

});

router.get('/:id',async function(req, res, next) {
  res.send( await commentsRepo.getComment( req.params.id) );
});



router.get('/:id/article',async function(req, res, next) {
    res.send( await commentsRepo.getCommentArticle( req.params.id) );
});

router.delete('/:id',async function(req, res, next) {
  res.send( commentsRepo.deleteComment(req.params.id) );
});


module.exports = router;