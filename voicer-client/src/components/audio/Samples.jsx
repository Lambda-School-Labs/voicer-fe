import React from 'react'
import Attributes from './Attributes'

const Samples = ({sample}) => {
	return (
		<>
			<div className="sample">
				<h3>{sample.title}</h3>
				<p>sam asdfsadfsdf: {sample.description}</p>
				<div className="attributes">
					{sample.attributes && sample.attributes.map((attribute) => <Attributes attribute={attribute}/>)}
				</div>
			</div>
		</>
	)
}

export default Samples