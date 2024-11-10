import { ChangeEvent, FormEvent, useState } from 'react';
import logo from './todo-app-logo.svg';

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

function Header({ username }: { username: string }): React.JSX.Element {
  return (
    <div className="flex justify-between h-14 items-center px-4">
      <img src={logo} className="size-24 h-6" alt="logo" />
      <p>{username}</p>
    </div>
  );
}

function MainContainer({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <div className='flex flex-col gap-14 max-w-xl mx-auto pt-16'>
      {children}
    </div>
  );
}

function ContentWrapper({ title, children }: { title: string, children: React.ReactNode }): React.JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl">{title}</h1>
      {children}
    </div>
  );
}

function TaskForm({ onSubmit }: { onSubmit: (text: string) => void }): React.JSX.Element {
  const [text, setText] = useState("");

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    onSubmit(text);
    setText("");
  }

  return (
    <form className='flex gap-4' onSubmit={(e: FormEvent): void => handleSubmit(e)}>
      <input
        className='box-border border border-solid rounded h-12 w-full p-3'
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => setText(e.target.value)}
        placeholder='Enter your task' />
      <button
        className="w-16 box-border border border-solid rounded font-bold shrink-0"
        type='submit'
      >Save</button>
    </form>
  );
}

type TabButtonProps = {
  scope: TaskScope, text: string, selected: boolean,
  onClick: (scope: TaskScope) => void,
};
function TabButton({ scope, text, selected, onClick }: TabButtonProps): React.JSX.Element {
  return (
    <button
      className={`w-24 text-center ${selected ? "border-b-2 font-bold" : "text-gray-400"}`}
      onClick={() => onClick(scope)}
    >{text}</button>
  );
}

type TaskFilterTabProps = { selectedScope: TaskScope, onClick: (scope: TaskScope) => void };
function TaskFilterTab({ selectedScope, onClick }: TaskFilterTabProps): React.JSX.Element {
  return (
    <ul className='flex border-b mb-6'>
      <TabButton scope="todo" text="Todo" selected={selectedScope === "todo"} onClick={onClick} />
      <TabButton scope="done" text="Done" selected={selectedScope === "done"} onClick={onClick} />
      <TabButton scope="all" text="All" selected={selectedScope === "all"} onClick={onClick} />
    </ul>
  );
}

function TaskRow({ task, onUpdate }: { task: Task, onUpdate: (task_id: number) => void }): React.JSX.Element {
  return (
    <li className='flex items-center h-12'>
      <p className={`w-full border-b leading-10${task.done ? " line-through" : ""}`}>{task.text}</p>
      <button className='w-10' onClick={(): void => onUpdate(task.id)}>C</button>
    </li>
  );
}

function TaskList({ tasks, onUpdate }: { tasks: Task[], onUpdate: (task_id: number) => void }): React.JSX.Element {
  const [selectedScope, setSelectedScope] = useState<TaskScope>("todo");

  return (
    <div>
      <TaskFilterTab selectedScope={selectedScope} onClick={setSelectedScope} />
      <ul className='flex flex-col gap-5'>
        {
          filterTasks(tasks, selectedScope).map(
            (task: Task): React.JSX.Element =>
              <TaskRow task={task} key={task.id} onUpdate={onUpdate} />
          )
        }
      </ul>
    </div>
  );
}

function TasksPageContent(): React.JSX.Element {
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

  return (
    <>
      <ContentWrapper title="Register New Task">
        <TaskForm onSubmit={addTask} />
      </ContentWrapper>
      <ContentWrapper title='Tasks'>
        <TaskList tasks={tasks} onUpdate={toggleTaskStatus} />
      </ContentWrapper>
    </>
  );
}

export function TasksPage(): React.JSX.Element {
  return (
    <>
      <Header username="Alice" />
      <MainContainer>
        <TasksPageContent />
      </MainContainer>
    </>
  );
}
