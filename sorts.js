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
function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIdx = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    console.log(arr);
}

// do{
//     bubbleSort(unsortedArr);
// } while(swapped === true );

function generateRandArr(){
    let size = document.getElementById("arrLen").value;
    let range = document.getElementById("arrRange").value;
    
    //generates an array of a designated size with a random set of numbers within a designated range.
    arr = []
    for(let i = 0; i < size; i++){
        let rndInt = Math.floor(Math.random() * range) + 1;
        arr.push(rndInt);
    }  
    let bubdiv = document.getElementById("bbl-sort-div");
    let node = document.createTextNode(arr);
    bubdiv.appendChild(node);
    return false;
}

