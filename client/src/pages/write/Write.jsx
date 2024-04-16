import './write.css'

function Write() {
    return (
        <div className='write'>
            <img src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="writeImg" />
            <form className='writeform'>
                <div className="writeformGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} />
                    <input type="text" placeholder='Title' className="writeInput" autoFocus="True"/>
                </div>
                <div className="writeformGroup">
                    <textarea placeholder='Tell your story...' type='text'
                    className='writeInput writeText'></textarea>
                </div>
            
                    <button className='writeSubmit'>Publish</button>
                
            </form>
        </div>
    )
}

export default Write
