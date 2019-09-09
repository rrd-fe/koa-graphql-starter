/**
 * common utils
 */

// sleep some time
export async function sleep(timeOfMilliseconds: number) {
    return new Promise(function(resolve) {
        setTimeout(resolve, timeOfMilliseconds);
    });
}
