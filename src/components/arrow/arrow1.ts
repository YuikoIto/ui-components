import { styleModel } from "models/styleModel";

export const arrow1: styleModel = {
  title: "arrow1",
  scss: `.arrow1 {
  margin: 100px auto;
  position: relative;
  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &::before {
    width: 4.5rem;
    height: 4.5rem;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #333c5f;
  }
  &::after {
    left: 50px;
    width: 20px;
    border: 20px solid transparent;
    border-left: 20px solid #fff;
  }
}
`,
} as const;
