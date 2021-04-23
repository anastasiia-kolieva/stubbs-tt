import s from './styles.module.css'

export default function SoftSkills(){
    return(
        <div className={s.info__wrapper}>
        <h2 className={s.info__wrapper__title}>Soft Skills</h2>
        <p className={s.info__wrapper__text}>I am polite person. 
            <br/>I have experience of communication with people and working in a team. 
            <br/>My self-motivation makes me move on and not stop.</p>
      </div>
    )
}