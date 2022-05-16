exports.getDate = function() {
    //this function gets the week day name. 
    const today = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        weekday:'long',
        day: 'numeric'
    };
    return today.toLocaleString(undefined, options)   
}


exports.getDay = function(){
    //this function gets the week day name. 
    const today = new Date();
    const options = {
        day: 'numeric'
    };
    return today.toLocaleString(undefined, options)
}
