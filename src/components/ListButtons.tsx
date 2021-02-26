import styles from '../styles/components/ListButtons.module.css'
import challenges from '../../schedule.json'

export function ListButtons() {
  return (
    <ul>
      {challenges.schedule.map((item, index) => {
        return <a target="_blank" href={`https://wol.jw.org/pt/wol/l/r5/lp-t?q=${item}`} key={index}>{item}</a>
      })}
    </ul>
  )
}