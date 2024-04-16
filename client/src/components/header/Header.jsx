import "./header.css"

function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitlesSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
            className="headerImgs"
                src="https://i3.wp.com/cricinformer.com/wp-content/uploads/2023/04/dhoni-1-1.png?strip=all" 
                alt="" 
            />
        </div>
    )
}

export default Header
