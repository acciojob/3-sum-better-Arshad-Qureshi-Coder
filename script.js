function threeSum(nums, target) {
// write your code here
	  nums.sort((x, y) => x - y);
  let closest = Infinity;
  
  //Iterate through until 2 from end because there will be two pointers after
  //this idx to find threesums.
  for (let i = 0; i < nums.length - 2; i++) {
  
	//Stops us from doing repeat work.  If i is same as last, we have
	//Already checked all perms.
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];
	  
	  //If found, return target.
      if (total === target) return target;
	  
	  //Otherwise set closest to min of distance between current total and target, or 
	  //previous closest.
      closest = Math.abs(target - closest) < Math.abs(target - total) ? closest : total;
	  
	  //If current total is less than target, we know we need a higher number and arr
	  //is sorted.  Incrementing left pointer and looping until we find a unique val
	  //gives us the next highest number.  Side Note:  For this problem and the LC tests,
	  //we do not need the loop in this block.  For larger data sets, it could save us from
	  //a lot of repeat work though.  I left it in because I think it's a nice addition.  Feel free
	  //to remove if you want though.  Won't change performance on LC test cases much.
      if (total < target) {
        left++;
        while(left < right && nums[i] === nums[i - 1]) left++;
      } else {
        right--;
        while (left < right && nums[right] === nums[right + 1]) right--;
      }
    }
  }
  return closest;
}

module.exports = threeSum;
