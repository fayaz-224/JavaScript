function isBalanced(str){
    if(str.length == 0) return true;

    const stack = [];
    const pairs = {')':'(', '}':'{', ']':'['};

    for(let ch of str){ //for(let i=0; i<str.length; i++){
        if(Object.values(pairs).includes(ch))   //if (['(', '[', '{'].includes(ch))
            stack.push(ch);
        else if (ch in pairs){  //else if ([')', ']', '}'].includes(ch))
            if(stack.pop() !== pairs[ch])
                return false;
        }
    }
    return stack.length === 0;
}

console.log(isBalanced('{[]}'));  //true
console.log(isBalanced('{[)]}'));  //false