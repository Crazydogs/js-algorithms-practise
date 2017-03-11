let Graph = require('./graph.js');
let graphFun = require('./graphFun.js');

let g = new Graph(7);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(2, 3);
g.addEdge(1, 3);
g.addEdge(3, 4);
g.addEdge(1, 4);
g.addEdge(5, 6);

console.log(graphFun.graphDfs(g, 0));
console.log(graphFun.graphDfs(g, 4));

console.log('===');

console.log(graphFun.graphBfs(g, 0));
console.log(graphFun.graphBfs(g, 4));

console.log(graphFun.unionCount(g));
