import React  from "react";

const LoadingPage = ():JSX.Element=>{
    React.useEffect(() => {
        const loadingDivs = document.querySelectorAll(".loading_div");
    
        loadingDivs.forEach((div: any) => {
          const numberCount = div.getAttribute("data-numberOfCount");
          const rotation = Number(numberCount) * 45;
          div.style.transform = `rotate(${rotation}deg)`;
          div.style.setProperty('--animation-delay', `calc(${numberCount} * 0.125s)`);
        });
    
        const timeout = setTimeout(() => {
          const loading = document.querySelector(".loading");
          if (loading) {
            (loading as HTMLElement).style.display = "none" ;
          }
        }, 1500);
        
        return () => clearTimeout(timeout);
      }, []);
    return (
        <div className="loading">
            <div className="loading-box">
            <div className="loading_div" data-numberOfCount="1"></div>
            <div className="loading_div" data-numberOfCount="2" ></div>
            <div className="loading_div" data-numberOfCount="3"></div>
            <div className="loading_div" data-numberOfCount="4"></div>
            <div className="loading_div" data-numberOfCount="5"></div>
            <div className="loading_div" data-numberOfCount="6"></div>
            <div className="loading_div" data-numberOfCount="7"></div>
            <div className="loading_div" data-numberOfCount="8"></div>
                <i>Loading...</i>
            </div>
        </div>
    )
}

export default LoadingPage