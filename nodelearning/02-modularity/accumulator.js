function accumulatorFactory(defaultValue=0){
    var result = defaultValue;

    var accumulator = {
        add : function(x) {
            result += x;
        },
        substract : function(x) {
            result -= x;
        },
        multiply : function(x) {
            result *= x;
        },
        divide : function(x) {
            result /= x;
        },
        getresult : function(){
            return result;
        }
    };
    return accumulator;
}

module.exports = accumulatorFactory;