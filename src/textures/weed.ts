const theme = `
--base: 16px;
--height: calc(var(--base) * 4 + var(--border-width) * 2);
--width: calc(var(--base) * var(--sqrt3) * 4 + var(--border-width) * 4);
--border-width: 1px;

--border-color: var(--secondary-color);
--color1: var(--primary-color);
--color2: var(--primary-color);
--color3: var(--primary-color);
--color4: var(--primary-color);
--color5: var(--primary-color);
--color6: var(--primary-color);
`;

const pattern = `
  background: calc(-1 * var(--border-width)) 0 / var(--width) var(--height)
              linear-gradient(
                90deg,
                var(--border-color) 0 calc(var(--border-width) * 2),
                transparent calc(var(--border-width) * 2) var(--height)
              ),
              calc(var(--width) / 2 - var(--border-width)) 0 / var(--width) var(--height)
              linear-gradient(
                90deg,
                var(--border-color) 0 calc(var(--border-width) * 2),
                transparent calc(var(--border-width) * 2) var(--height)
              ),
              0 0 / var(--width) var(--height)
              linear-gradient(
                60deg,
                var(--color1) calc(var(--base) - var(--border-width)),
                var(--border-color) 0 calc(var(--base) + var(--border-width)),
                transparent 0
              ),
              0 0 / var(--width) var(--height)
              linear-gradient(
                120deg,
                var(--color1) calc(var(--base) - var(--border-width)),
                var(--border-color) 0 calc(var(--base) + var(--border-width)),
                transparent 0
              ),
              0 0 / var(--width) var(--height)
              linear-gradient(
                -60deg,
                var(--color2) calc(var(--base) - var(--border-width)),
                var(--border-color) 0 calc(var(--base) + var(--border-width)),
                transparent 0
              ),
              0 0 / var(--width) var(--height)
              linear-gradient(
                -120deg,
                var(--color2) calc(var(--base) - var(--border-width)),
                var(--border-color) 0 calc(var(--base) + var(--border-width)),
                transparent 0
              ),
              0 calc(var(--border-width) * -1) / var(--width) var(--height)
              linear-gradient(
                var(--border-color) 0 calc(var(--border-width) * 2),
                transparent 0
              ),
              var(--width) 0 / var(--width) var(--height)
              linear-gradient(
                150deg,
                var(--color3) calc(var(--base) * var(--sqrt3)),
                transparent 0
              ),
              var(--width) 0 / var(--width) var(--height)
              linear-gradient(
                -150deg,
                var(--color4) calc(var(--base) * var(--sqrt3)),
                transparent 0
              ),
              0 0 / var(--width) var(--height)
              linear-gradient(
                30deg,
                var(--color5) calc(var(--base) * var(--sqrt3)),
                transparent 0
              ),
              0 0 / var(--width) var(--height)
              linear-gradient(
                -30deg,
                var(--color6) calc(var(--base) * var(--sqrt3)),
                transparent 0
              ),
              
              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                60deg,
                var(--color1) calc(var(--base) - var(--border-width)),
                var(--border-color) 0 calc(var(--base) + var(--border-width)),
                transparent 0
              ),
              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                120deg,
                var(--color1) calc(var(--base) - var(--border-width)),
                var(--border-color) 0 calc(var(--base) + var(--border-width)),
                transparent 0
              ),
              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                -60deg,
                var(--color2) calc(var(--base) - var(--border-width)),
                var(--border-color) 0 calc(var(--base) + var(--border-width)),
                transparent 0
              ),
              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                -120deg,
                var(--color2) calc(var(--base) - var(--border-width)),
                var(--border-color) 0 calc(var(--base) + var(--border-width)),
                transparent 0
              ),
              0 calc(var(--height) / 2 + var(--border-width) * -1) / var(--width) var(--height)
              linear-gradient(
                var(--border-color) 0 calc(var(--border-width) * 2),
                transparent 0
              ),
              calc(var(--width) * 1.5) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                150deg,
                var(--color3) calc(var(--base) * var(--sqrt3)),
                transparent 0
              ),
              calc(var(--width) * 1.5) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                -150deg,
                var(--color4) calc(var(--base) * var(--sqrt3)),
                transparent 0
              ),
              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                30deg,
                var(--color5) calc(var(--base) * var(--sqrt3)),
                transparent 0
              ),
              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                -30deg,
                var(--color6) calc(var(--base) * var(--sqrt3)),
                transparent 0
              ),
              var(--secondary-color);
`;

export default { pattern, theme }
