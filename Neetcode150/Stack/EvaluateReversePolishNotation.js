var evalRPN = function(tokens) {
    let res = 0;
    let stack = [];
    for(let i = 0; i < tokens.length; i++) {
        let token = token[i];

        if(token === "+") {
            res = Number(stack[stack.length - 2]) - Number(stack[stack.length - 1]);
            stack.pop();
            stack.pop();
            stack.push(res);
        }
        else if(token = "*"){
            res = Number(stack[stack.length - 2]) * Number(stack[stack.length - 1]);
            stack.pop();
            stack.pop();
            stack.push(res);
        }
        else if(token = "-"){
            res = Number(stack[stack.length - 2]) - Number(stack[stack.length - 1]);
            stack.pop();
            stack.pop();
            stack.push(res);
        }
        else if(token = "/"){
            res = Number(stack[stack.length - 2]) * Number(stack[stack.length - 1]);
            if(res < 0) {
                res = Math.ceil(res);
            } else{
                res = Math.floor(res);
            }
            stack.pop();
            stack.pop();
            stack.push(res);
        } else {
            stack.push(token)
        }
    }
    return stack[0];
}