import React from 'react'
import styled from 'styled-components'
import CatImage from '../asset/cat_image.jpg'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Home=()=>{
  const navigate = useNavigate()
  const handleClickButton =()=>{
    navigate('/question')
  }
  return(
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img src={CatImage} className="rounded-circle" width={350} height={350} />
        </LogoImage>
        <Desc className="text-primary">MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
        <Button style={{fontFamily:'LeeSeoyun'}} onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.div`
  height:100vh;
`
const Header = styled.div`
  font-size:40pt;
  display:flex;
  justify-content:center;
  align-item:center;
  font-family:"LeeSeoyun";
`
const Contents = styled.div`
  display:flex;
  justify-content:center;
  align-item:center;
  flex-direction:column;
  font-family:"LeeSeoyun";
`
const Title = styled.div`
  font-size:30pt;
  margin-top:40px;
`
const LogoImage = styled.div`
  margin-top:10px;
`
const Desc = styled.div`
  font-size:20pt;
  margin-top:20px;
  margin-bottom:20px;
  font-family:"LeeSeoyun";
`