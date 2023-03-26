import React, { useState, useEffect } from "react";


export default function Form(){

 
const [memeImg, setMemeImg]=useState('https://i.imgflip.com/1g8my4.jpg');

const [meme, setMeme] = useState({
  topText: "",
  bottomText: "",
  randomImg: "http://i.imgflip.com/1bij.jpg",
});

const[allMemeImages,setAllMemeImages]=useState([]);
 useEffect(() => {
   fetch("https://api.imgflip.com/get_memes")
     .then((res) => res.json())
     .then((data) => setAllMemeImages(data.data.memes));
 }, []);
     function getMemesImg() {
        const randomNum=Math.floor(Math.random()* allMemeImages.length);
        const imgUrl=allMemeImages[randomNum].url;
    
        setMeme((prevMeme)=>({
                    ...prevMeme,
                    randomImg:imgUrl
                            }));;

                          
                              }
function handleChange(event){
  const {name, value}=event.target;

  setMeme((prevMeme)=>({
    ...prevMeme,
    [name]:value
  }))

}
     

    return (
       
      <div className="main">
        <div className="form">
          <div className="top">
            <input type="text" name="topText" value={meme.topText} onChange={handleChange} placeholder="Top Text" />
            <input type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} placeholder="Bottom Text"/>
          </div>
          <button onClick={getMemesImg} className="btn">Get a New Image</button>
         <div className="memeContainer">

           <img src={meme.randomImg} alt='/' className = 'imgMeme'/>
           <div className="text topText">{meme.topText}</div>
           <div className="text bottomText">{meme.bottomText}</div>
         </div>
        </div>
      </div>
    );
}