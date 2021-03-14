import React, {Component} from 'react'
import './wishlist.css'
import ProductCondensed from "../product-condensed/product-condensed";

class Wishlist extends Component {

    constructor(props) {
        super(props)

        this.state = {wishList:[
                {
                    title: "Something",
                    price: 69,
                    _id: "@#213231"
                },
                {
                    title: "Something Else",
                    price: 420,
                    _id: "@#21qwe3231"
                },
                {
                    title: "Something else again",
                    price: 69420,
                    _id: "@#weq213231"
                }
            ]}

        this.createWishList = this.createWishList.bind(this)
    }

    createWishList = () => {
        const list = this.state.wishList.map((product) =>
            <ProductCondensed product={product} key={product._id} />
        )
        return (list)
    }

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        )}
}

export default Wishlist