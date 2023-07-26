const quick=(arr)=>{
	const rec=(arr)=>{
		if(arr.length<=1) return arr;
		let left=[];
		let right=[];
		let middle=arr[0];
		for(let i=1;i<arr.length;i++){
			if(arr[i]<middle){
				left.push(arr[i])
			}else{
				right.push(arr[i])
			}
		}
		return [...rec(left),middle,...rec(right)]
	}
	return rec(arr)
}
console.log(quick([49,38,65,97,76,13,27,49]))