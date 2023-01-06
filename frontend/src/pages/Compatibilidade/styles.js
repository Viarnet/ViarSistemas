import styled from 'styled-components';


export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 100%;
    justify-content: center;
    background-color: #E4E9F7;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    border-radius: 8px;
    width: 15rem;
    text-align: center;
    background-color: #2c3e50;
    color: white;
    
   
     
    input:focus{
        border: 10px solid #2F4F4F;
    }
    ::placeholder{
      color: white;
    }
`;

export const Select = styled.select`
   /* Reset Select */
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  /* Personalize */
  flex: 1;
  padding: 0 1em;
  color: #fff;
  background-color: #2c3e50;
  background-image: none;
  cursor: pointer;
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  border-radius: .25em;
  overflow: hidden;

  select:after {


  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  background-color: #34495e;
  transition: .25s all ease;
  pointer-events: none;
}

  &:hover::after {
  color: #f39c12;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  background-color: #34495e;
  transition: .25s all ease;
  pointer-events: none;
}

a {
  font-weight: bold;
  color: var(--gray);
  text-decoration: none;
  padding: .25em;
  border-radius: .25em;
  background: white;
}
`;

export const CardRoteador = styled.div`
    background-color: white;
    border: 1px solid black;
    padding: 0.5rem;
    border-radius: 10px;
    width: 12rem;
    margin: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    img{
        width: 10rem;
    }
`;