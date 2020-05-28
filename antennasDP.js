const ant1 = 30;
const ant2 = 3;
const range = 37;
const rm1 = Math.max(range - ant1, ant1);
const rm2 = Math.max(range - ant2, ant2);
const rmin1 = Math.min(range - ant1, ant1);
const rmin2 = Math.min(range - ant2, ant2);

const table = Array.from({
    length: rm1 + 1
}, _ => Array.from({
    length: rm2 + 1
}, _ => 0));

for(let i = 0; i < rm1 + 1; i ++){
    table[i][0] = i * 2 - (i > rmin1 ? i - rmin1 : 0);
}

for(let i = 0; i < rm2 + 1; i ++){
    table[0][i] = i * 2 - (i > rmin2 ? i - rmin2 : 0);
}

for(let i = 1; i < rm1 + 1; i ++){
    for(let j = 1; j < rm2 + 1; j ++){
        let cross = (i + j > ant1 - ant2) ? (i + j - (ant1 - ant2)) : 0;
        cross = Math.min(cross, table[i][0], table[0][j])

        table[i][j] = table[i][0] + table[0][j] - cross;
    }
}

console.table(table);
