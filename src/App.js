import './App.css';
import {useState} from 'react'
import Cards from './Card'
import {
  Button,
  Input,
  Col,
  Row
} from 'antd';

function App() {
  const [input,setInput]=useState("")
  const [data,setData]=useState([
    {
      name:"Task 1",
      stage:1
    },
    {
      name:"Task 2",
      stage:2
    },
    {
      name:"Task 3",
      stage:1
    }
  ])
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  const handleInput=()=>{
    if (input!=""){
      setData(prev=>[...prev,{name:input,stage:1}])
      setInput("")
    }
  }
  return (
    <div className="App" >
      <Input.Group compact>
        <Input placeholder="Input Task" style={{ width: '200px' }} onChange={handleChange} value={input}/>
        <Button type="primary" onClick={handleInput}>Submit</Button>
      </Input.Group>
      <div className="site-card-wrapper" >
        <Row gutter={16}>
          <Col span={6}>
            <Cards data={data} setData={setData} title={"Backlog"} stage={1}/>
          </Col>
          <Col span={6}>
            <Cards data={data} setData={setData} title={"On Going"} stage={2}/>
          </Col>
          <Col span={6}>
            <Cards data={data} setData={setData} title={"Testing"} stage={3}/>
          </Col>
          <Col span={6}>
            <Cards data={data} setData={setData} title={"Done"} stage={4}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
