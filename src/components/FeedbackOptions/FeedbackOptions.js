import React from "react";
import PropTypes from 'prop-types'
import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({clickButton, options}) => (
    <div>


        {options.map((option) => (
                <button  name={option} key={option} type="button"  onClick={clickButton}
                        className={style.good}>{option}</button>
            )
        )}
    </div>  )
FeedbackOptions.propTypes = {
    options: PropTypes.array,
    clickButton: PropTypes.func.isRequired,
}

export default FeedbackOptions