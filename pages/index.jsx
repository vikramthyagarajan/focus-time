import Head from 'next/head'
import TodoList from '../components/TodoList/TodoList';
import AddTodo from '../components/TodoList/AddTodo';
import getTodoState from '../components/TodoList/TodoState';
import { container, focusArea, header, list, focusFooter } from '../styles/home.module.scss';

export default function Home() {
  let todoState = getTodoState();

  return (
    <div className={container}>
      <Head>
        <title>Focus Time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={focusArea}>
          <div className={header}>Your tasks for the day</div>
          <div className={list}>
            <TodoList {...todoState} />
          </div>
          <div className={focusFooter}>
            <AddTodo {...todoState} />
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/vikramthyagarajan"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>

    </div>
  )
}
