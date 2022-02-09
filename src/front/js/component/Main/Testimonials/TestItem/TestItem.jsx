import React from "react";
import "./TestItem.scss";

const TestItem = () => {
    return (

        <>

            <div class="col-lg-4">
                <div class="card">
                    <div class="face front-face"> 
                        <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" width="100" height="100" alt="" class="profile" />
                        <div class="pt-3 text-uppercase name"> Robert Garrison </div>
                        <div class="designation">Android Developer</div>
                    </div>
                    <div class="face back-face"> <span class="fas fa-quote-left"></span>
                        <div class="testimonial"> I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know. </div> <span class="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>

        </>

    );
};
    
export default TestItem;