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

  width: 256px;
  height: 256px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .15) 0 0 2px;
`;
const HorizontalBorder = styled(Example)`
  background: repeating-linear-gradient(
                var(--primary-color) 0 var(--width-primary),
                var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary))
              );
`;
const VerticalBorder = styled(Example)`
  background: repeating-linear-gradient(
                90deg,
                var(--primary-color) 0 var(--width-primary),
                var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary))
              );
`;
const RightDiagonalLine = styled(Example)`
  background: repeating-linear-gradient(
                -45deg,
                var(--primary-color) 0 var(--width-primary),
                var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary))
              );
`;
const LeftDiagonalLine = styled(Example)`
  background: repeating-linear-gradient(
                45deg,
                var(--primary-color) 0 var(--width-primary),
                var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary))
              );
`;
const Check = styled(Example)`
  background: repeating-linear-gradient(
                var(--primary-color) 0 var(--width-primary),
                transparent 0 calc(var(--width-primary) + var(--width-secondary))
              ),
              repeating-linear-gradient(
                90deg, var(--primary-color) 0 var(--width-primary),
                transparent 0 calc(var(--width-primary) + var(--width-secondary))
              ),
              var(--secondary-color);
`;
const DiagonalCheck = styled(Example)`
  background: repeating-linear-gradient(
                -45deg, var(--primary-color) 0 var(--width-primary),
                transparent 0 calc(var(--width-primary) + var(--width-secondary))
              ),
              repeating-linear-gradient(45deg,
                var(--primary-color) 0 var(--width-primary),
                transparent 0 calc(var(--width-primary) + var(--width-secondary))
              ),
              var(--secondary-color);
`;
const Ichimatsu = styled(Example)`
  background: 0 0 / calc(2 * var(--size)) calc(2 * var(--size))
              linear-gradient(
                45deg, var(--primary-color) 25%,
                transparent 0
              ),
              var(--size) var(--size) / calc(2 * var(--size)) calc(2 * var(--size))
              linear-gradient(
                45deg,
                transparent 75%,
                var(--primary-color) 0
              ),
              var(--size) var(--size) / calc(2 * var(--size)) calc(2 * var(--size))
              linear-gradient(
                45deg,
                var(--primary-color) 25%,
                transparent 0
              ),
              calc(2 * var(--size)) calc(2 * var(--size)) / calc(2 * var(--size)) calc(2 * var(--size))
              linear-gradient(
                45deg,
                transparent 75%,
                var(--primary-color) 0
              ),
              var(--secondary-color);
`;
const Uroko = styled(Example)`
  background: 0 0 / calc(2 * var(--size)) calc(4 * var(--size))
              linear-gradient(
                60deg,
                var(--primary-color) var(--size),
                transparent 0
              ),
              0 0 / calc(2 * var(--size)) calc(4 * var(--size))
              linear-gradient(
                -60deg,
                var(--primary-color) var(--size),
                transparent 0
              ),
              var(--size) calc(2 * var(--size)) / calc(2 * var(--size)) calc(4 * var(--size))
              linear-gradient(
                60deg,
                var(--primary-color) var(--size),
                transparent 0
              ),
              var(--size) calc(2 * var(--size)) / calc(2 * var(--size)) calc(4 * var(--size))
              linear-gradient(
                -60deg,
                var(--primary-color) var(--size),
                transparent 0
              ),
              var(--secondary-color);
`;

const Diamond = styled(Example)`
  --sqrt2: 1.41421356237;

  background: 0 0 / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size))
              linear-gradient(
                45deg,
                var(--primary-color) 0 var(--size), transparent 0
              ),
              0 0 / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size))
              linear-gradient(
                -45deg,
                var(--primary-color) 0 var(--size), transparent 0
              ),
              0 calc(var(--sqrt2) * 2 * var(--size)) / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size))
              linear-gradient(
                135deg,
                var(--primary-color) 0 var(--size), transparent 0
              ),
              0 calc(var(--sqrt2) * 2 * var(--size)) / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size))
              linear-gradient(
                -135deg,
                var(--primary-color) 0 var(--size), transparent 0
              ),
              var(--secondary-color);
`;
const ArrowUp = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(3 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(var(--arrow-height) + 2 * var(--arrow-space));
  --box-width:    calc(var(--arrow-width) + var(--arrow-space));

  background: var(--arrow-block-size) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-width) calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-width) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) * var(--sqrt2)),
                transparent 0
              ),
              var(--secondary-color);
`;
const ArrowDown = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(3 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(var(--arrow-height) + 2 * var(--arrow-space));
  --box-width:    calc(var(--arrow-width) + var(--arrow-space));

  background: 0 0 / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-width)      0 / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-width)      0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) * var(--sqrt2)),
                transparent 0
              ),
              var(--secondary-color);
`;
const Arrow = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(var(--arrow-height) + 2 * var(--arrow-space));
  --box-width:    calc(var(--arrow-width) + 2 * var(--arrow-space));

  background: var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--secondary-color);
`;
const Arrow2 = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height) + 4 * var(--arrow-space));
  --box-width:    calc(var(--arrow-width) + 2 * var(--arrow-space));

  background: var(--arrow-block-size) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-width) + var(--arrow-space)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--secondary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-width) + var(--arrow-space)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--accent-color);
`;
const Arrow3 = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height) + 4 * var(--arrow-space));
  --box-width:    calc(2 * var(--arrow-width) + 4 * var(--arrow-space));
  --color1: var(--secondary-color);
  --color2: var(--secondary-color);
  --color3: var(--primary-color);
  --color4: var(--primary-color);
  --color5: var(--primary-color);
  --color6: var(--primary-color);
  --color7: var(--secondary-color);
  --color8: var(--secondary-color);
  background: calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
                linear-gradient(
                  45deg,
                  var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                  transparent 0
                ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--accent-color);
`;
const Arrow3Rev = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height) + 4 * var(--arrow-space));
  --box-width:    calc(2 * var(--arrow-width) + 4 * var(--arrow-space));
  --color1: var(--secondary-color);
  --color2: var(--primary-color);
  --color3: var(--primary-color);
  --color4: var(--secondary-color);
  --color5: var(--primary-color);
  --color6: var(--secondary-color);
  --color7: var(--secondary-color);
  --color8: var(--primary-color);
  background: calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--accent-color);
`;
const Arrow4 = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height));
  --box-width:    calc(2 * var(--arrow-width) + 4 * var(--arrow-space));
  --color1: var(--secondary-color);
  --color2: var(--secondary-color);
  --color3: var(--primary-color);
  --color4: var(--primary-color);
  --color5: var(--primary-color);
  --color6: var(--primary-color);
  --color7: var(--secondary-color);
  --color8: var(--secondary-color);
  background: calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4 * 3) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4 * 3) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4 * 3) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4 * 3) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--accent-color);
`;
const Arrow4Rev = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height));
  --box-width:    calc(2 * var(--arrow-width) + 4 * var(--arrow-space));
  --color1: var(--secondary-color);
  --color2: var(--primary-color);
  --color3: var(--primary-color);
  --color4: var(--secondary-color);
  --color5: var(--primary-color);
  --color6: var(--secondary-color);
  --color7: var(--secondary-color);
  --color8: var(--primary-color);
  background: calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4 * 3) var(--arrow-width) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4 * 3) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4 * 3) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4 * 3) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--accent-color);
`;
const Arrow5 = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height));
  --box-width:    calc(2 * var(--arrow-width) + 2 * var(--arrow-space));
  --color1: var(--secondary-color);
  --color2: var(--primary-color);
  --color3: var(--primary-color);
  --color4: var(--secondary-color);
  --color5: var(--primary-color);
  --color6: var(--secondary-color);
  --color7: var(--secondary-color);
  --color8: var(--primary-color);
  background: var(--arrow-block-size) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 0 / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--accent-color);
`;
const Arrow5Rev = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height));
  --box-width:    calc(2 * var(--arrow-width) + 2 * var(--arrow-space));
  --color1: var(--secondary-color);
  --color2: var(--primary-color);
  --color3: var(--primary-color);
  --color4: var(--secondary-color);
  --color5: var(--primary-color);
  --color6: var(--secondary-color);
  --color7: var(--secondary-color);
  --color8: var(--primary-color);
  background: var(--arrow-block-size) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--accent-color);
`;

const Yagasuri = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height));
  --box-width:    calc(2 * var(--arrow-width) + 2 * var(--arrow-space));
  --color1: var(--secondary-color);
  --color2: var(--primary-color);
  --color3: var(--primary-color);
  --color4: var(--secondary-color);
  --color5: var(--primary-color);
  --color6: var(--secondary-color);
  --color7: var(--secondary-color);
  --color8: var(--primary-color);
  background: var(--arrow-block-size) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 0 / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 2) calc(var(--arrow-block-size) * 2) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--secondary-color) 0 25%,
                transparent 0
              ),
              0 calc(var(--arrow-height) + var(--arrow-block-size) * 2) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                transparent 0 75%,
                var(--secondary-color) 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-block-size) * 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 25%,
                transparent 0
              ),
              0 calc(var(--arrow-height) + var(--arrow-block-size) * 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                transparent 0 75%,
                var(--primary-color) 0
              ),

              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size) * 2) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 25%,
                transparent 0
              ),
              0 calc(var(--box-height) + var(--arrow-block-size) * 2) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                transparent 0 75%,
                var(--primary-color) 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size) * 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--secondary-color) 0 25%,
                transparent 0
              ),
              0 calc(var(--box-height) + var(--arrow-block-size) * 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                transparent 0 75%,
                var(--secondary-color) 0
              );
`;

const YagasuriRev = styled(Example)`
  --sqrt2:        1.5;
  --arrow-height: calc(2 * var(--arrow-block-size));
  --arrow-width:  calc(2 * var(--arrow-block-size));
  --box-height:   calc(2 * var(--arrow-height));
  --box-width:    calc(2 * var(--arrow-width) + 2 * var(--arrow-space));
  --color1: var(--secondary-color);
  --color2: var(--primary-color);
  --color3: var(--primary-color);
  --color4: var(--secondary-color);
  --color5: var(--primary-color);
  --color6: var(--secondary-color);
  --color7: var(--secondary-color);
  --color8: var(--primary-color);
  background: var(--arrow-block-size) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--secondary-color) 0 25%,
                transparent 0
              ),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                transparent 0 75%,
                var(--secondary-color) 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 25%,
                transparent 0
              ),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                transparent 0 75%,
                var(--primary-color) 0
              ),

              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 25%,
                transparent 0
              ),
              0 calc(var(--box-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                transparent 0 75%,
                var(--primary-color) 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--secondary-color) 0 25%,
                transparent 0
              ),
              0 calc(var(--box-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                transparent 0 75%,
                var(--secondary-color) 0
              );
`;
const Japan = styled(Example)`
  --circle-size: 64px;
  background: radial-gradient(
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;
const Circle = styled(Example)`
  --circle-size: 64px;
  background: radial-gradient(
                transparent calc(var(--circle-size) - var(--width-primary)),
                var(--primary-color) calc(var(--circle-size) - var(--width-primary)) var(--circle-size),
                transparent 0
              ),
              var(--secondary-color);
`;
const Circles = styled(Example)`
  --circle-size: 24px;
  --circle-distance: 24px;
  background: repeating-radial-gradient(
                circle calc(var(--circle-size) + var(--circle-distance)),
                transparent calc(var(--circle-size) - var(--width-primary)),
                var(--primary-color) calc(var(--circle-size) - var(--width-primary)) var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;
const Baumkuchen = styled(Example)`
  --circle-size: 24px;
  --circle-distance: 1px;
  background: repeating-radial-gradient(
                circle calc(var(--circle-size) + var(--circle-distance)),
                transparent calc(var(--circle-size) - var(--width-primary)),
                var(--primary-color) calc(var(--circle-size) - var(--width-primary)) var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;
const PolkaDot = styled(Example)`
  --circle-size: 24px;
  --circle-distance: 48px;
  background: 0 0 / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;
const Shippou = styled(Example)`
  --circle-size: 24px;
  --circle-width: 2px;
  --circle-distance: 48px;
  background: 0 0 / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                transparent 0 calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--circle-size) var(--circle-size) / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                transparent 0 calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;
const Shippou2 = styled(Example)`
  --circle-size: 24px;
  --circle-width: 2px;
  --circle-distance: 48px;
  --fill-color: #ff000066;
  --blend-mode: overlay;
  mix-blend-mode: var(--blend-mode);
  background: 0 0 / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                var(--fill-color) 0 calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--circle-size) var(--circle-size) / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                var(--fill-color) 0 calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              )
              var(--secondary-color);
`;
const Scalelike = styled(Example)`
  --circle-size: 24px;
  --circle-width: 1px;
  --circle-distance: 48px;
  background: 0 0 / var(--circle-size) var(--circle-size)
              radial-gradient(
                circle at top left,
                transparent 0,
                transparent calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;
const Scalelike2 = styled(Example)`
  --circle-size: 24px;
  --circle-width: 1px;
  --circle-distance: 48px;
  background: 0 0 / var(--circle-distance) var(--circle-size)
              radial-gradient(
                circle at top center,
                transparent 0,
                transparent calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;
const Scalelike3 = styled(Example)`
  --circle-size: 24px;
  --circle-width: 1px;
  --circle-distance: calc(2 * var(--circle-size));
  background: 0 0 / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                circle at top center,
                transparent 0,
                transparent calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--circle-size) var(--circle-size) / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                circle at top center,
                transparent 0,
                transparent calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;
const HalfCircles = styled(Example)`
  --circle-size: 12px;
  --circle-width: 10px;
  --circle-distance: 96px;
  background: 0 0 / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                circle at bottom center,
                var(--primary-color) 0 10px,
                transparent 0 15px,
                var(--primary-color) 15px 25px,
                transparent 0 35px,
                var(--primary-color) 35px 45px,
                transparent 0 128px,
                transparent
              )
              var(--secondary-color);
`;
const HalfCircles2 = styled(Example)`
  --circle-size: 12px;
  --circle-width: 10px;
  --circle-distance: 96px;
  background: 0 0 / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                circle at bottom center,
                var(--primary-color) 0 10px,
                transparent 0 15px,
                var(--primary-color) 15px 25px,
                transparent 0 35px,
                var(--primary-color) 35px 45px,
                transparent 0 128px,
                transparent
              ),
              calc(var(--circle-distance) / 2) calc(var(--circle-distance) / 2) / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                circle at bottom center,
                var(--primary-color) 0 10px,
                transparent 0 15px,
                var(--primary-color) 15px 25px,
                transparent 0 35px,
                var(--primary-color) 35px 45px,
                transparent 0 128px,
                transparent
              ),
              var(--secondary-color);
`;
const Seigaiha = styled(Example)`
  --circle-width: 5px;
  --circle-radius: 40px;
  --circle-diameter: calc(var(--circle-radius) * 2);
  background: 0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 50% 150%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 0% 100%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 100% 100%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 50% 50%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 0% 0%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 100% 0%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              )
`;
const Wave = styled(Example)`
  --circle-size: 24px;
  --circle-width: 10px;
  --circle-distance-y: 48px;
  --circle-distance-x: calc(2 * (2 * var(--circle-size) - var(--circle-width)));
  background: 0 0 / var(--circle-distance-x) var(--circle-distance-y) radial-gradient(
                circle at top center,
                transparent 0 calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              calc(var(--circle-distance-x) / 2) var(--circle-distance-y) / var(--circle-distance-x) var(--circle-distance-y) radial-gradient(
                circle at bottom center,
                transparent 0 calc(var(--circle-size) - var(--circle-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;

const Footer: React.FC<{}> = () => {
  return (
    <a href="https://github.com/hanachin/textures">Source Code</a>
  )
}

const AppRoot = styled.div`
  box-sizing: border-box;
  background: #dcdddd;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-template-rows: repeat(auto-fill, 256px);
  grid-gap: 8px;
  padding: 8px;
  margin-bottom: 1rem;
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
      <ArrowDown/>
      <Arrow/>
      <Arrow2/>
      <Arrow3/>
      <Arrow3Rev/>
      <Arrow4/>
      <Arrow4Rev/>
      <Arrow5/>
      <Arrow5Rev/>
      <Yagasuri/>
      <YagasuriRev/>
      <Japan/>
      <Circle/>
      <Circles/>
      <Baumkuchen/>
      <PolkaDot/>
      <Shippou/>
      <Shippou2/>
      <Scalelike/>
      <Scalelike2/>
      <Scalelike3/>
      <HalfCircles/>
      <HalfCircles2/>
      <Seigaiha/>
      <Wave/>
      <Footer/>
    </AppRoot>
  );
}

export default App;
