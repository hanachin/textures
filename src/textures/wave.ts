const theme = `
--circle-size: 24px;
--circle-width: 10px;
--circle-distance-y: 48px;
--circle-distance-x: calc(2 * (2 * var(--circle-size) - var(--circle-width)));
`;

const pattern = `
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

export default { pattern, theme }
