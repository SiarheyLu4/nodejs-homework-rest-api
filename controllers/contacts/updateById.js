const addSchema = require("../../schemas/addSchema")
const {RequestError} = require("../../helpers")
const contacts = require("../../models/contacts")

const updateById = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, "missing fields")
    }
    const { id } = req.params;
    const result = await contacts.updateById(id, req.body);
    if (!result) {
      throw RequestError(404, "Not found")
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = updateById;