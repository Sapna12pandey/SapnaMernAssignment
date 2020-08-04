const mongoose = require("mongoose");

const config = require('../config');
const User = require("../models/employee");




exports.create_User = (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    currentaddress: req.body.currentaddress,
    permanentaddress: req.body.permanentaddress,
    img:req.body.img,
    course:req.body.course,
    collage:req.body.collage,
    year:req.body.year,
    percentage:req.body.percentage,
    companyname:req.body.companyname,
    fromdate:req.body.fromdate,
    todate:req.body.todate,
    designation:req.body.designation,
    linkedin:req.body.linkedin,
    github:req.body.github,
    facebook:req.body.facebook,
    hobbies:req.body.hobbies,
     });
    user
     .save()
       .then(result => {
      console.log(result);
      res.status(201).json({
       message: "Employee created"
        });
        })
     .catch(err => {
       console.log(err);
        res.status(500).json({
        error: err
        });
      });
};



exports.user_all = (req, res, next) => {
  User.find()
    .select("firstname lastname phone email")
    .exec()
    .then(docs => {
      const response = {
        users: docs.map(doc => {
          return {
            firstname: doc.firstname,
            lastname:doc.lastname,
            phone: doc.phone,
            email: doc.email,
            id:doc.id,
            currentaddress:doc.currentaddress,
            permanentaddress:doc.permanentaddress,
            companyname:doc.companyname,

          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


exports.user_delete = (req, res, next) => {
  console.log(req.params.empId)
  User.deleteOne({ _id: req.params.empId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


exports.curr_User = async (req, res, next) => {
  let id = req.params.empId
  try {
    const user = await User.findById({
      _id: id
    })
    if (!user) {
      res.status(400).send({
        success: false,
        message: "User not found"
      });
    } else {
      res.status(200).json({
        user
      })
    }
  } catch (error) {
    res.json(error)
  }

}