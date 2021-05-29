import { styleModel } from "models/styleModel";

export const button3: styleModel = {
  title: "button3",
  scss: `.button3 {
  background: #333c5f;
  color: #fff;
  border: none;
  position: relative;
  font-size: 1.6em;
  transition: 1s ease all;
  outline: none;
  margin: 65px auto;
  width: 150px;
  padding: 1rem 0;
  &:hover {
    background: #fff;
    color: #333c5f;
    &::before,
    &::after {
    width: 100%;
    transition: 1s ease all;
    }
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #333c5f;
    transition: 0.5s ease all;
  }
  &::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
}
`,
} as const;
