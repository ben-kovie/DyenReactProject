import React from 'react'
// import { useState } from 'react'
import { Input } from '../../atoms'
// import { SpeechText } from '../SpeechesText'


  

  export const SearchInput = (id,style, onChange) => {
    // const [filter, setFilter] = useState('')
    return (
      <div>
        {/* onChange={event => setFilter(event.target.value)} */}
        <Input onChange={onChange}  placeholder='search' name='search' id={id} type='search' style={style}/>
        {/* <SpeechText/> */}
          {/* {//eslint-disable-next-line
            testData.filter(post => {
              if (filter === '') {
                return post;
              } else if (post.gender.toLowerCase().includes(filter.toLowerCase())) {
                return post;
              }
            }).map((post, index) => (
              <div className="box" key={index}>
                <p>{post.gender}</p>
                <p>{post.first_name}</p>
              </div>
            ))
          } */}
      </div>
    )
}


