var Banks = require("../models/Banks");

class Banks {
  async getAllBanks() {
    try {
      // return await Image.find({ username: `${req.params.username}` });
      return await Banks.find();
    } catch (err) {
      return err;
    }
  }
}

module.exports = Banks;
