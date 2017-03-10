// 快排
function quickSort(arr, lo, hi) {
    if (lo >= hi) return;
    let i = lo + 1;
    let j = hi;
    while (i < j) {
        if (arr[i] > arr[lo]) {
            swap(arr, i, j--);
        } else {
            i += 1;
        }
    }
    var middle = arr[lo] < arr[i] ? i - 1 : i;
    swap(arr, lo, middle);
    quickSort(arr, lo, middle - 1);
    quickSort(arr, middle + 1, hi);
    return arr;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = quickSort;
