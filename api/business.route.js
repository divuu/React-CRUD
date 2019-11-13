const express = require("express");
const businessRoutes = express.Router();

let Business = require("./business.modal");

/* / Defined store route */
businessRoutes.route("/add").post(function(req, res) {
  console.log("ADD", req.body);
  let business = new Business(req.body);
  business
    .save()
    .then(business => {
      console.log("Bus", business);
      res.status(200).json({ business: "business in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
businessRoutes.route("/").get(function(req, res) {
  Business.find(function(err, Businesses) {
    if (err) {
      console.log(err);
    } else {
      res.json(Businesses);
    }
  });
});

// Defined edit route
businessRoutes.route("/Edit/:id").get(function(req, res) {
  let id = req.params.id;
  Business.findById(id, function(err, business) {
    res.json(business);
  });
});

//  Defined update route
businessRoutes.route("/update/:id").post(function(req, res) {
  let id = req.params.id;
  Business.findById(id, function(err, business) {
    if (!business) {
      res.status(404).send("Data Not Found");
    } else {
      business.person_name = req.body.person_name;
      business.business_name = req.body.business_name;
      business.business_gst_number = req.body.business_gst_number;

      business
        .save()
        .then(business => {
          res.json("Update Commpleted");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
businessRoutes.route("/delete/:id").get(function(res, req) {
  let id = req.params.id;
  Business.findByIdAndRemove(id, function(err, business) {
    if (err) {
      res.json(err);
    } else {
      res.json("Successfully removed");
    }
  });
});

module.exports = businessRoutes;
