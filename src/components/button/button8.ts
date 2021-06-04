import { styleModel } from "models/styleModel";

export const button8: styleModel = {
  title: "button8",
  scss: `.button8 {
  position: relative;
  width: 150px;
  margin: 65px auto;
  padding: 0.8rem 0;
  font-size: 1.5rem;
  color: #fff;
  background: #333c5f;
  border-radius: 30px;
  background: linear-gradient(145deg, #374066, #2e3656);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  &:hover {
    cursor: pointer;
    -webkit-animation: button8 0.5s both;
    animation: button8 0.5s both;
  }
}

  @keyframes button8 {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}
`,
} as const;
