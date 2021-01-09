var groupAnagrams = function(strs) {
    let map = {};
    for (const str of strs) {
        let array = new Array(26).fill(0);
        for (const c of str) {
            array[c.charCodeAt() - "a".charCodeAt()]++;
        }
        map[array] ? map[array].push(str) : map[array] = [str];
    }

    return Object.values(map);

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))