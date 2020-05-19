const pattern = `
background: 0 0 / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size))
            linear-gradient(
              45deg,
              var(--primary-color) 0 var(--size), transparent 0
            ),
            0 0 / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size))
            linear-gradient(
              -45deg,
              var(--primary-color) 0 var(--size), transparent 0
            ),
            0 calc(var(--sqrt2) * 2 * var(--size)) / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size))
            linear-gradient(
              135deg,
              var(--primary-color) 0 var(--size), transparent 0
            ),
            0 calc(var(--sqrt2) * 2 * var(--size)) / calc(var(--sqrt2) * 2 * var(--size)) calc(var(--sqrt2) * 2 * var(--size))
            linear-gradient(
              -135deg,
              var(--primary-color) 0 var(--size), transparent 0
            ),
            var(--secondary-color);
`;

export default { pattern }
