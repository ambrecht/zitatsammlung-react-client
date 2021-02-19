/* eslint-disable react/prop-types */

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    getZitat,
    getZitateList,
    getSeverZitate,
    changeZitat,
} from '../reducers/zitatReducer'

export default function Zitatlist() {
    //const serverZitate = useSelector(getSeverZitate)
    const dispatch = useDispatch()
    function onChange(e) {
        dispatch(changeZitat(e.target.value))
    }

    const zitat = useSelector(getZitat)
    const zitatList = useSelector(getZitateList)

    console.log(zitatList)

    return (
        <div>
            <p>{zitat}</p>
            <form>
                <input
                    aria-label="Zitateingabe"
                    type="text"
                    value={zitat}
                    onChange={onChange}
                ></input>
            </form>
            <button onClick={() => dispatch(getSeverZitate())}>
                Increase counter
            </button>
        </div>
    )
}
