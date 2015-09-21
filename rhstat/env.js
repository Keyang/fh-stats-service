module.exports={
  set:set,
  get:get
}

var def={

}
var inMem={

}
function get(key){
  return inMem[key]===undefined?inMem[key]:process.env[key]?process.env[key]:def[key];
}
function set(key,val){
  inMem[key]=val;
}
