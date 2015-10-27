"use strict"

var express = require('express');
var router = express.Router();
var PersonModel = require('../server/data-context').PersonModel;
var logger = require('../common/logger')(module);

/*api:start*/
router.get('/', function(req, res) {
  return PersonModel.find(function (err, messages) {
    if (!err) {
      logger.info("load persons");
      return res.send(messages);
    } else {
      res.statusCode = 500;
      logger.error('Internal error(%d): %s', res.statusCode, err.message);
      return res.send({ error: 'Server error' });
    }
  });
});

router.post('/', function(req, res) {
  var newPerson = new PersonModel({
    Name: req.body.name,
    Wins: []
  });

  newPerson.save(function (err) {
    if (!err) {
        logger.info("person created");
        return res.send({ status: 'OK', message: newPerson });
    } else {
        if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
        } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
        }
        logger.error('Internal error(%d): %s', res.statusCode, err.message);
    }
  });
});

router.get('/:id', function(req, res) {
  return PersonModel.findById(req.params.id, function (err, person) {
    if(!person) {
      res.statusCode = 404;
      return res.send({ error: 'Not found' });
    }
    if (!err) {
      return res.send({ status: 'OK', message: person });
    } else {
      res.statusCode = 500;
      logger.error('Internal error(%d): %s', res.statusCode, err.message);
      return res.send({ error: 'Server error' });
    }
  });
});

router.put('/:id', function (req, res) {
  logger.info("id:", req.params.id, "body", req.body);
  return PersonModel.findById(req.params.id, function (err, person) {
    if(!person) {
      res.statusCode = 404;
      return res.send({ error: 'Not found' });
    }

    person.Name = req.body.Name;
    person.Wins = req.body.Wins;

    return person.save(function (err) {
      if (!err) {
        logger.info("person updated");
        return res.send({ status: 'OK', message: person });
      } else {
        if(err.name == 'ValidationError') {
          res.statusCode = 400;
          res.send({ error: 'Validation error' });
        } else {
          res.statusCode = 500;
          res.send({ error: 'Server error' });
        }

        logger.error('Internal error(%d): %s', res.statusCode, err.message);
      }
    });
  });
});

router.delete('/:id', function (req, res){
  return PersonModel.findById(req.params.id, function (err, person) {
    if(!person) {
      res.statusCode = 404;
      return res.send({ error: 'Not found' });
    }
    return message.remove(function (err) {
      if (!err) {
        logger.info("person removed");
        return res.send({ status: 'OK' });
      } else {
        res.statusCode = 500;
        logger.error('Internal error(%d): %s', res.statusCode, err.message);
        return res.send({ error: 'Server error' });
      }
    });
  });
});
/*api:end*/

module.exports = router;
