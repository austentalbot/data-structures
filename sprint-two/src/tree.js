var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var node=makeTree();
  node.value=value;
  if (this.children===undefined) {
    this.children=[];
  }
  this.children.push(node);

};

treeMethods.contains = function(target){
  /*
  var test=false;
  var dig=function(target, place) {
    _.each(place, function(val) {
      if (Array.isArray(val)) {
        dig(target, place);
      }
      if (val['value']===target) {
        test=true;
      }
    });
  };
  dig(target, this.children);
  return test;  
  */
  var test=false;
  var dig=function(target, place) {
    _.each(place, function(val) {
      if (Array.isArray(val['children'])) {
        dig(target, val['children']);

      } 
      val['value']===target && (test=true);
    });
  };
  dig(target, this.children);
  return test;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
