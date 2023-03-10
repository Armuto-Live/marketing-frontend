import styled from "styled-components";
import Announcement from "../components/Announcement/Announcement";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter";

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Container = styled.div``;
const Wrapper = styled.div`
padding: 50px;
display:flex;

`;

const ImgContainer = styled.div`
flex:1;
`;

const Image = styled.img`
  width:100%;
  height: 90vh;
`;

const InfoContainer = styled.div`
  flex:1;
  padding: 0px 50px;

`;
const Title = styled.h1`
  font-weight:200;
`;
const Desc = styled.p`
  margin:20px 0;
`;
const Price = styled.span`
  font-weight:200;
  font-size: 40px;
`;

const FilterContainer=styled.div`
  width: 50%;
  margin: 30px 0;
  display:flex;
  justify-content:space-between;
`

const Filter=styled.div`
  display: flex;
  align-items:center;
  
`

const FilterTitle=styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color:${props=>props.color};
  margin: 0 5px;
  cursor: pointer;
`

const FilterSize=styled.select`
  margin-left:20px;
  padding:5px;
`

const FilterSizeOption=styled.option`
  
`
const AddContainer=styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer=styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount=styled.span`
  width: 30px;
  height:30px;
  border-radius:10px;
  border:1px solid teal;
  display:flex;
  align-items:center;
  justify-content:center;
  margin: 0 5px;
`
const Button=styled.button`
  padding: 15px;
  border:2px solid teal;
  background-color:white;
  cursor:pointer;
  font-weight: 500;
  &:hover{
    background-color:#f8f4f4;
  }
`
const Product = () => {
  return <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
      <ImgContainer>
        <Image src="https://i.ibb.co/VVy3Nms/popular-1.jpg"/>
      </ImgContainer>
      <InfoContainer>
        <Title>Zapatero</Title>
        <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi nobis id minus at quae quas quo aliquam ea asperiores beatae. Ea sed sequi dolorem praesentium excepturi cum quaerat, ab impedit?</Desc>
        <Price>S/.20</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black"/>
            <FilterColor color="darkblue"/>
            <FilterColor color="gray"/>
          </Filter>
          <Filter>
            <FilterTitle>Sized</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>X</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>LS</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <RemoveIcon/>
            <Amount>1</Amount>
            <AddIcon/>
          </AmountContainer>
          <Button>Agregar al carrito</Button>
        </AddContainer>
      </InfoContainer>
    </Wrapper>
    <Newsletter/>
    <Footer/>

  </Container>;
};

export default Product;