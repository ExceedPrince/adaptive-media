import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Card from './Card';
import adaptiveData from '../data/adaptiveTest.json';

const App = () => {
  const [data, setData] = useState(null);
  const [isReversed, setIsReversed] = useState(false);
  const [buttonText, setButtonText] = useState("Change to reversed order");

  useEffect(() => {
    setData(adaptiveData);
  }, [])

  useEffect(() => {
    if (data) {
      setData(data.reverse());
    }
  }, [isReversed, data])

  function changeOrder() {
    if (isReversed) {
      setIsReversed(false);
      setButtonText("Change to reversed order");
    } else {
      setIsReversed(true);
      setButtonText("Change to original order");
    }
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ]
  }

  return (
    <>
      <div className="topDiv">
        <h1>Adaptive Media Test Homework</h1>
      </div>
      <section className="cardSection">
        <Slider {...settings}>
          {data && data.map((item, index) => {
            const percents = Math.round(item.factImpressions / (item.palnnedImpression / 100)) - 100;

            return (
              <Card item={item} index={index} percents={percents} key={index} />
            )
          }
          )}
        </Slider>
      </section>
      <div className="bottomDiv">
        <button id="orderBtn" type="button" onClick={changeOrder}>{buttonText}</button>
      </div>
    </>
  );
}

export default App;
