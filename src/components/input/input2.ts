import { styleModel } from "models/styleModel";

export const input2: styleModel = {
  title: "input2",
  scss: `.input2 {
  width: 90%;
  margin: 80px auto;
  osition: relative;
  > input {
    appearance: none;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 1.2rem;
    border-radius: 20px;
    padding: 10px 20px;
    background: #e0e5ec;
    text-shadow: 1px 1px 0 #fff;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    width: 100%;
    transition: all 0.2s ease-in-out;
    &:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
      + label {
        top: -20px;
        left: 15px;
        color: #333c5f;
        font-size: 0.8rem;
        line-height: 0.8rem;
        transition: 0.3s;
      }
    }
  }
  > label {
    position: absolute;
    top: 10px;
    left: 15px;
    color: #808080;
  }
}
`,
} as const;
