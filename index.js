/* Given a string S that consists of only alphanumeric characters and dashes. 
   The string is separated into N + 1 groups by N dashes. 
   Also given an integer K. 
   We want to reformat the string S, 
   such that each group contains exactly K characters, 
   except for the first group, which could be shorter than K but still must contain at least one character. 
   Furthermore, a dash must be inserted between two groups, and you should convert all lowercase letters to uppercase.
  */

const licenseKeyFormatting = (S, K) => {
    S = S.replaceAll("-", "").toUpperCase();

    let license = "";

    for (let i = S.length - 1; i >= 0; i--) {
        license = S[i] + license;

        if ((S.length - i) % K === 0 && i !== 0) {
            license = "-" + license;
        }
    }

    return license;
}

// read from args, make sure that the input is valid and run the function

const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log("Usage: node index.js <string> <integer>");
    process.exit(1);
}

const [S, K] = args;

if (isNaN(K)) {
    console.log("K must be an integer");
    process.exit(1);
}

console.log(licenseKeyFormatting(S, parseInt(K)));
