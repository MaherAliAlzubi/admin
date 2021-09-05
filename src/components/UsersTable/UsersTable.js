import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import '../UsersTable/UsersTable.css';

export default function UsersTable() {
    const seniors = useSelector(state => state.seniors);
    const juniors = useSelector(state => state.juniors);
    const dispatch = useDispatch();
    function onPositionChange(prevValue, curValue, member) {
        if (prevValue !== curValue) {
            if (curValue === 'Senior') {
                member.position = 'Senior';
                dispatch({
                    type: 'REMOVE_JUNIOR', payload: {
                        member: member,
                    }
                });
                dispatch({
                    type: 'ADD_SENIOR', payload: {
                        member: member,
                    }
                });
            }
            else {
                member.position = 'Junior';
                dispatch({
                    type: 'REMOVE_SENIOR', payload: {
                        member: member,
                    }
                });
                dispatch({
                    type: 'ADD_JUNIOR', payload: {
                        member: member,
                    }
                });
            }
        }
    }
    return (
        <div className='UsersTable'>
            <table>
                <tbody>
                    {seniors.map((payload) => {
                        if (payload.member.position === 'Senior') {
                            return (<tr className='UsersTableRow'>
                                <td >
                                    <p>{payload.member.name}</p>
                                    <select name="position" id="position" onChange={(e) => onPositionChange('Senior', e.target.value, payload.member)}>
                                        <option value="Senior">Senior</option>
                                        <option value="Junior">Junior</option>
                                    </select>
                                </td>
                            </tr>);
                        }
                    })}
                    {juniors.map((payload) => {
                        if (payload.member.position === 'Junior') {
                            return (<tr className='UsersTableRow'>
                                <td >
                                    <p>{payload.member.name}</p>
                                    <select name="position" id="position" onChange={(e) => onPositionChange('Junior', e.target.value, payload.member)}>
                                        <option value="Junior">Junior</option>
                                        <option value="Senior">Senior</option>
                                    </select>
                                </td>
                            </tr>);
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}
