import { readTasks, writeTasks, getNextId } from '../utils/fileUtils.js';

export function addTask(description) {
    const tasks = readTasks();
    const newTask = {
        id: getNextId(tasks),
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    tasks.push(newTask);
    writeTasks(tasks);
    return `Task added successfully (ID: ${newTask.id})`;
}

export function updateTask(id, description) {
    const tasks = readTasks();
    const task = tasks.find(t => t.id == id);
    if (task) {
        task.description = description;
        task.updatedAt = new Date().toISOString();
        writeTasks(tasks);
        return `Task ${id} updated successfully`;
    } else {
        throw new Error(`Task ${id} not found`);
    }
}

export function deleteTask(id) {
    let tasks = readTasks();
    tasks = tasks.filter(t => t.id != id);
    writeTasks(tasks);
    return `Task ${id} deleted successfully`;
}

export function updateStatusTask(id, status) {
    const tasks = readTasks();
    const task = tasks.find(t => t.id == id);
    if (task) {
        task.status = status;
        task.updatedAt = new Date().toISOString();
        writeTasks(tasks);
        return `Task ${id} marked as in progress`;
    } else {
        throw new Error(`Task ${id} not found`);
    }
}

export function listTasks(status = null) {
    const tasks = readTasks();
    return status ? tasks.filter(t => t.status === status) : tasks;
}
