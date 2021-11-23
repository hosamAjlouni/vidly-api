const { Model, Op } = require("sequelize");

class BaseModel extends Model {
  /**
   * @param {object} keyValObj includes model attributes to check with their values.
   * @param {int} idToExcept an id of an instance not to check for uniqueness.
   * @returns {boolean} indicating the set is unique within the model or not.
   */
  static async isUniqueSet(keyValObj, idToExcept = null) {
    keyValObj.id = { [Op.ne]: idToExcept };
    const conflicting = await this.findAll({ where: keyValObj });
    return !conflicting.length;
  }
}

module.exports = BaseModel;
