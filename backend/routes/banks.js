const express = require("express");
const router = express.Router();
const Banks = require("../core/banksController");
const APIResponseHandler = require("../utils/APIResponseHandler/APIResponseHandler");

router.get("banks", async function (req, res) {
  console.log("Get All Banks Request: ");
  let result = await new Banks().getAllBanks();
  if (!result.errors)
    console.log("Get Banks Response: Found", result.length, "banks");
  else console.error("Get Banks Error Response: ", result.errors);
  return new APIResponseHandler().handle(res, result, "GET");
});

module.exports = router;
