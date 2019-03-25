const utils = require("loader-utils");
const parser = require("dql").parser;

module.exports = function(source) {
  this.cacheable && this.cacheable();
  const options = utils.getOptions(this);
  const flavor = options && options.flavor ? options.flavor : "mysql";
  const parsed = parser.parse(source);
  return `module.exports = (require('dql').${flavor})(${JSON.stringify(
    parsed
  )})`;
};
