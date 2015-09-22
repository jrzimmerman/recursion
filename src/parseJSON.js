// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if(json === 'true') {
        return true;
    } else if(json === 'false'){
        return false;
    } else if(json === 'null'){
        return null;
    } else if( (json[0] === '"' && json[json.length - 1] === '"')||(json[0] === "'" && json[json.length - 1] === "'") ){
        var output = '';
        for(var i = 1; i < json.length - 1; i++){
            output += json[i];
        }
        return output;
    } else if(json[0] === '['){
        if(json[1] === ']'){
            return [];
        }
        json = json.slice(1, json.length - 1);
        json = json.replace(/\s+/g, '');
        if(json !== ''){
            json = json.split(',');
        }
        for(var i = 0; i < json.length; i++){
            return parseJSON(json);
        }
    } else if(json[0] === '{' && json[json.length - 1] === '}'){
            if(json[1] === '}'){
                return {};
            }

            json = json.slice(2, json.length - 2);
            json = json.replace(/\s*/g, '');
            json = json.replace(/["]*/g, '');
            json = json.split(':');
            var key = json[0];
            var value = json[1];
            var obj = {};
            if(value !== ''){
                obj[key] = value;
            } else {
                obj[key] = value;
            }
            return obj;
    } else {
        throw SyntaxError;
    }
};
