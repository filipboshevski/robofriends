import React from 'react'

export default function Card({email, name, id}) {
    return (
        <div className='tc bg-light-green dib br4 pa4 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}`} width={'200'} height={'200'}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
