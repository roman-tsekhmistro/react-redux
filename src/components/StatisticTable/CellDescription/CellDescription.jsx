import './CellDescription.scss'

export default function CellDescription(props) {
  const {img, span, text, classForSpan} = props;
  return (
      <div className='cell__description'>
        <img src={img} alt="icon for arrow"/>
        <p>
          <span className={classForSpan}>{span}</span>
          {text}
        </p>
      </div>
  );
}