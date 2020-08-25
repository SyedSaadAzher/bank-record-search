var BanksModel = require("../models/Banks");

class Banks {
  async getAllBanks() {
    try {
      return await BanksModel.find();
    } catch (err) {
      return err;
    }
  }

  async getBankWithId(req) {
    try {
      //TODO: Add particular search condition
      return await BanksModel.find();
    } catch (err) {
      return err;
    }
  }
}

module.exports = Banks;
