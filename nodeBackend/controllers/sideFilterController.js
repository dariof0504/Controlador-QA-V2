const { SideSchema } = require("../schemas/sideSchema.js");

const filterSIDE = (sideFile) => {
  const data = sideFile;
  const result = new SideSchema(data);

  return result;
};

const filterSideController = async (req, res) => {
  try {
    const { body } = req;
    let result = filterSIDE(body);
    res.status(200).json(result);
  } catch (error) {
    res.json(error).status(500);
  }
};

module.exports = {
  filterSideController,
};
