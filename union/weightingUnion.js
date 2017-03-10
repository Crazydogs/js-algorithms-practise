// 加权联通算法

function WeightingUnion(number) {
    this.v = [];
    this.size = [];
    for (let i = 0; i < number; i++) {
        this.v[i] = i;
        this.size[i] = 1;
    }
    this.count = number;
}

module.exports = WeightingUnion;

WeightingUnion.prototype.find = function find(index) {
    while (this.v[index] != index) {
        index = this.v[index];
    }
    return index;
}
WeightingUnion.prototype.union = function union(a, b) {
    let roota = this.v[a];
    let rootb = this.v[b];
    if (roota == rootb) {
        return;
    }
    if (this.size[roota] > this.size[rootb]) {
        this.v[rootb] = roota;
        this.size[roota] += this.size[rootb];
    } else {
        this.v[roota] = rootb;
        this.size[rootb] += this.size[roota];
    }
}

WeightingUnion.prototype.connected = function (a, b) {
    return this.find(a) == this.find(b);
}
