export class PalindromeChecker {
    isPalindrome(text: string): boolean {
        text = text.replace(/\s/g, "").toLowerCase();
        const size = text.length;
        for (let i = 0; i < size / 2; i++) {
            if (text[i] !== text[size - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}
