import './competenceList.scss'

export default function CompetenceList({ id, title, active, setSelected }) {
  return (
    <li className={active ? 'competenceList active' : 'competenceList'} onClick={() =>setSelected(id)}>
        {title}
    </li>
  )
}
