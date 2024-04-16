import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label >Profite Picture</label>
                    <div className="settingsPP">
                        <img 
                            src="https://images.pexels.com/photos/3921363/pexels-photo-3921363.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:"none"}}/>
                    </div>
                    <label >Username</label>
                    <input type="file" placeholder='spartan' />
                    <label >E-mail</label>
                    <input type="email" placeholder='spartan@gmail.com' />
                    <label >Password</label>
                    <input type='password'/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
                {/* <Sidebar/> */}
        </div>
    )
}

export default Settings
