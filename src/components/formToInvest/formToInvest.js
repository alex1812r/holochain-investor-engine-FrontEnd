import React from 'react'
import './formToInvest.scss'

export default function FormToInvest(props){ 
  return(
    <form 
      onSubmit={props.handleOnSubmit && props.handleOnSubmit} 
      id="form-toInvest">
        <h4>To Invest</h4>
        <input
          type="text"
          name="amount"
          placeholder="enter amount you want to invest"
          onChange={props.handleOnChange && props.handleOnChange } 
        />

        <select 
          name="paymentOption" 
          defaultValue={props.paymentOption || ''}
          onChange={props.handleOnChange && props.handleOnChange } >
          <option value="" disabled>Select the desired payment option</option>
          <option value="FIAT">FIAT</option>
          <option value="AUD">AUD</option>
          <option value="USD">USD</option>
          <option value="HOT">HOT</option>
        </select>

        <textarea
          name="description"
          placeholder="why do you want to invest?" 
          rows="4"
          onChange={props.handleOnChange && props.handleOnChange} 
        />

        <button type="submit" className="btn-primary">Invest</button>
    </form>
  )
}