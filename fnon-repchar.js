const string = "aaabcccdeeeff";
const map = new Map();
let order = 0;

for(let i = 0;i < string.length; i++){
    if(map.has(string[i]) && map.get(string[i]).active){
        let instance = map.get(string[i]);
        instance.active = false;
    } else if(!map.has(string[i])){
        map.set(string[i], {
            active: true,
            index: order++,
            character: string[i]
        })
    }
}

let minorder = 4e9;
let result = null;
for(let uniq of [...map.values()].filter(v => v.active)){
    result = uniq.index < minorder ? uniq : result;
    minorder = uniq.index < minorder ? uniq.index : minorder;
}

console.table(result);
