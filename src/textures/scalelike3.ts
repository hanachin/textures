const theme = `
--circle-size: 24px;
--circle-width: 1px;
--circle-distance: calc(2 * var(--circle-size));
`;

const pattern = `
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

export default { pattern, theme }
