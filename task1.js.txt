const sumEveryN = (array, n) => {
    return (n <= 0) ? [] :
        array.reduce((acc, currentValue, index) => {
            if (!(index % n)) acc.push(array.slice(index, index + n));
    		    return acc;
        }, [])
        .map((item) => item.reduce((sum, currentValue) => sum + currentValue, 0));
}