const FirstComponent = () => <h1>✨ First render prop! ✨</h1>;
const SecondComponent = () => <h2>🔥 Second render prop! 🔥</h2>;
const ThirdComponent = () => <h3>🚀 Third render prop! 🚀</h3>;

export default function ExemploRenderProps() {
  return (
    <RenderProps
      renderFirstComponent={() => <FirstComponent />}
      renderSecondComponent={() => <SecondComponent />}
      renderThirdComponent={() => <ThirdComponent />}
    />
  );
}
