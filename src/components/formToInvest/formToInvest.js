import React from 'react'
import './formToInvest.scss'
import '../../sass/global.scss'

export default function FormToInvest(props){
  let wallet = false
  if(props.paymentOption && props.investor){
    Object.keys(props.investor).forEach(key => {
      if(props.paymentOption.toLowerCase() === key.toLowerCase()){
        wallet = /*props.paymentOption + ": " +*/ props.investor[key] 
      }
    })
  }  
  return(
    <form 
      id="form-toInvest" 
      onSubmit={
        props.investor && 
        props.investor.Ok
        ? props.handleDeposit   
        : props.handleInvest
      }>
        <h4>To Invest</h4>
        <input
          type="text"
          name="amount"
          value={props.amount && props.amount}
          placeholder={`enter amount you want to invest${props.investor && props.investor.Ok && ' or retire' }`}
          onChange={props.handleOnChange && props.handleOnChange }
          required
        />

        <select 
          name="paymentOption" 
          value={props.paymentOption || ''}
          onChange={props.handleOnChange && props.handleOnChange } 
          required>
          <option value="" disabled>Select the desired payment option</option>
          <option value="FIAT">FIAT</option>
          <option value="AUD">AUD</option>
          <option value="USD">USD</option>
          <option value="HOT">HOT</option>
        </select>
        {
          props.investor && props.investor.Ok &&
          <input 
            type="text"
            value={wallet || "---"}
            disabled
          />
        }
        {
          props.investor && !props.investor.Ok && 
          <textarea
            name="description"
            value={props.description && props.description}
            placeholder="why do you want to invest?" 
            rows="4"
            onChange={props.handleOnChange && props.handleOnChange}
            required
          />
        }
          
          <button type="submit" className="btn-primary">
            {props.investor && props.investor.Ok ? 'Deposit' : 'Invest'}
          </button>
        
        {
          props.investor && props.investor.Ok &&
        
          <button 
            onClick={props.handleRetire && props.handleRetire}
            type="button" 
            className="btn-primary">Retire</button>
        }
        
    </form>
  )
}