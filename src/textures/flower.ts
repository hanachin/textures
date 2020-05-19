const theme = `
--width: 65px;
--height: 65px;
--border-width: 2px;
--color1: var(--primary-color);
--color2: var(--primary-color);
--color1: var(--primary-color);
--color2: var(--primary-color);
--color3: var(--primary-color);
--color4: var(--primary-color);
`;

const pattern = `
background: calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
            linear-gradient(
              30deg,
              var(--color4) var(--size),
              transparent 0
            ),
            calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
            linear-gradient(
              -30deg,
              var(--color4) var(--size),
              transparent 0
            ),
            0 0 / var(--width) var(--height)
            linear-gradient(
              60deg,
              var(--color1) var(--size),
              transparent 0
            ),
            0 0 / var(--width) var(--height)
            linear-gradient(
              120deg,
              var(--color1) var(--size),
              transparent 0
            ),
            0 0 / var(--width) var(--height)
            linear-gradient(
              -60deg,
              var(--color2) var(--size),
              transparent 0
            ),
            0 0 / var(--width) var(--height)
            linear-gradient(
              -120deg,
              var(--color2) var(--size),
              transparent 0
            ),
            calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
            linear-gradient(
              150deg,
              var(--color3) var(--size),
              transparent 0
            ),
            calc(var(--width) / 2) calc(var(--height) / 2) / var(--width) var(--height)
            linear-gradient(
              -150deg,
              var(--color3) var(--size),
              transparent 0
            ),
            var(--secondary-color);
`;

export default { pattern, theme }
