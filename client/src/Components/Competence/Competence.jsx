import './competence.scss'
import { useEffect, useState } from "react";
import CompetenceList from './CompetenceList';


export default function Competence() {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
          id: "me",
          title: "Me",
        },
        {
          id: "programmation language",
          title: "Programmation Language",
        },
        {
          id: "interest",
          title: "Interest",
        },
        {
          id: "autre",
          title: "Autre",
        },
    ];
    return (
        <div className='competence'>
            <div className="left">
                <ul>
                    {list.map(item=>(
                        <CompetenceList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                        />
                    ))}
                </ul>
            </div>
            <div className="right">

            </div>
            
        </div>
    )
}
