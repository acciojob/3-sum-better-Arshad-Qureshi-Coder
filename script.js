function threeSum(arr, target) {
// write your code here
  let a=arr[0];
	let b =arr[1];
	let sum1 = arr[0]+arr[1];
	for(let i=2;i<arr.length;i++){
		sum1+=arr[i];
		if(sum1> target && ){
			return sum1;
		}
	}
}

module.exports = threeSum;
