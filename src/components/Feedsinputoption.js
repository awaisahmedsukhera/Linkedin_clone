import React from 'react'
import "../assets/styles/Feeds.css"

const Feedsinputoption = ({Title , Icon , color}) => {
	return (
		<div className='feeds_item'>
			{Icon && (<Icon  className='f_icon' style={{color:color, marginRight: "10px"}}/>)}
			{Title && <h5>{Title}</h5>}
		</div>
	)
}

export default Feedsinputoption