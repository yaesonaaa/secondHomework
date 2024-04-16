import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import me from './assets/котик.png'
import mymood from './assets/мем(жизненный).jpg'
import myphoto from "./assets/myphoto.jpg"
//import viteLogo from '/vite.svg'
import './App.css'
import {BigCard} from "./components/BigCard.jsx"
import {CompetencyCard} from "./components/SkillsIHave.jsx"
import {NewSkillCard} from "./components/NewSkillCard.jsx"
import "./styles/BigCard.css"
import "./styles/SkillsIHave.css"
import "./styles/NewSkillCard.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BigCard photo={myphoto} name={"Сонечка Лукьян(ч)енко"} telegram="@thegreatsonya" ps="пожалуйста, не забывайте букву 'ч', когда пишете или произносите мою фамилию. спасибо"></BigCard>
        <div className="myskillscontainer">
          <h1>Мои компетенции:</h1>
          <div className="competencies">
            <CompetencyCard competency={"HTML/CSS"} sometext={"Имею базовые знания HTML/CSS, могу сверстать простые сайты по макету"}></CompetencyCard>
            <CompetencyCard competency={"AD"} sometext={"имею опыт работы с Active Directory, в том числе с групповыми политиками AD"}></CompetencyCard>
            <CompetencyCard competency={"SQL Server"} sometext={"Понимаю логику баз данных, работала с ними, умею создавать простые запросы, функции, процедуры, создавать, редактировать, удалять таблицы и т. д."}></CompetencyCard>
            <CompetencyCard competency={"Python"} sometext={"Умею читать код, могу написать свой, имея то или иное ТЗ"}></CompetencyCard>
          </div>
        </div>
        <div className="whatineed">
          <h1>Какие компетенции я хочу изучить:</h1>
          <div className="skills">
          <NewSkillCard skill={"React JS"}/>
          <NewSkillCard skill={"Java script"}/>
          <NewSkillCard skill={"Figma"}/>
          <NewSkillCard skill={"Git"}/>
          <NewSkillCard skill={"PHP"}/>
          <NewSkillCard skill={"Adobe Photoshop"}/>
          <NewSkillCard skill={"PostgreSQL"}/>
          <NewSkillCard skill={"Docker"}/>
          <NewSkillCard skill={"Linux"}/>
          <NewSkillCard skill={"Swift"}/>
          </div>
        </div>
        <div className="anotherinfo">
          <h1>Любимые картиночки в интернете:</h1>
          <div className="memes">
          <NewSkillCard skill={<img src="src\assets\котик.png"/>} />
          <NewSkillCard skill={<img src="src\assets\мем(жизненный).jpg"/>} />
          <NewSkillCard skill={<img src="src\assets\довели.jpg"/>} />
          </div>
          <div className="funfacts">
          <h1>Анекдот:</h1>
          <h2>Веб-разработчик, упустивший все дедлайны, наверстывает упущенное</h2>
          </div>

        </div>
    </>
  )
}

export default App
