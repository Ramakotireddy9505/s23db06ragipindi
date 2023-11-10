const Costume = require('../models/food');
// var express = require('express');
//const costume_controlers= require('../controllers/costume');
// var router = express.Router();

// /* GET costumes */
// router.get('/', costume_controlers.costume_view_all_Page );
// module.exports = router;


async function recreateDB() {
    await Costume.deleteMany();

    let instance1 = new Costume({
      costume_type: "Idli",
      size: 'Large',
      cost: 10
    });

    instance1.save()
      .then(doc => {
        console.log("First object saved");
      })
      .catch(err => {
        console.error(err);
      });

      let instance2 = new Costume({
        costume_type: "Dosa",
        size: 'small',
        cost: 7
      });

      instance2.save()
        .then(doc => {
          console.log("Second object saved");
        })
        .catch(err => {
          console.error(err);
        });

        let instance3 = new Costume({
            costume_type: "Vada",
            size: 'small',
            cost: 15
          });

          instance3.save()
            .then(doc => {
            console.log("Third object saved");
            })
            .catch(err => {
              console.error(err);
            });
  }

  let reseed = true;
  if (reseed) {
    recreateDB();
  }