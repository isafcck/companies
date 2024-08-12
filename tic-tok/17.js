class NodeStore {

    constructor(){
    this.nodes={};
    }
    set(node,value ){
    this.node._nodeStoreKey_= Symbol();
    this.nodes[node._nodeStoreKey_]= value;
    }
    get(node){
    return this.nodes[node._nodeStoreKey_]
    }
    has(node){
    return !!this.nodes[node.__nodeStorekey];
    }
    }
