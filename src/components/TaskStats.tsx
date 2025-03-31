import styles from './TaskStats.module.css'

interface Props {
  infos: {
    description: string,
    count: number,
    taskCompleted?: number,
  }[]
}

export function TaskStats ({ infos }: Props) {
  const resultCount = (description: string, count: number, taskCompleted?: number) => {
    if (description === 'Tarefas criadas') {
      return (
        <span>{count}</span>
      )
    } else {
      return (
        <span>
            {!taskCompleted
            ? taskCompleted
            : `${taskCompleted} de ${count}`}
            </span>
      )
    }
  }

  return (
    <div className={styles.header}>
      {infos.map(({description, count, taskCompleted}) => (
        <div key={`${description}-${count}-${taskCompleted}`}>
          <p><strong>{description}</strong></p>
          {resultCount(description, count, taskCompleted)}
        </div>
      ))}
    </div>
  )
}
