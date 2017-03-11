const DiGraph = require('./diGraph.js');
const diGraphFun = require('./diGraphFun.js');

let g = new DiGraph(13);

const edges = [
    [4, 2], [2, 3], [3, 2], [6, 0], [0, 1], [2, 0], [11, 12], [12, 9], [9, 10],
    [9, 11], [8, 9], [10, 12], [11, 4], [4, 3], [3, 5], [7, 8], [8, 7], [5, 4],
    [0, 5], [6, 4], [6, 9], [7, 6]
];

edges.map((val) => {
    g.addEdge(val[0], val[1]);
});

g.toString();

console.log('9 作为起始点的可达点:');
let v = diGraphFun.graphDfs(g, 9);
let str = '';
v.map((val, index) => {
    str += index + ' ';
});
console.log(str);

console.log('0 作为起始点的可达点:');
v = diGraphFun.graphDfs(g, 0);
str = '';
v.map((val, index) => {
    str += index + ' ';
});
console.log(str);

console.log('=====');

console.log('有向环: ' + diGraphFun.hasCycle(g));


g = new DiGraph(13);
const edges2 = [
    [0, 1], [0, 5], [3, 5], [2, 3], [2, 0], [5, 4], [0, 6], [6, 4], [8, 7],
    [7, 6], [6, 9], [9, 10], [9, 11], [9, 12], [11, 12]
];
edges2.map((val) => {
    g.addEdge(val[0], val[1]);
});
g.toString();
console.log(diGraphFun.topological(g));
