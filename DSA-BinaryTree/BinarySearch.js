let nums = [2,3,4,5,6,7]
const target = 6

function getBinarySearch(nums,target,left,right){

    let add = (left + right )/ 2;
    let mid = Math.floor(add);
    if(target == nums[mid]){
        return mid;
    }
    if(left >= right){
        return -1;
    }
    if(target > mid){
        return getBinarySearch(nums,target,mid+1,right);
    }else{
        return getBinarySearch(nums,target,left,mid-1);
    }

}

let resIndex = getBinarySearch(nums,target,nums[0],nums.length-1); 
console.log(resIndex);