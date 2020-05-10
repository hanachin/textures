import React from 'react';
import styled from 'styled-components';

const Example = styled.div`
  --accent-color: #ecdf2b;
  --primary-color: #f20000;
  --secondary-color: #ffffff;

  --arrow-block-size: 16px;
  --arrow-space:      4px;
  --size: 16px;
  --width-primary:   16px;
  --width-secondary: 16px;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .15) 0 0 2px;
`;
const HorizontalBorder = styled(Example)`
  background: repeating-linear-gradient(var(--primary-color) 0 var(--width-primary), var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary)));
`;
const VerticalBorder = styled(Example)`
  background: repeating-linear-gradient(90deg, var(--primary-color) 0 var(--width-primary), var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary)));
`;
const RightDiagonalLine = styled(Example)`
  background: repeating-linear-gradient(-45deg, var(--primary-color) 0 var(--width-primary), var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary)));
`;
const LeftDiagonalLine = styled(Example)`
  background: repeating-linear-gradient(45deg, var(--primary-color) 0 var(--width-primary), var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary)));
`;
const Check = styled(Example)`
  background: repeating-linear-gradient(var(--primary-color) 0 var(--width-primary), transparent 0 calc(var(--width-primary) + var(--width-secondary))),
              repeating-linear-gradient(90deg, var(--primary-color) 0 var(--width-primary),transparent 0 calc(var(--width-primary) + var(--width-secondary))),
              var(--secondary-color);
`;
const DiagonalCheck = styled(Example)`
  background: repeating-linear-gradient(-45deg, var(--primary-color) 0 var(--width-primary), transparent 0 calc(var(--width-primary) + var(--width-secondary))),
              repeating-linear-gradient(45deg, var(--primary-color) 0 var(--width-primary), transparent 0 calc(var(--width-primary) + var(--width-secondary))),
              var(--secondary-color);
`;
const Ichimatsu = styled(Example)`
  background: 0 0 / calc(2 * var(--size)) calc(2 * var(--size)) linear-gradient(45deg, var(--primary-color) 25%, transparent 0),
              var(--size) var(--size) / calc(2 * var(--size)) calc(2 * var(--size)) linear-gradient(45deg, transparent 75%, var(--primary-color) 0),
              var(--size) var(--size) / calc(2 * var(--size)) calc(2 * var(--size)) linear-gradient(45deg, var(--primary-color) 25%, transparent 0),
              calc(2 * var(--size)) calc(2 * var(--size)) / calc(2 * var(--size)) calc(2 * var(--size)) linear-gradient(45deg, transparent 75%, var(--primary-color) 0),
              var(--secondary-color);
`;
const Uroko = styled(Example)`
  background: 0 0 / calc(2 * var(--size)) calc(4 * var(--size)) linear-gradient(60deg, var(--primary-color) var(--size), transparent 0),
              0 0 / calc(2 * var(--size)) calc(4 * var(--size)) linear-gradient(-60deg, var(--primary-color) var(--size), transparent 0),
              var(--size) calc(2 * var(--size)) / calc(2 * var(--size)) calc(4 * var(--size)) linear-gradient(60deg, var(--primary-color) var(--size), transparent 0),
              var(--size) calc(2 * var(--size)) / calc(2 * var(--size)) calc(4 * var(--size)) linear-gradient(-60deg, var(--primary-color) var(--size), transparent 0),
              var(--secondary-color);
`;

const Diamond = styled(Example)`
  --sqrt2: 1.41421356237;

  background: 0 0 / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size)) linear-gradient(45deg, var(--primary-color) 0 var(--size), transparent 0),
              0 0 / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size)) linear-gradient(-45deg, var(--primary-color) 0 var(--size), transparent 0),
              0 calc(var(--sqrt2) * 2 * var(--size)) / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size)) linear-gradient(135deg, var(--primary-color) 0 var(--size), transparent 0),
              0 calc(var(--sqrt2) * 2 * var(--size)) / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size)) linear-gradient(-135deg, var(--primary-color) 0 var(--size), transparent 0),
              var(--secondary-color);
`;
const ArrowUp = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(3 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(var(--arrow-height) + 2 * var(--arrow-space));
  --box-width:    calc(var(--arrow-width) + var(--arrow-space));

  background: var(--arrow-block-size) 0                                 / var(--box-width) var(--box-height) linear-gradient(45deg,   var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) 0                                 / var(--box-width) var(--box-height) linear-gradient(-45deg,  var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0                       calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg,  var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-width)      calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0                       calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg,   var(--primary-color) 0 calc(var(--arrow-block-size) * var(--sqrt2)), transparent 0),
              var(--arrow-width)      0                                 / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) * var(--sqrt2)), transparent 0),
              var(--secondary-color);
`;
const Arrow = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(var(--arrow-height) + 2 * var(--arrow-space));
  --box-width:    calc(var(--arrow-width) + 2 * var(--arrow-space));

  background: var(--arrow-block-size)                                var(--box-height)       / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size)     + var(--arrow-space)) 0                       / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) 0                       / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0                                                      0                       / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size)                                var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size)     + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0                                                      var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--secondary-color);
`;
const Arrow2 = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height) + 4 * var(--arrow-space));
  --box-width:    calc(var(--arrow-width) + 2 * var(--arrow-space));

  background: var(--arrow-block-size) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-width) + var(--arrow-space)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-width) + var(--arrow-space)) 0 / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 0 / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--accent-color);
`;
const Arrow3 = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height) + 4 * var(--arrow-space));
  --box-width:    calc(2 * var(--arrow-width) + 4 * var(--arrow-space));

  background: calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) 0 / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4) 0 / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-height) / 4 * 3) calc(var(--box-height) / 2) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-height) / 4 * 3) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--box-height) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) 0 / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-height) / 4 * 3) 0 / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-height) / 4 * 3) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--accent-color);
`;
const Arrow4 = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height));
  --box-width:    calc(2 * var(--arrow-width) + 4 * var(--arrow-space));

  background: calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-width) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-width) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-width) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4) var(--arrow-width) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) 0 / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4) 0 / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-width) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--arrow-width) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) var(--arrow-width) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4 * 3) var(--arrow-width) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4 * 3) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--box-height) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) 0 / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4 * 3) 0 / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 4 * 3) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--accent-color);
`;
const Arrow5 = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height));
  --box-width:    calc(2 * var(--arrow-width) + 2 * var(--arrow-space));

  background: var(--arrow-block-size) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              var(--arrow-block-size) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height) linear-gradient(-135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 0 / var(--box-width) var(--box-height) linear-gradient(135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--box-width) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(-135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--box-width) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--box-width) 0 / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--box-width) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--accent-color);
`;
const Yagasuri = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height));
  --box-width:    calc(2 * var(--arrow-width) + 2 * var(--arrow-space));

  background: var(--arrow-block-size) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              var(--arrow-block-size) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height) linear-gradient(-135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 0 / var(--box-width) var(--box-height) linear-gradient(135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--box-width) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(-135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height) linear-gradient(135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--box-width) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(135deg, #ffffff 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--box-width) 0 / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              var(--box-width) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(135deg, var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)), transparent 0),

              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--secondary-color) 0 25%, transparent 0),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, transparent 0 75%, var(--secondary-color) 0),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--primary-color) 0 25%, transparent 0),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, transparent 0 75%, var(--primary-color) 0),

              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, var(--primary-color) 0 25%, transparent 0),
              0 calc(var(--box-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(45deg, transparent 0 75%, var(--primary-color) 0),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, var(--secondary-color) 0 25%, transparent 0),
              0 calc(var(--box-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height) linear-gradient(-45deg, transparent 0 75%, var(--secondary-color) 0);
`;

const AppRoot = styled.div`
  box-sizing: border-box;
  background: #dcdddd;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-template-rows: repeat(auto-fill, 256px);
  grid-gap: 8px;
  padding: 8px;
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
