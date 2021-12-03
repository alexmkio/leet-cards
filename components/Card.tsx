import { CardType } from '../types/index'
import styles from '../styles/Card.module.css'

type Props = {
  card: CardType
}

export default function Card({ card }: Props) {

  // return (
  //   <div className="
    
  //   "
  //   style={{  }}
  //   >
  //     <div className={styles.flipcardinner}>
  //       <div className={styles.flipcardfront}>
  //         <h1>John Doe</h1>
  //         <p>Architect & Engineer</p>
  //         <p>We love that guy</p>
  //       </div>
  //       <div className={styles.flipcardback}>
  //         <h1>John Doe</h1>
  //         <p>Architect & Engineer</p>
  //         <p>We love that guy</p>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className={styles.flipcard}>
      <div className={styles.flipcardinner}>
        <div className={styles.flipcardfront}>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
        <div className={styles.flipcardback}>
          <h1>Alex Kio</h1>
          <p>Wannabe Software Engineer</p>
          <p>Fuck that guy</p>
        </div>
      </div>
    </div>
  )
}


// style={{ backgroundColor: "lightblue" }}>

{/* <article className="w-full h-full p-6 py-12 text-lg bg-blue-300 border rounded-2xl shadow-md">
  <dl className="flex flex-col items-center">
    <dt className="px-4 pb-1 border-b border-gray-800">Question:</dt>
    <dd className="pt-4 text-center">{card.question}</dd>
  </dl>
</article> */}