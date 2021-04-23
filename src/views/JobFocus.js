import s from './styles.module.css'

export default function JobFocus(){
    return(
        <div className={s.info__wrapper}>
          <h2 className={s.info__wrapper__title}>My objectives</h2>
          <p className={s.info__wrapper__text}>At the moment, I am focused on getting a job as a Front-End developer. 
              <br/>I am looking for a company willing to offer me a placement among their developers. 
              In return, I would offer my full commitment, and be a pleasant and friendly 
              addition to your team.</p>
        </div>
    )
}