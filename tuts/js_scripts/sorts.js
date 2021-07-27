let unsortedArr = [10, 5, 9, 7, 10, 1, 2, 5, 4]
let swapped = false;

function bubbleSort(arr){
    let end = arr.length - 1;
    for(let i = 0; i < end; i++){
        if(arr[i] > arr[i+1]){
            swapped = true;
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i+1] = temp;
        }
    }
    end--;
}

do{
    bubbleSort(unsortedArr);
} while(swapped === true );