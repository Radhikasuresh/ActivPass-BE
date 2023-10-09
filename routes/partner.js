const express = require("express");
const router = express.Router();
const Partner = require("../models/partner");

router.get("/allpartners", async (req, res) => {
  try {
    const AllPartners = await Partner.find({});
    res.status(200).json(AllPartners);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch partners" });
  }
});
router.post("/partners", async (req, res) => {
  try {
    const newPartner = new Partner(req.body);
    const savedPartner = await newPartner.save();
    res.status(201).json(savedPartner);
  } catch (error) {
    res.status(400).json({ error: "Failed to add partner" });
  }
});

router.put("/partners/:id", async (req, res) => {
  const partnerId = req.params.id;
  try {
    const partner = await Partner.findByIdAndUpdate(partnerId, req.body, {
      new: true,
    });

    if (!partner) {
      return res.status(404).json({ error: "Partner not found" });
    }

    res.status(200).json(partner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update partner" });
  }
});

router.delete("/partners/:id", async (req, res) => {
  const partnerId = req.params.id;

  try {
    const deletedPartner = await Partner.findByIdAndDelete(partnerId);

    if (!deletedPartner) {
      return res.status(404).json({ error: "Partner not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete partner" });
  }
});

module.exports = router;
