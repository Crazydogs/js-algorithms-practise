// 有权有向图相关算法
let Heap = require('../heap/heap.js');

let size = 0;
let disTo = [];
let edgeTo = [];
let vHeap = null;
let inHeap = [];
let g = null;

function init(graph) {
    size = graph.v.length;
    for (let i = 0; i < size; i++) {
        disTo[i] = Infinity;
        inHeap[i] = false;
    }
    vHeap = new Heap(function(a, b) {
        return disTo[a] < disTo[b];
    });
    g = graph;
}

function shortestPath(graph, index) {
    init(graph);
    vHeap.add(0);
    inHeap[0] = true;
    disTo[0] = 0;
    let current = null;
    while (current = vHeap.pop()) {
        inHeap[current] = false;
        g.v[current].forEach((val, index) => {
            let target = val.to;
            if (disTo[target] > disTo[current] + val.weight) {
                edgeTo[target] = current;
                disTo[target] = disTo[current] + val.weight;
                if (inHeap[target]) {
                    vHeap.change()
                }
            }
        })
    }
}
