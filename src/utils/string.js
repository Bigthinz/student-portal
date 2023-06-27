// import { extend } from "./utils";

export default {
  /**
   *@use for converting a string to sentence case
   * @param str {string}
   * @returns {string}
   */
  toSentenceCase: function (str) {
    if (str) {
      str = str.toString().toLowerCase();
      return (str = str[0].toUpperCase() + str.substring(1, str.length));
    }
    return '';
  },
  /**
   *@use for capitalising a string
   * @param str {string}
   * @returns {string}
   */
  capitalise: function (str) {
    if (str) {
      str = str.toString().toLowerCase().split(' ');
      return str
        .map((s) => {
          return this.toSentenceCase(s);
        })
        .join(' ');
    }
    return '';
  },
  /**
   * @use for checking if a string value is empty
   * @param str
   * @returns {boolean}
   */
  isEmpty: function (str) {
    return str === null || str === undefined ? true : /^[\s\xa0]*$/.test(str);
  },

  /**
   *
   * @param str {String}
   * @param charsArray {Array<String>}
   * @param replaceWith {String}
   * @returns {String | *}
   */
  stripChars: function (str, charsArray, replaceWith = '') {
    if (str) {
      for (let i = 0, len = charsArray.length; i < len; i++) {
        str = str.replace(new RegExp(charsArray[i], 'ig'), replaceWith);
      }
      return str;
    }
    return '';
  },
  /**
   * @use for generating random strings of a certain length (default 5)
   * @param options{{
       length : Number,
        spaces : Boolean,
         digits : Boolean,
          alphabets : Boolean,
          smallCaps : Boolean,
          caps : Boolean }}
   *  length {Number} how how many characters should be returned
   *  spaces {Boolean}
   * @returns {string}
   */

  /**
   *
   * @param length
   * @param digits
   * @param lowercase
   * @param uppercase
   * @param spaces
   * @returns {string}
   */
  rand: function ({
    length = 5,
    digits = true,
    lowercase = true,
    uppercase = true,
    spaces = false,
  }) {
    let config = { length, digits, lowercase, uppercase, spaces };

    let charSets = {
      spaces: ' ',
      caps: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      smallCaps: 'abcdefghijklmnopqrstuvwxyz',
      digits: '0123456789',
    };

    let text = '';
    let possible = '';

    for (let key in config) {
      if (config[key] === true && key !== 'length') {
        possible += charSets[key];
      }
    }

    let len = possible.length;

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * len));
    }

    len = possible = null;
    return text;
  },
};

// export  function decodeFromBase64(str) {
//   // Going backwards: from byte stream, to percent-encoding, to original string.
//   return decodeURIComponent(atob(str).split('').map(function (c) {
//     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//   }).join(''));
// }

// /**
//  *
//  * @param str
//  * @returns {string}
//  */
// export function encodeToBase46(str) {
//   // first we use encodeURIComponent to get percent-encoded UTF-8,
//   // then we convert the percent encodings into raw bytes which
//   // can be fed into btoa.
//   return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
//     function toSolidBytes(match, p1) {
//       return String.fromCharCode('0x' + p1);
//     }));
// }

// /* To Title Case © 2018 David Gouch | https://github.com/gouch/to-title-case */

// // eslint-disable-next-line no-extend-native
// String.prototype.toTitleCase = function () {
//   var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i;
//   var alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/;
//   var wordSeparators = /([ :–—-])/;

//   return this.split(wordSeparators)
//     .map(function (current, index, array) {
//       if (
//         /* Check for small words */
//         current.search(smallWords) > -1 &&
//         /* Skip first and last word */
//         index !== 0 &&
//         index !== array.length - 1 &&
//         /* Ignore title end and subtitle start */
//         array[index - 3] !== ':' &&
//         array[index + 1] !== ':' &&
//         /* Ignore small words that start a hyphenated phrase */
//         (array[index + 1] !== '-' ||
//           (array[index - 1] === '-' && array[index + 1] === '-'))
//       ) {
//         return current.toLowerCase()
//       }

//       /* Ignore intentional capitalization */
//       if (current.substr(1).search(/[A-Z]|\../) > -1) {
//         return current
//       }

//       /* Ignore URLs */
//       if (array[index + 1] === ':' && array[index + 2] !== '') {
//         return current
//       }

//       /* Capitalize the first letter */
//       return current.replace(alphanumericPattern, function (match) {
//         return match.toUpperCase()
//       })
//     })
//     .join('')
// };

// export function removePathTrailingSlash (path) {

//   if (path !== "/") {
//     return removeTrailingCharacter(path, "/");
//   }
//   return path
// }

// /**
//  *
//  * @param path {String}
//  * @returns {string|*}
//  */
// export function removeAllPathTrailingSlashes (path) {
//   if (path !== "/") {
//     let newPath = path;
//     let j = path.length - 1;

//     while (j >= 0) {
//       let len = newPath.length;
//       if (newPath.endsWith("/")) {
//         newPath = newPath.substring(0, len - 1)
//         j--
//       } else {
//         break;
//       }
//     }
//     return newPath;
//   }
//   return path
// }
