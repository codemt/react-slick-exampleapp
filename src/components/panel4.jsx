import React, { Component } from 'react'
import '../assets/css/slider.css';
import '../assets/css/testimonials.css';
class Panel4 extends Component {
  render() {
    return (

        <div class="container text-center">
        <div class="row">
            <div class="col-12 col-md-8 offset-sm-2 col-lg-6 offset-md-3" role="tabpanel">
                <div class="col-4 col-md-12">
                    {/* Nav tabs */}  
                    <ul class="nav nav-justified" id="nav-tabs" role="tablist">
                        <li role="presentation" class="nav-item"> <a href="#daksh" aria-controls="daksh" role="tab" data-toggle="tab" class="nav-link">

                        <img  alt="" class="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dakshbhagya/128.jpg" />

                        <span class="quote"><i class="fa fa-quote-left"></i></span>

                    </a>
                        </li>
                        <li role="presentation" class=" active nav-item"> <a href="#anna" aria-controls="anna" role="tab" data-toggle="tab" class="nav-link">

                        <img alt="" class="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/annapickard/128.jpg" />

                        <span class="quote"><i class="fa fa-quote-left"></i></span>

                    </a>
                        </li>
                        <li role="presentation" class="nav-item"> <a href="#wafer" aria-controls="wafer" role="tab" data-toggle="tab" class="nav-link">

                        <img alt="" class="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/waferbaby/128.jpg" />

                        <span class="quote"><i class="fa fa-quote-left"></i></span>

                    </a>
                        </li>
                    </ul>
                </div>
                <div class="col-8 col-md-12">
                    {/* Tab panes */}
                    <div class="tab-content" id="tabs-collapse">
                        <div role="tabpanel" class="tab-pane fade in active" id="dustin">
                            <div class="tab-inner">
                                <p class="lead">Etiam tincidunt enim et pretium efficitur. Donec auctor leo sollicitudin
                                    eros iaculis sollicitudin.</p>
                                <hr />
                                <p><strong class="text-uppercase">Dustin Lamont</strong>
                                </p>
                                <p><em class="text-capitalize"> Senior web developer</em> at <a href="/">Apple</a>
                                </p>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="daksh">
                            <div class="tab-inner">
                                <p class="lead">Suspendisse dictum gravida est, nec consequat tortor venenatis a. Suspendisse
                                    vitae venenatis sapien.</p>
                                <hr />
                                <p><strong class="text-uppercase">Daksh Bhagya</strong>
                                </p>
                                <p><em class="text-capitalize"> UX designer</em> at <a href="/">Google</a>
                                </p>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="anna">
                            <div class="tab-inner">
                                <p class="lead">Nullam suscipit ante ac arcu placerat, nec sagittis quam volutpat. Vestibulum
                                    aliquam facilisis velit ut ultrices.</p>
                                <hr />
                                <p><strong class="text-uppercase">Anna Pickard</strong>
                                </p>
                                <p><em class="text-capitalize"> Master web developer</em> at <a href="/">Intel</a>
                                </p>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="wafer">
                            <div class="tab-inner">
                                <p class="lead">Fusce erat libero, fermentum quis sollicitudin id, venenatis nec felis.
                                    Morbi sollicitudin gravida finibus.</p>
                                <hr />
                                <p><strong class="text-uppercase">Wafer Baby</strong>
                                </p>
                                <p><em class="text-capitalize"> Web designer</em> at <a href="/">Microsoft</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
  }
}
export default Panel4;