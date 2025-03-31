import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react'

interface Props {
  descriptions: {
    id: string,
    task: string,
  }[]
  taskChecked: string[],
  setTaskChecked: (task: string[]) => void,
  onClickNewList: (descriptionId: string) => void
}

export function Task ({ descriptions, onClickNewList, taskChecked, setTaskChecked }: Props) {
  const resultStylesTask = (id: string) => {
    return taskChecked.some((taskId) => taskId === id)
      ? styles.TaskChecked
      : styles.Task;
  };

  const handleChecked = (id: string) => {
    if (taskChecked.includes(id)) {
      setTaskChecked(taskChecked.filter(taskId => taskId !== id));
    } else {
      setTaskChecked([...taskChecked, id]);
    }
  };
  return (
    <div className={styles.container}>
      {descriptions.map((description) => (
        <div className={styles.body} key={description.id}>
          <div>
            <input readOnly type="checkbox" onClick={() => handleChecked(description.id)} />
            <p className={resultStylesTask(description.id)}>{description.task}</p>
          </div>
          <button onClick={() => onClickNewList(description.id)}>
            <Trash size={16} color="#808080" />
          </button>
        </div>
      ))}
    </div>
  )
}
