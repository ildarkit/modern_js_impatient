import {log, Level, setLevel, getLevel} from './03_logging.mjs';

function logWithLevel(level) {
    setLevel(level);
    console.log(`current level is ${getLevel()}`);
    log('test info');
    log('test debug', Level.DEBUG);
    log('test warning', Level.WARN);
    log('test error', Level.ERROR);
}

logWithLevel();
logWithLevel(Level.DEBUG);
logWithLevel(Level.WARN);
logWithLevel(Level.ERROR);