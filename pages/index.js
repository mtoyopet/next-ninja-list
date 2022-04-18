
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>学校法人「森友学園」（大阪市）への補助金を巡り、詐欺罪などに問われた理事長の籠池泰典被告（69）と妻の諄子被告（65）の控訴審判決が18日、大阪高裁であった。西田真基裁判長は、泰典被告を懲役5年とした一審・大阪地裁判決を支持。一方、諄子被告については一審判決を破棄し、懲役2年6カ月を言い渡した。</p>
      <p className={styles.text}>学校法人「森友学園」（大阪市）への補助金を巡り、詐欺罪などに問われた理事長の籠池泰典被告（69）と妻の諄子被告（65）の控訴審判決が18日、大阪高裁であった。西田真基裁判長は、泰典被告を懲役5年とした一審・大阪地裁判決を支持。一方、諄子被告については一審判決を破棄し、懲役2年6カ月を言い渡した。</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  )
}
