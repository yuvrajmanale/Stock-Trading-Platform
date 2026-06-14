const mongoose = require("mongoose");
const { PositionSchema } = require("../schemas/PositionSchema");

const PositionsModel = mongoose.model("position", PositionSchema);

module.exports = { PositionsModel };