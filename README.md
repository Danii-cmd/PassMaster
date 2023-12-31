# PassMaster

Welcome to your Trusted Companion for Instant, Secure, and Random Password Generation. This is a small, ongoing project where I'm continuously enhancing the features. Easily craft unique character combinations with a single command, tailoring the length, type, and quantity of characters to your needs. You can even personalize with prefixes or suffixes, aligning with your preferences.&#x1F4A1; Safeguarding your accounts and data has never been simpler, making it ideal for swiftly creating accounts and elevating your online security. Join me on this journey of refinement and empowerment! &#x2728;&#x1F512;

*This is a small personal project to put my knowledge into practice in node.js. If you'd like to use it, go ahead, it would make me happy!* &#x1F603;

## Working on...

Working on a new implementation for encrypting and decrypting passwords. &#x1F527; &#x1F4BB;

## Quick start

To install PassMaster, use the following command :

```
 npm i passmaster
```

usage :
```javascript
import { passMasterGenerator } from "passmaster";

let generatedPassword = passMasterGenerator({
    leng: 8,
    number: true,
    upper: false,
    specialChar: false,
    specialCharClient: ["^", "*", "_", "-", ":", ";", ",", ".", "/"],
    changeS: false,
});
```

The properties shown above are the default values. There are certain features they must have :
- leng : Length of **6** to **16** characters.
- number : If you want to add numbers to the generated password, use **true** or **false** values.
- upper : If you want to add uppercase letters to the generated password, use **true** or **false** values.
- specialChar : If you want to add special characters ["^", "*", "_", "-", ":", ";", ",", ".", "/"] to the generated password, use **true** or **false** values. *(The default values in changeS cannot be used here)*
- specialCharClient : If you want to use other special characters and not use the default ones, you just need to set **specialCharClient: ["*your_symbol*", "*your_symbol*", "*your_symbol*"]**, and in **_your_symbol_**, place the characters you wish to use.
- changeS : If you want to replace some letters with special characters in the generated password, use **true** or **false** values. **_Default symbols and their corresponding letters :_** _["@", "!", "$", "&", "%", "~", "+", "<", "|", "#"] | [a, i, s, y, x, n, t, c, l, o]_ *(Affects both uppercase and lowercase)*