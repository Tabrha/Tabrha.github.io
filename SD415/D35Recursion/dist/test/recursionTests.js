/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
import { sumTo, factorial, fibonacci } from "../src/recursion.js";
// outputList, outputListLoop, reverseList,
//      reverseListLoop, TreeNode, sumTreeValues, Node } 
describe("recursion tests", function () {
    // let list: Node | null;
    // beforeEach(function () {
    //     list = new Node(1);
    //     list.next = new Node(2);
    //     list.next.next = new Node(3);
    //     list.next.next.next = new Node(4);
    // });
    it("tests summing by recursion", function () {
        assert.strictEqual(sumTo(5), 15);
        assert.strictEqual(sumTo(10), 55);
    });
    it("tests factorial", function () {
        assert.strictEqual(factorial(5), 120);
        assert.strictEqual(factorial(10), 3628800);
    });
    it("tests fibonacci 10", function () {
        assert.strictEqual(fibonacci(10), 55);
    });
    it("tests fibonacci 30", function () {
        assert.strictEqual(fibonacci(30), 832040);
    });
    // it("recursive version prints 1 2 3 4 to console", function () {
    //     assert.strictEqual(outputList(list), "1 -> 2 -> 3 -> 4 -> None");
    // });
    // it("iterative version prints 1 2 3 4 to console", function () {
    //     assert.strictEqual(outputListLoop(list), "1 -> 2 -> 3 -> 4 -> None");
    // });
    // it("recursive version prints 4 3 2 1 to console", function () {
    //     assert.strictEqual(reverseList(list), "Reversed List:\n4 -> 3 -> 2 -> 1 -> None");
    // });
    // it("loop version prints 4 3 2 1 to console", function () {
    //     assert.strictEqual(reverseListLoop(list), "Reversed List using Loop:\n4 -> 3 -> 2 -> 1 -> None");
    // });
});
// describe("binary tree recursion", function () {
//     const tn3: TreeNode = { value: 3, left: null, right: null };
//     const tn5: TreeNode = { value: 5, left: null, right: null };
//     const tn4: TreeNode = { value: 4, left: null, right: null };
//     const tn2: TreeNode = { value: 2, left: tn4, right: tn5 };
//     const binaryTree: TreeNode = { value: 1, left: tn2, right: tn3 };
//     it("tests sum values of binary tree", function () {
//         assert.strictEqual(sumTreeValues(binaryTree), 15);
//     });
// });
