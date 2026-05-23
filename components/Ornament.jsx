// Small gold divider with a centred diamond. Used to break up sections.
export default function Ornament({ center = false, className = "", ...rest }) {
  return (
    <div className={`ornament ${center ? "center" : ""} ${className}`} {...rest}>
      <span />
      <i className="diamond" />
      <span />
    </div>
  );
}
