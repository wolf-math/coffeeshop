import React from 'react'
import './CreatePost.style.scss'

export default function CreatePost() {
    return (
        <>
            <h1>JIHSDFKJH</h1>
            <form className='blogForm'>
             
                <input type="text" name="title" />
                <textarea type="text" name="body" />
                {/* <div className='isDraft'>
                    <input type="radio" id="draft" name="draft" value="true"/>
                    <label for="html">Draft</label>
                    <input type="radio" id="published" name="published" value="false"/>
                    <label for="css">Published</label>
                </div> */}
              <input type="submit" value="Submit" />
            </form>
        </>
    )
}


