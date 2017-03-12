// 有权重的有向边
function Edge(point1, point2, weight) {
    this.from = point1;
    this.to = point2;
    this.weight = weight;
}

module.exports = Edge;
