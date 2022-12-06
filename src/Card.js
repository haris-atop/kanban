import {useEffect,useRef} from 'react'
import {
    Button,
    Card,
  } from 'antd';
const Cards=({data,title,stage})=>{
  const handleNext=(item)=>{
    
  }
  const handleDelete=(item)=>{
    let temp=data.current
    let index=temp.indexOf(item)
    temp.splice(index,1)
    // setData(temp)
    data.current=temp
    console.log(data.current)
  }
  // useEffect(()=>{
  //   console.log("refresh")
  // },[data,setData])
    return(
        <Card title={title} bordered={true}>
              <ul>
                {data.current.filter(f=>f.stage==stage).map(item=>{
                  return (
                    <>
                      <li>{item.name}</li>
                      <Button type="primary">back</Button>
                      <Button type="primary" onClick={()=>handleDelete(item)} danger>delete</Button>
                      <Button type="primary" onClick={()=>handleNext(item)}>next</Button>
                    </>
                  )
                })}
              </ul>
        </Card>
    )
}
export default Cards;