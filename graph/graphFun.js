let size = 0;
let marked = [];
let edgeTo = [];
let queue = [];
let g = null;
let count = 0;

function init(graph) {
    size = graph.v.length;
    marked = [];
    edgeTo = [];
    queue = [];
    g = graph;
    count = 0;
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
    g.adj(index).forEach(w => {
        if (!marked[w]) {
            edgeTo[w] = index;
            dfs(w);
        }
    })
}
function unionCount(graph) {
    // 连通分量数量
    init(graph);
    for (let i = 0; i < size; i++) {
        if (!marked[i]) {
            dfs(i);
            count += 1;
        }
    }
    return count;
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
    unionCount
};
