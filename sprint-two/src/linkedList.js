var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node=makeNode(value);
    if (list.tail===null){
      //create completely new node
      list.tail=node;
      list.head=node;
      node.next=node;
    }  else {
      // create new node for previous tail for new tail to point to
      list.tail.next=node;
      // replace value of tail
      list.tail=node;
    }

  };

  list.removeHead = function(){
    var temp=list.head;
    list.head=list.head.next;
    //list.head=??
    return temp.value;
  };

  list.contains = function(target){
    var test=false;
    for (var key in list) {
      if (list[key]['value']===target) {
        test=true;
      }
    }
    return test;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
