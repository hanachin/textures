const theme = `
--arrow-height: calc(2 * var(--arrow-block-size));
--arrow-width:  calc(2 * var(--arrow-block-size));
--box-height:   calc(2 * var(--arrow-height));
--box-width:    calc(2 * var(--arrow-width) + 2 * var(--arrow-space));
--color1: var(--secondary-color);
--color2: var(--primary-color);
--color3: var(--primary-color);
--color4: var(--secondary-color);
--color5: var(--primary-color);
--color6: var(--secondary-color);
--color7: var(--secondary-color);
--color8: var(--primary-color);
`;

const pattern = `
  background: var(--arrow-block-size) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-height) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--arrow-height) + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size) + var(--arrow-space)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--box-width) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--accent-color);
`;

export default { pattern, theme }
