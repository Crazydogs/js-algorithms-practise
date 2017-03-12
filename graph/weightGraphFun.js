let Heap = require('../heap/heap.js');
let Union = require('../union/union.js');

let size = 0;
let tree = [];
let g = null;

function init(graph) {
    size = graph.v.length;
    g = graph;
}

function mst(graph) {
    // 最小生成树
    let edgeHeap = new Heap((a, b) => {
        return a.weight < b.weight;
    });
    let union = new Union();
    for (let i = 0; i < graph.edge.length; i++) {
        edgeHeap.add(graph.edge[i]);
    }
    let current = null;
    while (current = edgeHeap.pop()) {
        let a = current.either();
        let b = current.other(a);
        if (union.connected(a, b)) {
            continue;
        }
        tree.push(current);
        union.union(a, b);
    }
    return tree;
}
