const example = [["something's in here", "abcdxyz"]];
const data = [];
for(let i = 0; i < example.length; i++) {
    let row = example[i];
    const item = {
        name: row[0]
        
    }

    data.push(item);
}

console.log(data)