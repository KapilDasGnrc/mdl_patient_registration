import React from 'react';
import useAuthContext from '../Context/AuthContext';

function Dashboard() {
  const { user, logout } = useAuthContext();
  return (
    <React.Fragment>
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light" id="sidebar" role="navigation">
            <ul className="nav flex-column pl-1">
              <li className="nav-item"><a className="nav-link" href="#">Welcome {user?.name}</a></li>
              <li className="nav-item">
                <a className="nav-link" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports ▾</a>
                <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                  <li className="nav-item"><a className="nav-link" href="">Sub item</a></li>
                  <li className="nav-item"><a className="nav-link" href="">Sub item</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Analytics</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Export</a></li>
              <li className="nav-item"><a className="nav-link" href="">Nav item</a></li>
              <li className="nav-item"><a className="nav-link" href="">Nav item</a></li>
              <li className="nav-item"><a className="nav-link" href="">Another</a></li>
              <li className="nav-item"><a className="nav-link" href="">Nav item</a></li>
              <li className="nav-item"><a className="nav-link" href="">One more</a></li>
            </ul>
          </div>



          <div className="col-md-9 col-lg-10 main">

            <div className='row'>
              <div className="col-md-12 col-lg-12">
                Welcome <div className='text-left pl-3'>
                  <b>{user?.name}
                    <span className='text-right' style={{ paddingLeft: '30%' }}>{user?.email}</span>
                  </b>
                <button className='btn btn-lg btn-primary ml-5' onClick={logout}>Logout</button>
                </div>


              </div>
            </div>

            {/* <!--toggle sidebar button */}

            <h5 className="hidden-xs-down">
              Bootstrap 4 Dashboard
            </h5>
            <p className="lead hidden-xs-down">(with off-canvas sidebar, based on BS v4 alpha 6)</p>

            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
              <strong>Holy guacamole!</strong> It's free.. this is an example theme.
            </div>

            <div className="row mb-3">
              <div className="col-xl-3 col-lg-6">
                <div className="card card-inverse card-success">
                  <div className="card-block bg-success">
                    <div className="rotate">
                      <i className="fa fa-user fa-5x"></i>
                    </div>
                    <h6 className="text-uppercase">Users</h6>
                    <h1 className="display-1">134</h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card card-inverse card-danger">
                  <div className="card-block bg-danger">
                    <div className="rotate">
                      <i className="fa fa-list fa-4x"></i>
                    </div>
                    <h6 className="text-uppercase">Posts</h6>
                    <h1 className="display-1">87</h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card card-inverse card-info">
                  <div className="card-block bg-info">
                    <div className="rotate">
                      <i className="fa fa-twitter fa-5x"></i>
                    </div>
                    <h6 className="text-uppercase">Tweets</h6>
                    <h1 className="display-1">125</h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card card-inverse card-warning">
                  <div className="card-block bg-warning">
                    <div className="rotate">
                      <i className="fa fa-share fa-5x"></i>
                    </div>
                    <h6 className="text-uppercase">Shares</h6>
                    <h1 className="display-1">36</h1>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="row placeholders mb-3">
              <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/dddddd/fff?text=1" className="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                <h4>Responsive</h4>
                <span className="text-muted">Device agnostic</span>
              </div>
              <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e4e4e4/fff?text=2" className="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                <h4>Frontend</h4>
                <span className="text-muted">UI / UX oriented</span>
              </div>
              <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/d6d6d6/fff?text=3" className="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                <h4>HTML5</h4>
                <span className="text-muted">Standards-based</span>
              </div>
              <div className="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e0e0e0/fff?text=4" className="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                <h4>Framework</h4>
                <span className="text-muted">CSS and JavaScript</span>
              </div>
            </div>

            <a id="features"></a>
            <hr />
            <p className="lead">
              Are you ready for Bootstap 4? It's the 4th generation of this popular responsive framework. Bootstrap 4 will include some interesting new features such as 5 grid sizes (now including xl), cards, `em` sizing, CSS normalization (reboot) and larger font
              sizes.
            </p>

            <hr />
            <div className="row mb-3">
              <div className="col-lg-3 col-md-4">
                <div className="card">
                  <img className="card-img-top img-responsive" src="//placehold.it/740x180/bbb/fff?text=..." alt="Card image cap" />
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Button</a>
                  </div>
                </div>

                <div className="card card-inverse bg-inverse mt-3">
                  <div className="card-block">
                    <h3 className="card-title">Dark background</h3>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-outline-secondary">Outline</a>
                  </div>
                </div>

              </div>
              <div className="col-lg-9 col-md-8">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="thead-inverse">
                      <tr>
                        <th>#</th>
                        <th>Label</th>
                        <th>Header</th>
                        <th>Column</th>
                        <th>Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1,001</td>
                        <td>responsive</td>
                        <td>bootstrap</td>
                        <td>cards</td>
                        <td>grid</td>
                      </tr>
                      <tr>
                        <td>1,002</td>
                        <td>rwd</td>
                        <td>web designers</td>
                        <td>theme</td>
                        <td>responsive</td>
                      </tr>
                      <tr>
                        <td>1,003</td>
                        <td>free</td>
                        <td>open-source</td>
                        <td>download</td>
                        <td>template</td>
                      </tr>
                      <tr>
                        <td>1,003</td>
                        <td>frontend</td>
                        <td>developer</td>
                        <td>coding</td>
                        <td>card panel</td>
                      </tr>
                      <tr>
                        <td>1,004</td>
                        <td>migration</td>
                        <td>bootstrap 4</td>
                        <td>mobile-first</td>
                        <td>design</td>
                      </tr>
                      <tr>
                        <td>1,005</td>
                        <td>navbar</td>
                        <td>sticky</td>
                        <td>jumbtron</td>
                        <td>header</td>
                      </tr>
                      <tr>
                        <td>1,006</td>
                        <td>collapse</td>
                        <td>affix</td>
                        <td>submenu</td>
                        <td>footer</td>
                      </tr>
                      <tr>
                        <td>1,007</td>
                        <td>layout</td>
                        <td>examples</td>
                        <td>themes</td>
                        <td>grid</td>
                      </tr>
                      <tr>
                        <td>1,008</td>
                        <td>migration</td>
                        <td>bootstrap 4</td>
                        <td>flexbox</td>
                        <td>design</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!--/row--> */}

            <a id="more"></a>
            <hr />
            <h2 className="sub-header">Use card decks for equal height rows of cards</h2>
            <div className="card-deck-wrapper mb-3">
              <div className="card-deck">
                <div className="card card-inverse card-success text-center">
                  <div className="card-block">
                    <blockquote className="card-blockquote">
                      <p>It's really good news that the new Bootstrap 4 now has support for CSS 3 flexbox.</p>
                      <footer>Makes flexible layouts <cite title="Source Title">Faster</cite></footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card card-inverse card-danger text-center">
                  <div className="card-block">
                    <blockquote className="card-blockquote">
                      <p>The Bootstrap 3.x element that was called "Panel" before, is now called a "Card".</p>
                      <footer>All of this makes more <cite title="Source Title">Sense</cite></footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card card-inverse card-warning text-center">
                  <div className="card-block">
                    <blockquote className="card-blockquote">
                      <p>There are also some interesting new text classes for uppercase and capitalize.</p>
                      <footer>These handy utilities make it <cite title="Source Title">Easy</cite></footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card card-inverse card-info text-center">
                  <div className="card-block">
                    <blockquote className="card-blockquote">
                      <p>If you want to use cool icons in Bootstrap 4, you'll have to find your own such as Font Awesome or Ionicons.</p>
                      <footer>The Glyphicons are not <cite title="Source Title">Included</cite></footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <a id="flexbox"></a>
            <hr />
            <h2>Masonry-style grid columns</h2>
            <h6>with Bootstrap 4 flexbox</h6>

            <div className="card-columns mb-3">
              <div className="card">
                <img className="card-img-top img-responsive" src="//placehold.it/600x200/444/fff?text=..." alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">Card title that wraps to a new line</h4>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
              <div className="card card-block">
                <blockquote className="card-blockquote">
                  <p>Bootstrap 4 will be lighter and easier to customize.</p>
                  <footer>
                    <small className="text-muted">
                      Someone famous like <cite title="Source Title">Mark Otto</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card">
                <img className="card-img-top img-responsive" src="//placehold.it/600x200/bbb/fff?text=..." alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card card-block card-inverse card-primary text-center">
                <blockquote className="card-blockquote">
                  <p>Create masonry or Pinterest-style card layouts in Bootstrap 4.</p>
                  <footer>
                    <small>
                      Someone famous in <cite title="Source Title">Bootstrap</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card card-block text-center">
                <h4 className="card-title">Clever heading</h4>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 5 mins ago</small></p>
              </div>
              <div className="card">
                <img className="card-img img-responsive" src="//placehold.it/600x200/777/fff?text=..." alt="Card image" />
              </div>
              <div className="card card-block text-right">
                <blockquote className="card-blockquote">
                  <p>There are also some interesting new text classes to uppercase or capitalize.</p>
                  <footer>
                    <small className="text-muted">
                      Someone famous in <cite title="Source Title">Bootstrap</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>
              <div className="card card-block">
                <h4 className="card-title">Responsive</h4>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
              <div className="card">
                <div className="card-block">
                  <ul className="list-unstyled">
                    <li className="text-capitalize"><code className="text-lowercase">text-capitalize</code> Capitalize each word</li>
                    <li className="text-uppercase"><code className="text-lowercase">text-uppercase</code> Uppercase text</li>
                    <li className="text-success"><code>text-success</code> Contextual colors for text</li>
                    <li><code>text-muted</code> <span className="text-muted">Lighten with muted</span></li>
                    <li><code>text-info</code> <span className="text-muted">Info text color</span></li>
                    <li><code>text-danger</code> <span className="text-muted">Danger text color</span></li>
                    <li><code>text-warning</code> <span className="text-muted">Warning text color</span></li>
                    <li><code>text-primary</code> <span className="text-primary">Primary text color</span></li>
                  </ul>
                </div>
              </div>
              <div className="card card-block">
                <h4 className="card-title">Heading</h4>
                <p className="card-text">So now that you've seen some of what Bootstrap 4 has to offer, are you going to give it a try?</p>
                <p className="card-text"><small className="text-muted">Last updated 12 mins ago</small></p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard