// Write your solution in this file!


// const obj = { foo: "bar", key: "value" };

function updateDriverWithKeyAndValue(driver, key, value){
    //doesn't change driver and returns newDriver
    const newObj = Object.assign({}, driver)

    newObj[key] = value; // has an updated value for the key passed in.

    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    // changes driver and returns newDriver//take key from original and overwrite it
    driver[key] = value;

    return driver; //return new

}


function deleteFromDriverByKey(driver, key) {
    // don't change the driver
    const newObj = Object.assign({}, driver)
    delete newObj.key; // or delete newObj[key];

}

function destructivelyDeleteFromDriverByKey(driver, key){
    // should have effect on the driver
    delete driver.key;
}
