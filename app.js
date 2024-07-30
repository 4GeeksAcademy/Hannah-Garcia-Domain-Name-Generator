let article = ["the", "a", "an"];
let adj = ["great", "big", "excellent"];
let noun = ["jogger", "racoon"];
let tld = [".com", ".net", ".us", ".org "];

let domain = [];

function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}

for (let i = 0; i < article.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < tld.length; l++) {
        // All combinations with "the"
        domain.push("the" + adj[j] + noun[k] + tld[l] + "\n");

        // Check if the adjective starts with a vowel or consonant
        if (isVowel(adj[j][0])) {
          domain.push("an" + adj[j] + noun[k] + tld[l] + "\n");
        } else {
          domain.push("a" + adj[j] + noun[k] + tld[l] + "\n");
        }
      }
    }
  }
}

console.log(domain.join(""));
