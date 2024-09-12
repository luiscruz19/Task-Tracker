import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tasksFilePath = `${__dirname}/../tasks.json`;

export function readTasks() {
    if (!fs.existsSync(tasksFilePath)) {
        return [];
    }
    const data = fs.readFileSync(tasksFilePath);
    return JSON.parse(data);
}

export function writeTasks(tasks) {
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

export function getNextId(tasks) {
    return tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
}
