const theme = `
--circle-size: 24px;
--circle-width: 2px;
--circle-distance: 48px;
--fill-color: #ff000066;
--blend-mode: overlay;
`;

const pattern = `
mix-blend-mode: var(--blend-mode);
background: 0 0 / var(--circle-distance) var(--circle-distance)
            radial-gradient(
              var(--fill-color) 0 calc(var(--circle-size) - var(--circle-width)),
              var(--primary-color) 0 var(--circle-size),
              transparent var(--circle-size),
              transparent
            ),
            var(--circle-size) var(--circle-size) / var(--circle-distance) var(--circle-distance)
            radial-gradient(
              var(--fill-color) 0 calc(var(--circle-size) - var(--circle-width)),
              var(--primary-color) 0 var(--circle-size),
              transparent var(--circle-size),
              transparent
            )
            var(--secondary-color);
`;

export default { pattern, theme }
