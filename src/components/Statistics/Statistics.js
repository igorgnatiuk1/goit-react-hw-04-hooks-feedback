import React from "react";
import style from './Statistics.module.css'
import PropTypes from 'prop-types'


const Statistics = ({total, good,neutral,bad, positive}) => (

    <ul>
        <li className={style.good}>Good:{good}</li>
        <li className={style.bad}>Bad:{bad}</li>
        <li className={style.neutral}>Neutral:{neutral}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positive}%</li>
    </ul>
)
Statistics.propTypes = {
        total: PropTypes.number,
        good: PropTypes.number,
        bad: PropTypes.number,
        neutral: PropTypes.number,
        positive: PropTypes.string,
}
export default Statistics