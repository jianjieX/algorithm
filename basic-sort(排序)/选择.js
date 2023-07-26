const select=(arr)=>{
	for(let i=0;i<arr.length-1;i++){
		let minIndex=i;
		for(let j=i+1;j<arr.length;j++){
			if(arr[j]<arr[minIndex]){
				minIndex=j;
			}
		}
		let temp=arr[i];
		arr[i]=arr[minIndex];
		arr[minIndex]=temp;
	}
	return arr;
}

const select2=(arr)=>{
   for(let i=0;i<arr.length-1;i++){
   		let minIndex=arr.indexOf(Math.min(...(arr.slice(i))));
   		let temp=arr[i];
		arr[i]=arr[minIndex];
		arr[minIndex]=temp;
   }
   return arr;
}
console.log(select2([56,12,80,91,29]))