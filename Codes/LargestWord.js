function longestWord(str) {
    //str is split into an array of words using the split method.
    const words = str.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('GeeksForGeeks is great'));