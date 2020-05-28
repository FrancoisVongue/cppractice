const s1 = "AbcDE";
const s2 = "ABDE";

let table = Array.from({
    length: s1.length + 1
}, v => Array.from({
    length: s2.length + 1
}, v => 0));

table = table.reduce((b, v, i) => {
    return v.reduce((rb, rv ,ri, ra) => {
        if(i && ri) {
            if(s1[i - 1] == s2[ri - 1] || s1[i-1].toUpperCase() == s2[ri - 1]) {
                ra[ri] = b[ri-1] + 1;
            } else {
                ra[ri] = Math.max(ra[ri-1], b[ri], b[ri-1]);
            }
        }
        return ra; 
    }, table[0]);
}, table[0]);
// FP method is not the best, it creates unnecessary copies of arrays
// and is hard to grasp, as it doesn't work with table intuitively
console.table(table[s2.length] == s2.length);
