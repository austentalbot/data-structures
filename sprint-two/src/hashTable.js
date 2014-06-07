var HashTable = function(limit){
  if (limit===undefined) {
    this._limit = 8;
  } else {
    this._limit=limit;
  }
  this._count=0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // get index
  var i = getIndexBelowMaxForKey(k, this._limit);
  // create array and populate with key and value
  var tuple = [k, v];

  // if index is null set index with a new array populated with tuple;
  // else assign array at index to bucket and push the newly created tuple to array
  // set index with new array
  if (this._storage.get(i)=== null || this._storage.get(i)==undefined) {
    this._storage.set(i, [tuple]);
  } else {
    var bucket = this._storage.get(i);
    bucket.push(tuple);
    this._storage.set(i, bucket);
  }

  this._count++;

  // check to see if this._storage is at least 75% full
  // if so, increase max size

  if ((this._count/this._limit) >=(3/4)) {
    var newTable=this.resize(this._limit*2, this);
    this._storage=newTable._storage;
    this._limit=newTable._limit;
    this._count=newTable._count;
  }
};


HashTable.prototype.retrieve = function(k){
  // get index
  // assign array at index to variable bucket
  // create new variable and assign to null
  // loop through bucket checking to see if match in keys
  // return result
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result = null;
  _.each(bucket, function(tuple) {
    if(tuple[0] === k) {
      result= tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){
  // get index
  // get array at index assign to bucket
  // create temporary bucket
  // push values that do not have key to temporary bucket
  // if tempBucket is empty return null else return tempbucket
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var tempBucket = [];
  _.each(bucket, function(tuple) {
    if(tuple[0] !== k) {
      tempBucket.push(tuple);
    }
  });

  if(tempBucket.length === 0) {
    this._storage.set(i, null);
  } else {
    this._storage.set(i, tempBucket);
  }

  // check to see if this._storage is <25% full
  // if so, decrease size
  this._count--;
  if ((this._count/this._limit) <(1/4)) {
    var newTable=this.resize(this._limit*(1/2), this);
    this._storage=newTable._storage;
    this._limit=newTable._limit;
    this._count=newTable._count;
  }

};

HashTable.prototype.resize=function(newLimit, that) {
  var newTable=new HashTable(newLimit);
  //iterate over all values in current table
  that._storage.each(function(bucket){
    _.each(bucket, function(tuple) {
      newTable.insert(tuple[0], tuple[1]);
    });
  });

  return newTable;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
