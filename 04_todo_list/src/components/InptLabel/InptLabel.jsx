import styles from './InptLabel.module.css';

export default function InptLabel({label, onChange, type, opts}) {
  return <div className={styles.inptLabel}>
    <label> {label} </label>
    <br/>

    {type == "select" ?
    (
      <select onChange={(e) => onChange(e.target.value)}>
        {opts?.map(opt => <option key={opt}>{opt}</option>)}
      </select>
    )
    :
    (
      <input onChange={(e) => onChange(e.target.value)} type={type} />
    )}
  </div>
}