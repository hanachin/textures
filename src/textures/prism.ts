const theme = `
--base: 16px;
--height: calc(var(--base) * 4);
--width: calc(var(--base) * var(--sqrt3) * 4);
--color1: #f0f;
--color2: #f00;
--color3: #0f0;
--color4: #00f;
--color5: #0ff;
--color6: #ff0;
`;

const pattern = `
  background: 0 0 / var(--width) var(--height)
              linear-gradient(
                60deg,
                var(--color1) var(--base),
                transparent 0
              ),
              0 0 / var(--width) var(--height)
              linear-gradient(
                120deg,
                var(--color1) var(--base),
                transparent 0
              ),

              0 0 / var(--width) var(--height)
              linear-gradient(
                -60deg,
                var(--color2) var(--base),
                transparent 0
              ),
              0 0 / var(--width) var(--height)
              linear-gradient(
                -120deg,
                var(--color2) var(--base),
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
                var(--color1) var(--base),
                transparent 0
              ),
              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                120deg,
                var(--color1) var(--base),
                transparent 0
              ),

              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                -60deg,
                var(--color2) var(--base),
                transparent 0
              ),
              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                -120deg,
                var(--color2) var(--base),
                transparent 0
              ),

              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
              linear-gradient(
                150deg,
                var(--color3) calc(var(--base) * var(--sqrt3)),
                transparent 0
              ),
              calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
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
