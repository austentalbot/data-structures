var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length=0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length]=value;
    length++;
  };

  someInstance.dequeue = function(){
    for (var index=0; index<length; index++) {
      storage[index-1]=storage[index]
    }
    if (index>0) {
      length--;
    }
    delete storage[length];
    var returnVal=storage[-1];
    delete storage[-1];
    return returnVal;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
