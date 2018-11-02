'use strict'
//bin search, 
//input: input, input.length, target
//dung call stack goi ham bin search

function search(input, target) {
    var low  = 0 , high = input.length -1 ,mid ;      
    while (low <= high){
        mid = Math.floor((low+high)/2);     
        if(input[mid]==target) return mid ; 
        else if (input[mid]<target) low = mid+1;
        else high = mid-1;          
    }
    return -1 ;
}
``
module.exports = search
