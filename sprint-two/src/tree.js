var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent=null;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var node=makeTree();
  node.parent=this;
  node.value=value;
  if (this.children===undefined) {
    this.children=[];
  }
  this.children.push(node);

};

treeMethods.removeFromParent= function(target) {
  // find node
  var emancipated=null;
  var dig=function(target, place) {
    _.each(place, function(val, index) {
      if (Array.isArray(val['children'])) {
        dig(target, val['children']);

      } 
      if (val['value']===target) {
        emancipated=val;
        //remove from parent
        emancipated.parent.children.splice(index, 1);
        //remove parent reference
        emancipated.parent=null;
      }
    });
  };
  dig(target, this.children);
  if (emancipated!==null) {
    return emancipated;
  }

  // set parent for this value's node to null
  // remove this node from the parent's children array
  // return the new, independent tree
}

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

treeMethods.traverse = function(callback) {
  var dig=function(place) {
    //perform callback on each node
    callback.call(null, place.value);
    //recurse over children
    if (place.children!==undefined) {
      _.each(place.children, function(child) {
        dig(child);
      });
    }
  };
  dig(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
