const theme = `
--circle-size: 24px;
--border-width: 8px;
--width: calc(3 * (var(--circle-size) + var(--border-width)));
--height: calc(var(--circle-size) * 2 + var(--border-width));
`;

const pattern = `
  background: 0 0 / var(--width) var(--height)
              linear-gradient(
                var(--primary-color) 0 var(--border-width),
                transparent 0
              ),
              calc(var(--border-width) / -2) 0 / var(--width) var(--height)
              linear-gradient(
                90deg,
                var(--primary-color) 0 var(--border-width),
                transparent 0
              ),
              0 calc(var(--circle-size) + var(--border-width)) / var(--width) var(--height)
              radial-gradient(
                circle at bottom center,
                transparent 0,
                transparent calc(var(--circle-size) - var(--border-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              calc(var(--width) / 4) calc(var(--circle-size) * 2 + var(--border-width)) / var(--width) var(--height)
              radial-gradient(
                circle at bottom center,
                transparent 0,
                transparent calc(var(--circle-size) - var(--border-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              calc(var(--width) / -4) calc(var(--circle-size) * 2 + var(--border-width)) / var(--width) var(--height)
              radial-gradient(
                circle at bottom center,
                transparent 0,
                transparent calc(var(--circle-size) - var(--border-width)),
                var(--primary-color) 0 var(--circle-size),
                transparent var(--circle-size),
                transparent
              ),
              var(--secondary-color);
`;

export default { pattern, theme }
