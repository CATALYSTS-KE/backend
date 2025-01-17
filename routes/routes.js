const express = require("express");

const router = express.Router();
const Model = require("../model/model");

module.exports = router;

//Post Method
router.post("/post", (req, res) => {
  res.send("Post API");
});


// User routes  make sure to import accordingly
// router.post('/api/users', async (req, res) => {
//   const { name, email, password } = req.body;
//   const newUser = new User({ name, email, password });
//   try {
//     const savedUser = await newUser.save();
//     res.json(savedUser);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });  

// Article routes make sure to import accordingly
// app.post('/api/articles', async (req, res) => {
//   const { title, content, author } = req.body;
//   const newArticle = new Article({ title, content, author });
//   try {
//     const savedArticle = await newArticle.save();
//     res.json(savedArticle);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
  res.send("Get by ID API");
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//  get all
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
