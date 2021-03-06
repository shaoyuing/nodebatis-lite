const _ = require("lodash");

module.exports.camelCase = function(data) {
  if (_.isArray(data)) {
    return data.map(item => {
      const parsedItem = {};
      Object.keys(item).forEach(key => {
        parsedItem[_.camelCase(key)] = item[key];
      });
      return parsedItem;
    });
  } else {
    const parsedData = {};
    Object.keys(data).forEach(key => {
      parsedData[_.camelCase(key)] = data[key];
    });
    return parsedData;
  }
};

module.exports.snakeCase = function(data) {
  if (_.isArray(data)) {
    return data.map(item => {
      const parsedItem = {};
      Object.keys(item).forEach(key => {
        parsedItem[_.snakeCase(key)] = item[key];
      });
      return parsedItem;
    });
  } else {
    const parsedData = {};
    Object.keys(data).forEach(key => {
      parsedData[_.snakeCase(key)] = data[key];
    });
    return parsedData;
  }
};