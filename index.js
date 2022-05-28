let reverseStr = str => {
    let newStr = ""
    if (typeof str != "string")
        return "The reverseStr() function receives 1 parameter of type string."

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

let randomNum = (min, max) => {
    if (typeof min != "number" || typeof max != "number")
        return "The randomNum() function receives 2 parameters of type number."


    return Math.floor(Math.random() * (max - min)) + min
}

let smallest = arr => {
    if (!Array.isArray(arr))
        return "The smallest() function receives 1 parameter of type array."

    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i]
    }
    return min
}

let biggest = arr => {
    if (!Array.isArray(arr))
        return "The biggest() function receives 1 parameter of type array."

    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i]
    }
    return max
}

let sortAsc = arr => {
    if (!Array.isArray(arr))
        return "The sortAsc() function receives 1 parameter of type array."

    arr.sort(function (a, b) {
        return a - b
    });
    return arr
}

let sortDesc = arr => {
    if (!Array.isArray(arr))
        return "The sortDesc() function receives 1 parameter of type array."

    arr.sort(function (a, b) {
        return b - a
    });
    return arr
}

let avg = arr => {
    if (!Array.isArray(arr))
        return "The avg() function receives 1 parameter of type array."

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return (sum / arr.length)
}

let divisible = (num, divider) => {
    if (typeof num != "number" || typeof divider != "number")
        return ("The divisible() function receives 2 parameters of type number")

    if (num % divider == 0)
        return true

    return false
}

let sum = arr => {
    if (!Array.isArray(arr))
        return "The sum() function receives 1 parameter of type array."

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

let randomArr = arr => {
    if (!Array.isArray(arr))
        return "The randomArr() function receives 1 parameter of type array."

    let newArr = []
    while (arr.length > 0) {
        let random = Math.floor(Math.random() * arr.length)
        newArr.push(arr[random])
        arr.splice(random, 1)
    }
    return newArr
}

let remDupes = arr => {
    if (!Array.isArray(arr))
        return "The randomArr() function receives 1 parameter of type array."

    for (let j = 0; j < arr.length; j++) {
        for (let k = j+1; k < arr.length; k++) {
            if (arr[j] == arr[k]) {
                arr.splice(k, 1)
                k--
            }
        }
    }

    return arr
}

