class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        if(!this.stack.length) {
            this.stack.push(val);
            this.minStack.push(val);
        } else {
            this.stack.push(val);
            this.minStack(Math.min(this.minStack[this.minStack.length -1], val));
        }
    }

    pop() {
        if(this.stack.length === 0) return null;
        this.minStack.pop();
        return this.stack.pop();
    }
    top(){
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}