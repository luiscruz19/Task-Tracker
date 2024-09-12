import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tasksFilePath = `${__dirname.replaceAll('/utils', '/')}tasks.json`;

export function readTasks() {
    if (!fs.existsSync(tasksFilePath)) {
        return [];
    }
    const data = fs.readFileSync(tasksFilePath);
    return JSON.parse(data);
}

export function writeTasks(task) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(task, null, 2));
}

export function getNextId(tasks) {
    return tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
}
