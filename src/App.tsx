import { Header } from "./components/Header";
import styles from './App.module.css'

import clipboard from './assets/clipboard.svg'
import plus from './assets/plus.svg'
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Feedback } from "./components/Feedback";
import { TaskStats } from "./components/TaskStats";
import { useState } from "react";
import { Task } from "./components/Task";
import { v4 as uuidv4 } from 'uuid';

export function App () {
  const [inputValue, setInputValue] = useState<string>('')
  const [listTask, setListTaks] = useState<{ id: string, task: string }[]>([])
  const [taskChecked, setTaskChecked] = useState<string[]>([])

  const handleAddTask = () => {
    setListTaks([...listTask, {id: uuidv4(), task: inputValue}])
    setInputValue('')
  }

  const onClickClean = (descriptionId: string) => {
    const newListTask = listTask.filter((info) => info.id !== descriptionId);
    setListTaks(newListTask);
    const newListTaskChecked = taskChecked.filter((info) => info !== descriptionId);
    setTaskChecked(newListTaskChecked);
  }

  return (
    <main>
      <Header />
      <div className={styles.toDo}>
      <div className={styles.post}>
        <Input onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
        <Button onClick={handleAddTask}>
          Criar
          <img src={plus} alt="plus" />
        </Button>
      </div>

      <div className={styles.container}>
        <TaskStats infos={[
          {
            description: 'Tarefas criadas',
            count: listTask.length
          },
          {
            description: 'Concluidas',
            count: listTask.length,
            taskCompleted: taskChecked.length
          }
        ]}
      />

     {(listTask.length > 0) && <Task
        taskChecked={taskChecked}
        setTaskChecked={setTaskChecked}
        descriptions={listTask}
        onClickNewList={(descriptionId: string) => onClickClean(descriptionId)}
      />}

      {(listTask.length === 0) && <Feedback
        imagem={clipboard}
        title="Você ainda não tem tarefas cadastradas"
        description="Crie tarefas e organize seus itens a fazer"
      />}
      </div>

    </div>
    </main>
  )
}
