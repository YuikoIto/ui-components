import { styleModel } from "models/styleModel";

export const button1: styleModel = {
  title: "button1",
  scss: `.button1 {
  position: relative;
  border-radius: 20px;
  margin: 65px auto;
  width: 150px;
  padding: 1rem 0;
  font-size: 1.5rem;
  background: #333c5f;
  color: #fff;
  font-weight: bold;
  -webkit-box-shadow: 0 5px 0 #576199;
  box-shadow: 0 5px 0 #576199;
  &:hover {
    -webkit-transform: translate(0, 3px);
    transform: translate(0, 3px);
    -webkit-box-shadow: 0 2px 0 #576199;
    box-shadow: 0 2px 0 #576199;
  }
}
`,
} as const;
