// 归并排序
let temp = [];
function merge(arr, lo, mid, hi) {
    // 复制数组到额外空间
    temp.splice(lo, hi - lo + 1, ...arr.slice(lo, hi + 1));
    let left = lo;
    let right = mid;
    for (let k = lo; k <= hi; k++) {
        if (left >= mid) arr[k] = temp[right++];
        else if (right > hi) arr[k] = temp[left++];
        else if (temp[left] < temp[right]) arr[k] = temp[left++];
        else arr[k] = temp[right++];
    }
    return arr;
}
function sort(arr, lo, hi) {
    if (lo >= hi) {
        return arr;
    }
    if (lo == hi - 1) {
        if (arr[lo] > arr[hi]) {
            [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
        }
        return arr;
    }

    let mid = Math.floor((lo + hi) / 2);
    sort(arr, lo, mid - 1);
    sort(arr, mid, hi);
    return merge(arr, lo, mid, hi);
}
function mergeSort(arr) {
    temp.length = arr.length;
    return sort(arr, 0, arr.length - 1);
}

module.exports = mergeSort;
