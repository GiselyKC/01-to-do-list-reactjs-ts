import styles from './Feedback.module.css'

interface Props {
  imagem: string
  title: string
  description: string
}

export function Feedback ({ ...rest }: Props) {
  return (
    <div className={styles.feedback}>
      <img src={rest.imagem} alt="imagem" />
      <p>
        <strong>{rest.title}</strong>
        {rest.description}
      </p>
    </div>
  )
}
