import React from "react";


export class Carousel extends React.Component{
  render(){
    return(
      <div class="carousel header-visible">
      <div class="carousel-header">
      <h3>Discover</h3>
      </div>
      <div>
      <div class="arrow right-arrow">
      <i class="hi hi-chevron-right"></i>
      </div>
      <div class="arrow left-arrow">
      <i class="hi hi-chevron-left"></i>
      </div><div class="slide-indicator">
      <div class="navigation-dot " data-index="0">
      </div>
      <div class="navigation-dot " data-index="1">
      </div>
      <div class="navigation-dot " data-index="2">
      </div>
      <div class="navigation-dot active" data-index="3">
      </div>
      <div class="navigation-dot " data-index="4">
      </div>
      <div class="navigation-dot " data-index="5">
      </div>
      </div>
      </div>
      <div class="carousel-items" style={{transform: 'translateX(0px)'}}>
      <div class="carousel-item">
      <div class="carousel-card singleCard">
      <div class="carousel-tile-item"><div class="card-tile">
      <div class="tile-illustration">
      <img src="https://plugin.intuitcdn.net/marketing-ipd-tsa-widgets/3.62.5/images/82ae0c10a53146c5523fb61c56821983.svg"
      alt="We're here to help you!"/>
      </div>
      <h3>We are here to help you!</h3>
      <p>Ask your question and get answers from QuickBooks experts.</p>
      <p><a href="https://community.intuit.com/quickbooks-online-in" target="_blank">Ask A Question</a></p>
      </div>
      </div>
      </div>
      </div>
      <div class="carousel-item">
      <div class="carousel-card singleCard">
      <div class="carousel-tile-item">
      <div class="card-tile">
      <div class="tile-illustration">
      <img src="https://plugin.intuitcdn.net/marketing-ipd-tsa-widgets/3.62.5/images/5a8975c8f9d2f7fab355b665c99167ea.svg"
      alt="Did you check reports?"/></div>
      <h3>Did you check reports?</h3>
      <p>QuickBooks provides a real-time look at your business data</p>
      <p><a href="javascript:">Check It Out</a></p>
      </div>
      </div>
      </div>
      </div>
      <div class="carousel-item">
      <div class="carousel-card singleCard">
      <div class="carousel-tile-item">
      <div class="card-tile">
      <div class="tile-illustration">
      <img src="https://plugin.intuitcdn.net/marketing-ipd-tsa-widgets/3.62.5/images/1c26cb7537cdbe7f13c8f0752f7beea9.svg"
      alt="Connect to your bank today"/>
      </div>
      <h3>Connect to your bank today</h3>
      <p>Import bank transactions, match them in few clicks and see your cash flow in real time</p><p>
      <a href="javascript:">Try It Now</a></p></div></div></div></div></div></div>
    );
  }
}
