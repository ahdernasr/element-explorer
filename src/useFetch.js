const useFetch = () => {
    var pt = require('periodic-table');
    var elementsArray = pt.elements
    return { elementsArray };
}
 
export default useFetch;