import Head from 'next/head'
import TodoList from '../components/TodoList/TodoList';
import AddTodo from '../components/TodoList/AddTodo';
import { container, focusArea, header, list, focusFooter } from '../styles/home.module.scss';

export default function Home() {
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
            <TodoList />
          </div>
          <div className={focusFooter}>
            <AddTodo />
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
