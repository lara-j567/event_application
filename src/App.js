import './App.css';
import {useState} from "react";
import $ from "jquery";
import DisplayInformation from "./DisplayInformation";

function App() {
    
    const [artistName, setArtistName] = useState("");
    const [artistInformation, setArtistInformation] = useState({});
    const [artistEvents, setArtistEvents] = useState([{}]);
    const [btnClick, setBtnClick] = useState(false);
    /*this id is valid for 3 months.i.e: till september.
    * If you want to run this program after 2nd september ,request new url on this url:https://help.bandsintown.com/en/ */
    const app_id = 'aa817e4ec06a8d24666ea63289868366';
    
    
    const fetchData = () => {
        
        const URL1 = `https://rest.bandsintown.com/artists/${artistName}?app_id=${app_id}`;
        const URL2 = `https://rest.bandsintown.com/artists/${artistName}/events?app_id=${app_id}`;
        
        return new Promise((resolve, reject) => {
            
            
            $.ajax({
                
                url: URL1,
                async: false,
                type: "get",
                dataType: "json",
                
                success: function (result) {
                    
                    
                    setBtnClick(true);
                    console.log(result);
                    setArtistInformation(result);
                    
                },
                
                error: function (error) {
                    
                    console.log(error);
                    console.log('error');
                    alert('Data not found!!');
                    reject(error);
                    
                },
            }).done(function () {
                
                $.ajax({
                    
                    
                    url: URL2,
                    async: false,
                    type: "get",
                    dataType: "json",
                    
                    success: function (result) {
                        
                        
                        console.log(result);
                        setArtistEvents(result);
                        console.log(artistEvents);
                        
                        
                    },
                    
                    error: function (error) {
                        
                        reject(error);
                        
                    },
                    
                    
                })
                
            })
            
            
        });
        
    }
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        
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
                        
                        
                        <input
                            placeholder="search artist"
                            type="text"
                            value={artistName}
                            onChange={(e) => setArtistName(e.target.value)}
                            required
                        
                        />
                        
                        <button className="searchBtn" onClick={fetchData}>Search</button>
                    
                    
                    </form>
                
                
                </div>
            
            
            </section>
            
            
            {btnClick ?
                <DisplayInformation artistInformationData={artistInformation} artistEventData={artistEvents}/> : null}
        
        </div>
    );
}

export default App;
