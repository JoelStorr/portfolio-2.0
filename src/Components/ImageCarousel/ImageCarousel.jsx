import React, { useState } from "react";

export default function ImageCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState("")
  const [bigImage, setBigImage] = useState(false)

  const sliderStyles = {
    height: "80%",
    position: "relative",
    
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
   
    margin: "10px"
  };

  const slideStylesNext = {
    backgroundImage: `url(${slides[imageIndex(currentIndex + 1)].url})`,
  };
  const slideStylesPrev = {
    backgroundImage: `url(${slides[imageIndex(currentIndex - 1)].url})`,
  };

  const slideStylesCurr = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "-32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "-32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem"
  }

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px"
  }

  const fullScaleImage = {
    position: "fixed",
    zIndex: "10",
    width: "80vw",
    height: "80vh",
    top: "10vh",
    left: "10vw",
  };

  function imageIndex(index){

    if (index === -1){
        return slides.length -1
    }

    if (index === slides.length){
        return 0
    }

    return index
  }


  function goToNext(){
     const isLastSlide = currentIndex === slides.length - 1 ;
     const newIndex = isLastSlide ? 0 : currentIndex + 1;

     setCurrentIndex(newIndex);
  }
  function goToPrev(){

    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length -1: currentIndex -1;

    setCurrentIndex(newIndex)
  }

  function clickeImage(nextImg){
    setBigImage(true)
    if(nextImg){

      if(currentIndex + 1 > slides.length - 1){
        setSelectedImage(slides[0].url);
        return
      }
      setSelectedImage(slides[currentIndex + 1].url);

    } else {
      setSelectedImage(slides[currentIndex].url);
    }

    console.log(selectedImage)
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyle} onClick={goToPrev}>
        &#10094;
      </div>
      <div style={rightArrowStyle} onClick={goToNext}>
        &#10095;
      </div>
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* <div style={{...slideStyles, ...slideStylesPrev}}></div> */}
        <div
          style={{ ...slideStyles, ...slideStylesCurr }}
          onClick={() => clickeImage()}
        ></div>
        <div
          style={{ ...slideStyles, ...slideStylesNext }}
          onClick={() => clickeImage(true)}
        ></div>
      </div>
      <div style={dotContainerStyles}>
        {slides.map((slide, index) => {
          if (index == currentIndex) {
            return (
              <div
                key={index}
                style={dotStyle}
                onClick={() => setCurrentIndex(index)}
              >
                &#10687;
              </div>
            );
          } else {
            return (
              <div
                key={index}
                style={dotStyle}
                onClick={() => setCurrentIndex(index)}
              >
                &#9702;
              </div>
            );
          }
        })}
      </div>
      {bigImage ? (
        <div style={fullScaleImage} onClick={() => setBigImage(false)}>
          <img
            src={selectedImage}
            style={{ width: "100%", height: "100%", objectFit: "contain"}}
          ></img>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
 