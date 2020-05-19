const pattern = `
background: 0 0 / calc(2 * var(--size)) calc(2 * var(--size))
            linear-gradient(
              45deg, var(--primary-color) 25%,
              transparent 0
            ),
            var(--size) var(--size) / calc(2 * var(--size)) calc(2 * var(--size))
            linear-gradient(
              45deg,
              transparent 75%,
              var(--primary-color) 0
            ),
            var(--size) var(--size) / calc(2 * var(--size)) calc(2 * var(--size))
            linear-gradient(
              45deg,
              var(--primary-color) 25%,
              transparent 0
            ),
            calc(2 * var(--size)) calc(2 * var(--size)) / calc(2 * var(--size)) calc(2 * var(--size))
            linear-gradient(
              45deg,
              transparent 75%,
              var(--primary-color) 0
            ),
            var(--secondary-color);
`;

export default { pattern }
