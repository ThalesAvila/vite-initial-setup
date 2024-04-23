export default function RenderProps(props) {
  return (
    <>
      {props.renderFirstComponent()}
      {props.renderSecondComponent()}
      {props.renderThirdComponent()}
    </>
  );
}
