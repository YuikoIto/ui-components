import { styleModel } from "models/styleModel";

export const text2: styleModel = {
  title: "text2",
  scss: `.text2 {
  margin: 60px auto;
  font-size: 3.5rem;
  font-weight: bold;
}
.text2 > span {
  color: #333c5f;
  opacity: 0;
  animation: text2 2.5s infinite;
  -webkit-animation: text2 2.5s infinite;
  @for $i from 1 through 5 {
    &:nth-child(#{$i + 1}) {
      $delay: $i * 0.1 + s;
      animation-delay: $delay;
    }
  }
}
@keyframes text2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`,
} as const;
