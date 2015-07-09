var express = require('express');
var router = express.Router();
var quizController= require ('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quizz' });
});
router.get('/quizes/author', quizController.author); //esto de aquí no lo tengo claro, creo que hay algo más que añadir
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
