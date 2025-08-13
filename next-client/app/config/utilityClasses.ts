import {
  breakpoints,
  spacingValues,
  fontSizes,
  fontWeights,
  displayValues,
  alignItemsValues,
  justifyContentValues,
  radiusValues,
  themes,
  widthValues,
  flexDirectionValues
} from './variable'

const breakpointValue = Object.entries(breakpoints)

const themeValue = Object.entries(themes)

export const colorVariables = themeValue
  .map(
    ([theme, values]) => `
  :root[data-theme='${theme}'] {
    ${Object.entries(values)
      .map(
        ([color, value]) => `
      --${color}-rgb: ${value};
      --${color}: rgb(${value});
    `
      )
      .join('')}
  }
`
  )
  .join('')

export const colorUtilities = Object.entries(themes.default)
  .map(
    ([color]) => `
  .text-${color} {
    color: var(--${color}) !important;
  }
  .bg-${color} {
    background-color: var(--${color}) !important;
  }
  .${color} {
    --color: var(--${color});
  }
`
  )
  .join('')

export const spacingUtilities = spacingValues
  .map(
    (value) => `
  .p-${value} {
    padding: ${value}px;
  }
  .px-${value} {
    padding-inline: ${value}px !important;
  }
  .py-${value} {
    padding-block: ${value}px;
  }
  .pl-${value} {
    padding-inline-start: ${value}px;
  }
  .pr-${value} {
    padding-inline-end: ${value}px;
  }
  .pt-${value} {
    padding-block-start: ${value}px;
  }
  .pb-${value} {
    padding-block-end: ${value}px;
  }
  .m-${value} {
    margin: ${value}px;
  }
  .mx-${value} {
    margin-inline: ${value}px !important;
  }
  .my-${value} {
    margin-block: ${value}px;
  }
  .ml-${value} {
    margin-inline-start: ${value}px;
  }
  .mr-${value} {
    margin-inline-end: ${value}px !important;
  }
  .mt-${value} {
    margin-block-start: ${value}px;
  }
  .mb-${value} {
    margin-block-end: ${value}px;
  }
`
  )
  .join('\n')

export const responsiveSpacing = breakpointValue
  .map(([size, value]) =>
    spacingValues
      .map(
        (space) => `
    @media ${value}{
    .p-${size}-${space} {
      padding: ${space}px;
    }
    .px-${size}-${space} {
      padding-inline: ${space}px;
    }
    .py-${size}-${space} {
      padding-block: ${space}px;
    }
    .pl-${size}-${space} {
      padding-inline-start: ${space}px;
    }
    .pr-${size}-${space} {
      padding-inline-end: ${space}px;
    }
    .pt-${size}-${space} {
      padding-block-start: ${space}px;
    }
    .pb-${size}-${space} {
      padding-block-end: ${space}px;
    }
    .m-${size}-${space} {
      margin: ${space}px;
    }
    .mx-${size}-${space} {
      margin-inline: ${space}px;
    }
    .my-${size}-${space} {
      margin-block: ${space}px;
    }
    .ml-${size}-${space} {
      margin-inline-start: ${space}px;
    }
    .mr-${size}-${space} {
      margin-inline-end: ${space}px;
    }
    .mt-${size}-${space} {
      margin-block-start: ${space}px;
    }
    .mb-${size}-${space} {
      margin-block-end: ${space}px;
    }
  }
  `
      )
      .join('')
  )
  .flat()
  .join('')

export const fontUtilities = fontSizes
  .map(
    (value) => `
.fz-${value} {
  font-size: ${value}px !important;
}
`
  )
  .join('\n')

export const responsiveFonts = breakpointValue
  .map(([size, value]) =>
    fontSizes
      .map(
        (fontSize) => `
  @media ${value}{
  .fz-${size}-${fontSize} {
    font-size: ${fontSize}px !important;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

export const fontWeightUtilities = fontWeights
  .map(
    (value) => `
.fw-${value} {
  font-weight: ${value};
}
`
  )
  .join('\n')

export const displayUtilities = displayValues
  .map(
    (value) => `
.d-${value} {
  display: ${value};
}
`
  )
  .join('\n')

export const responsiveDisplay = breakpointValue
  .map(([size, value]) =>
    displayValues
      .map(
        (display) => `
  @media ${value}{
  .d-${size}-${display} {
    display: ${display};
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

export const alignItemsUtilities = alignItemsValues
  .map(
    (value) => `
.ai-${value} {
  align-items: ${value};
}
`
  )
  .join('\n')

export const responsiveAlignItems = breakpointValue
  .map(([size, value]) =>
    alignItemsValues
      .map(
        (alignment) => `
  @media ${value}{
  .ai-${size}-${alignment} {
    align-items: ${alignment};
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

export const justifyContentUtilities = justifyContentValues
  .map(
    (value) => `
.jc-${value} {
  justify-content: ${value};
}
`
  )
  .join('\n')

export const responsiveJustifyContent = breakpointValue
  .map(([size, value]) =>
    justifyContentValues
      .map(
        (justification) => `
  @media ${value}{
  .jc-${size}-${justification} {
    justify-content: ${justification};
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

export const radiusUtilities = radiusValues
  .map(
    (value) => `
.radius-${value} {
  border-radius: ${value}px;
}
`
  )
  .join('\n')

export const responsiveRadius = breakpointValue
  .map(([size, value]) =>
    radiusValues
      .map(
        (radius) => `
  @media ${value}{
  .radius-${size}-${radius} {
    border-radius: ${radius}px;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

export const gapUtilities = spacingValues
  .map(
    (value) => `
.gap-${value} {
  gap: ${value}px;
}
`
  )
  .join('\n')

export const responsiveGap = breakpointValue
  .map(([size, value]) =>
    spacingValues
      .map(
        (gap) => `
  @media ${value}{
  .gap-${size}-${gap} {
    gap: ${gap}px;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

export const widthUtilities = widthValues
  .map(
    (value) => `
.w-${value} {
  width: ${value}% !important;
}
`
  )
  .join('\n')

export const responsiveWidth = breakpointValue
  .map(([size, value]) =>
    widthValues
      .map(
        (width) => `
  @media ${value}{
  .w-${size}-${width} {
    width: ${width}% ;
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')

// confirm mistake
export const flexDirectionUtilities = flexDirectionValues
  .map(
    (value) => `
.fd-${value} {
  flex-direction: ${value};
}
`
  )
  .join('\n')

export const responsiveFlexDirection = breakpointValue
  .map(([size, value]) =>
    flexDirectionValues
      .map(
        (direction) => `
  @media ${value}{
  .fd-${size}-${direction} {
    flex-direction: ${direction};
  }
}
`
      )
      .join('')
  )
  .flat()
  .join('')
