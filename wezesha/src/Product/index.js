import './index.css';
import mobileapp from '../images/mobileapp.png';
import dashboard from '../images/dashboard.png';

const Product = () =>{
    return(
        <body>
            <div id="product-heading">
                <h1>Products</h1>
                <p id="product-info">We will have a mobile app for farmers and a dashboard for Saccos and cooperatives.
                    By providing a web app and dashboard that intergrates with cooperatives and Saccos. 
                    Wezesha will give farmers complete access to their documents, including dairy milk
                    productivity, deliveries, and sales transactions.
                </p>
            </div>
            <div id= 'wezesha-mobileapp'>
                <div>
                    <img id= "mobilepic" src ={mobileapp} alt= "mobileapp-photo"/>
                </div>
                <div className='about-mobileapp'>
                    <h1>Wezesha Mobile App</h1>
                    <p>
                        The mobile app will empower dairy
                        farmers by providing them with a platform
                        for keeping their dairy activities and 
                        accessing information from cooperatives.
                    </p>
                </div>
            </div>

            <div id= 'wezesha-web-portal'>
                <div id='about-portal'>
                    <h1>Wezesha Web Portal</h1>
                    <p>Wezesha web portal will help SACCOs improve
                        their loan evaluation processes, and streamline
                        record-keeping contributing to their growth and
                        sustainability.
                    </p>
                </div>
                <div>
                    <img id= "web-portal-pic" src ={dashboard} alt= "Wezesha web portal"/>  
                </div>
            </div>


        </body>
    );
};

  
export default Product;