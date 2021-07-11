const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include:[ 
        Product
    ]
    }
  ).then(dbProductData => res.json(dbProductData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  // be sure to include its associated Products
  });

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      Product
    ]
  }).then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({ message: 'No category found! '});
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  // Category.create(req.body)
  // .then((category) => {
  //   if (req.body.categoryIds.length) {
  //     const categoryIdArr = req.body.
  //   }
  // })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy() // pass through one id looking to delete or will delete whole table 
});

module.exports = router;
