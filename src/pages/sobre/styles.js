import styled from 'styled-components';

export const Container = styled.div`

 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction:column;
`;
export const Title = styled.header`
  margin-top: -70px;
  display: flex;
  justify-content: center;
strong{
    position: absolute;
    font-size: 100px;
    font-weight: bold;
    text-align: center;
    opacity:0.2 ;
  
}
span{  
    position: relative;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    top: 60px;
    bottom: 40px;
    left: 5px;
    right: 95px;
}

 
`;
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 160px;
  animation: fadeIn; 
  animation-duration: 2s; 
 
 div{
    flex-direction: column;
    width: 50vw;
    margin-left: 20px;
    h1{
      margin-bottom: 20px;
      font-size: 25px;
      font-weight: 700;
    }
    p{
      font-size:16px; 
      text-indent:10px;
      line-height: 20px;
      text-align: justify;
      font-weight: 500;
    }
    strong{
      color: #90235C;
    }
 }
`;
export const Aside = styled.aside`
   margin-left: 40px;
   margin-top: 50px;
   width: 25vw;
   ul{
    list-style: none;
    li{
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 30px;
      border-bottom: 1px solid #90235C;
    }
    span{
      padding-left: 4px;
     
      a{
        transition: color.2s;
       &:hover{
          color: #90235C;
        }
      }
  } }
`;
export const Button = styled.a`
display:  flex;
align-items: center;
justify-content: center;
  strong{
     width: 25vw;
     text-align: center;
     border: 3px solid #90235C;
      border-radius: 15px;
      color: #FFFFFF;
      font-size: 20px;
      padding: 5px;
      margin: 5px;
      transition: border 0.2s;
    &:hover{
      border: 5px solid #90235C;
  }
  }
`;