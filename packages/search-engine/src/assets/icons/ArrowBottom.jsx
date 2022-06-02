import * as React from "react"

const ArrowBottom = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01042)" />
      </pattern>
      <image
        id="b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACBUlEQVR4nO3YvYoTURyG8WeiSBzTBiH3so1WK2q5tVUWtls7b0KshFgtbKXlCttp470IYqthPyRjoSMpYjLJzpw5f31+zTZZDrxPTr5AkiRJkiRJkiRJkiRJkiRJkiRJkiQpoiL1gZPprLweDd8OqF59efnsQ+rzVxkfn+7B4gWXdw++vj74lvLsQcrDJtNZeTUangGPFxRn95+fPEx5/irj49M9isU5BfsM5+fjo3ejlOcnuwH1+AUsjz4fUD3t6yb8GR+WRq8+cVE+SnUTkgT4y/i1XiKsHr+WLkLnATaMX0saYf34tTQROg3QcPxakgjNxq91HyHpm/AGZddvzNuNn0YuL0HLOrkJ24//D7wE1fqOkOv40P/H0HVaiZDz+JD4m3DqCLmPDz39FJEiQoTxoYcA0H2EKONDTwGguwiRxoceA0D7EaKNDz0HgPYiRBwfMggAN48QdXzIJADsHmFR3bqKOj5kFAB+Rfhxb/i+KnjQ8F/mv/+WTR5cVHy8/f3iyec3h/PNj04jqwCw001oKK9nfi27ANBFhDzHh0wDQJsR8h0fMg4AbUTIe3zIPADcJEL+40OAALBLhBjjQ5AAsE2EOONDoADQJEKs8SFYAFgXId74EDAArIoQc3wIGgCWI1R3oo4f3mQ6KyfTWaPfgSRJkiRJkiRJkiRJkiRJkv4DPwEn0o9emoX1CQAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
)

export default ArrowBottom
