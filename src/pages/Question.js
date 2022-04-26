import React from 'react'
import styled from 'styled-components'
import {ProgressBar, Button} from 'react-bootstrap'
import {QuestionData} from '../asset/data/questiondata'
import { createSearchParams, useNavigate } from 'react-router-dom'

const Question=()=>{
  const [questionNo,setQuestionNo]=React.useState(0) //0으로 초기화
  const [totalScore, setTotalScore]=React.useState([
    {id:"EI",score:0},
    {id:"SN",score:0},
    {id:"TF",score:0},
    {id:"JP",score:0}
  ])
  const navigate = useNavigate()
  console.log('totalScore',totalScore)
  const handleClickButton=(no,type)=>{
    const newScore = totalScore.map((s)=>
      s.id === type ? {id:s.id, score:s.score+no} : s
    )
    setTotalScore(newScore)
    // 다음 문제로 문제수 증가
    if(QuestionData.length !== questionNo + 1){ // questionNo에 1을 더했을 때 값이 총 페이지 수와 다를 때
      setQuestionNo(questionNo+1) // 1을 더함
    }
    else{ // 총 페이지 수와 같을 때
      //mbti도출
      const mbti = newScore.reduce( // reduce는 결과 누적
        (acc, curr)=>
          acc + (curr.score >=2 ? curr.id.substring(0,1) : curr.id.substring(1,2)),""
      )
      //결과 페이지로 이동
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti
        })}`
      })
    }
    setQuestionNo(questionNo + 1)
    // if(type==="EI"){
    //   // 기존 스코어에 더할 값을 계산 (기존값 + 배점)
    //   const addScore = totalScore[0].score + no // id:"EI",score:0 에 no을 더함
    //   // 새로운 객체
    //   const newObject = {id:"EI",score:addScore}
    //   // splice를 통해 새로운 객체를 해당 객체 자리에 넣어줌
    //   totalScore.splice(0,1,newObject)
    // }
    // else if(type==="SN"){
    //   const addScore = totalScore[1].score + no
    //   const newObject = {id:"SN",score:addScore}
    //   totalScore.splice(1,1,newObject)
    // }
    // else if(type==="TF"){
    //   const addScore = totalScore[2].score + no
    //   const newObject = {id:"TF",score:addScore}
    //   totalScore.splice(2,1,newObject)
    // }
    // else if(type==="JP"){
    //   const addScore = totalScore[3].score + no
    //   const newObject = {id:"JP",score:addScore}
    //   totalScore.splice(3,1,newObject)
    // }
    
  }
  // const handleClickButtonB=(no,type)=>{
  //   if(type==="EI"){
  //     // 기존 스코어에 더할 값을 계산 (기존값 + 배점)
  //     const addScore = totalScore[0].score + no // id:"EI",score:0 에 no을 더함
  //     // 새로운 객체
  //     const newObject = {id:"EI",score:addScore}
  //     // splice를 통해 새로운 객체를 해당 객체 자리에 넣어줌
  //     totalScore.splice(0,1,newObject)
  //   }
  //   else if(type==="SN"){
  //     const addScore = totalScore[1].score + no
  //     const newObject = {id:"SN",score:addScore}
  //     totalScore.splice(1,1,newObject)
  //   }
  //   else if(type==="TF"){
  //     const addScore = totalScore[2].score + no
  //     const newObject = {id:"TF",score:addScore}
  //     totalScore.splice(2,1,newObject)
  //   }
  //   else if(type==="JP"){
  //     const addScore = totalScore[3].score + no
  //     const newObject = {id:"JP",score:addScore}
  //     totalScore.splice(3,1,newObject)
  //   }
  //   setQuestionNo(questionNo + 1)
  // }
  return(
    <Wrapper>
      <ProgressBar striped variant="danger" now={(questionNo/QuestionData.length)*100} style={{margin:'20px'}}/>
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button style={{width:"40%", minHeight:"200px", fontSize:'20pt'}} onClick={()=>
        handleClickButton(1,QuestionData[questionNo].type)}>
          {QuestionData[questionNo].answera}
        </Button>
        <Button style={{width:"40%", minHeight:"200px", fontSize:'20pt', marginLeft:"20px"}} onClick={()=>
        handleClickButton(0,QuestionData[questionNo].type)}>
          {QuestionData[questionNo].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  )
}
export default Question

const Wrapper = styled.div`
  height:100vh;
  text-align:center;
  font-family:"LeeSeoyun";
`
const Title = styled.div`
  font-size:30px;
  margin:50px 0;
`
const ButtonGroup = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`