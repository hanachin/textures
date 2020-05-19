const theme = `
--arrow-height: calc(2 * var(--arrow-block-size));
--arrow-width:  calc(2 * var(--arrow-block-size));
--box-height:   calc(2 * var(--arrow-height) + 4 * var(--arrow-space));
--box-width:    calc(2 * var(--arrow-width) + 4 * var(--arrow-space));
--color1: var(--secondary-color);
--color2: var(--secondary-color);
--color3: var(--primary-color);
--color4: var(--primary-color);
--color5: var(--primary-color);
--color6: var(--primary-color);
--color7: var(--secondary-color);
--color8: var(--secondary-color);
`;

const pattern = `
  background: calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
                linear-gradient(
                  45deg,
                  var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                  transparent 0
                ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color3) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color2) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 2 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color7) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-width) / 4) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color6) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) calc(var(--box-height) / 2) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color1) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) calc(var(--box-height) / 2 + var(--arrow-block-size)) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color4) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--box-height) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) 0 / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),

              calc(var(--box-width) / 4 * 3 + var(--arrow-block-size)) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -45deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              0 var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                45deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--arrow-block-size) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                -135deg,
                var(--color5) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              calc(var(--box-height) / 4 * 3) var(--arrow-block-size) / var(--box-width) var(--box-height)
              linear-gradient(
                135deg,
                var(--color8) 0 calc(var(--arrow-block-size) / 2 * var(--sqrt2)),
                transparent 0
              ),
              var(--accent-color);
`;

export default { pattern, theme }
