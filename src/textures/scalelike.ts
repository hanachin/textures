const theme = `
--circle-size: 24px;
--circle-width: 1px;
--circle-distance: 48px;
`;

const pattern = `
background: 0 0 / var(--circle-size) var(--circle-size)
            radial-gradient(
              circle at top left,
              transparent 0,
              transparent calc(var(--circle-size) - var(--circle-width)),
              var(--primary-color) 0 var(--circle-size),
              transparent var(--circle-size),
              transparent
            ),
            var(--secondary-color);
`;

export default { pattern, theme }
