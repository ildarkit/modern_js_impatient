import Logging from './04_loggingDefault.mjs';
import {encrypt, decrypt} from './05_simpleCaesar.mjs';

const message = 'Исходное тестовое сообщение😋';
const encrypted = encrypt(message);
const logging = new Logging();
logging.log(encrypted);
logging.log(decrypt(encrypted));