import React, { Component } from 'react';
import Graph from 'react-graph-vis';

export default class App extends Component {


  render() {

    var graph = {
      nodes: [
        {id: 1, label: "Industrial supplies for tools used in airplane manufacturing: 1.2.2",shape: "box", margin: 15,chosen:{color: {border:'#FF665A'}}, color: {border:'#FF665A'},borderWidth:5},
        {id: 2, label: "Aerospace supply chain optimization: 1.1.1", shape: "box", margin: 15, chosen:{color: {border:'#FFFAB4',background:'#E74C4C'}}, color: {border:'#FFFAB4',background:'#E74C4C'},borderWidth:5},
        {id: 3, label: "Aerospace equipment procurement: 1.1.2", shape: "box", margin: 15, chosen:{color: {border:'#C1C400'}}, color: {border:'#C1C400'},borderWidth:5},
        {id: 4, label: "Aerospace personnel recruiting: 1.1.2", shape: "box", margin: 15, chosen:{color: {border:'black',background:'#FFA326'}}, color: {border:'black',background:'#FFA326'},borderWidth:5},
        {id: 5, label: "Logistics for space launches: 1.2.1", shape: "box", margin: 15, chosen:{color: {border:'#FF665A'}}, color: {border:'#FF665A'},borderWidth:5},
        {id: 6, label: "Design of asteroid mining exploration equipment: 2.1.2", shape: "box", margin: 15, chosen:{color: {border:'#FF665A'}}, color: {border:'#FF665A'},borderWidth:5},
        {id: 7, label: "Design of aircraft interiors: 2.1.2", shape: "box", margin: 15, chosen:{color: {border:'#FFFAB4'}}, color: {border:'#FFFAB4'},borderWidth:5},
        {id: 8, label: "Engineering for spaceflight: 2.1.2", shape: "box", margin: 15, chosen:{color: {border:'#FFFAB4'}}, color: {border:'#FFFAB4'},borderWidth:5},
        {id: 9, label: "Engineering firms for aerospace: 2.1.2", shape: "box", margin: 15, chosen:{color: {border:'#FFFAB4',background:'#E74C4C'}}, color: {border:'#FFFAB4',background:'#E74C4C'},borderWidth:5},
        {id: 10, label: "Education for aerospace manufacturing workers: 2.1.2", shape: "box", margin: 15, chosen:{color: {border:'black',background:'#FFA326'}}, color: {border:'black',background:'#FFA326'},borderWidth:5},
        {id: 11, label: "Test and calibration for commercial aerospace: 2.1.3", shape: "box", margin: 15, chosen:{color: {border:'#C1C400'}}, color: {border:'#C1C400'},borderWidth:5},
        {id: 12, label: "Testing aerospace products: 2.1.3", shape: "box", margin: 15, chosen:{color: {border:'#C1C400'}}, color: {border:'#C1C400'},borderWidth:5},
        {id: 13, label: "Materials processing for commercial aerospace: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#F868FF'}}, color: {border:'#F868FF'},borderWidth:5},
        {id: 14, label: "Aerostructures for Commercial Aerospace - BG: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#011275'}}, color: {border:'#011275'},borderWidth:5},
        {id: 15, label: "Aerospace coatings: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#A7D8FB'}}, color: {border:'#A7D8FB'},borderWidth:5},
        {id: 16, label: "Carbon composite materials for commercial aerospace - BG: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#A7D8FB'}}, color: {border:'#A7D8FB'},borderWidth:5},
        {id: 17, label: "Coatings and Insulation for Diversified Electronics - BG: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#A7D8FB'}}, color: {border:'#A7D8FB'},borderWidth:5},
        {id: 18, label: "Industrial supplies as inputs to airplanes: 2.2.2", shape: "box", margin: 15, chosen:{},borderWidth:5},
        {id: 19, label: "Machine shops for commercial aerospace: 2.2.2", shape: "box", margin: 15, chosen:{},borderWidth:5},
        {id: 20, label: "Industrial supplies for tools used in airplane manufacturing: 2.2.2", shape: "box", margin: 15, chosen:{},borderWidth:5},
        {id: 21, label: "In-flight entertainment systems: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#4700A7'}}, color: {border:'#4700A7'},borderWidth:5},
        {id: 22, label: "Propulsion systems for commercial aircraft: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#4700A7'}}, color: {border:'#4700A7'},borderWidth:5},
        {id: 23, label: "Avionics: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#4700A7'}}, color: {border:'#4700A7'},borderWidth:5},
        {id: 24, label: "Propulsion systems for spaceflight: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#4700A7'}}, color: {border:'#4700A7'},borderWidth:5},
        {id: 25, label: "Commercial Airplanes: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#FF665A'}}, color: {border:'#FF665A'},borderWidth:5},
        {id: 26, label: "Equipment for test and calibration for commercial aerospace: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#FF665A'}}, color: {border:'#FF665A'},borderWidth:5},
        {id: 27, label: "Industrial tools for aerospace: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#FF665A'}}, color: {border:'#FF665A'},borderWidth:5},
        {id: 28, label: "Industrial tools for commercial aerospace MRO: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#FF665A'}}, color: {border:'#FF665A'},borderWidth:5},
        {id: 29, label: "Spacecraft: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#FF665A'}}, color: {border:'#FF665A'},borderWidth:5},
        {id: 30, label: "Parts and equipment manufacturers: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#C1C400'}}, color: {border:'#C1C400'},borderWidth:5},
        {id: 31, label: "Interiors: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#C1C400'}}, borderWidth:5, color: {border:'#C1C400'}},
        {id: 32, label: "Parts manufacturing for spacecraft: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'#C1C400'}}, borderWidth:5, color: {border:'#C1C400'}},
        {id: 33, label: "Product design software for commercial aerospace: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'red',background:'#3FCF00'}}, borderWidth:5, color: {border:'red',background:'#3FCF00'}},
        {id: 34, label: "Programming for machine tools for commercial aerospace: 2.2.2", shape: "box", margin: 15, chosen:{color: {border:'red',background:'#3FCF00'}}, borderWidth:5, color: {border:'red',background:'#3FCF00'}},
        {id: 35, label: "Maintenance, repair and overhaul of support equipment for commercial aerospace: 2.2.3", shape: "box", margin: 15, chosen:{color: {border:'#7F0000'}}, borderWidth:5, color: {border:'#7F0000'}},
        {id: 36, label: "Maintenance, repair and overhaul for commercial aerospace: 2.2.3", shape: "box", margin: 15, chosen:{color: {border:'#FF665A'}}, borderWidth:5, color: {border:'#FF665A'}},
        {id: 37, label: "Maintenance, repair and overhaul of components for commercial aerospace: 2.2.3", shape: "box", margin: 15, chosen:{color: {border:'#C1C400'}}, borderWidth:5, color: {border:'#C1C400'}},
        {id: 39, label: "Materials distribution to commercial aerospace: 3.1.2", shape: "box", margin: 15, chosen:{color: {border:'#EA00F9'}}, borderWidth:5, color: {border:'#EA00F9'}},
        {id: 40, label: "Alloyed materials distribution to commercial aerospace: 3.1.2", shape: "box", margin: 15, chosen:{color: {border:'#A7D8FB'}}, borderWidth:5, color: {border:'#A7D8FB'}},
        {id: 41, label: "Distribution of industrial supplies as inputs to airplanes: 3.1.2", shape: "box", margin: 15, chosen:{}, borderWidth:5},
        {id: 42, label: "Distribution of industrial supplies for tools used in airplane manufacturing: 3.1.2", shape: "box", margin: 15, chosen:{}, borderWidth:5},
        {id: 43, label: "Distribution of industrial tools for aerospace: 3.1.2", shape: "box", margin: 15, chosen:{}, borderWidth:5, color: {border:'#FF665A'}},
        {id: 44, label: "Parts and equipment distribution for commercial aircraft component manufacturers: 3.1.2", shape: "box", margin: 15, chosen:{color: {border:'#7F0000'}}, borderWidth:5, color: {border:'#7F0000'}},
        {id: 45, label: "Parts and equipment distribution for commercial aircraft MRO firms: 3.1.2", shape: "box", margin: 15, chosen:{color: {border:'#7F0000'}}, borderWidth:5, color: {border:'#7F0000'}},
        {id: 46, label: "Parts and equipment distribution for general aviation: 3.1.2", shape: "box", margin: 15, chosen:{color: {border:'#7F0000'}}, borderWidth:5, color: {border:'#7F0000'}},
        {id: 47, label: "Aircraft leasing: 3.3.2", shape: "box", margin: 15, chosen:{color: {border:'#FF665A'}}, borderWidth:5, color: {border:'#FF665A'}},
        {id: 48, label: "Insurance For Businesses: 3.3.2", shape: "box", margin: 15, chosen:{color: {border:'#4700A7',background:'#E74C4C'}}, borderWidth:5, color: {border:'#4700A7',background:'#E74C4C'}},
        {id: 49, label: "Consulting for Aerospace: 4.1.2", shape: "box", margin: 15, chosen:{color: {border:'#FFFAB4',background:'#E74C4C'}}, borderWidth:5, color: {border:'#FFFAB4',background:'#E74C4C'}},
        {id: 50, label: "Airlines: 1.2.2", shape: "box", margin: 15, chosen:{color: {border:'#FFFAB4',background:'#E74C4C'}}, borderWidth:5, color: {border:'#FFFAB4',background:'#E74C4C'}}
        ],

      edges: [
        {from: 1 , to:	36, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 1 , to:	50, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 1  , to:	47, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 2  , to:	36, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 2  , to:	14, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 2  , to:	30, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 2  , to:	31, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 2  , to:	32, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 3  , to:	36, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 4  , to:	50, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 4  , to:	25, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 7  , to:	31, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 9  , to:	25, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 9  , to:	14, length: 800, color: {color: "blue", highlight: "blue"}},
        {from: 9  , to:	30, length: 800, color: {color: "blue", highlight: "blue"}},
          {from: 10, to:	50,length: 800, color: {color: "blue", highlight: "blue"}},
          {from: 10, to:	25, length: 800,color: {color: "blue", highlight: "blue"}},
          {from: 11, to:	25, length: 800,color: {color: "blue", highlight: "blue"}},
          {from: 11, to:	30, length: 800,color: {color: "blue", highlight: "blue"}},
          {from: 11, to:	36, length: 800,color: {color: "blue", highlight: "blue"}},
          {from: 12, to:	7, length: 800,color: {color: "blue", highlight: "blue"}},
          {from: 12, to:	9, length: 800,color: {color: "blue", highlight: "blue"}},
          {from: 11, to:	19, length: 800,color: {color: "blue", highlight: "blue"}},
          {from: 13, to:	19, color: {color: "red", highlight: "red"}, length: 800},
          {from: 13, to:	14, color: {color: "red", highlight: "red"}, length: 800},
          {from: 13, to:	30, color: {color: "red", highlight: "red"}, length: 800},
          {from: 13, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 14, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 15, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 16, to:	14, color: {color: "red", highlight: "red"}, length: 800},
          {from: 16, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 17, to:	23, color: {color: "red", highlight: "red"}, length: 800},
          {from: 18, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 18, to:	30, color: {color: "red", highlight: "red"}, length: 800},
          {from: 19, to:	30, length: 800,color: {color: "blue", highlight: "blue"}},
          {from: 19, to:	25, length: 800,color: {color: "blue", highlight: "blue"}},
          {from: 20, to:	19, color: {color: "red", highlight: "red"}, length: 800},
          {from: 20, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 20, to:	30, color: {color: "red", highlight: "red"}, length: 800},
          {from: 20, to:	27, color: {color: "red", highlight: "red"}, length: 800},
          {from: 20, to:	28, color: {color: "red", highlight: "red"}, length: 800},
          {from: 21, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 22, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 23, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 25, to:	50, color: {color:'green',highlight:'green'}, length: 800},
          {from: 25, to:	47,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 26, to:	11,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 27, to:	25,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 27, to:	30,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 27, to:	19,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 28, to:	36,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 30, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 31, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 33, to:	25,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 33, to:	30,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 33, to:	19,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 33, to:	9,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 34, to:	19,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 34, to:	30,  color: {color:'green',highlight:'green'}, length: 800},
          {from: 35, to:	50, length: 800, color: {color: "blue", highlight: "blue"}},
          {from: 36, to:	50, length: 800, color: {color: "blue", highlight: "blue"}},
          {from: 36, to:	47, length: 800, color: {color: "blue", highlight: "blue"}},
          {from: 37, to:	50, length: 800, color: {color: "blue", highlight: "blue"}},
          {from: 37, to:	47, length: 800, color: {color: "blue", highlight: "blue"}},
          {from: 37, to:	25, length: 800, color: {color: "blue", highlight: "blue"}},
          {from: 39, to:	19, color: {color: "red", highlight: "red"}, length: 800},
          {from: 39, to:	14, color: {color: "red", highlight: "red"}, length: 800},
          {from: 39, to:	30, color: {color: "red", highlight: "red"}, length: 800},
          {from: 39, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 13, to:	39, color: {color: "red", highlight: "red"}, length: 800},
          {from: 13, to:	40, color: {color: "red", highlight: "red"}, length: 800},
          {from: 40, to:	19, color: {color: "red", highlight: "red"}, length: 800},
          {from: 40, to:	14, color: {color: "red", highlight: "red"}, length: 800},
          {from: 40, to:	30, color: {color: "red", highlight: "red"}, length: 800},
          {from: 40, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 20, to:	42, color: {color: "red", highlight: "red"}, length: 800},
          {from: 42, to:	19, color: {color: "red", highlight: "red"}, length: 800},
          {from: 42, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 42, to:	30, color: {color: "red", highlight: "red"}, length: 800},
          {from: 42, to:	27, color: {color: "red", highlight: "red"}, length: 800},
          {from: 42, to:	28, color: {color: "red", highlight: "red"}, length: 800},
          {from: 43, to:	25, color: {color:'green',highlight:'green'}, length: 800},
          {from: 43, to:	30, color: {color:'green',highlight:'green'}, length: 800},
          {from: 43, to:	19, color: {color:'green',highlight:'green'}, length: 800},
          {from: 43, to:	36, color: {color:'green',highlight:'green'}, length: 800},
          {from: 27, to:	43, color: {color:'green',highlight:'green'}, length: 800},
          {from: 18, to:	41, color: {color:'green',highlight:'green'}, length: 800},
          {from: 41, to:	25, color: {color: "red", highlight: "red"}, length: 800},
          {from: 41, to:	30, color: {color: "red", highlight: "red"}, length: 800},
          {from: 44, to:	19, color: {color: "red", highlight: "red"}, length: 800},
          {from: 45, to:	14, color: {color: "red", highlight: "red"}, length: 800},
          {from: 45, to:	30, color: {color: "red", highlight: "red"}, length: 800},
          {from: 45, to:	31, color: {color: "red", highlight: "red"}, length: 800},
          {from: 45, to:	36, color: {color: "red", highlight: "red"}, length: 800},
          {from: 45, to:	37, color: {color: "red", highlight: "red"}, length: 800},
          {from: 47, to:	50, color: {color:'green',highlight:'green'}, length: 800}
        ]

    };

    var options = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: "#000000"
        },
         physics: {
            barnesHut: {
              avoidOverlap: .7
            },
        }
    };

    var events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
      }

    return (
      <div>
        <div className="keyBox">
          <h2> Map Key </h2>
          <hr></hr>
          <h4> Edges: </h4>
          Blue: AP
          <br></br>
          Red: Input
          <br></br>
          Green: Subject
          <h4> Nodes: </h4>
          Object Fills:
          <br></br>
          B: Blue
          <br></br>
          D: Red
          <br></br>
          F: Orange
          <br></br>
          C: Green
          <br></br>
          Object Subtype Borders:
          <br></br>
          1iii: pink
          <br></br>
          2i: Light Blue
          <br></br>
          2ii: Blue
          <br></br>
          2iii: Dark Blue
          <br></br>
          3ii: Purple
          <br></br>
          3iii: Dark Purple
          <br></br>
          4ii: Light Red
          <br></br>
          4iii: Red
          <br></br>
          4div: Dark Red
          <br></br>
          iv: Yellow
          <br></br>
          div: Dark Yellow
          <br></br>
          none: Black
        </div>
        <div style={{width:"80%",height:"100%"}}>
          <Graph graph={graph} options={options} events={events}/>
        </div>
      </div>
    );
  }
}
