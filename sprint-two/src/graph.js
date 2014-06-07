var Graph = function(){
  this.nodes=[];
  this.edges=[];
};

Graph.prototype.addNode = function(newNode, toNode){

  this.addEdge(newNode, toNode);
  this.nodes.push(newNode);

  // create edge when only two nodes
  if (this.nodes.length===2) {
    this.addEdge(this.nodes[0], this.nodes[1]);
  }
};

Graph.prototype.contains = function(node){
  var found=false;
  _.each(this.nodes, function(val){
    if (val===node) {
      found=true;
    }
  });
  return found;
};

Graph.prototype.removeNode = function(node){
  var returnNodes=[];
  _.each(this.nodes, function(val){
    if (val!==node) {
      returnNodes.push(val);
    }
  });
  this.nodes=returnNodes;  
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var found=false;
  _.each(this.edges, function(edge){
    if (edge['from']===fromNode && edge['to']===toNode) {
      found=true;
    }
  });  
  return found;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var edge={};
  edge.to=toNode;
  edge.from=fromNode;
  this.edges.push(edge);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var returnEdges=[];
  var from=false;
  var to=false;

  // remove edge
  _.each(this.edges, function(edge){
    if (edge['from']!==fromNode || edge['to']!==toNode) {
      returnEdges.push(edge);
    }
  });
      

  this.edges=returnEdges;

  //test if from and to nodes have any other edges
  _.each(returnEdges, function(edge){
    if (edge['from']===fromNode || edge['to']===fromNode) {
      from=true;
    }
    if (edge['from']===toNode || edge['to']===toNode) {
      to=true;
    }
  });

  console.log(returnEdges);

  if (from===false) {
    this.removeNode(fromNode);
  }
  if (to===false) {
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
