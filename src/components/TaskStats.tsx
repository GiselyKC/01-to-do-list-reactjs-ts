import styles from './TaskStats.module.css'

interface Props {
  infos: {
    description: string
    count: number
  }[]
}

export function TaskStats ({ infos }: Props) {
  return (
    <div className={styles.header}>
      {infos.map(({description, count}) => (
        <div key={description}>
          <p><strong>{description}</strong></p>
          <span>{count}</span>
        </div>
      ))}
    </div>
  )
}
