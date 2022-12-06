import {useEffect,useRef} from 'react'
import {
    Button,
    Card,
  } from 'antd';
const Cards=({data,setData,title,stage})=>{
  const refresh=useRef(1)
  const handleNext=(item)=>{
    // let temp=data
    // let index=temp.indexOf(item)
    // temp.splice(index,1)
    // setData(temp)
    // console.log("ieu d",temp)
    
  }
  const handleDelete=(item)=>{
    let temp=data
    let index=temp.indexOf(item)
    temp.splice(index,1)
    setData(temp)
    refresh.current=refresh.current+1
    console.log(refresh.current)
  }
  useEffect(()=>{
    console.log("refresh")
  },[data,setData])
    return(
        <Card title={title} bordered={true}>
              <ul>
                {data.filter(f=>f.stage==stage).map(item=>{
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