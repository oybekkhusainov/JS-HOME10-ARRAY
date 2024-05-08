let word = prompt("Soz kiriting: ");

function words(word, letter) {

    let count = 0;

    for (let i = 0; i < word.length; i++) {

        if (word[i] === letter) {

            count++

        }
    }

    return count

}

let result = words(word, "a");

document.write(result)