// 插入排序

var insertSort = function (list, compare) {
    var compareFunciont = compare || function (a, b) {
        if (a > b)  return 1;
        if (a == b)  return 0;
        if (a < b)  return -1;
    };

    if (!(list && list.length)) {
        return [];
    }

    var sort = function () {
        for (var i = 1; i < list.length; i++) {
            for (var j = i; j > 0 && compareFunciont(list[j], list[j - 1]) < 0; j--) {
                var temp = list[j];
                list[j] = list[j - 1];
                list[j - 1] = temp;
            }
        }

        return list;
    }

    return sort();
}

module.exports = insertSort;
