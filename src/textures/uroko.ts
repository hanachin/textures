
const pattern = `
background: 0 0 / calc(2 * var(--size)) calc(4 * var(--size))
            linear-gradient(
              60deg,
              var(--primary-color) var(--size),
              transparent 0
            ),
            0 0 / calc(2 * var(--size)) calc(4 * var(--size))
            linear-gradient(
              -60deg,
              var(--primary-color) var(--size),
              transparent 0
            ),
            var(--size) calc(2 * var(--size)) / calc(2 * var(--size)) calc(4 * var(--size))
            linear-gradient(
              60deg,
              var(--primary-color) var(--size),
              transparent 0
            ),
            var(--size) calc(2 * var(--size)) / calc(2 * var(--size)) calc(4 * var(--size))
            linear-gradient(
              -60deg,
              var(--primary-color) var(--size),
              transparent 0
            ),
            var(--secondary-color);
`;

export default { pattern }
