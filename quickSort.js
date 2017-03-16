// 快排
function quickSort(arr, lo, hi) {
    if (lo >= hi) return;
    let i = lo;
    let j = hi;
    let toRight = false;
    while (i < j) {
        if (toRight) {
            if (arr[j] < arr[i]) {
                swap(arr, i, j);
                j--;
                toRight = false;
            } else {
                i++;
            }
        } else {
            if (arr[j] < arr[i]) {
                swap(arr, i, j);
                i++;
                toRight = true;
            } else {
                j--;
            }
        }
    }
    quickSort(arr, lo, i - 1);
    quickSort(arr, i + 1, hi);
    return arr;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = quickSort;
