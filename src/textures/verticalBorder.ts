const pattern = `
background: repeating-linear-gradient(
              90deg,
              var(--primary-color) 0 var(--width-primary),
              var(--secondary-color) 0 calc(var(--width-primary) + var(--width-secondary))
            );
`;

export default { pattern }
