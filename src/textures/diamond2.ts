const theme = `
--width: 100px;
--height: 100px;
--color1: var(--primary-color);
--color2: var(--primary-color);
`;

const pattern = `
background: 0 0 / var(--width) var(--height)
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
            var(--secondary-color);
`;

export default { pattern, theme }
