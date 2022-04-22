function count_pair(arr, k) {
    arr.sort((a, b) => a-b);
    let left = 0, right = arr.length-1;
    let count = 0 ; // this count is going to store our answer
    while(left < right) {
        if(arr[left] + arr[right] == k) {
            // todo
            if(arr[left] == arr[right]) {
                let x = (right - left + 1);
                count += Math.floor(((x)*(x-1))/2);
                break;
            } else {
                let left_element = arr[left];
                let right_element = arr[right];
                let count_left = 0, count_right = 0;
                while(arr[left] == left_element) {
                    left++;
                    count_left++;
                }
                while(arr[right] == right_element) {
                    right--;
                    count_right++;
                }
                // console.log(count_left, count_right)
                count += (count_left*count_right);
            }

        } else if(arr[left] + arr[right] < k) {
            left++;
        } else {
            right--;
        }
    }

    return count;
}

let arr = [5,5,4,4,4,1,4,3,3,3,2,2,6,6,];
let k = 8;
console.log(count_pair(arr, k));

// console.log((3+4)/2)