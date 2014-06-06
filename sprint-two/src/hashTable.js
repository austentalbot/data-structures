var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj={};
  obj[k]=v;
  if (this._storage.get(i)===undefined) {
    this._storage.set(i, obj);
  } else {
    this._storage.set(i, _.extend(this._storage.get(i), obj));
  }
  console.log(this._storage.get(i));
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj= this._storage.get(i);
  return obj[k];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj={};
  obj[k]=null;
  this._storage.set(i, _.extend(this._storage.get(i), obj));
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
