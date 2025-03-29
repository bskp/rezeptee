import React, {useContext, useEffect, useRef, useState} from "react";
import {FactorContext} from "/imports/ui/Viewer";
import {createFractionalNumber, parseFractionalNumber} from "/imports/api/quantityHelpers";

type QuantityProps = {
  value: {value: string, dimension: number},
  setEditing: Function
}

const QuantityViewer = (props: QuantityProps) => {
  const {factor} = useContext(FactorContext)
  const quantity = parseFractionalNumber(props.value.value) * Math.pow(factor, 1/props.value.dimension)

  return <span className="quantity" onClick={() => props.setEditing(true)}>{
    createFractionalNumber(quantity)
  }</span>;
};

const QuantityEditor = (props: QuantityProps) => {
  const {factor, setFactor} = useContext(FactorContext)
  const baseQuantity = parseFractionalNumber(props.value.value)
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
};

export const ItemQuantity = (props: { value: {value: string, dimension: number}}) => {
  const [editing, setEditing] = useState(false)
  if (editing && props.value.dimension === 1 ) {
    return <QuantityEditor value={props.value} setEditing={setEditing}/>
  } else {
    return <QuantityViewer value={props.value} setEditing={setEditing}/>
  }
};

