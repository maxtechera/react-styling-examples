import React from "react";


const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.div`
  width:auto;
  height:200px;
`;

const Name = styled.div`
  fontSize: 1.2em;
`;

const Description= styled.div`
  fontFamily: Lato;
  fontSize:1em;
`;


const Friend = props => (
  <Wrapper>
    <Image  href={props.imagePath} />
    <div>
      <Name>{props.name}</Name>
      <Description>{props.description}</Description>
    </div>
  </Wrapper>
);

export default Friend;
