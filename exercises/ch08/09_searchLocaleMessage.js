function getMessage(languageTag, message, messageBundle) {
    let lang = languageTag.split('-', 1)[0];
    let tags = Object.keys(messageBundle)
        .filter(tag => tag.includes(lang));
    tags.sort((x, y) => x.localeCompare(y, languageTag));

    let messages = messageBundle[languageTag];
    for (let tag of tags) {
        if (messages !== undefined && messages[message] !== undefined)
            return messages[message];
        else messages = messageBundle[tag];
    }
}

let langTag = 'de-CH';
let message = 'farewell';
let bundle = {
    'de-CH': {greeting: 'Grüezi'},
    de: {greeting: 'Hallo', farewell: 'Auf Wiedersehen'},
    fr: {greeting: 'Bonjour', farewell: 'Au revoir'}
};
console.log(getMessage(langTag, message, bundle));