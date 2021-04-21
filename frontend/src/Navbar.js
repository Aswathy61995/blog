import React, { useState } from 'react';
import swal from 'sweetalert';
import Book from './Book';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import BellIcon from 'react-bell-icon';

import ProductstylingController from './ProductstylingController'

class Navbar extends React.Component {
    state = {

        books: [],
    }
    componentDidMount() {
        Book.getAllBooks()
            .then(data => {
                this.setState({
                    books: data.data.books
                });
            });
        
    }
    
    render() {
        return (<div className="container">
            
            <div className="row">
                
            <div class="navbar" >
                
    <a href="#"  >endplan</a>
   
    <a href="#" style={{paddingLeft:"280px"}} >Why Endplan</a>
    <a href="#">Security</a>
    <a href="#">FAQ</a>
    <a href="#">Blog</a>
    <a href="/addnewbook">Create Blog</a>
    <a href="/login" >Sign In</a>
    <a href="/register" class="active">Sign Up</a>
    </div>
 
 
  <div class='container' >
   <div class="coloumn">
      
            <h1 style={{color: "#ff704d",fontSize: "50px"}}>Endplan Blog</h1>
            <p>News,articles, and insightful stories dedicated to  prepare you for the end.</p>
            </div>
           <div class="row">
            
            {
                    this.state.books.map(book =>
                        // <tr>
                        //     <td>{book.title}</td>
                        //     <td>{book.price}</td>
                        //     <td>{book.imagePath}</td>
                        //     <td onClick={()=>{this.addtoCart(book)}}>Add to cart</td>
                        // </tr>
                        
                        <div class="column">
                            <ProductstylingController
                            booksObject={book}
                            
                             title={book.title} 
                             price={book.price} 
                             imagePath={book.imagePath} />
                            
                            
                            </div> 
                            

                    )}
                    
                   </div>
                    </div>
        </div>
      </div>
      
   

   

 



        
        );
    }
}
export default Navbar;