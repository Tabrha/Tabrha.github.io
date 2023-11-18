
// export   { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, 
//     reverseListLoop, TreeNode, sumTreeValues}
    export function sumTo(n: number): number {
        if (n === 0) {
            return 0;
        } else {
            return n + sumTo(n - 1);
        }
    }
    
    export function factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
    
    export function fibonacci(n: number): number {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    
    // export class Node {
    //     data: number;
    //     next: Node | null;
    
    //     constructor(data: number) {
    //         this.data = data;
    //         this.next = null;
    //     }
    // }
    
    // export function outputList(head: Node | null): string {
    //     let result = "";
    //     while (head !== null) {
    //         result += head.data + " -> ";
    //         head = head.next;
    //     }
    //     return result + "None";
    // }
    
    // export function outputListLoop(head: Node | null): string {
    //     let result = "";
    //     let current: Node | null = head;
    
    //     while (current !== null) {
    //         result += current.data + " -> ";
    //         current = current.next;
    //     }
    //     return result + "None";
    // }
    
    // export function reverseList(head: Node | null): string {
    //     let result = "Reversed List:\n";
    //     if (head === null) {
    //         return result + "None";
    //     }
    
    //     let current: Node | null = head;
    //     let prev: Node | null = null;
    //     let next: Node | null = null;
    
    //     while (current !== null) {
    //         next = current.next;
    //         current.next = prev;
    //         prev = current;
    //         current = next;
    //     }
    
    //     while (prev !== null) {
    //         result += prev.data + " -> ";
    //         prev = prev.next;
    //     }
    //     return result + "None";
    // }
    
    // export function reverseListLoop(head: Node | null): string {
    //     let result = "Reversed List using Loop:\n";
    //     let current: Node | null = head;
    //     let stack: Node[] = [];
    
    //     while (current !== null) {
    //         stack.push(current);
    //         current = current.next;
    //     }
    
    //     while (stack.length > 0) {
    //         const node: Node | undefined = stack.pop();
    //         if (node) {
    //             result += node.data + " -> ";
    //         }
    //     }
    //     return result + "None";
    // }
    
    // export class TreeNode {
    //     value: number;
    //     left: TreeNode | null;
    //     right: TreeNode | null;
    
    //     constructor(value: number) {
    //         this.value = value;
    //         this.left = null;
    //         this.right = null;
    //     }
    // }
    
    // export function sumTreeValues(root: TreeNode | null): number {
    //     if (root === null) {
    //         return 0;
    //     }
    
    //     return root.value + sumTreeValues(root.left) + sumTreeValues(root.right);
    // }