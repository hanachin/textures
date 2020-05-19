const theme = `
--arrow-height: calc(2 * var(--arrow-block-size));
--arrow-width:  calc(2 * var(--arrow-block-size));
--box-height:   calc(var(--arrow-height) + 2 * var(--arrow-space));
--box-width:    calc(var(--arrow-width) + 2 * var(--arrow-space));
`;

const pattern = `
  background: var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(2 * var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--secondary-color);
`;

export default { pattern, theme }
