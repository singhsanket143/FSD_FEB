function kclosest(points, k) {
    let list = [];
    for(let i = 0; i < points.length; i++) {
        let obj = {x: points[i][0], y: points[i][1]};
        let d = Math.sqrt((obj.x*obj.x) + (obj.y*obj.y));
        obj.dist = d;
        list.push(obj);
    }
    list.sort(function(a, b) {return a.dist - b.dist});
    let result = [];
    for(let i = 0; i < k; i++) {
        result.push(list[i]);
    }
    return result;
}

let points = [[1,2], [2,3], [3,4]];
let k = 2;

console.log(kclosest(points, k));