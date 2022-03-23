import styled from 'styled-components';

function Dropdown({ obj, callBack }) {
  return (
    <StSelect onChange={(e) => callBack(e.target.value)}>
      {obj.map((year) => (
        <option key={year}>{year}</option>
      ))}
    </StSelect>
  );
}

const StSelect = styled.select`
  width: 100%;
  margin: 0, 20%;
  height: 35px;
  background: rgb(56, 56, 56);
  color: white;
  padding-left: 5px;
  font-size: 14px;
  border: none;

  option {
    font-family: 'Poller One', cursive;
    font-size: 1.5rem;
    color: black;
    background: rgb(56, 56, 56);
    color: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    text-align: center;
  }
`;
export default Dropdown;
