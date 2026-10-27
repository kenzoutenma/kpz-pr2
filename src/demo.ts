import { add, capitalize, formatNumber, groupBy, Logger, type LogLevel, type User } from './index';
import { config } from './config';

console.log('sum(2.0 ok):', add([2, 3, 4]));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(ok):', formatNumber(123.456));

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
console.log('group ok:', groupBy(users, 'name'));

const logger = new Logger(config.LOG_LEVEL as LogLevel);

logger.info('Application started');
logger.debug('Extra debug info');
