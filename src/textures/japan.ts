const theme = `
--circle-size: 64px;
`;

const pattern = `
background: radial-gradient(
              var(--primary-color) 0 var(--circle-size),
              transparent var(--circle-size),
              transparent
            ),
            var(--secondary-color);
`;

export default { pattern, theme }
