const insert=(arr)=>{
	for(let i=1;i<arr.length;i++){
		let pageIndex=i-1;
		let current=arr[i];
		while(arr[pageIndex]>current){
			arr[pageIndex+1]=arr[pageIndex];
			pageIndex--;
		}
		arr[pageIndex+1]=current;
	}
	return arr;
}
console.log(insert([3,1,7,5,2,4,9,6]))