// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  if (json === 'null') {
    return null;
  }
  if (json === '') {
    return '';
  }
  if (json.charAt(0) === '"' && json.charAt(json.length - 1) === '"') {
    return json.substring(1, json.length - 1);
  }
  return Number(json);
};
