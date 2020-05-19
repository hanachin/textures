const theme = `
--circle-size: 12px;
--circle-width: 10px;
--circle-distance: 96px;
`;

const pattern = `
  background: 0 0 / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                circle at bottom center,
                var(--primary-color) 0 10px,
                transparent 0 15px,
                var(--primary-color) 15px 25px,
                transparent 0 35px,
                var(--primary-color) 35px 45px,
                transparent 0 128px,
                transparent
              ),
              calc(var(--circle-distance) / 2) calc(var(--circle-distance) / 2) / var(--circle-distance) var(--circle-distance)
              radial-gradient(
                circle at bottom center,
                var(--primary-color) 0 10px,
                transparent 0 15px,
                var(--primary-color) 15px 25px,
                transparent 0 35px,
                var(--primary-color) 35px 45px,
                transparent 0 128px,
                transparent
              ),
              var(--secondary-color);
`;

export default { pattern, theme }
