import { generateMockingUsers } from './utils/mocking.utils.js';
import fs from 'fs';

const users = generateMockingUsers(5);

console.log(JSON.stringify(users, null, 2));
