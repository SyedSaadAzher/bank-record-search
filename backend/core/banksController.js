var BanksModel = require("../models/Banks");

class Banks {
  async getAllBanks() {
    try {
      // return await Image.find({ username: `${req.params.username}` });
      return await BanksModel.find();
    } catch (err) {
      return err;
    }
  }
}

module.exports = Banks;
