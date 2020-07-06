function firstDuplicate(a) {
    a.sort(function(x, y){return x-y});
    console.log(a)
    
    // for(var i=0;i<a.length-1;i++){
    //     if(a[i]==a[i+1]){
    //         return a[i];
    //     }
    //     else{
    //         return -1;
    //     }
    // }

}


firstDuplicate([2, 1, 3, 5, 3, 2]);