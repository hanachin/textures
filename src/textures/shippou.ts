const theme = `
--circle-size: 24px;
--circle-width: 2px;
--circle-distance: 48px;
`;

const pattern = `
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

export default { pattern, theme }
