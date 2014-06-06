var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (this._storage===undefined) {
    this._storage={};
    this._storage[item]=item;
  } else {
    if (this._storage[item]===undefined) {
      this._storage[item]=item;
    }
  }
  //if item isn't in set
    //add the item
};

setPrototype.contains = function(item){
  //loop through set looking for item
  var test=false;
  for (var key in this._storage) {
    if (this._storage[key]===item) {
      test=true;
    }
  }
  return test;
};

setPrototype.remove = function(item){
  delete this._storage[item];
  //if item is in set
    //delete the item
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
