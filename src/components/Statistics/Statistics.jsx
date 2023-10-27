import s from '../Statistics/Statistics.module.css';

export default function Statistics(props) {
  function propNameNormalize(string) {
    return (
      string[0].toUpperCase() +
      `${[...string]
        .map(letter =>
          letter === letter.toUpperCase() ? ` ${letter.toLowerCase()}` : letter
        )
        .join('')}`.slice(1)
    );
  }

  return (
    <ul>
      {Object.keys(props).map((propName, i) => (
        <li key={i} className={s.item}>
          {propNameNormalize(propName)}: {props[propName]}
        </li>
      ))}
    </ul>
  );
}
