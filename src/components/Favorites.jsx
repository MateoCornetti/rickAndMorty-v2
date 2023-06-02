import { connect } from "react-redux"
import Card from "./Card"
import styled from "styled-components"
import { filterCards, orderCards } from "../redux/actions";
import { useDispatch } from "react-redux";

const Container = styled.div `
   display: flex;
   margin: 1em;
   margin-top: 2em;
   justify-content: flex-start;
   flex-wrap: wrap;
`;
const Select = styled.select `
    box-shadow: 0 0 0.3em 0 black;
    border-top-width: 0px;
    margin-right: 1em;
    margin-left: 1em;
    height: 1.5em;
    width: 4em;
    padding-left: 4px;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    background-color: white;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1em;
    border-color: black;
    border-style: solid;
    &:hover {
        cursor: pointer;
        background-color: #94c46c;
    }
`

function Favorites ({ myFavorites }){
    const dispatch = useDispatch()

    const handleOrder = (evento) => {
        dispatch(orderCards(evento.target.value))
    }
    const handleFilter = (evento) => {
        dispatch(filterCards(evento.target.value))
    }

    return (<div>
        <div>
            <Select name="order" onChange={handleOrder}>
                <option value="A">A</option>
                <option value="D">D</option>
            </Select>
            <Select name="filter" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </Select>
        </div>
        <Container>{myFavorites.map(({ id, name, status, species, gender, image, origin}) => 
    (   <Card
        key={id}
        id={id}
        name={name}
        status={status}
        species={species}
        gender={gender}
        origin={origin}
        image={image}
      />
    ))}</Container>
    </div>)
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)