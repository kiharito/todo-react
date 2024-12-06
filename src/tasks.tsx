import logo from 'assets/images/todo-app-logo.svg';
import { ReactComponent as CheckCircle } from 'assets/images/check_circle.svg';
import { Box, Button, Flex, Heading, IconButton, Tabs, Text, TextField, } from '@radix-ui/themes';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { AppContext } from 'app';

type Task = {
  id: number, text: string, done: boolean
}

type TaskScope = "todo" | "done" | "all";

function filterTasks(tasks: Task[], scope: TaskScope): Task[] {
  switch (scope) {
    case "todo":
      return tasks.filter((task: Task): boolean => !task.done);
    case "done":
      return tasks.filter((task: Task): boolean => task.done);
    case "all":
      return tasks;
  }
}

function TaskList({ tasks, scope, onToggleTaskStatus }: { tasks: Task[], scope: TaskScope, onToggleTaskStatus: (task_id: number) => void }): React.JSX.Element {
  return (
    <>
      {filterTasks(tasks, scope).map((task: Task): React.JSX.Element =>
        <Flex key={task.id}>
          <Text>{task.text}</Text>
          <IconButton variant='ghost' onClick={() => onToggleTaskStatus(task.id)}>
            <CheckCircle className="w-6 fill-[#0797B9]" />
          </IconButton>
        </Flex>
      )}
    </>
  );
}

export function Tasks() {
  const { loginUserName } = useContext(AppContext);

  const seed_tasks: Task[] = [
    { id: 1, text: "ベンチプレス(昨日分)", done: true },
    { id: 2, text: "ベンチプレス(今日分)", done: false },
    { id: 3, text: "ベンチプレス(明日分)", done: false },
  ];

  const [tasks, setTasks] = useState(seed_tasks);

  function addTask(text: string): void {
    const new_task = { id: tasks.length + 1, text: text, done: false };
    setTasks([...tasks, new_task]);
  }

  function toggleTaskStatus(task_id: number): void {
    setTasks(
      tasks.map((task: Task): Task =>
        task.id === task_id ? { ...task, done: !task.done } : task
      )
    );
  }

  const [taskText, setTaskText] = useState("");

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    if (taskText.trim() === "") {
      alert('Please enter your task.');
      setTaskText("");
      return;
    }
    addTask(taskText.trim());
    setTaskText("");
  }

  return (
    <>
      <Flex justify="between" align="center" height="3.5rem" px="1rem">
        <Box>
          <img src={logo} className="h-6" alt="logo" />
        </Box>
        <Text>{loginUserName}</Text>
      </Flex>

      <Flex direction="column">
        <Box>
          <Heading size="8">Register New Task</Heading>
          <form onSubmit={handleSubmit}>
            <Flex>
              <Box>
                <TextField.Root value={taskText} placeholder='Enter your task'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskText(e.target.value)} />
              </Box>
              <Button>Save</Button>
            </Flex>
          </form>
        </Box>
        <Box>
          <Heading size="8">Tasks</Heading>
          <Tabs.Root defaultValue="todo">
            <Tabs.List>
              <Tabs.Trigger value="todo">ToDo</Tabs.Trigger>
              <Tabs.Trigger value="done">Done</Tabs.Trigger>
              <Tabs.Trigger value="all">All</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              <Tabs.Content value="todo">
                <TaskList tasks={tasks} scope="todo" onToggleTaskStatus={toggleTaskStatus} />
              </Tabs.Content>

              <Tabs.Content value="done">
                <TaskList tasks={tasks} scope="done" onToggleTaskStatus={toggleTaskStatus} />
              </Tabs.Content>

              <Tabs.Content value="all">
                <TaskList tasks={tasks} scope="all" onToggleTaskStatus={toggleTaskStatus} />
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Box>
      </Flex>
    </>
  );
}
