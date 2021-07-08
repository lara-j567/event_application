import React from "react";


function DisplayInformation({artistInformationData, artistEventData}) {
    
    
    return (
        <div className="App">
            
            <section>
                
                {/*displaying artists data*/}
                <div className="card_type1">
                    
                    <div className="details">
                        
                        
                        <img src={artistInformationData.image_url} height="50" width="50" align="left"/>
                        <p className="text">{artistInformationData.name}</p>
                    </div>
                    
                    <a href={artistInformationData.facebook_page_url}>Connect to artist via facebook</a>
                
                </div>
            
            </section>
            
            
            <section>
                
                {/*displaying artists events data*/}
                <h1 className="text">{artistInformationData.upcoming_event_count} upcoming events</h1>
                
                {
                    artistEventData &&
                    artistEventData.length > 0 &&
                    artistEventData.map((data) => {
                        
                        return (
                            
                            <div className="card_type2">
                                
                                <div className="container">
                                    
                                    <h4>Event Details</h4>
                                    
                                    <div className="row1">
                                        
                                        <p className="a1">Country</p>
                                        <p className="a2">City</p>
                                    
                                    
                                    </div>
                                    <div className="row2">
                                        
                                        <p className="a1 b1">{data.venue.country}</p>
                                        <p className="b2">{data.venue.city}</p>
                                    
                                    
                                    </div>
                                    
                                    <div className="row1">
                                        
                                        <p className="a1">Venue</p>
                                        <p className="a2">Date</p>
                                    
                                    
                                    </div>
                                    
                                    <div className="row4">
                                        
                                        <p className="a1 b1">{data.venue.location}</p>
                                        <p className="b2">{data.datetime}</p>
                                    
                                    
                                    </div>
                                
                                </div>
                            
                            
                            </div>
                        
                        
                        );
                        
                        
                    })
                    
                    
                }
            
            </section>
        
        </div>
    );
}

export default DisplayInformation;