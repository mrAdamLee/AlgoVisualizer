let unsortedArr = [10, 5, 9, 7, 10, 1, 2, 5, 4]

function bubbleSort(arr){
    let len = arr.length;
    let swapped = false;

    for( let j = 0; j < len; j++){
        swapped = false;
        for(let i = 0; i < len; i++){
            if(arr[i] > arr[i+1]){
                
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
        
    }
    
    return arr;
}

// do{
//     bubbleSort(unsortedArr);
// } while(swapped === true );

function generateRandArr(range, size){
    //generates an array of a designated size with a random set of numbers within a designated range.
    arr = []
    for(let i = 0; i < size; i++){
        let rndInt = Math.floor(Math.random() * range) + 1;
        arr.push(rndInt);
    }  
    return arr; 
}

