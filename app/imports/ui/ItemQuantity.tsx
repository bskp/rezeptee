import React, {useContext, useEffect, useRef, useState} from "react";
import {FactorContext} from "/imports/ui/Viewer";
import {createFractionalNumber, parseFractionalNumber} from "/imports/api/quantityHelpers";

export function ItemQuantity(props: { value: string }) {
  const [editing, setEditing] = useState(false)
  if (editing) {
    return <QuantityEditor value={props.value} setEditing={setEditing}/>
  } else {
    return <QuantityViewer value={props.value} setEditing={setEditing}/>
  }
}

type QuantityProps = {
  value: string,
  setEditing: Function
}

function QuantityViewer(props: QuantityProps) {
  const {factor} = useContext(FactorContext)
  const quantity = parseFractionalNumber(props.value) * factor
  return <span className="quantity" onClick={() => props.setEditing(true)}>{createFractionalNumber(quantity)}</span>;
}

function QuantityEditor(props: QuantityProps) {
  const {factor, setFactor} = useContext(FactorContext)
  const baseQuantity = parseFractionalNumber(props.value)
  const quantity = baseQuantity * factor

  const [inputQuantity, setInputQuantity] = useState(quantity.toString())
  const [valid, setValid] = useState(true)

  const handleKeyDown = event => {
    if (event.key == 'Escape') {
      setFactor(1)
      event.preventDefault()
      event.currentTarget.blur()
    }
    if (event.key == 'Enter') {
      event.currentTarget.blur()
    }
  }

  const handleChange = event => {
    setInputQuantity(event.target.value)
    if (event.target.value == "") {
      setFactor(1)
    }
    const val = Number.parseFloat(event.target.value);
    let f = val / baseQuantity;
    if (Number.isNaN(f)) {
      setValid(false)
    } else {
      setValid(true)
      setFactor(f)
    }
  }

  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputQuantity == quantity.toString() && factor == 1) {
      ref.current?.select();
    } else {
      ref.current?.focus();
    }
  })

  const size = inputQuantity.length / 2 + 1
  const step = 10**Math.floor(Math.log10(quantity) - 0.01)

  return <input type="number"
                className={"quantity" + (valid ? "" : " invalid")}
                min={0}
                ref={ref}
                size={1}
                autoFocus
                style={{width: `${size}em`}}
                value={inputQuantity}
                step={step}
                inputMode="decimal"
                onKeyDown={handleKeyDown}
                onBlur={() => props.setEditing(false)}
                onChange={handleChange}/>
}
