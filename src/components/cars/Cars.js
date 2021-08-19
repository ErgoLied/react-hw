import {useEffect, useState} from "react";
import Car from "../car/Car";
import {getCars, setCar} from "../services/car.api";

export default function Cars() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''});
    const onFormInputChange = (ev) => {
        setFormState({...formState, [ev.target.name]: ev.target.value});
    }

    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars([...value]));
    },[]);

    //set car from form to DB
    const save = (ev) => {
        ev.preventDefault();
        setCar(formState);
    }
  return (
    <div>
        <form onSubmit={save}>
            <input type="text"   name={'model'}  value={formState.model} onChange={onFormInputChange} maxLength={20}/>
            <input type="number" name={'price'}  value={formState.price} onChange={onFormInputChange} min={1}/>
            <input type="number" name={'year'}   value={formState.year}  onChange={onFormInputChange} min={1990} max={2021}/>
            <input type="submit"/>
        </form>

        <div>
            <br/>
            <div className={'title-cars'}>
                <div>id -></div>
                <div className={'model'}>model -></div>
                <div>price -></div>
                <div>year</div>
            </div>
            {cars.map(value => <Car key={value.id} item={value}/>)}
        </div>
    </div>
  );
}