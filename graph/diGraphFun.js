let size = 0;
let marked = [];
let edgeTo = [];
let queue = [];
let g = null;
let count = 0;
let onStack = [];
let cycle = false;

function init(graph) {
    size = graph.v.length;
    marked = [];
    edgeTo = [];
    queue = [];
    g = graph;
    count = 0;
    onStack = [];
    cycle = false;
}
function graphDfs(graph, start) {
    // 深度优先搜索
    init(graph);
    edgeTo[start] = start;
    dfs(start);
    return edgeTo;
}
function dfs(index) {
    marked[index] = true;
    onStack[index] = true
    g.adj(index).forEach(w => {
        if (!marked[w]) {
            edgeTo[w] = index;
            dfs(w);
        } else if (onStack[w]) {
            cycle = [];
            let current = index;
            while (current != w) {
                cycle.push(current);
                current = edgeTo[current];
            }
            cycle.push(w);
            console.log('环: ' + cycle);
        }
    });
    onStack[index] = false
}
function hasCycle(graph) {
    init(graph);
    // 环检测
    for (let i = 0; i < size; i++) {
        if (!marked[i]) {
            dfs(i);
        }
    }
    return cycle;
}

function graphBfs(graph, start) {
    // 广度优先搜索
    init(graph);
    edgeTo[start] = start;
    bfs(start);
    return edgeTo;
}
function bfs(index) {
    // 须要显式地调用一个队列
    marked[index] = true;
    queue.push(index);
    let next = null;
    while ((next = queue.shift()) !== undefined) {
        marked[next] = true;
        g.adj(next).forEach(w => {
            if (!marked[w]) {
                queue.push(w);
                marked[w] = true;
                edgeTo[w] = next;
            }
        })
    }
}

module.exports = {
    graphDfs,
    graphBfs,
    hasCycle
};
