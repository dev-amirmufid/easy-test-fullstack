export const isValidBracketSequence = (s: string) => {
    const stack = [];
    const bracketMap = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    for (let char of s) {
        if (['{', '[', '('].includes(char)) {
            stack.push(char);
        } else if (['}', ']', ')'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
