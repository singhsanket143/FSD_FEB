function max_meetings(meetings) {
    meetings.sort(function(a, b) { return a[1] - b[1]});
    let ans = 1;
    let last_scheduled_meeting = meetings[0]; // [1,2]
    for(let i = 1; i < meetings.length; i++) {
        if(last_scheduled_meeting[1] <= meetings[i][0]) {
            ans++;
            last_scheduled_meeting = meetings[i];
        }
    }
    return ans;
}

// [{start: 1, end: 2}, {start: 3, end: 4}, {}, {}]
// [[1,2]. [3,4]] -> meetings , meetings[0] -> [1,2]