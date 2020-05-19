const pattern = `
  background: repeating-linear-gradient(
                var(--primary-color) 0 var(--width-primary),
                transparent 0 calc(var(--width-primary) + var(--width-secondary))
              ),
              repeating-linear-gradient(
                90deg, var(--primary-color) 0 var(--width-primary),
                transparent 0 calc(var(--width-primary) + var(--width-secondary))
              ),
              var(--secondary-color);
`;

export default { pattern }
