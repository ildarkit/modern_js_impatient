export default class Logging {
    static Level = {INFO: 0, DEBUG: 1, WARN: 2, ERROR: 3};
    static levelMap = Object.fromEntries(
        Object.entries(Logging.Level)
            .map(keyValue => [keyValue[1], keyValue[0]])
    );
    constructor() {
        this.currentLevel = Logging.Level.INFO;
    }
    log(message, level = Logging.Level.INFO) {
        if (level >= this.currentLevel) {
            let logging = console.info;
            switch (level) {
                case Logging.Level.ERROR:
                    logging = console.error;
                    break;
                case Logging.Level.WARN:
                    logging = console.warn;
                    break;
                case Logging.Level.DEBUG:
                    logging = console.debug;
                    break;
            }
            logging(message);
        }
    }
    setLevel(level) {
        if (level !== undefined)
            this.currentLevel = level;
    }
    getLevel() {
        return Logging.levelMap[this.currentLevel];
    }
}