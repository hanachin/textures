const theme = `
--circle-size: 64px;
`;

const pattern = `
background: radial-gradient(
              transparent calc(var(--circle-size) - var(--width-primary)),
              var(--primary-color) calc(var(--circle-size) - var(--width-primary)) var(--circle-size),
              transparent 0
            ),
            var(--secondary-color);
`;

export default { pattern, theme }
