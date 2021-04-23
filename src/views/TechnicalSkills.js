import s from './styles.module.css'

export default function TechnicalSkills(){
    return(
        <div className={s.info__wrapper}>
        <h2 className={s.info__wrapper__title}>Technical Skills</h2>
        <p className={s.info__wrapper__text}>I use such technologies:
        <br/>HTML5, CSS3, JavaScript, React.js, Node.js, VSCode, Gulp, Webpack, Git, Trello, Photoshop.</p>
        </div>
    )
}