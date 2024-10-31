import styles from './ToDo.module.css';

import clipboard from '../assets/clipboard.svg'
import plus from '../assets/plus.svg'

export function ToDo () {
  return (
    <div className={styles.post}>
      <div>
        <input type="text" name="todo" placeholder='Adicione uma nova tarefa'/>
        <button>
          Criar
          <img src={plus} alt="plus" />
        </button>
      </div>

      <div className={styles.header}>
        <p>Tarefas criadas</p>
        <p>count</p>
        <p>Concluidas</p>
        <p>count</p>
      </div>

      <div className={styles.body}>
      <img src={clipboard} alt="clipboard" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
