/* 
    Title: Is the string uppercase?
    Description: Create a method isUpperCase to see whether the string is ALL CAPS. For example:

    isUpperCase('c') == false
    isUpperCase('C') == true
    isUpperCase('hello I AM DONALD') == false
    isUpperCase('HELLO I AM DONALD') == true
    isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ') == false
    isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ') == true
*/

export function isUpperCase(str: string) {
    return /^[A-Z|\s]+$/.test(str);
}
