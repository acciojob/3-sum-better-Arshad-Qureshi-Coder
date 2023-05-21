function threeSum(arr, target) {
// write your code here
	 let min= 999999;
	 let ans=0;
	arr.sort();
 for(let i=0; i<arr.length;i++){
	 while(i>0 && arr[i-1]==arr[i]) continue;
	 let j=i+1;
	 let k=arr.length-1;
	 while(j<k){
         let sum += arr[i]+ arr[j]+arr[k] ;
		 if(min>Math.abs(sum-target)) {
			 min= Math.abs(sum-target);
			 ans=sum;
		 }
		 if(sum==target){
			 return sum;
		 }
		 if else(sum<target){
			 j++;
		 }
		 else{
			 k--;
		 }
	 }
	 
 }
	return ans;
}

module.exports = threeSum;
