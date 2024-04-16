import Logging from './04_loggingDefault.mjs';

function logWithLevel(level) {
    const logging = new Logging();
    logging.setLevel(level);
    console.log(`current level is ${logging.getLevel()}`);
    logging.log('test info');
    logging.log('test debug', Logging.Level.DEBUG);
    logging.log('test warning', Logging.Level.WARN);
    logging.log('test error', Logging.Level.ERROR);
}

logWithLevel();
logWithLevel(Logging.Level.DEBUG);
logWithLevel(Logging.Level.WARN);
logWithLevel(Logging.Level.ERROR);