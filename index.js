const se = require('safe-eval');
const utils = require('loader-utils');

module.exports = function(source) {
    this.cacheable && this.cacheable();
    const options = utils.getOptions(this);
    const flavor = options && options.flavor ? options.flavor : 'mysql';
    return `module.exports = (require('dql').${flavor})\`${se(source, {
        module
    }).replace(/\s+/g, ' ').trim()}\``;
};
