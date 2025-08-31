export default  function guardrail(mathFunction) {
    const queue = [];{
        try {
            const result = mathFunction();
            queue.push(result);
        } catch (error) {
            queue.push('Error');
        }
        finally {
            queue.push('Guardrail was proccessed');
        }
        return queue();
    };
}
