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
    PCId: 1,
    PCName: "CHERRY GROVE - CHERRY",
    PCInfo: "cherry season, a city of cherry festival",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/alberta/AB_Cherry_Grove_19755.jpg",
    PCAddress: "Cherry Grove PO / Hwy 556 / Cherry Grove AB  T0A 0T0",
    PCTag: "Alberta, Cherry, Fruits, Fruit",
    PCSize: "40mm x 40mm",
  },
  {
    // sample data 2
    PCId: 2,
    PCName: "COBBLE HILL - GRAPES",
    PCInfo: "a city of grapes and wines",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/britishcolumbia/BC_COBBLE_HILL-19101.jpg",
    PCAddress: "Cobble Hill PO / 3559 Garland Ave / Cobble Hill BC  V0R 1L0",
    PCTag: "British Columbia, Grapes, Fruits, Foods",
    PCSize: "38mm x 38mm",
  },
  {
    // sample data 3
    PCId: 3,
    PCName: "PEACHLAND - OGOPOGO",
    PCInfo: "Ogopogo is Kelowna city's mascot ",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/britishcolumbia/BC_Peachland_21220_.jpg",
    PCAddress: "Peachland PO / 19 - 5500 Clements Cres / Peachland BC  V0H 1X0",
    PCTag: "British Columbia, Dragon, Ogopogo, Mascot",
    PCSize: "42mm x 42mm",
  },
  {
    // sample data 4
    PCId: 4,
    PCName: "HARVEY STATION - VIOLIN",
    PCInfo: "a historial city with beatutiful violin",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/newbrunswick/NB_Harvey_Station_21186.jpg",
    PCAddress: "Harvey Station / 1956 Route 3 / Harvey Station NB  E6K 1H0",
    PCTag: "New Brunswick, Violin, music, instrument",
    PCSize: "40mm x 40mm",
  },
  {
    // sample data 5
    PCId: 5,
    PCName: "CHRISTMAS ISLAND - CHRISTMAS",
    PCInfo: "a place where santa claus lives ",
    Image: "https://www.canadapost-postescanada.ca/cpc//assets/cpc/uploads/cancels/novascotia/NS_Christmas_Island_19003_red.jpg",
    PCAddress: "Christmas Island Stn Main / 8499 Grand Narrows Hwy / Christmas Island NS  B1T 1A0",
    PCTag: "Nova Scotia, Christmas, winter, red-ink",
    PCSize: "45mm x 45mm",
  }
]

const logoImage = 1;

function ShowPictorialCancel() {
  const [pictorialCancel,setPictorialCancel] = useState(samplePCData);
  
  return (
    <div className="pc-module">
      {pictorialCancel.map((pc) => (
        <div className="pc-single" key={pc.PCId}>
          <img src={pc.Image} alt='stamp_image'/>
          <p>{pc.PCName}</p>
        </div>
      ))}
    </div>
  );
}

function ShowWebLogo() {
  const [webLogo, setWebLogo] = useState(logoImage);

  return (
    <div className='webLogo'>
      <img src={logoImage}/>
    </div>
  );
}

function App() {
  const [pictorialCancel,setPictorialCancel] = useState();

  return (
    <div>
    <div>
      <header>
        <ShowWebLogo />
      </header>
    </div>

    <div className="pictorialCancel">
      <header className="pictorialCancel-header">
        <ShowPictorialCancel />
      </header>
    </div>
    </div>
  );
}

export default App;
