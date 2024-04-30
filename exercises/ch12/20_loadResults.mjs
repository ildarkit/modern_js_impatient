async function* loadResults(url) {
    try {
        while (true) {
            const response = await fetch(url);
            url = response.headers.get('Link')
                .match(/<(?<next>.*?)>; rel="next"/)
                .groups.next;
            yield await response.json();
        }
    } catch {
        console.log('iteration end');
    }
}

async function findResult(queryURL, callback) {
    for await (const result of loadResults(queryURL))
        if (callback(result)) return result;
}

function positiveReaction(json, threshold) {
    for (const item of json)
        if (item.reactions['+1'] > threshold) return true;
    return false;
}

const url = 'https://api.github.com/repos/octocat/Spoon-Knife/issues';
console.log(await findResult(url, (json) => positiveReaction(json, 1)));
