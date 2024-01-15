import Image from 'next/image'
import styles from './page.module.css'
import Form from '@/components/form/Form'

export default function Home() {
  return (
   <div className={styles.container}>
      <Form/>
   </div>
  )
}
