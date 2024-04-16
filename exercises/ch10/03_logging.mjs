export const Level = {INFO: 0, DEBUG: 1, WARN: 2, ERROR: 3};
const levelMap = Object.fromEntries(
    Object.entries(Level)
        .map(keyValue => [keyValue[1], keyValue[0]])
);
let currentLevel = Level.INFO;

export function log(message, level = Level.INFO) {
    if (level >= currentLevel) {
        let logging = console.info;
        switch (level) {
            case Level.ERROR:
                logging = console.error;
                break;
            case Level.WARN:
                logging = console.warn;
                break;
            case Level.DEBUG:
                logging = console.debug;
                break;
        }
        logging(message);
    }
}

export function setLevel(level) {
    if (level !== undefined)
        currentLevel = level;
}

export function getLevel() {
    return levelMap[currentLevel];
}