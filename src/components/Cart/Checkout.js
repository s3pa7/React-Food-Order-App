
import classes from './Checkout.module.css'
import useInput from '../hooks/use-input'


const Checkout = (props) => {

    const {
        value:enteredName,
        isValid:enteredNameIsValid,
        hasError: nameInputHasError ,
        valueChangeHandler: nameChangeHandler ,
        inputBlurHandler : nameBlurHandler,
        reset:resetNameInput
    } = useInput(value => value.trim() !== '');

    // Street
    const {
        value:enteredStreet,
        isValid:enteredStreetIsValid,
        hasError: streetInputHasError ,
        valueChangeHandler: streetChangeHandler ,
        inputBlurHandler : streetBlurHandler,
        reset:resetStreetInput
    } = useInput(value => value.trim() !== '');

    // FOR POSTAL
    const {
        value:enteredPostal,
        isValid:enteredPostalIsValid,
        hasError: postalInputHasError ,
        valueChangeHandler: postalChangeHandler ,
        inputBlurHandler : postalBlurHandler,
        reset:resetPostalInput
    } = useInput(value => value.trim() !== '');

    // FOR City
    const {
        value:enteredCity,
        isValid:enteredCityIsValid,
        hasError: cityInputHasError ,
        valueChangeHandler: cityChangeHandler ,
        inputBlurHandler : cityBlurHandler,
        reset:resetCityInput
    } = useInput(value => value.trim() !== '');


    let formIsValid = false;

    if(enteredName && enteredStreet && enteredPostal && enteredCity) {
        formIsValid = true;
    }


    const nameInputClases  = nameInputHasError ? classes.invalid : '';
    const streetInputClases  = streetInputHasError ? classes.invalid  : '';
    const postalInputClases  = postalInputHasError ? classes.invalid  : '';
    const cityInputClases  = cityInputHasError ? classes.invalid  : '';

    const formSubmissionHandler = event => {
        event.preventDefault();
        if(!enteredNameIsValid  && !enteredStreetIsValid && !enteredPostalIsValid && !enteredCityIsValid){
            return;
        }
        props.onConfirm({
            name: enteredName,
            street:enteredStreet,
            city: enteredCity,
            postal: enteredPostal

        })


        resetNameInput();
        resetStreetInput();
        resetPostalInput();
        resetCityInput();

    }
    return <form className={classes.form} onSubmit={formSubmissionHandler}>
        <div className={`${classes.control} ${nameInputClases}`}>
            <label htmlFor="name">Your Name</label>
            <input type='text' id='name'
                   value={enteredName}
                   onChange={nameChangeHandler}
                   onBlur={nameBlurHandler}/>

            {nameInputHasError && <p className={classes['error-text']}>Name must not be empty.</p> }

        </div>
        <div className={`${classes.control} ${streetInputClases}`}>
            <label htmlFor="street">Street</label>
            <input type='text'
                   id='street'
                   value={enteredStreet}
                   onChange={streetChangeHandler}
                   onBlur={streetBlurHandler}/>

            {streetInputHasError && <p className={classes['error-text']}>Street must not be empty.</p> }
        </div>
        <div className={`${classes.control} ${postalInputClases}`}>
            <label htmlFor="postal">Postal Code</label>
            <input
                type='text'
                id='postal'
                value={enteredPostal}
                onChange={postalChangeHandler}
                onBlur={postalBlurHandler}
            />
            {postalInputHasError && <p className={classes['error-text']}>Postal must not be empty.</p> }
        </div>
        <div className={`${classes.control} ${cityInputClases}`}>
            <label htmlFor="city">City</label>
            <input
                type='text'
                id='city'
                value={enteredCity}
                onChange={cityChangeHandler}
                onBlur={cityBlurHandler}
            />
            {cityInputHasError && <p className={classes['error-text']}>City must not be empty.</p> }
        </div>
        <div className={classes.actions}>
            <button
                type="button" onClick={props.onCancel}>Cancel</button>
            <button disabled={!formIsValid} className={classes.submit}>Confirm</button>
        </div>
    </form>


}

export default Checkout;