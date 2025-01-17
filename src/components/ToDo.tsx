import styles from './ToDo.module.css';

import clipboard from '../assets/clipboard.svg'
import plus from '../assets/plus.svg'

export function ToDo () {
  return (
    <div className={styles.toDo}>
      <div className={styles.post}>
        <input type="text" name="todo" placeholder='Adicione uma nova tarefa'/>
        <button>
          Criar
          <img src={plus} alt="plus" />
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p><strong>Tarefas criadas</strong></p>
            <span>0</span>
          </div>
          <div>
            <p><strong>Concluidas</strong></p>
            <span>0</span>
          </div>
        </div>

        <div className={styles.body}>
        <img src={clipboard} alt="clipboard" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>

    </div>
  )
}
