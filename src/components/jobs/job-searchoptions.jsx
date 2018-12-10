import React, { Component } from 'react'
import '../../assets/css/jobs/searchoptions.css'
 class JobSearchOptions extends Component {
  render() {
    return (
        <section class="py-3 position-relative shadow-v1">
        <div class="container">
          <form class="row">
            <div class="col-md-6 my-2">
              <ul class="list-inline">
                <li class="list-inline-item my-2">
                  <select class="form-control">
                    <option selected default>Select Category</option>
                    <option>UI/UX design</option>
                    <option>Web app</option>
                    <option>React</option>
                    <option>Game development</option>
                  </select>
                </li>
                <li class="list-inline-item my-2">
                  <select class="form-control">
                    <option selected default>Filter</option>
                    <option>Best selling</option>
                    <option>Newest</option>
                    <option>Top rated</option>
                    <option>Low price</option>
                    <option>High price</option>
                  </select>
                </li>
              </ul>
            </div>
            <div class="col-md-6 my-2 text-md-right">
             <div class="d-inline-flex justify-md-content-end">
              <select class="form-control my-2">
                <option selected default>items per page</option>
                <option>8</option>
                <option>12</option>
                <option>16</option>
                <option>20</option>
                <option>24</option>
              </select> 
              <div class="d-flex rounded border ml-3 px-2 my-2">
                <a href="page-sp-all-courcess.html" class="btn px-1"><ti class="ti-layout-grid2"></ti></a>
                <a href="page-sp-all-courcess-list.html" class="active btn px-1"><ti class="ti-view-list"></ti></a>
              </div>
             </div>
            </div>
          </form> 
        </div> 
      </section>
    )
  }
}
export default JobSearchOptions