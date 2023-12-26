function getSumm(arr, start, end) {
    return new Promise((resolve, reject) => 
    {
        if (!Array.isArray(arr)) reject(new Error("Array isn't correct"));
        if (start < 0 || arr.length < end || end < start) reject(new Error("Range isn't correct"));
        let summ = 0;
        for (let i = start; i < end; i++) {
            summ += arr[i];
        }
        resolve(summ);
    });
};

getSumm([3,4,5,6,7], 0, 3).then(result => console.log(result)); // 12
getSumm([3,4,5,6,7], 10, 1).then(result => console.log(result)).catch(err => console.log(err.message));

