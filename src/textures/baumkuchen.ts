const theme = `
--circle-size: 24px;
--circle-distance: 1px;
`;

const pattern = `
background: repeating-radial-gradient(
              circle calc(var(--circle-size) + var(--circle-distance)),
              transparent calc(var(--circle-size) - var(--width-primary)),
              var(--primary-color) calc(var(--circle-size) - var(--width-primary)) var(--circle-size),
              transparent var(--circle-size),
              transparent
            ),
            var(--secondary-color);
`;

export default { pattern, theme }
