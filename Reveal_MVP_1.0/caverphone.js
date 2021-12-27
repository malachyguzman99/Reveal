'use strict';

function caverphone(word) {

    // Algorithm Described in "Caverphone Revisited" by David Hood.
    // http://caversham.otago.ac.nz/files/working/ctp150804.pdf

    // Start with a word
    word;

    // Convert to lowercase
    word = word.toLowerCase();

    word = [

        // Remove anything not in the standard alphabet (typically a-z)
        { pattern: /[^a-z]/g, replacement: '' },

        // Remove final e
        { pattern: /e$/, replacement: '' },

        // If the name starts with cough make it cou2f
        { pattern: /^cough/, replacement: 'cou2f' },

        // If the name starts with rough make it rou2f
        { pattern: /^rough/, replacement: 'rou2f' },

        // If the name starts with tough make it tou2f
        { pattern: /^tough/, replacement: 'tou2f' },

        // If the name starts with enough make it enou2f
        { pattern: /^enough/, replacement: 'enou2f' },

        // If the name starts with trough make it trou2f
        { pattern: /^trough/, replacement: 'trou2f' },

        // If the name starts with gn make it 2n
        { pattern: /^gn/, replacement: '2n' },

        // If the name ends with mb make it m2
        { pattern: /mb$/, replacement: 'm2' },

        // replace cq with 2q
        { pattern: /cq/g, replacement: '2q' },

        // replace ci with si
        { pattern: /ci/g, replacement: 'si' },

        // replace ce with se
        { pattern: /ce/g, replacement: 'se' },

        // replace cy with sy
        { pattern: /cy/g, replacement: 'sy' },

        // replace tch with 2ch
        { pattern: /tch/g, replacement: '2ch' },

        // replace c with k
        { pattern: /c/g, replacement: 'k' },

        // replace q with k
        { pattern: /q/g, replacement: 'k' },

        // replace x with k
        { pattern: /x/g, replacement: 'k' },

        // replace v with f
        { pattern: /v/g, replacement: 'f' },

        // replace dg with 2g
        { pattern: /dg/g, replacement: '2g' },

        // replace tio with sio
        { pattern: /tio/g, replacement: 'sio' },

        // replace tia with sia
        { pattern: /tia/g, replacement: 'sia' },

        // replace d with t
        { pattern: /d/g, replacement: 't' },

        // replace ph with fh
        { pattern: /ph/g, replacement: 'fh' },

        // replace b with p
        { pattern: /b/g, replacement: 'p' },

        // replace sh with s2
        { pattern: /sh/g, replacement: 's2' },

        // replace z with s
        { pattern: /z/g, replacement: 's' },

        // replace an initial vowel with an A
        { pattern: /^[aeiou]/, replacement: 'A' },

        // replace all other vowels with a 3
        { pattern: /[aeiou]/g, replacement: '3' },

        // replace j with y
        { pattern: /j/g, replacement: 'y' },

        // replace an initial y3 with Y3
        { pattern: /^y3/, replacement: 'Y3' },

        // replace an initial y with A
        { pattern: /^y/, replacement: 'A' },

        // replace y with 3
        { pattern: /y/g, replacement: '3' },

        // replace 3gh3 with 3kh3
        { pattern: /3gh3/g, replacement: '3kh3' },

        // replace gh with 22
        { pattern: /gh/g, replacement: '22' },

        // replace g with k
        { pattern: /g/g, replacement: 'k' },

        // replace groups of the letter s with a S
        { pattern: /s+/g, replacement: 'S' },

        // replace groups of the letter t with a T
        { pattern: /t+/g, replacement: 'T' },

        // replace groups of the letter p with a P
        { pattern: /p+/g, replacement: 'P' },

        // replace groups of the letter k with a K
        { pattern: /k+/g, replacement: 'K' },

        // replace groups of the letter f with a F
        { pattern: /f+/g, replacement: 'F' },

        // replace groups of the letter m with a M
        { pattern: /m+/g, replacement: 'M' },

        // replace groups of the letter n with a N
        { pattern: /n+/g, replacement: 'N' },

        // replace w3 with W3
        { pattern: /w3/g, replacement: 'W3' },

        // replace wh3 with Wh3
        { pattern: /wh3/g, replacement: 'Wh3' },

        // if the name ends in w replace the final w with 3
        { pattern: /w$/, replacement: '3' },

        // replace w with 2
        { pattern: /w/g, replacement: '2' },

        // replace an initial h with an A
        { pattern: /^h/, replacement: 'A' },

        // replace all other occurrences of h with a 2
        { pattern: /h/g, replacement: '2' },

        // replace r3 with R3
        { pattern: /r3/g, replacement: 'R3' },

        // if the name ends in r replace the replace final r with 3
        { pattern: /r$/, replacement: '3' },

        // replace r with 2
        { pattern: /r/g, replacement: '2' },

        // replace l3 with L3
        { pattern: /l3/g, replacement: 'L3' },

        // if the name ends in l replace the replace final l with 3
        { pattern: /l$/, replacement: '3' },

        // replace l with 2
        { pattern: /l/g, replacement: '2' },

        // remove all 2s
        { pattern: /2/g, replacement: '' },

        // if the name end in 3, replace the final 3 with A
        { pattern: /3$/, replacement: 'A' },

        // remove all 3s
        { pattern: /3/g, replacement: '' },

        // put ten 1s on the end
        { pattern: /$/, replacement: '1111111111' },

    ].reduce((word, xform) => word.replace(xform.pattern, xform.replacement), word);

    // take the first ten characters as the code
    return word.slice(0, 10);
}

module.exports = caverphone;

