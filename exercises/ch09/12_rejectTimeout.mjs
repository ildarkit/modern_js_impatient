const rejectAfterDelay = (result, delay) => {
    return new Promise((resolve, reject) => {
        const callback = () => reject(result);
        setTimeout(callback, delay);
    });
};

const errorAfterDelay = async (message, delay) => {
    await rejectAfterDelay(new Error(message), delay);
};

try {
    await errorAfterDelay('Some error message', 1000);
} catch (error) {
    console.error(error.message);
}