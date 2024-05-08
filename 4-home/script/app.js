// 

function flickSwitch(arr){
    let result = [];
    let defaultValue = true
    arr.forEach(word => {
        if(word === "flick"){
            defaultValue = !defaultValue
        }
        result.push(defaultValue);
    });
    return result
}

let result = flickSwitch(['codewars', 'flick', 'code', 'wars', "flick", "apple"]);

document.write(result);