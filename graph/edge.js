// 有权重的无向边
function Edge(point1, point2, weight) {
    this.p1 = point1;
    this.p2 = point2;
    this.weight = weight;
}

Edge.prototype.either = function either() {
    return this.p1;
}
Edge.prototype.other = function other(p) {
    return p == this.p1 ? p2 : (p == this.p2 ? p2 : null);
}

module.exports = Edge;
