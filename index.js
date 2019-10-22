// Write your solution in this file!


// const obj = { foo: "bar", key: "value" };

function updateDriverWithKeyAndValue(obj, key, value){
    //doesn't change driver and returns newDriver 
    const newObj = Object.assign({}, obj)
 
    newObj[key] = value; // has an updated value for the key passed in.
 
    return newObj;
} 

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    // changes driver and returns newDriver//take key from original and overwrite it
    obj[key] = value;
 
    return obj; //return new

}


function deleteFromDriverByKey(obj, key) {
    // don't change the driver
    const newObj = Object.assign({}, obj)
    delete newObj.key; // or delete newObj[key];

}

function destructivelyDeleteFromDriverByKey(obj, key){
    // should have effect on the driver
    delete object.key;
}