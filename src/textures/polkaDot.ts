const theme = `
--circle-size: 24px;
--circle-distance: 48px;
`;

const pattern = `
  background: 0 0 / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;

export default { pattern, theme }
