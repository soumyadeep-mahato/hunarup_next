import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
   return(
     <div>
      
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
     </div>
   )
   }