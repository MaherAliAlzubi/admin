import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function FilterTable() {
    const [type, setType] = useState('');
    const seniors = useSelector(state => state.seniors);
    const juniors = useSelector(state => state.juniors);
    let table;
    if (type === 'Senior') {
        table = seniors.map((payload) => {
            if (payload.member.position === 'Senior') {
                return (<tr className='UsersTableRow'>
                    <td >
                        <p>{payload.member.name}</p>
                        <p>{payload.member.position}</p>
                    </td>
                </tr>);
            }
        })
    }
    else if (type === 'Junior') {
        table = juniors.map((payload) => {
            if (payload.member.position === 'Junior') {
                return (<tr className='UsersTableRow'>
                    <td >
                        <p>{payload.member.name}</p>
                        <p>{payload.member.position}</p>
                    </td>
                </tr>);
            }
        })
    }
    return (
        <div>
            <div className='Buttons'>
                <button onClick={() => setType('Senior')}>Seniors</button>
                <button onClick={() => setType('Junior')}>Juniors</button>
            </div>
            <table>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    )
}
