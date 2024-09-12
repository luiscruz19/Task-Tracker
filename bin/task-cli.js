#!/usr/bin/env node

import { Command } from 'commander';
import { addTask, updateTask, deleteTask, updateStatusTask, listTasks } from '../controllers/taskController.js';

const program = new Command();

program
    .command('add <description>')
    .description('Add a new task')
    .action((description) => {
        try {
            const result = addTask({ description });
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    });

program
    .command('update <id> <description>')
    .description('Update a task description')
    .action((id, description) => {
        try {
            const result = updateTask({ id, description });
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    });

program
    .command('delete <id>')
    .description('Delete a task')
    .action((id) => {
        try {
            const result = deleteTask({ id });
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    });

program
    .command('mark-in-progress <id>')
    .description('Mark a task as in progress')
    .action((id) => {
        try {
            const status = 'in-progress';
            const result = updateStatusTask({ id, status });
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    });

program
    .command('mark-done <id>')
    .description('Mark a task as done')
    .action((id) => {
        try {
            const status = 'done';
            const result = updateStatusTask({ id, status });
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    });

program
    .command('list [status]')
    .description('List tasks by status')
    .action((status) => {
        try {
            const tasks = listTasks({ status });
            if (tasks.length > 0) {
                console.table(tasks);
            } else {
                console.log(`No tasks found for status "${status || 'all'}"`);
            }
        } catch (error) {
            console.error(error.message);
        }
    });

program.parse(process.argv);
