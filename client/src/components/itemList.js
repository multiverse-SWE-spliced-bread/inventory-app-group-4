import React from 'react';

export const itemList = ({items}) => {
	return (<>
		{
			items.map((item, idx) => {
				return <>
					<h3>{item.title}</h3>
				</>
			})
		}
	</>)
} 