import logo from './logo.svg';
import './App.css';
import {useState,useRef,useEffect} from 'react'
import Cards from './Card'
import {
  Button,
  Input,
  Col,
  Row
} from 'antd';

function App() {
  const [input,setInput]=useState("")
  const data=useRef([{
      name:"progress1",
      stage:1
      }])
  // const [data,setData]=useState([{
  //   name:"progress1",
  //   stage:1
  //   }])
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  const handleInput=()=>{
    if (input!=""){
      // setData(prev=>[...prev,{name:input,stage:1}])
      data.current=[...data.current,{name:input,stage:1}]
      console.log("data",data.current)
      setInput("")
    }
  }
  useEffect(()=>{
    console.log("refresh")
  },[data])
  return (
    <div className="App">
      <Input.Group compact>
        <Input style={{ width: '200px' }} onChange={handleChange} value={input}/>
        <Button type="primary" onClick={handleInput}>Submit</Button>
      </Input.Group>
      <div className="site-card-wrapper">
        <Row gutter={12}>
          <Col span={4}>
            <Cards data={data}  title={"Backlog"} stage={1}/>
          </Col>
          <Col span={4}>
            <Cards data={data}  title={"On Going"} stage={2}/>
          </Col>
          <Col span={4}>
            <Cards data={data}  title={"Testing"} stage={3}/>
          </Col>
          <Col span={4}>
            <Cards data={data}  title={"Done"} stage={4}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
