const bubble=(arr)=>{
	for(let i=0;i<arr.length-1;i++){
		for(let j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				const temp=arr[j+1];
				arr[j+1]=arr[j]
				arr[j]=temp;
			}
		}
	}
	return arr;
}
console.log(bubble([12,35,99,18,76]))


const bubble2=(arr)=>{
  let i=arr.length-1;//初始时,最后位置保持不变  
  while(i>0){
   let pos = 0;//每趟开始时,无记录交换
   for(let j = 0; j < i; j++){
    if(arr[j] > arr[j+1]){
         let tmp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = tmp;
     pos = j;//记录最后交换的位置  
    }   
   }
   i = pos;//为下一趟排序作准备
  }
  return arr;
}
console.log(bubble2([12,35,99,18,76]))