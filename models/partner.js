const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  name: String,
  address: String,
  contactNumber: String,
  websiteURL: String,
  type: String,
  operatingHours: {
    opens: String,
    closes: String,
    holiday: String,
  },
  activityDetails: {
    activitiesOffered: [String],
    activitySchedules: [
      {
        activity: String,
        classTimes: [{ start: String, end: String }],
        availability: String,
      },
    ],
  },
  facilityCapacity: {
    maximumCapacity: Number,
    occupancyLimits: [
      {
        activity: String,
        limit: Number,
      },
    ],
  },
  pricingAndMembershipData: {
    membershipFees: String,
    specialPromotions: [
      {
        promotionName: String,
        promotionContent: String,
        price: String,
      },
    ],
  },
  facilityAmenities: {
    lockerRooms: Boolean,
    showers: Boolean,
    parking: Boolean,
    rulesAndRegulations: [String],
  },
  locationInformation: {
    coordinates: {
      lat: Number,
      lng: Number,
    },
    address: String,
  },
  marketingAndPromotion: {
    marketingMaterials: [String],
    marketingCampaigns: [String],
  },
  uniqueIdentifier: String,
});

module.exports = mongoose.model("partners", partnerSchema);
