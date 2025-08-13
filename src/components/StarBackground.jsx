import React, { useEffect, useState } from 'react'

function StarBackground() {
    const [stars,setStars] = useState([]);
    const [meteore,setMeteore] = useState([]);

    useEffect(()=>{
        generateStars()
        generateMeteore()
        const handleResize = ()=>{
            generateStars();
        }
        window.addEventListener('reset',handleResize);
        return ()=> window.removeEventListener("resize",handleResize);
    },[]);
    const generateStars = ()=>{
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];
        for(let i = 0;i<numberOfStars;i++){
            newStars.push({
                id:i,
                size:Math.random() * 3 + 1,
                x:Math.random() * 100,
                y:Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration:Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    }
    const generateMeteore = ()=>{
        const numberOfMeteore = 4;
        const newMeteore = [];
        for(let i = 0;i<numberOfMeteore;i++){
            newMeteore.push({
                id:i,
                size:Math.random() * 2 + 1,
                x:Math.random() * 100,
                y:Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration:Math.random() * 3 + 3,
            });
        }
        setMeteore(newMeteore);
    }
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map((star)=>(
            <div key={star.id} className='star animate-pulse-subtle' style={{
                width:`${star.size}px`,
                height:`${star.size}px`,
                left:`${star.x}%`,
                top:`${star.y}%`,
                opacity:`${star.opacity}`,
                animationDuration:`${star.animationDuration}s`
            }}></div>
        ))}

        {meteore.map((star)=>(
            <div key={star.id} className='meteor animate-meteor' style={{
                width:`${star.size * 30}px`,
                height:`${star.size}px`,
                left:`${star.x}%`,
                top:`${star.y}%`,
                animationDelay:`${star.delay}`,
                animationDuration:`${star.animationDuration}s`
            }}></div>
        ))}
    </div>
  )
}

export default StarBackground;