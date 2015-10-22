var path = require('path');
var rootPath = path.resolve();
var Paths = {
  root: rootPath,
  public: path.join(rootPath, "public"),
  assets: path.join(rootPath, "public/assets")
};

module.exports = Paths;
