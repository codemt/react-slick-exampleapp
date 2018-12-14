import React, { Component } from 'react'
import '../../assets/css/companycard/companycard.css'
 class CompanyCard extends Component {
  render() {
    return (
        <div class="card-deck-wrapper">
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src="..." alt="" />
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CompanyCard;