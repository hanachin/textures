const theme = `
--width-primary:   16px;
--width-secondary: 16px;
`;

const pattern = `
background: repeating-linear-gradient(
              var(--primary-color) 0 var(--width-primary),
              var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary))
            );
`;

export default { pattern, theme }
