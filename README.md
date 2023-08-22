[![Version](https://img.shields.io/badge/version-1.0.3-blue.svg)](https://www.npmjs.com/package/passmaster)
[![GitHub](https://img.shields.io/badge/GitHub-DaniiCmd-blue?style=flat&logo=github)](https://github.com/Danii-cmd)
[![Build Status](https://img.shields.io/badge/status-active-brightgreen.svg)](https://www.npmjs.com/package/passmaster)
![Package Size](https://img.shields.io/badge/size-36.8kB-blue.svg)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](https://opensource.org/licenses/MIT)
[![Coverage](https://img.shields.io/badge/dependencies-none-maroon.svg)](https://www.npmjs.com/package/passmaster)


<h1 style="font-size: 42px">PassMaster</h1>

<span style="font-size: 18px;">&#x1F510; Welcome to your Trusted Companion for Instant, Secure, and Random Password Generation. This is a small, ongoing project where I'm continuously enhancing the features. Easily craft unique character combinations with a single command, tailoring the length, type, and quantity of characters to your needs. You can even personalize with prefixes or suffixes, aligning with your preferences.&#x1F4A1; Safeguarding your accounts and data has never been simpler, making it ideal for swiftly creating accounts and elevating your online security. Join me on this journey of refinement and empowerment! &#x2728;&#x1F512;</span>

*This is a small personal project to put my knowledge into practice in node.js. If you'd like to use it, go ahead, it would make me happy!* &#x1F603;

<h2 style="font-size: 32px;">Working on...</h2>

<span style="font-size: 18px;">Working on a new implementation for encrypting and decrypting passwords. &#x1F527; &#x1F4BB;</span> 

<h2 style="font-size: 32px;">Quick start</h2>

<span style="font-size: 17px;">To install PassMaster, use the following command :</span>

```
 npm i passmaster
```

<span style="font-size: 17px;">usage :</span>
```javascript
import { passMasterGenerator } from "passmaster";

let generatedPassword = passMasterGenerator({
    leng: 8,
    number: true,
    upper: false,
    specialChar: false,
    specialCharClient: ["^", "*", "_", "-", ":", ";", ",", ".", "/"],
    changeS: false,
})
```

<span style="font-size: 17px;">The properties shown above are the default values. There are certain features they must have :</span>
- <span style="font-size: 17px;">leng : Length of **6** to **16** characters.</span>
- <span style="font-size: 17px;">number : If you want to add numbers to the generated password, use **true** or **false** values.</span>
- <span style="font-size: 17px;">upper : If you want to add uppercase letters to the generated password, use **true** or **false** values.</span>
- <span style="font-size: 17px;">specialChar : If you want to add special characters ["^", "*", "_", "-", ":", ";", ",", ".", "/"] to the generated password, use **true** or **false** values. *(The default values in changeS cannot be used here)*</span>
- <span style="font-size: 17px;">specialCharClient : If you want to use other special characters and not use the default ones, you just need to set **specialCharClient: ["*your_symbol*", "*your_symbol*", "*your_symbol*"]**, and in **_your_symbol_**, place the characters you wish to use.</span>
- <span style="font-size: 17px;">changeS : If you want to replace some letters with special characters in the generated password, use **true** or **false** values. **_Default symbols and their corresponding letters :_** _["@", "!", "$", "&", "%", "~", "+", "<", "|", "#"] | [a, i, s, y, x, n, t, c, l, o]_ *(Affects both uppercase and lowercase)*</span>