import React from 'react'


const FeatureSection = () => {
    return(
        <div className="bg-success text-center" >
           <p className="display-4 text-white p-4"> Discover the amazing features</p>
             <p className="text-white">
                Get access to amazing features of react js.
            </p>
               <div className="row p-4">
                  <div className="col-6 text-right">
                    <button className="btn btn-warning btn-lg">Play Store</button>
                  </div>
                    <div className="col-6 text-center">
                       <button className="btn btn-warning btn-lg"> App Store</button>
                    </div> 
                </div>
            </div>
    )
}

export default FeatureSection
