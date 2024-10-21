
//MAP===================



const arr = [1,2,3,4,5];
// const arr1 = [];
// for(let i=0;i<arr.length;i++){
//     arr1[i] = arr[i] *2;
// }

// console.log(arr1);

//other solution

function transform(i){
    return i*2;
}

const ans = arr.map(transform)
console.log(ans);



//FILTERING============================
const arr2 = [16,18,20];

function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}


const ans1 = arr2.filter(filterLogic);
console.log(ans1);

