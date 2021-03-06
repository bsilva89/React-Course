import React, { Component } from "react";
import Burguer from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/Order Summary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandling'
import axios from '../../axios-orders'

const INGREDIENT_PRICES = {
    salad: 0.3,
    cheese: 0.5,
    meat: 1,
    bacon: 0.7

}
class BurgerBuilder extends Component {
    state = {
        ingredients: {},
        totalPrice: 1,
        purchasable: false,
        purchasing: false,
        loading: false
    };

    componentDidMount () {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
            })
    }
    
    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum,el) =>{
                return sum + el
            }, 0);
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
        } else {
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount
    
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAddition;
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
            this.updatePurchaseState(updatedIngredients);
        }       
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        // alert('Continuing!')
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Bruno',
                address: {
                    street: 'teststreet X',
                    zipCode: '123456-1',
                    country: 'BR'
                },
                email: 'teste123@test.com'
            },
            deliveryMethod: 'as fast as you can'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false, purchasing: false});
            })
            .catch(err => {
                console.log(err);
                this.setState({loading: false, purchasing: false});
            })
    }

    render() {
        let orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
            />

        if (this.state.loading) {
            orderSummary = <Spinner/>
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burguer ingredients={this.state.ingredients}/>
                <BuildControls
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}/>
            </React.Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);