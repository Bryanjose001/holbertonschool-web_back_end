export default  function guardrail(mathFunction) {
    return function(queue) {
        if (queue) {
            throw new Error('');
        }
        return mathFunction();
    };
}
