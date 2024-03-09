import logo from './logo.svg';
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
    PCName: "PC1",
  },
  {
    // sample data 2
    PCId: 2,
    PCName: "PC2",
  },
  {
    // sample data 3
    PCId: 3,
    PCName: "PC3",
  }
]

function ShowPictorialCancel() {
  const [pictorialCancel,setPictorialCancel] = useState(samplePCData);
  
  return (
    <div className="pc-module">
      {pictorialCancel.map((pc) => (
        <div key={pc.PCId}>
          <p>ID: {pc.PCId}</p>
          <p>Name: {pc.PCName}</p>
        </div>
      ))}
    </div>
  );
}
function App() {
  const [pictorialCancel,setPictorialCancel] = useState();

  return (
    <div className="pictorialCancel">
      <header className="pictorialCancel-header">
        <ShowPictorialCancel />
      </header>
    </div>
  );
}

export default App;
