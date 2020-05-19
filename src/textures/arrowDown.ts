const theme = `
--arrow-height: calc(3 * var(--arrow-block-size));
--arrow-width:  calc(2 * var(--arrow-block-size));
--box-height:   calc(var(--arrow-height) + 2 * var(--arrow-space));
--box-width:    calc(var(--arrow-width) + var(--arrow-space));
`;

const pattern = `
background: 0 0 / var(--box-width) var(--box-height)
            linear-gradient(
              45deg,
              var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
              transparent 0
            ),
            var(--arrow-width)      0 / var(--box-width) var(--box-height)
            linear-gradient(
              -45deg,
              var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
              transparent 0
            ),
            var(--arrow-block-size) calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height)
            linear-gradient(
              135deg,
              var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
              transparent 0
            ),
            var(--arrow-block-size) calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height)
            linear-gradient(
              -135deg,
              var(--primary-color) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
              transparent 0
            ),
            0 calc(2 * var(--arrow-block-size)) / var(--box-width) var(--box-height)
            linear-gradient(
              45deg,
              var(--primary-color) 0 calc(var(--arrow-block-size) * var(--sqrt2)),
              transparent 0
            ),
            var(--arrow-width)      0 / var(--box-width) var(--box-height)
            linear-gradient(
              -135deg,
              var(--primary-color) 0 calc(var(--arrow-block-size) * var(--sqrt2)),
              transparent 0
            ),
            var(--secondary-color);
`;

export default { pattern, theme }
