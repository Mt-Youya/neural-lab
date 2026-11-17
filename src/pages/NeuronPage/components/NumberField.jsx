import { InputNumber } from 'primereact/inputnumber'

export default function NumberField({ label, suffix, min, max, value, onChange, contrib }) {
  return (
    <div className="numfield">
      <div className="numfield-row">
        <label>{label}</label>
        <span className="contrib">w·x = {contrib >= 0 ? '+' : ''}{contrib.toFixed(3)}</span>
      </div>
      <InputNumber.Root
        className="number-control"
        value={value}
        onValueChange={(e) => onChange(e.value ?? 0)}
        min={min} max={max} suffix={suffix}
        layout="horizontal"
      >
        <InputNumber.Decrement className="number-button" aria-label={`减少 ${label}`}><span className="pi pi-minus" /></InputNumber.Decrement>
        <InputNumber.Input className="num-input" aria-label={label} />
        <InputNumber.Increment className="number-button" aria-label={`增加 ${label}`}><span className="pi pi-plus" /></InputNumber.Increment>
      </InputNumber.Root>
    </div>
  )
}
