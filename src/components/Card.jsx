import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ item, index, percents }) => {
	return (
		<div id={"card" + index} className="cards">
			<h3>{item.site}</h3>
			<div className="cardInnerContainer">
				<div className="dataLine">
					<span className="cardKeys">Planned Impression: </span>
					<span className="cardValues">{item.palnnedImpression}</span>
				</div>
				<div className="dataLine" onClick={() => alert(`Last Update: ${item.lastUpdate}`)}>
					<span className="cardKeys">Fact Impressions: </span>
					<span className="cardValues">{Math.round(item.factImpressions)}</span>
				</div>
				<div className="dataLine list">
					<span className="cardKeys">Tags: </span>
					<span className="cardValues">
						<ul className="tagList">
							{item.tags.map((listItem, listIndex) => (
								<li className="tagListItem" key={listIndex}>{listItem}</li>
							))}
						</ul>

					</span>
				</div>
			</div>
			<span className={`percentage ${percents > 0 ? "green" : "red"}`}>
				{percents > 0 ? (<b>▲</b>) : (<b>▼</b>)} {percents}%
			</span>
		</div>
	)
}

Card.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	percents: PropTypes.number.isRequired
}

export default Card;
