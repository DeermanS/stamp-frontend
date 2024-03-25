import './App.css';
import React, { useEffect, useState, ReactNode} from 'react';

// interface PictorialCancel {
//   pictorialCancelId: Number,
//   pictorialCancelName: String,
// }

// Sample pictorial cancel data
const samplePCData = [
  {
    // sample data 1
    PCName: "CHERRY GROVE - CHERRY",
    PCInfo: "cherry season, a city of cherry festival",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/alberta/AB_Cherry_Grove_19755.jpg",
    PCAddress: "Cherry Grove PO / Hwy 556 / Cherry Grove AB  T0A 0T0",
    PCTag: "Alberta, Cherry, Fruits, Fruit",
    PCSize: "40mm x 40mm",
  },
  {
    // sample data 2
    PCName: "COBBLE HILL - GRAPES",
    PCInfo: "a city of grapes and wines",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/britishcolumbia/BC_COBBLE_HILL-19101.jpg",
    PCAddress: "Cobble Hill PO / 3559 Garland Ave / Cobble Hill BC  V0R 1L0",
    PCTag: "British Columbia, Grapes, Fruits, Foods",
    PCSize: "38mm x 38mm",
  },
  {
    // sample data 3
    PCName: "PEACHLAND - OGOPOGO",
    PCInfo: "Ogopogo is Kelowna city's mascot ",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/britishcolumbia/BC_Peachland_21220_.jpg",
    PCAddress: "Peachland PO / 19 - 5500 Clements Cres / Peachland BC  V0H 1X0",
    PCTag: "British Columbia, Dragon, Ogopogo, Mascot",
    PCSize: "42mm x 42mm",
  },
  {
    // sample data 4
    PCName: "HARVEY STATION - VIOLIN",
    PCInfo: "a historial city with beatutiful violin",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/newbrunswick/NB_Harvey_Station_21186.jpg",
    PCAddress: "Harvey Station / 1956 Route 3 / Harvey Station NB  E6K 1H0",
    PCTag: "New Brunswick, Violin, music, instrument",
    PCSize: "40mm x 40mm",
  },
  {
    // sample data 5
    PCName: "CHRISTMAS ISLAND - CHRISTMAS",
    PCInfo: "a place where santa claus lives ",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/novascotia/NS_Christmas_Island_19003_red.jpg",
    PCAddress: "Christmas Island Stn Main / 8499 Grand Narrows Hwy / Christmas Island NS  B1T 1A0",
    PCTag: "Nova Scotia, Christmas, winter, red-ink",
    PCSize: "45mm x 45mm",
  }
]

const logoImage = 1;

function ShowPictorialCancel({pictorialCancelPara}) {
  
  return (
    <div className="pc-module">
      {pictorialCancelPara.map((pc, index) => (
        <div className="pc-single"  key={index}>
          <img src={pc.Image} alt='stamp_image'/>
          <p>{pc.PCName}</p>
        </div>
      ))}
    </div>
  );
}

function CreatePCForm({createPCSubmit, onChange, userInput}) {
  const [isActive, setIsActive] = useState(0);
    
  return (
    <div className='createPC'>
      <h1>CreatePC</h1>
      {isActive ? 
        <form onSubmit={createPCSubmit}>
          <div className="input-container">
            <label>PCName: </label>
            <input
              type="text"
              name="PCName"
              value={userInput.PCName}
              lable="PCName"
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>PCInfo: </label>
            <input
              type="text"
              name="PCInfo"
              value={userInput.PCInfo}
              lable="PCInfo"
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>Image: </label>
            <input
              type="text"
              name="Image"
              value={userInput.Image}
              lable="Image"
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>PCAddress: </label>
            <input
              type="text"
              name="PCAddress"
              value={userInput.PCAddress}
              lable="PCAddress"
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>PCTag: </label>
            <input
              type="text"
              name="PCTag"
              value={userInput.PCTag}
              lable="PCTag"
              onChange={onChange}
            />
          </div>
          <div className="input-container">
            <label>PCSize: </label>
            <input
              type="text"
              name="PCSize"
              value={userInput.PCSize}
              lable="PCSize"
              onChange={onChange}
          />
          </div>
          <button variant="contained" type="submit">Create PC</button>
          <button variant="contained" onClick={() => setIsActive(0)}>
              Cancel
            </button>
        </form>
        : 
        <button variant="contained" onClick={() => setIsActive(1)}>
          Add a new PC
        </button>
      }
    </div>
  )
}

function App() {
  const [userInput,setUserInput] = useState({});
  const [pictorialCancel,setPictorialCancel] = useState(samplePCData);

  function CreatePCSubmit(event) {
    event.preventDefault();
    const newPC = {
      PCName: userInput.PCName,
      PCInfo: userInput.PCInfo,
      Image: userInput.Image,
      PCAddress: userInput.PCAddress,
      PCTag: userInput.PCTag,
      PCSize: userInput.PCSize,
    };
    setUserInput(newPC);
    setPictorialCancel(prePC => [...prePC, newPC]);
    setUserInput({
      PCName: '',
      PCInfo: '',
      Image: '',
      PCAddress: '',
      PCTag: '',
      PCSize: '',
    });
  }
  
  function OnChange(event) {
    const {name, value} = event.target;
    setUserInput((preUserInput) => ({
      ...preUserInput,
      [name]: value,
    }));
  }

  return (
    <div>
      <header>
        <div className='webLogo'>
          <img src={logoImage}/>
        </div>
      </header>

    <div className="pictorialCancel">
      <header className="pictorialCancel-header">
        <ShowPictorialCancel pictorialCancelPara={pictorialCancel}/>
      </header>
    </div>

    <CreatePCForm createPCSubmit={CreatePCSubmit} onChange={OnChange} userInput={userInput}/>
    </div>
  );
}

export default App;
