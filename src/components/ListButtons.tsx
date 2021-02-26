import styles from '../styles/components/ListButtons.module.css'
import challenges from '../../schedule.json'

export function ListButtons() {
  return (
    <div className={styles.listButtonsContainer}>
      {challenges.schedule.map((item, index) => {
        return <a className={styles.item} target="_blank" href={`https://wol.jw.org/pt/wol/l/r5/lp-t?q=${item}`} key={index}>{item}</a>
      })}
    </div>
  )
}