import './App.css';
import {useState} from "react";
import $ from "jquery";

function App() {
    
    const [artistName, setArtistName] = useState("");
    const [artistInformation, setArtistInformation] = useState({});
    const [artistEvents, setArtistEvents] = useState([{}]);
    
    
    const fetchData = () => {
        
        ///const URL =`https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0#/ArtistData/artists/${artistName}?app_id=aa817e4ec06a8d24666ea63289868366`;
        const URL = `https://rest.bandsintown.com/artists/${artistName}?app_id=aa817e4ec06a8d24666ea63289868366`;
        return new Promise((resolve, reject) => {
            
            $.ajax({
                
                url: URL,
                async: false,
                type: "get",
                dataType: "json",
                
                success: function (result) {
                    
                    console.log(artistName);
                    console.log(result);
                    setArtistInformation(result);
                    console.log('set artist information');
                    console.log(artistInformation);
                    
                },
                
                error: function (error) {
                    
                    console.log(error);
                    reject(error);
                    
                },
                
                
            });
            
            
        });
        
    }
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        //  setArtistName(e.target.value);
        console.log(artistName);
        
    }
    
    
    return (
        <div className="App">
            <header className="title">
                
                <h1 className="heading">Event Getter</h1>
                <p className="description">Tracking all the events happening near you!!</p>
            
            
            </header>
            
            <section>
                
                <div className="form">
                    
                    <form onSubmit={handleSubmit}>
                        
                        <label>Artist name:</label>
                        <input
                            placeholder="search artist"
                            type="text"
                            value={artistName}
                            onChange={(e) => setArtistName(e.target.value)}
                            required
                        
                        />
                        
                        <button onClick={fetchData}>SUBMIT</button>
                    
                    
                    </form>
                
                
                </div>
            
            
            </section>
        </div>
    );
}

export default App;
