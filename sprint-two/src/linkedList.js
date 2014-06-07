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
      node.prev=node;
    }  else {
      // create new node for previous tail for new tail to point to
      list.tail.next=node;
      node.prev=list.tail;

      // replace value of tail
      list.tail=node;

    }

  };

  list.addToHead = function(value){
    var node=makeNode(value);
    if (list.head===null){
      //create completely new node
      list.head=node;
      list.tail=node;
      node.next=node;
      node.prev=node;
    }  else {
      // create new node for previous head for new tail to point to
      list.head.prev=node;
      node.next=list.head;

      // replace value of tail
      list.head=node;
    }

  };

  list.removeHead = function(){
    var temp=list.head;
    list.head=list.head.next;
    list.head.prev=list.head;
    return temp.value;
  };  

  list.removeTail = function(){
    var temp=list.tail;
    list.tail=list.tail.prev;
    list.tail.next=list.tail;
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

