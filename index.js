const se = require('safe-eval');
const utils = require('loader-utils');
const parser = require('dql').parser;

module.exports = function(source) {
    this.cacheable && this.cacheable();
    const options = utils.getOptions(this);
    const flavor = options && options.flavor ? options.flavor : 'mysql';
    const parsed = parser.parse(se(source, { module }));
    return `module.exports = (require('dql').${flavor})(${JSON.stringify(parsed)})`;
};
