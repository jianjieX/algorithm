const merger=(arr)=>{
	let len=arr.length;
	if(len<2){
		return arr;
	}
	let middle=Math.floor(len/2);
	let left=arr.slice(0,middle);
	let right=arr.slice(middle);
	return mergeFun(merger(left),merger(right));
}
const mergeFun=(left,right)=>{
	let res=[];
	while(left.length&&right.length){
		if(left[0]<=right[0]){
			res.push(left.shift())
		}else{
			res.push(right.shift())
		}
	}
	while(left.length){
		res.push(left.shift())
	}
	while(right.length){
		res.push(right.shift())
	}
	return res;
}
console.log(merger([49,38,65,97,76,13,27]))
