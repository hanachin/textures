const theme = `
--circle-width: 5px;
--circle-radius: 40px;
--circle-diameter: calc(var(--circle-radius) * 2);
`;

const pattern = `
  background: 0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 50% 150%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 0% 100%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 100% 100%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 50% 50%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 0% 0%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              ),
              0 0 / var(--circle-diameter) var(--circle-radius)
              radial-gradient(
                circle at 100% 0%,
                var(--primary-color) 0 var(--circle-width),
                var(--secondary-color) 0 calc(var(--circle-radius) - 7 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 8 * var(--circle-width)) calc(var(--circle-radius) - 6 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 5 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 5 * var(--circle-width)) calc(var(--circle-radius) - 4 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - 3 * var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - 3 * var(--circle-width)) calc(var(--circle-radius) - 2 * var(--circle-width)),
                var(--secondary-color) 0 calc(var(--circle-radius) - var(--circle-width)),
                var(--primary-color) calc(var(--circle-radius) - var(--circle-width)) var(--circle-radius),
                transparent 0 calc(2 * var(--circle-diameter))
              )
`;

export default { pattern, theme }
