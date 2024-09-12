# Task Tracker CLI

## Description

**Task Tracker CLI** is a command-line application for tracking and managing tasks. It allows users to add, update, delete, and manage task statuses directly from the terminal. Tasks are stored in a JSON file for easy access and manipulation.

## Requirements

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/luiscruz19/Task-Tracker.git
   cd task-tracker-cli

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the application:**
   ```
   # Adding a new task
      task-cli add "Buy groceries"
   # Output: Task added successfully (ID: 1)

   # Updating and deleting tasks
      task-cli update 1 "Buy groceries and cook dinner"
      task-cli delete 1 

   # Marking a task as in progress or done
      task-cli mark-in-progress 1
      task-cli mark-done 1

   # Listing all tasks
      task-cli list

   # Listing tasks by status
      task-cli list done
      task-cli list todo
      task-cli list in-progress 
   ```


## Project URL
https://roadmap.sh/projects/task-tracker