let map = new Map();

for(let i=0; i<nums.length; i++){
    let nums2 = target - nums[i];
    
    if(map.has(nums2)){
        return [i, map.get(nums2)]
    }
    
    map.set(nums[i], i);
}