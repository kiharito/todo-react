import { ReactComponent as CheckCircle } from 'assets/images/check_circle.svg';
import { Player } from "@lottiefiles/react-lottie-player";
import NoTaskAnimation from "assets/animations/done-congrats.json";
import { Box, Button, Container, Flex, Heading, IconButton, Tabs, Text, TextField, } from '@radix-ui/themes';
import { ChangeEvent, FormEvent, useState } from 'react';

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

function TaskList({ tasks, onToggleTaskStatus }: { tasks: Task[], onToggleTaskStatus: (task_id: number) => void }): React.JSX.Element {
  return (
    <Flex direction="column" gap="3">
      {
        tasks.map(
          (task: Task): React.JSX.Element =>
            <Flex key={task.id} gap="1" height="40px" align="center">
              <Flex width="100%" height="100%" align="center" className="border-b border-gray-200">
                <Text className={task.done ? "line-through" : ""}>{task.text}</Text>
              </Flex>
              <Flex width="40px" align="center" justify="center">
                <IconButton variant='ghost' onClick={() => onToggleTaskStatus(task.id)}>
                  <CheckCircle className="w-6 fill-[#0797B9]" />
                </IconButton>
              </Flex>
            </Flex>
        )
      }
    </Flex>
  );
}

export function Tasks() {
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
    <Container size="2" pt="9">
      <Flex direction="column" gap="8">
        <Flex direction="column" gap="4">
          <Heading size="8" weight="medium" as='h2'>Register New Task</Heading>
          <form onSubmit={handleSubmit}>
            <Flex gap="4">
              <Box width="100%">
                <TextField.Root value={taskText} placeholder='Enter your task' size="3"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskText(e.target.value)} />
              </Box>
              <Button size="3" variant='outline'>Save</Button>
            </Flex>
          </form>
        </Flex>

        <Flex direction="column" gap="4">
          <Heading size="8" weight="medium" as='h2'>Tasks</Heading>
          <Tabs.Root defaultValue="todo">
            <Tabs.List>
              <Tabs.Trigger value="todo">ToDo</Tabs.Trigger>
              <Tabs.Trigger value="done">Done</Tabs.Trigger>
              <Tabs.Trigger value="all">All</Tabs.Trigger>
            </Tabs.List>

            <Box pt="4">
              <Tabs.Content value="todo">
                {
                  filterTasks(tasks, "todo").length > 0 ?
                    <TaskList tasks={filterTasks(tasks, "todo")} onToggleTaskStatus={toggleTaskStatus} /> :
                    <Box>
                      <Player src={NoTaskAnimation} autoplay loop />
                    </Box>
                }
              </Tabs.Content>

              <Tabs.Content value="done">
                <TaskList tasks={filterTasks(tasks, "done")} onToggleTaskStatus={toggleTaskStatus} />
              </Tabs.Content>

              <Tabs.Content value="all">
                <TaskList tasks={tasks} onToggleTaskStatus={toggleTaskStatus} />
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Flex>
      </Flex>
    </Container>
  );
}
