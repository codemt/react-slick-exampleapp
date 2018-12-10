import React, { Component } from 'react'
import '../assets/css/selectbox.css'
 class SelectBox extends Component {
  render() {
    return (
        <div class="selectbox">
        <div role="tablist" id="accordion-2" class="accordion accordion-select">
            <div class="card">
                <div class="card-header" role="tab">
                    <h5 class="mb-0"><a data-toggle="collapse" aria-expanded="true" aria-controls="accordion-2 .item-1" href="div#accordion-2 .item-1" class="selectbox-title">Selecteer deadline<i class="fa fa-star fa-angle-down"></i></a></h5>
                </div>
                <div class="collapse show item-1" role="tabpanel" data-parent="#accordion-2">
                    <div class="card-body">
                        <ul>
                            <li><a href="/" class="selectbox-link">Scriptie<span>Reflection &amp; portfolio - PPA4</span></a></li>
                            <li><a href="/" class="selectbox-link">Reflectieverslag<span>Gamedesign - PPA2</span></a></li>
                            <li><a href="/" class="selectbox-link">Screenshot Trello<span>Agile scrum - PPA1</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    )
  }
}
export default SelectBox