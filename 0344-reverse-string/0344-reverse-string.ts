function reverseString(s: string[]): void {
    // Counter to keep track of the elements being swapped
    let counter: number = 0;

    // Loop through the array from the last element to the middle
    for(let i = s.length - 1; i >= counter; i--) {
        // Store the current element in a temporary variable
        let temporary: string = s[i]

        // Swap the current element with the element at the counter position
        s[i] = s[counter]
        // Replace the element at the counter position with the temporary variable
        s[counter] = temporary

        // Increment the counter to move to the next pair of elements to be swapped
        counter++
    }
};