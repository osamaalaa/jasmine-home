import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';



class Dashboard extends Component {


    render() {
        return (
            <>
                <Header />

                <div class="page-heading">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="page-title">
                                    <h2>Dashboard</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section class="main-container col2-right-layout">
                    <div class="main container">
                        <div class="row">
                            <section class="col-main col-sm-9 col-xs-12 wow bounceInUp animated animated" style={{"visibility":"visible"}}>
                                <div class="my-account">

                                    {/* <!--page-title-->  */}
                                    {/* <!-- BEGIN DASHBOARD--> */}
                                    <div class="dashboard">
                                        <div class="welcome-msg">
                                            <p class="hello"><strong>Hello, john doe!</strong></p>
                                            <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>
                                        </div>
                                        <div class="recent-orders">
                                            <div class="title-buttons"> <strong>Recent Orders</strong> <a href="#">View All</a> </div>
                                            <div class="table-responsive">
                                                <table class="data-table table-striped" id="my-orders-table">

                                                    <thead>
                                                        <tr class="first last">
                                                            <th>Order # </th>
                                                            <th>Date</th>
                                                            <th>Ship To</th>
                                                            <th><span class="nobr">Order Total</span></th>
                                                            <th>Status</th>
                                                            <th>&nbsp;</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="first odd">
                                                            <td>12800000002</td>
                                                            <td><span class="nobr">5/12/2015</span></td>
                                                            <td>jhon doe</td>
                                                            <td><span class="price">$403.00</span></td>
                                                            <td><em>Pending</em></td>
                                                            <td class="a-center last"><span class="nobr"> <a href="#">View Order</a> </span></td>
                                                        </tr>
                                                        <tr class="even">
                                                            <td>12800000001</td>
                                                            <td><span class="nobr">5/11/2015</span></td>
                                                            <td>jhon doe</td>
                                                            <td><span class="price">$506.50</span></td>
                                                            <td><em>Pending</em></td>
                                                            <td class="a-center last"><span class="nobr"> <a href="#">View Order</a> <span class="separator">|</span> <a href="#" class="link-reorder">Reorder</a> </span></td>
                                                        </tr>
                                                        <tr class="odd">
                                                            <td>13100000001</td>
                                                            <td><span class="nobr">5/9/2015</span></td>
                                                            <td>jhon doe</td>
                                                            <td><span class="price">$997.84</span></td>
                                                            <td><em>Pending</em></td>
                                                            <td class="a-center last"><span class="nobr"> <a href="#">View Order</a> <span class="separator">|</span> <a href="#" class="link-reorder">Reorder</a> </span></td>
                                                        </tr>
                                                        <tr class="even">
                                                            <td>12000000002</td>
                                                            <td><span class="nobr">4/1/2015</span></td>
                                                            <td>jhon doe</td>
                                                            <td><span class="price">$60.00</span></td>
                                                            <td><em>Pending</em></td>
                                                            <td class="a-center last"><span class="nobr"> <a href="#">View Order</a> <span class="separator">|</span> <a href="#" class="link-reorder">Reorder</a> </span></td>
                                                        </tr>
                                                        <tr class="last odd">
                                                            <td>12000000001</td>
                                                            <td><span class="nobr">4/1/2015</span></td>
                                                            <td>jhon doe</td>
                                                            <td><span class="price">$208.00</span></td>
                                                            <td><em>Pending</em></td>
                                                            <td class="a-center last"><span class="nobr"> <a href="#">View Order</a> <span class="separator">|</span> <a href="#" class="link-reorder">Reorder</a> </span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* <!--table-responsive-->                  */}
                                        </div>
                                        {/* <!--recent-orders--> */}
                                        <div class="box-account">
                                            <div class="page-title">
                                                <h2>Account Information</h2>
                                            </div>
                                            <div class="col2-set">
                                                <div class="col-1">
                                                    <div class="box">
                                                        <div class="box-title">
                                                            <h5>Contact Information</h5>
                                                            <a href="#">Edit</a> </div>
                                                        {/* <!--box-title--> */}
                                                        <div class="box-content">
                                                            <p> jhon doe<br />
                                                                jhon.doe@gmail.com<br />
                                                                <a href="#">Change Password</a> </p>
                                                        </div>
                                                        {/* <!--box-content-->  */}
                                                    </div>
                                                    {/* <!--box-->  */}
                                                </div>
                                                <div class="col-2">
                                                    <div class="box">
                                                        <div class="box-title">
                                                            <h5>Newsletters</h5>
                                                            <a href="#">Edit</a> </div>
                                                        {/* <!--box-title--> */}
                                                        <div class="box-content">
                                                            <p> You are currently not subscribed to any newsletter. </p>
                                                        </div>
                                                        {/* <!--box-content-->  */}
                                                    </div>
                                                    {/* <!--box-->  */}
                                                </div>
                                            </div>
                                            <div class="col2-set">
                                                <div class="box">
                                                    <div class="box-title">
                                                        <h4>Address Book</h4>
                                                        <a href="#">Manage Addresses</a> </div>
                                                    {/* <!--box-title--> */}
                                                    <div class="box-content">
                                                        <div class="col-1">
                                                            <h5>Default Billing Address</h5>
                                                            <address>
                                                                jhon doe<br />
                                                                Street road<br />
                                                                AL,  Alabama, 42136<br />
                                                                United States<br />
                                                                T: 4563 <br />
                                                                <a href="#">Edit Address</a>
                                                            </address>
                                                        </div>
                                                        <div class="col-2">
                                                            <h5>Default Shipping Address</h5>
                                                            <address>
                                                                jhon doe<br />
                                                                Street road<br />
                                                                AL,  Alabama, 42136<br />
                                                                United States<br />
                                                                T: 4563 <br />
                                                                <a href="#">Edit Address</a>
                                                            </address>
                                                        </div>
                                                    </div>
                                                    {/* <!--box-content-->  */}
                                                </div>
                                                {/* <!--box-->  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <!--col-main col-sm-9 wow bounceInUp animated--> */}
                            <aside class="col-right sidebar col-sm-3 col-xs-12 wow bounceInUp animated animated" style={{"visibility":"visible"}}>
                                <div class="block block-account">
                                    <div class="block-title"> My Account </div>
                                    <div class="block-content">
                                        <ul>
                                            <li class="current"><a>Account Dashboard</a></li>
                                            <li><a href="#"><span> Account Information</span></a></li>
                                            <li><a href="#"><span> Address Book</span></a></li>
                                            <li><a href="#"><span> My Orders</span></a></li>
                                            <li><a href="#"><span> Billing Agreements</span></a></li>
                                            <li><a href="#"><span> Recurring Profiles</span></a></li>
                                            <li><a href="#"><span> My Product Reviews</span></a></li>
                                            <li><a href="#"><span> My Wishlist</span></a></li>
                                            <li><a href="#"><span> My Applications</span></a></li>
                                            <li><a href="#"><span> Newsletter Subscriptions</span></a></li>
                                            <li class="last"><a href="#"><span> My Downloadable Products</span></a></li>
                                        </ul>
                                    </div>
                                    {/* <!--block-content-->  */}
                                </div>
                                {/* <!--block block-account--> */}


                            </aside>
                            {/* <!--col-right sidebar col-sm-3 wow bounceInUp animated-->  */}
                        </div>
                        {/* <!--row-->  */}
                    </div>
                    {/* <!--main container-->  */}
                </section>



                <div class="container">
                    <div class="row our-features-box">
                        <ul>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-truck"></div>
                                    <div class="content">FREE SHIPPING on order over $99</div>
                                </div>
                            </li>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-support"></div>
                                    <div class="content">Have a question?<br />
                                        +1 800 789 0000</div>
                                </div>
                            </li>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-money"></div>
                                    <div class="content">100% Money Back Guarantee</div>
                                </div>
                            </li>
                            <li>
                                <div class="feature-box">
                                    <div class="icon-return"></div>
                                    <div class="content">30 days return Service</div>
                                </div>
                            </li>
                            <li class="last">
                                <div class="feature-box"> <a href="#"><i class="fa fa-apple"></i> download</a> <a href="#"><i class="fa fa-android"></i> download</a> </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
export default Dashboard;