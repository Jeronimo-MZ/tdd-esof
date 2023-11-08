import { PalindromeChecker } from "./palindrome-checker";

describe("PalindromeChecker", () => {
    let sut: PalindromeChecker;

    beforeAll(() => {
        sut = new PalindromeChecker();
    });

    it("should return true if a palindrome is given as parameter", () => {
        expect(sut.isPalindrome("ovo")).toBe(true);
        expect(sut.isPalindrome("asa")).toBe(true);
        expect(sut.isPalindrome("arara")).toBe(true);
        expect(sut.isPalindrome("reviver")).toBe(true);
        expect(sut.isPalindrome("matam")).toBe(true);
    });

    it("should return false if an non-palindromic string is given as parameter", () => {
        expect(sut.isPalindrome("asno")).toBe(false);
        expect(sut.isPalindrome("carro")).toBe(false);
        expect(sut.isPalindrome("teste")).toBe(false);
        expect(sut.isPalindrome("margem")).toBe(false);
        expect(sut.isPalindrome("algo")).toBe(false);
    });

    it("should detect a palindrome even if the casing is off", () => {
        expect(sut.isPalindrome("Ovo")).toBe(true);
        expect(sut.isPalindrome("asNo")).toBe(false);
    });

    it("should detect a palindromic phrase", () => {
        expect(sut.isPalindrome("subi no onibus")).toBe(true);
        expect(sut.isPalindrome("Anotaram a data da maratona")).toBe(true);
        expect(sut.isPalindrome("O lobo ama o bolo")).toBe(true);
        expect(sut.isPalindrome("Amor a Roma")).toBe(true);
    });
});
