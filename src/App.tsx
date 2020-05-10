import React from 'react';
import styled from 'styled-components';

const Example = styled.div`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .15) 0 0 2px;
`;
const HorizontalBorder = styled(Example)`
  background: repeating-linear-gradient(var(--primary-color) 0 10px, var(--secondary-color) 0 20px);
`;
const VerticalBorder = styled(Example)`
  background: repeating-linear-gradient(90deg, var(--primary-color) 0 10px, var(--secondary-color) 0 20px);
`;
const RightDiagonalLine = styled(Example)`
  background: repeating-linear-gradient(-45deg, var(--primary-color) 0 10px, var(--secondary-color) 0 20px);
`;
const LeftDiagonalLine = styled(Example)`
  background: repeating-linear-gradient(45deg, var(--primary-color) 0 10px, var(--secondary-color) 0 20px);
`;
const Check = styled(Example)`
  background: repeating-linear-gradient(var(--primary-color) 0 2px, transparent 0 4px),
              repeating-linear-gradient(90deg, var(--primary-color) 0 2px, transparent 0 4px),
              var(--secondary-color);
`;
const DiagonalCheck = styled(Example)`
  background: repeating-linear-gradient(-45deg, var(--primary-color) 0 2px, transparent 0 4px),
              repeating-linear-gradient(45deg, var(--primary-color) 0 2px, transparent 0 4px),
              var(--secondary-color);
`;
const Ichimatsu = styled(Example)`
  background: 0 0 / 8px 8px linear-gradient(45deg, var(--primary-color) 25%, transparent 0),
              4px 4px / 8px 8px linear-gradient(45deg, transparent 75%, var(--primary-color) 0),
              4px 4px / 8px 8px linear-gradient(45deg, var(--primary-color) 25%, transparent 0),
              8px 8px / 8px 8px linear-gradient(45deg, transparent 75%, var(--primary-color) 0),
              var(--secondary-color);
`;
const Uroko = styled(Example)`
  background: 0 0 / 8px 16px linear-gradient(60deg, var(--primary-color) 4px, transparent 0),
              0 0 / 8px 16px linear-gradient(-60deg, var(--primary-color) 4px, transparent 0),
              4px 8px / 8px 16px linear-gradient(60deg, var(--primary-color) 4px, transparent 0),
              4px 8px / 8px 16px linear-gradient(-60deg, var(--primary-color) 4px, transparent 0),
              var(--secondary-color);
`;

const Diamond = styled(Example)`
  background: 0 0 / 8px 8px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              0 0 / 8px 8px linear-gradient(-45deg, var(--primary-color) 0 3px, transparent 0),
              0 8px / 8px 8px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),
              0 8px / 8px 8px linear-gradient(-135deg, var(--primary-color) 0 3px, transparent 0),
              var(--secondary-color);
`;
const ArrowUp = styled(Example)`
  background: 0 0 / 9px 14px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              0 0 / 9px 14px linear-gradient(-45deg, var(--primary-color) 0 3px, transparent 0),
              -4px 8px / 9px 14px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),
              4px 8px / 9px 14px linear-gradient(-135deg, var(--primary-color) 0 3px, transparent 0),
              -4px 8px / 9px 14px linear-gradient(45deg, var(--primary-color) 0 6px, transparent 0),
              4px 0 / 9px 14px linear-gradient(-135deg, var(--primary-color) 0 6px, transparent 0),
              var(--secondary-color);
`;
const Arrow = styled(Example)`
  background: -1px 10px / 10px 10px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              0px 10px / 10px 10px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              4px 0 / 10px 10px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -5px 0 / 10px 10px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -1px 4px / 10px 10px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              0px 4px / 10px 10px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              4px 4px / 10px 10px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -5px 4px / 10px 10px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),
              var(--secondary-color);
`;
const Arrow2 = styled(Example)`
  background: -1px 10px / 10px 20px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              0px 10px / 10px 20px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              4px 10px / 10px 20px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -5px 10px / 10px 20px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -1px 14px / 10px 20px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              0px 14px / 10px 20px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              4px 14px / 10px 20px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -5px 14px / 10px 20px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -1px 20px / 10px 20px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              0px 20px / 10px 20px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              4px 0 / 10px 20px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -5px 0 / 10px 20px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -1px 4px / 10px 20px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              0px 4px / 10px 20px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              4px 4px / 10px 20px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -5px 4px / 10px 20px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),
              var(--accent-color);
`;
const Arrow3 = styled(Example)`
  background: -11px 10px / 20px 20px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -10px 10px / 20px 20px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              -6px 10px / 20px 20px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -15px 10px / 20px 20px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -11px 14px / 20px 20px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -10px 14px / 20px 20px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              -6px 14px / 20px 20px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -15px 14px / 20px 20px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -11px 20px / 20px 20px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -10px 20px / 20px 20px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              -6px 0 / 20px 20px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -15px 0 / 20px 20px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -11px 4px / 20px 20px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -10px 4px / 20px 20px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              -6px 4px / 20px 20px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -15px 4px / 20px 20px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -1px 10px / 20px 20px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              0px 10px / 20px 20px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              4px 10px / 20px 20px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -5px 10px / 20px 20px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -1px 14px / 20px 20px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              0px 14px / 20px 20px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              4px 14px / 20px 20px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -5px 14px / 20px 20px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -1px 20px / 20px 20px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              0px 20px / 20px 20px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              4px 0 / 20px 20px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -5px 0 / 20px 20px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -1px 4px / 20px 20px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              0px 4px / 20px 20px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              4px 4px / 20px 20px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -5px 4px / 20px 20px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),
              var(--accent-color);
`;
const Arrow4 = styled(Example)`
  background: -11px 8px / 20px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -10px 8px / 20px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              -6px 8px / 20px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -15px 8px / 20px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -11px 12px / 20px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -10px 12px / 20px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              -6px 12px / 20px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -15px 12px / 20px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -11px 16px / 20px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -10px 16px / 20px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              -6px 0 / 20px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -15px 0 / 20px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -11px 4px / 20px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -10px 4px / 20px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              -6px 4px / 20px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -15px 4px / 20px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -1px 8px / 20px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              0px 8px / 20px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              4px 8px / 20px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -5px 8px / 20px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -1px 12px / 20px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              0px 12px / 20px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              4px 12px / 20px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -5px 12px / 20px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -1px 16px / 20px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              0px 16px / 20px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              4px 0 / 20px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -5px 0 / 20px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -1px 4px / 20px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              0px 4px / 20px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              4px 4px / 20px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -5px 4px / 20px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),
              var(--accent-color);
`;
const Arrow5 = styled(Example)`
  background: -12px 8px / 18px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -11px 8px / 18px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              -7px 8px / 18px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -16px 8px / 18px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -12px 12px / 18px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -11px 12px / 18px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              -7px 12px / 18px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -16px 12px / 18px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -12px 16px / 18px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -11px 16px / 18px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              -7px 0 / 18px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -16px 0 / 18px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -12px 4px / 18px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -11px 4px / 18px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              -7px 4px / 18px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -16px 4px / 18px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -3px 8px / 18px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -2px 8px / 18px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              2px 8px / 18px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -7px 8px / 18px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -3px 12px / 18px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -2px 12px / 18px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              2px 12px / 18px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -7px 12px / 18px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -3px 16px / 18px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -2px 16px / 18px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              2px 0 / 18px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -7px 0 / 18px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -3px 4px / 18px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -2px 4px / 18px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              2px 4px / 18px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -7px 4px / 18px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),
              var(--accent-color);
`;
const Yagasuri = styled(Example)`
  background: -12px 8px / 18px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -11px 8px / 18px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              -7px 8px / 18px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -16px 8px / 18px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -12px 12px / 18px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -11px 12px / 18px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              -7px 12px / 18px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -16px 12px / 18px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -12px 16px / 18px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -11px 16px / 18px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              -7px 0 / 18px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -16px 0 / 18px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -12px 4px / 18px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -11px 4px / 18px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              -7px 4px / 18px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -16px 4px / 18px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -3px 8px / 18px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -2px 8px / 18px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              2px 8px / 18px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -7px 8px / 18px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -3px 12px / 18px 16px linear-gradient(315deg, #ffffff 0 3px, transparent 0),
              -2px 12px / 18px 16px linear-gradient(45deg, #ffffff 0 3px, transparent 0),
              2px 12px / 18px 16px linear-gradient(225deg, #ffffff 0 3px, transparent 0),
              -7px 12px / 18px 16px linear-gradient(135deg, #ffffff 0 3px, transparent 0),

              -3px 16px / 18px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -2px 16px / 18px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              2px 0 / 18px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -7px 0 / 18px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              -3px 4px / 18px 16px linear-gradient(315deg, var(--primary-color) 0 3px, transparent 0),
              -2px 4px / 18px 16px linear-gradient(45deg, var(--primary-color) 0 3px, transparent 0),
              2px 4px / 18px 16px linear-gradient(225deg, var(--primary-color) 0 3px, transparent 0),
              -7px 4px / 18px 16px linear-gradient(135deg, var(--primary-color) 0 3px, transparent 0),

              9px 4px / 18px 16px linear-gradient(45deg, #ffffff 0 25%, transparent 0),
              0px 12px / 18px 16px linear-gradient(45deg, transparent 0 75%, #ffffff 0),
              9px 4px / 18px 16px linear-gradient(-45deg, var(--primary-color) 0 25%, transparent 0),
              0px 12px / 18px 16px linear-gradient(-45deg, transparent 0 75%, var(--primary-color) 0),

              9px 12px / 18px 16px linear-gradient(45deg, var(--primary-color) 0 25%, transparent 0),
              0px 20px / 18px 16px linear-gradient(45deg, transparent 0 75%, var(--primary-color) 0),
              9px 12px / 18px 16px linear-gradient(-45deg, #ffffff 0 25%, transparent 0),
              0px 20px / 18px 16px linear-gradient(-45deg, transparent 0 75%, #ffffff 0);
`;

const AppRoot = styled.div`
  --primary-color: #fe0000;
  --secondary-color: #ffffff;
  --accent-color: #ecdf2b;

  box-sizing: border-box;
  background: #dcdddd;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, 48px);
  grid-template-rows: repeat(auto-fill, 48px);
  grid-gap: 4px;
  padding: 4px;
`;

const App = () => {
  return (
    <AppRoot>
      <HorizontalBorder/>
      <VerticalBorder/>
      <RightDiagonalLine/>
      <LeftDiagonalLine/>
      <Check/>
      <DiagonalCheck/>
      <Ichimatsu/>
      <Uroko/>
      <Diamond/>
      <ArrowUp/>
      <Arrow/>
      <Arrow2/>
      <Arrow3/>
      <Arrow4/>
      <Arrow5/>
      <Yagasuri/>
    </AppRoot>
  );
}

export default App;
