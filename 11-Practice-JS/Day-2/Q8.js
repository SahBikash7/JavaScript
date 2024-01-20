// WAP to replace every character in a given string with the character following it in the alphabet.

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) =>
      char.charCodeAt(0) === 122
        ? String.fromCharCode("a".charCodeAt(0))
        : String.fromCharCode(char.charCodeAt(0) + 1)
    )
    .join("");
console.log(moveCharsForward("Bikasz"));
