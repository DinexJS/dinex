function findFileName() {
    let path = require('path');
    let filename = path.basename(__filename);
    return filename;
}
module.exports = {
    findFileName,
    test
}